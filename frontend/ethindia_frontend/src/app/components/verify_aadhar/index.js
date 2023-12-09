"use client";
import { useDropzone } from "react-dropzone";
import { Button, Modal } from "flowbite-react";
import { useState, useEffect } from "react";
import axios, * as others from "axios";

import {
  extractWitness,
  WASM_URL,
  ZKEY_URL,
  exportCallDataGroth16,
  splitToWords,
} from "anon-aadhaar-pcd";

export async function fetchKey(keyURL) {
  const keyData = await (
    await axios.get(keyURL, {
      responseType: "arraybuffer",
    })
  ).data;
  return keyData;
}



export default function Verify_aadhar() {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setUploadedFiles(acceptedFiles);
    },
  });
  const [openModal, setOpenModal] = useState(false);

  const handleUploadFile = async () => {
    let file = uploadedFiles[0];
    console.log(file)

    let arrayBuffer = await file.arrayBuffer();
    let pdfBuffer = Buffer.from(arrayBuffer);

    // console.log(pdfBuffer)

    console.log( "pass ", document.getElementById("password").value)
    let extractedData = await extractWitness(pdfBuffer, 'beneficiary123')

    // const extractedData = extractWitness(
    //   pdfBuffer,
    //   document.getElementById("password").value
    // );

    console.log("extracted", extractedData)
    if (extractedData instanceof Error) throw new Error(extractedData.message);

    let appIdBigInt = '609246576999142755181287323616835836365844250624'
  
    let witnessInputs = {
      signature: splitToWords(extractedData.sigBigInt, BigInt(64), BigInt(32)),
      modulus: splitToWords(extractedData.modulusBigInt, BigInt(64), BigInt(32)),
      base_message: splitToWords(extractedData.msgBigInt, BigInt(64), BigInt(32)),
      app_id: appIdBigInt,
    }
  
    let pcdInputs = {
      signature: extractedData.sigBigInt,
      modulus: extractedData.modulusBigInt,
      base_message: extractedData.msgBigInt,
      app_id: appIdBigInt,
    }
    let wasm_key = await fetchKey(WASM_URL)
    let zkey = await fetchKey(ZKEY_URL)
  
    // console.log(wasm_key)
    // console.log(zkey)
  
    let proof = await exportCallDataGroth16(witnessInputs, wasm_key, zkey)
    let a = proof.a
    let b = proof.b
    let c = proof.c
    let Input = proof.Input
    
    


  };

  return (
    <>
      <button className="navButtonWhite" onClick={() => setOpenModal(true)}>
        {" "}
        <div className="flex flex-row  space-x-2  items-center justify-center">
          {" "}
          <img
            src="/images/anonlogo.svg"
            className="h-[28px] mr-2"
          ></img> Login{" "}
        </div>
      </button>
      <Modal
        className="modalLoginCustom"
        dismissible
        show={openModal}
        onClose={() => setOpenModal(false)}
      >
        <Modal.Body style={{ padding: "0", width: "400px" }}>
          <div className=" px-6 py-6 border-[1px] border-[#fff] rounded-[10px] bg-[#000]">
            <div className="flex flex-row items-center">
              <div className="">
                <img src="images\Fingerprint.svg" alt="" />{" "}
              </div>
              <div className="text-[20px] text-[#fff] ml-2">Generate Proof</div>
            </div>
            <hr className="my-4" />
            <div
              {...getRootProps()}
              className="border-dashed rounded-[10px] border-[1px] bg-[#070214] border-[#6543D0] flex flex-col justify-center items-center py-5"
            >
              {uploadedFiles.length === 0 ? (
                <>
                  <div className="rounded-[100px] bg-[#160350] flex justify-center items-center px-1 py-1 mb-3">
                    <img src="\images\plus.svg" alt="" />
                  </div>
                </>
              ) : (
                <></>
              )}

              <input className="color-[#fff]" {...getInputProps()} />
              <ul>
                {uploadedFiles.map((file) => (
                  <li
                    className=" rounded-[10px] border-[1px] bg-[#070214] border-[#6543D0] px-2 py-1 text-[#fff]"
                    key={file.name}
                  >
                    {file.name}
                  </li>
                ))}
              </ul>
              {uploadedFiles.length === 0 ? (
                <>
                  <div className="text-[#fff] text-[14px]">
                    Drag and Drop your files here
                  </div>
                  <div className="text-[14px] flex flex-row justify-center items-center">
                    <div className="text-[#fff]">or</div>
                    <div className="ml-1 text-[#6543D0] underline">
                      browse file
                    </div>
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
            <div className="my-4 text-[#fff] text-[18px]">Password</div>
            <input
              name="password"
              id="password"
              className="w-full px-4 bg-[black] py-2 border-[1px] border-[#2C2C2C] text-[#fff] rounded-[10px]"
              placeholder="Enter Password"
            />
            <div className="py-4 flex flex-row justify-center">
              <button onClick={handleUploadFile} className="navButton">
                {" "}
                Upload{" "}
              </button>
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
        </Modal.Body>
      </Modal>
    </>
  );
}
