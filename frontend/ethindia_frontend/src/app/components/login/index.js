'use client';

import { Button, Modal } from 'flowbite-react';
import { useState,useEffect } from 'react';
import { LogInWithAnonAadhaar, useAnonAadhaar,AnonAadhaarProof} from "anon-aadhaar-react";
import axios, * as others from "axios";
const { ethers } = require("ethers");

function Login() {
  const [openModal, setOpenModal] = useState(false);
  const [file, setFile] = useState(null);
  const [anonAadhaar] = useAnonAadhaar();

  useEffect(() => {
    console.log("Anon Aadhaar status: ", anonAadhaar.status);
  }, [anonAadhaar]);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };
  return (
    <>
      <button className="navButton" onClick={() => setOpenModal(true)}>Login to continue</button>
      <Modal className='modalLoginCustom' dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Body style={{padding:"0",width:"400px"}}>
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
            <img src="images\undraw_social_bio_re_0t9u 1.svg" alt="not found" />
          </div>
          {/* <div className="flex justify-center items-center w-[22vw] rounded-[10px] bg-[#6543D0] text-[#fff] text-[20xpx] font-semibold px-5 py-2">
            Upload Signed Aadhar
          </div> */}

          <div >
            <LogInWithAnonAadhaar className="LoginAnonAadhar"/>
            {/* <p>{anonAadhaar?.status }</p> */}
          </div>

          <div>
            {anonAadhaar?.status === "logged-in" && (
              <>
                <p>✅ Proof is valid</p>

                console.log(anonAadhaar)
                console.log("anonAadhaar")
                
                console.log(anonAadhaar.serializedPCD )

                <AnonAadhaarProof
                  code={JSON.stringify(anonAadhaar, null, 2)}
                />
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