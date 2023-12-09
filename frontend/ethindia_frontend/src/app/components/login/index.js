"use client";
import { Button, Modal } from "flowbite-react";
import { useState, useEffect } from "react";
import {
  LogInWithAnonAadhaar,
  useAnonAadhaar,
  AnonAadhaarProof,
} from "anon-aadhaar-react";
import { exportCallDataGroth16FromPCD } from "anon-aadhaar-pcd";
import axios, * as others from "axios";
// const { ethers } = require("ethers");
const ethers = require("ethers");

function Login() {
  const [openModal, setOpenModal] = useState(false);
  const [file, setFile] = useState(null);
  const [anonAadhaar] = useAnonAadhaar();
  const [account, setAccount] = useState("");
  const [zkA, setzkA] = useState("");
  const [zkB, setzkB] = useState("");
  const [zkC, setzkC] = useState("");
  const [zkInput, setzkInput] = useState("");

  useEffect(() => {
    if (anonAadhaar.status === "logged-in") {
      handleValues();
    }
    console.log("Anon Aadhaar status: ", anonAadhaar.status);
  }, [anonAadhaar]);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleValues = async () => {
    let { a, b, c, Input } = await exportCallDataGroth16FromPCD(
      anonAadhaar.pcd
    );
    console.log(a, b, c, Input);
    setzkA(a);
    setzkB(b);
    setzkC(c);
    setzkInput(Input);
  };

  const handleWallet = async (event) => {
    if (!window.ethereum) {
      console.log("no extension found");
    } else {
      const accounts = await window.ethereum
      .request({
        method: "wallet_requestPermissions",
        params: [
          {
            eth_accounts: {},
          },
        ],
      })
      .then(() =>
        window.ethereum.request({
          method: "eth_requestAccounts",
        })
      );
    setAccount(accounts[0]);
    console.log("Account changed to: ", accounts[0]);
    }
  };

  const handleVerifyButton = async () => {
    const providerWallet = new ethers.BrowserProvider(window.ethereum,11155111);
    let  signerWallet = await providerWallet.getSigner();
    let  verifierAddress = "0x955987BBC2614c6F41977C66cc89f8E6866F6D76";
    // const signerWallet = await providerWallet.getSigner();
    // console.log("tokenAddress", tokenAddress);
    console.log("Signer ", signerWallet);
    
    let verifierABI = [
      {
        inputs: [
          {
            internalType: "uint256[2]",
            name: "_pA",
            type: "uint256[2]",
          },
          {
            internalType: "uint256[2][2]",
            name: "_pB",
            type: "uint256[2][2]",
          },
          {
            internalType: "uint256[2]",
            name: "_pC",
            type: "uint256[2]",
          },
          {
            internalType: "uint256[34]",
            name: "_pubSignals",
            type: "uint256[34]",
          },
        ],
        name: "verifyProof",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
    ]

    let verifierContract = new ethers.Contract(
      verifierAddress,
      verifierABI,
      signerWallet
    );

    async function verify() {
      let tx = await verifierContract.verifyProof([1,1], zkB, zkC, zkInput);
      try {
        
      } catch (error) {
        console.error("Can't Verify!", error);
      }
    }
    verify();
  };

  return (
    <>
      <button className="navButton" onClick={() => setOpenModal(true)}>
        Login to continue
      </button>
      <Modal
        className="modalLoginCustom"
        dismissible
        show={openModal}
        onClose={() => setOpenModal(false)}
      >
        <Modal.Body style={{ padding: "0", width: "400px" }}>
          <div className="bg-[#000] border-[1px] broder-[#2c2c2c] rounded-[10px] px-4 py-4">
            <div className="flex flex-row items-center ">
              <div className="mr-2">
                {" "}
                <img src="\images\Vector.png" alt="not found" />
              </div>
              <div className="text-[20px] text-[#fff]">Login</div>
            </div>
            <hr className="my-3" />
            <div className="flex flex-col justify-center items-center">
              <div className="text-[#C9C9C9] flex flex-col justify-center items-center">
                {" "}
                Upload your signed aadhaar so that we can verify your identity
              </div>
              <div className="my-4">
                {" "}
                <img
                  src="images\undraw_social_bio_re_0t9u 1.svg"
                  alt="not found"
                />
              </div>
              {/* <div className="flex justify-center items-center w-[22vw] rounded-[10px] bg-[#6543D0] text-[#fff] text-[20xpx] font-semibold px-5 py-2">
            Upload Signed Aadhar
          </div> */}

              <div>
                <LogInWithAnonAadhaar className="LoginAnonAadhar" />
                {/* <p>{anonAadhaar?.status }</p> */}
              </div>

              <div>
                {anonAadhaar?.status === "logged-in" && (
                  <>
                    <div>
                      {account === "" ? (
                        <button
                          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 w-60 rounded"
                          onClick={handleWallet}
                        >
                          Connect Your Wallet
                        </button>
                      ) : (
                        <>
                          {/* <button disabled className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 w-60 rounded" >Wallet Connected</button> */}
                          <button
                            className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 w-60 rounded"
                            onClick={handleVerifyButton}
                          >
                            Verify
                          </button>

                          <p className="text-[white] ">
                            You can now verify your identity
                          </p>
                        </>
                      )}
                    </div>
                  </>
                )}
              </div>

              <div className="flex flex-row justify-center items-center my-2">
                <div className="text-[#fff] text-[12px]">Powered By</div>
                <div className="mx-1">
                  {" "}
                  <img
                    className="w-[1vw]"
                    src="images\170b849f737b2da1e557697da3970cff.png"
                    alt=""
                  />
                </div>
                <div className="text-[#fff] text-[16px] font-semibold">
                  Anon Aadhar
                </div>
              </div>
              <div className="text-[12px] text-[#fff] flex flex-row justify-center items-center">
                <div>Don't have signed Aadhaar?</div>
                <div className="text-[#6543D0] ml-1">Get one</div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Login;
