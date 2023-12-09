// import { document } from 'postcss';
import { useState} from 'react';


export default function Your_contracts_dashboard() {
  const [yccheck, setyccheck] = useState(true);
  const handleCheckboxChange = (e) => {
    setyccheck(!yccheck);
    // console.log(isChecked);
  };
  const yourcontracts = yccheck? "block":"hidden"
  const gaurdcontracts = yccheck?"hidden":"block";

  return (
    <>
      <div >
        <div  className={`flex justify-center items-center my-10 ${yourcontracts}`}>
          <div className="flex flex-col my-2 items-center justify-center">
            <div className="text-[24px] flex flex-row items-center justify-center my-2 border-[1px] rounded-[10px] bg-[#060606] border-[#2C2C2C] px-1 py-1">
              <div className="px-10 py-2 bg-[#6543D0] rounded-[10px]  text-[#fff] mx-1 font-semibold">
                {" "}
                Your Contracts
              </div>
              <div className="px-10 py-2  rounded-[10px]  text-[#6F6F6F] mx-1 font-semibold hover:cursor-pointer" onClick={handleCheckboxChange}>
                {" "}
                Gaurd Contracts
              </div>
              {/* <div></div> */}
            </div>

            <div className="w-[70vw] my-2 justify-center flex flex-col border-[1px] border-[#2c2c2c] rounded-[10px] px-5 py-4 mb-2">
              <div className="flex flex-row justify-between items-center ">
                <div className="flex flex-row justify-between items-center text-[24px]">
                  <div className="mr-2 text-[#fff]">All</div>
                  <div className="mx-2 text-[#6F6F6F]">Gnosis</div>
                  <div className="ml-2 text-[#6F6F6F]">Tokens</div>
                </div>
                <div>
                  <div className="text-[19px] border-[1px] rounded-[10px] bg-[#080022] border-[#6543D0] px-2 py-2 text-[#fff]">
                    {" "}
                    + New Contract
                  </div>
                </div>
              </div>
              <div className="my-7">
                <hr />
              </div>
              <div className="mt-2 flex flex-col ">
                <div className="border-[1px] rounded-[10px] border-[#2C2C2C] px-4 py-4">
                  <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row justify-center items-center py-1">
                      <div className="text-[#fff] mr-2 text-[22px]">
                        Backup Contract
                      </div>
                      <div className="ml-2 rounded-[15px] py-1 px-3 bg-[#080020] text-[#6437F4] flex flex-row items-center justify-center">
                        <div className="mx-1 text-[15px] flex items-center">
                          0x4554...54
                        </div>
                        <div className="mr-1 flex items-center ">
                          {" "}
                          <img
                            className=""
                            src="\images\Clipboard (1).svg"
                            alt="not found"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row justify-center items-center ">
                      <div className="mr-2 rounded-[10px] py-2 px-2 bg-[#080020] border-[#6543D0] border-[1px] text-[#6437F4] flex flex-row items-center justify-center">
                        <div className="mx-1 flex items-center ">
                          {" "}
                          <img
                            className=""
                            src="\images\PencilSimple.svg"
                            alt="not found"
                          />
                        </div>
                        <div className="mx-1 text-[16px] flex items-center text-[#fff]">
                          Edit Contract
                        </div>
                      </div>
                      <div className="flex items-center justify-center text-[#fff] ml-2 border-[1px] border-[#DF2121] rounded-[10px] px-3 py-3">
                        <img src="/images/Trash.svg" alt="not found" />
                      </div>
                    </div>
                  </div>
                  <hr className="my-8" />
                  <div className="flex flex-col">
                    <div className="mb-1 flex flex-row items-center ">
                      <div className="mr-1">
                        {" "}
                        <img
                          className="w-[1.5vw]"
                          src="images\BookOpen.svg"
                          alt="not found"
                        />
                      </div>
                      <div className=" text-[#fff] font-semibold text-[17px]">
                        {" "}
                        Terms
                      </div>
                    </div>
                    <div className=" items-center  text-[#A7A6A6] text-[17px]">
                      <div className="my-1">
                        1. Auto-execute after 3 years of inactivity
                      </div>
                      <div className="my-1">
                        2. Transfer 100 ETH to the beneficiary
                      </div>
                    </div>
                  </div>
                  <hr className="my-6" />
                  <div className="flex flex-row items-center">
                    <div className="">
                      <div className="mb-1 flex flex-row items-center ">
                        <div className="mr-1">
                          <img
                            className="w-[1.5vw]"
                            src="images\UserCircleGear.svg"
                            alt="not found"
                          />
                        </div>
                        <div className="text-[#fff] text-[17px] font-semibold">
                          Beneficiary
                        </div>
                      </div>
                      <div className="mt-3 flex flex-row items-center">
                        <div>
                          {" "}
                          <img
                            className="w-[3vw] rounded-[100px]"
                            src="images\cf0e2ba9f56a8d940d9128a0a78c76fc (1).png"
                            alt="not found"
                          />
                        </div>
                        <div className="flex flex-col justify-center ml-2">
                          <div className="text-[#fff] text-[17px]">
                            Nate Jacobs
                          </div>
                          <div className="text-[#6F6F6F] text-[17px]">
                            0x12r45...6HJ9
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="rounded-[15px] text-[#8FD224] bg-[#243900] px-3 py-1 text-[12px] mb-4">
                            Beneficiary
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="px-10">
                      {" "}
                      <img src="images\Line 11.png" alt="not found" />
                    </div>
                    <div className="">
                      <div className="mb-1 flex flex-row items-center ">
                        <div className="mr-1">
                          <img
                            className="w-[1.5vw]"
                            src="images\Detective.svg"
                            alt="not found"
                          />
                        </div>
                        <div className="text-[#fff] text-[17px] font-semibold">
                          Gaurdians
                        </div>
                      </div>
                      <div className="flex flex-row items-center ">
                        <div className="mt-3 flex flex-row items-center">
                          <div>
                            {" "}
                            <img
                              className="w-[3vw] rounded-[100px]"
                              src="images\cf0e2ba9f56a8d940d9128a0a78c76fc (1).png"
                              alt="not found"
                            />
                          </div>
                          <div className="flex flex-col justify-center ml-2">
                            <div className="text-[#fff] text-[17px]">
                              Nate Jacobs
                            </div>
                            <div className="text-[#6F6F6F] text-[17px]">
                              0x12r45...6HJ9
                            </div>
                          </div>
                          <div className="ml-4">
                            <div className="rounded-[15px] text-[#8FD224] bg-[#243900] px-3 py-1 text-[12px] mb-4">
                              Gaurdian
                            </div>
                          </div>
                        </div>
                        <div className="mt-3 flex flex-row items-center mx-8">
                          <div>
                            {" "}
                            <img
                              className="w-[3vw] rounded-[100px]"
                              src="images\cf0e2ba9f56a8d940d9128a0a78c76fc (1).png"
                              alt="not found"
                            />
                          </div>
                          <div className="flex flex-col justify-center ml-2">
                            <div className="text-[#fff] text-[17px]">
                              Nate Jacobs
                            </div>
                            <div className="text-[#6F6F6F] text-[17px]">
                              0x12r45...6HJ9
                            </div>
                          </div>
                          <div className="ml-4">
                            <div className="rounded-[15px] text-[#8FD224] bg-[#243900] px-3 py-1 text-[12px] mb-4">
                              Gaurdian
                            </div>
                          </div>
                        </div>
                        <div className="border-[1px] rounded-[10px] text-[#fff] border-[#2C2C2C] px-3 py-2">
                          +3 Others
                        </div>
                      </div>
                    </div>

                    {/* <div></div> */}
                  </div>
                </div>
                <div className="border-[1px] rounded-[10px] border-[#2C2C2C] px-4 py-4 my-4">
                  <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row justify-center items-center py-1">
                      <div className="text-[#fff] mr-2 text-[22px]">
                        Backup Contract
                      </div>
                      <div className="ml-2 rounded-[15px] py-1 px-3 bg-[#080020] text-[#6437F4] flex flex-row items-center justify-center">
                        <div className="mx-1 text-[15px] flex items-center">
                          0x4554...54
                        </div>
                        <div className="mr-1 flex items-center ">
                          {" "}
                          <img
                            className=""
                            src="\images\Clipboard (1).svg"
                            alt="not found"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row justify-center items-center ">
                      <div className="mr-2 rounded-[10px] py-2 px-2 bg-[#080020] border-[#6543D0] border-[1px] text-[#6437F4] flex flex-row items-center justify-center">
                        <div className="mx-1 flex items-center ">
                          {" "}
                          <img
                            className=""
                            src="\images\PencilSimple.svg"
                            alt="not found"
                          />
                        </div>
                        <div className="mx-1 text-[16px] flex items-center text-[#fff]">
                          Edit Contract
                        </div>
                      </div>
                      <div className="flex items-center justify-center text-[#fff] ml-2 border-[1px] border-[#DF2121] rounded-[10px] px-3 py-3">
                        <img src="/images/Trash.svg" alt="not found" />
                      </div>
                    </div>
                  </div>
                  <hr className="my-8" />
                  <div className="flex flex-col">
                    <div className="mb-1 flex flex-row items-center ">
                      <div className="mr-1">
                        {" "}
                        <img
                          className="w-[1.5vw]"
                          src="images\BookOpen.svg"
                          alt="not found"
                        />
                      </div>
                      <div className=" text-[#fff] font-semibold text-[17px]">
                        {" "}
                        Terms
                      </div>
                    </div>
                    <div className=" items-center  text-[#A7A6A6] text-[17px]">
                      <div className="my-1">
                        1. Auto-execute after 3 years of inactivity
                      </div>
                      <div className="my-1">
                        2. Transfer 100 ETH to the beneficiary
                      </div>
                    </div>
                  </div>
                  <hr className="my-6" />
                  <div className="flex flex-row items-center">
                    <div className="">
                      <div className="mb-1 flex flex-row items-center ">
                        <div className="mr-1">
                          <img
                            className="w-[1.5vw]"
                            src="images\UserCircleGear.svg"
                            alt="not found"
                          />
                        </div>
                        <div className="text-[#fff] text-[17px] font-semibold">
                          Beneficiary
                        </div>
                      </div>
                      <div className="mt-3 flex flex-row items-center">
                        <div>
                          {" "}
                          <img
                            className="w-[3vw] rounded-[100px]"
                            src="images\cf0e2ba9f56a8d940d9128a0a78c76fc (1).png"
                            alt="not found"
                          />
                        </div>
                        <div className="flex flex-col justify-center ml-2">
                          <div className="text-[#fff] text-[17px]">
                            Nate Jacobs
                          </div>
                          <div className="text-[#6F6F6F] text-[17px]">
                            0x12r45...6HJ9
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="rounded-[15px] text-[#8FD224] bg-[#243900] px-3 py-1 text-[12px] mb-4">
                            Beneficiary
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="px-10">
                      {" "}
                      <img src="images\Line 11.png" alt="not found" />
                    </div>
                    <div className="">
                      <div className="mb-1 flex flex-row items-center ">
                        <div className="mr-1">
                          <img
                            className="w-[1.5vw]"
                            src="images\Detective.svg"
                            alt="not found"
                          />
                        </div>
                        <div className="text-[#fff] text-[17px] font-semibold">
                          Gaurdians
                        </div>
                      </div>
                      <div className="flex flex-row items-center ">
                        <div className="mt-3 flex flex-row items-center">
                          <div>
                            {" "}
                            <img
                              className="w-[3vw] rounded-[100px]"
                              src="images\cf0e2ba9f56a8d940d9128a0a78c76fc (1).png"
                              alt="not found"
                            />
                          </div>
                          <div className="flex flex-col justify-center ml-2">
                            <div className="text-[#fff] text-[17px]">
                              Nate Jacobs
                            </div>
                            <div className="text-[#6F6F6F] text-[17px]">
                              0x12r45...6HJ9
                            </div>
                          </div>
                          <div className="ml-4">
                            <div className="rounded-[15px] text-[#8FD224] bg-[#243900] px-3 py-1 text-[12px] mb-4">
                              Gaurdian
                            </div>
                          </div>
                        </div>
                        <div className="mt-3 flex flex-row items-center mx-8">
                          <div>
                            {" "}
                            <img
                              className="w-[3vw] rounded-[100px]"
                              src="images\cf0e2ba9f56a8d940d9128a0a78c76fc (1).png"
                              alt="not found"
                            />
                          </div>
                          <div className="flex flex-col justify-center ml-2">
                            <div className="text-[#fff] text-[17px]">
                              Nate Jacobs
                            </div>
                            <div className="text-[#6F6F6F] text-[17px]">
                              0x12r45...6HJ9
                            </div>
                          </div>
                          <div className="ml-4">
                            <div className="rounded-[15px] text-[#8FD224] bg-[#243900] px-3 py-1 text-[12px] mb-4">
                              Gaurdian
                            </div>
                          </div>
                        </div>
                        <div className="border-[1px] rounded-[10px] text-[#fff] border-[#2C2C2C] px-3 py-2">
                          +3 Others
                        </div>
                      </div>
                    </div>

                    {/* <div></div> */}
                  </div>
                </div>
                <div className="border-[1px] rounded-[10px] border-[#2C2C2C] px-4 py-4">
                  <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row justify-center items-center py-1">
                      <div className="text-[#fff] mr-2 text-[22px]">
                        Backup Contract
                      </div>
                      <div className="ml-2 rounded-[15px] py-1 px-3 bg-[#080020] text-[#6437F4] flex flex-row items-center justify-center">
                        <div className="mx-1 text-[15px] flex items-center">
                          0x4554...54
                        </div>
                        <div className="mr-1 flex items-center ">
                          {" "}
                          <img
                            className=""
                            src="\images\Clipboard (1).svg"
                            alt="not found"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row justify-center items-center ">
                      <div className="mr-2 rounded-[10px] py-2 px-2 bg-[#080020] border-[#6543D0] border-[1px] text-[#6437F4] flex flex-row items-center justify-center">
                        <div className="mx-1 flex items-center ">
                          {" "}
                          <img
                            className=""
                            src="\images\PencilSimple.svg"
                            alt="not found"
                          />
                        </div>
                        <div className="mx-1 text-[16px] flex items-center text-[#fff]">
                          Edit Contract
                        </div>
                      </div>
                      <div className="flex items-center justify-center text-[#fff] ml-2 border-[1px] border-[#DF2121] rounded-[10px] px-3 py-3">
                        <img src="/images/Trash.svg" alt="not found" />
                      </div>
                    </div>
                  </div>
                  <hr className="my-8" />
                  <div className="flex flex-col">
                    <div className="mb-1 flex flex-row items-center ">
                      <div className="mr-1">
                        {" "}
                        <img
                          className="w-[1.5vw]"
                          src="images\BookOpen.svg"
                          alt="not found"
                        />
                      </div>
                      <div className=" text-[#fff] font-semibold text-[17px]">
                        {" "}
                        Terms
                      </div>
                    </div>
                    <div className=" items-center  text-[#A7A6A6] text-[17px]">
                      <div className="my-1">
                        1. Auto-execute after 3 years of inactivity
                      </div>
                      <div className="my-1">
                        2. Transfer 100 ETH to the beneficiary
                      </div>
                    </div>
                  </div>
                  <hr className="my-6" />
                  <div className="flex flex-row items-center">
                    <div className="">
                      <div className="mb-1 flex flex-row items-center ">
                        <div className="mr-1">
                          <img
                            className="w-[1.5vw]"
                            src="images\UserCircleGear.svg"
                            alt="not found"
                          />
                        </div>
                        <div className="text-[#fff] text-[17px] font-semibold">
                          Beneficiary
                        </div>
                      </div>
                      <div className="mt-3 flex flex-row items-center">
                        <div>
                          {" "}
                          <img
                            className="w-[3vw] rounded-[100px]"
                            src="images\cf0e2ba9f56a8d940d9128a0a78c76fc (1).png"
                            alt="not found"
                          />
                        </div>
                        <div className="flex flex-col justify-center ml-2">
                          <div className="text-[#fff] text-[17px]">
                            Nate Jacobs
                          </div>
                          <div className="text-[#6F6F6F] text-[17px]">
                            0x12r45...6HJ9
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="rounded-[15px] text-[#8FD224] bg-[#243900] px-3 py-1 text-[12px] mb-4">
                            Beneficiary
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="px-10">
                      {" "}
                      <img src="images\Line 11.png" alt="not found" />
                    </div>
                    <div className="">
                      <div className="mb-1 flex flex-row items-center ">
                        <div className="mr-1">
                          <img
                            className="w-[1.5vw]"
                            src="images\Detective.svg"
                            alt="not found"
                          />
                        </div>
                        <div className="text-[#fff] text-[17px] font-semibold">
                          Gaurdians
                        </div>
                      </div>
                      <div className="flex flex-row items-center ">
                        <div className="mt-3 flex flex-row items-center">
                          <div>
                            {" "}
                            <img
                              className="w-[3vw] rounded-[100px]"
                              src="images\cf0e2ba9f56a8d940d9128a0a78c76fc (1).png"
                              alt="not found"
                            />
                          </div>
                          <div className="flex flex-col justify-center ml-2">
                            <div className="text-[#fff] text-[17px]">
                              Nate Jacobs
                            </div>
                            <div className="text-[#6F6F6F] text-[17px]">
                              0x12r45...6HJ9
                            </div>
                          </div>
                          <div className="ml-4">
                            <div className="rounded-[15px] text-[#8FD224] bg-[#243900] px-3 py-1 text-[12px] mb-4">
                              Gaurdian
                            </div>
                          </div>
                        </div>
                        <div className="mt-3 flex flex-row items-center mx-8">
                          <div>
                            {" "}
                            <img
                              className="w-[3vw] rounded-[100px]"
                              src="images\cf0e2ba9f56a8d940d9128a0a78c76fc (1).png"
                              alt="not found"
                            />
                          </div>
                          <div className="flex flex-col justify-center ml-2">
                            <div className="text-[#fff] text-[17px]">
                              Nate Jacobs
                            </div>
                            <div className="text-[#6F6F6F] text-[17px]">
                              0x12r45...6HJ9
                            </div>
                          </div>
                          <div className="ml-4">
                            <div className="rounded-[15px] text-[#8FD224] bg-[#243900] px-3 py-1 text-[12px] mb-4">
                              Gaurdian
                            </div>
                          </div>
                        </div>
                        <div className="border-[1px] rounded-[10px] text-[#fff] border-[#2C2C2C] px-3 py-2">
                          +3 Others
                        </div>
                      </div>
                    </div>

                    {/* <div></div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className={`flex block justify-center items-center my-10 ${gaurdcontracts}`}>
          <div className="flex flex-col my-2 items-center justify-center">
            <div className="text-[24px] flex flex-row items-center justify-center my-2 border-[1px] rounded-[10px] bg-[#060606] border-[#2C2C2C] px-1 py-1">
              <div className="px-10 py-2 rounded-[10px]  text-[#6F6F6F] mx-1 font-semibold hover:cursor-pointer"  onClick={handleCheckboxChange}>
                {" "}
                Your Contracts
              </div>
              <div className="px-10 py-2 bg-[#6543D0]  rounded-[10px]  text-[#fff] mx-1 font-semibold ">
                {" "}
                Gaurd Contracts
              </div>
              {/* <div></div> */}
            </div>

            <div className="w-[70vw] my-2 justify-center flex flex-col border-[1px] border-[#2c2c2c] rounded-[10px] px-5 py-4 mb-2">
              <div className=" items-center">
                <div className="border-[1px] rounded-[10px] border-[#2C2C2C] px-4 py-4">
                  <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row justify-center items-center py-1">
                      <div className="text-[#fff] mr-2 text-[22px]">
                        Backup Contract
                      </div>
                      <div className="ml-2 rounded-[15px] py-1 px-3 bg-[#080020] text-[#6437F4] flex flex-row items-center justify-center">
                        <div className="mx-1 text-[15px] flex items-center">
                          0x4554...54
                        </div>
                        <div className="mr-1 flex items-center ">
                          {" "}
                          <img
                            className=""
                            src="\images\Clipboard (1).svg"
                            alt="not found"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row justify-center items-center ">
                      <div className="mr-2 rounded-[10px] py-2 px-2 bg-[#080020] border-[#6543D0] border-[1px] text-[#6437F4] flex flex-row items-center justify-center">
                        <div className="mx-1 flex items-center ">
                          {" "}
                          <img
                            className=""
                            src="/images/ThumbsUp.svg"
                            alt="not found"
                          />
                        </div>
                        <div className="mx-1 text-[16px] flex items-center text-[#fff]">
                          Approve Backup
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="my-8" />
                  <div className="flex flex-col">
                    <div className="mb-1 flex flex-row items-center ">
                      <div className="mr-1">
                        {" "}
                        <img
                          className="w-[1.5vw]"
                          src="images\BookOpen.svg"
                          alt="not found"
                        />
                      </div>
                      <div className=" text-[#fff] font-semibold text-[17px]">
                        {" "}
                        Terms
                      </div>
                    </div>
                    <div className=" items-center  text-[#A7A6A6] text-[17px]">
                      <div className="my-1">
                        1. Auto-execute after 3 years of inactivity
                      </div>
                      <div className="my-1">
                        2. Transfer 100 ETH to the beneficiary
                      </div>
                    </div>
                  </div>
                  <hr className="my-6" />
                  <div className="flex flex-col justify-center">
                    <div className="mb-2">
                      <div className="mb-1 flex flex-row items-center ">
                        <div className="mr-1">
                          <img
                            className="w-[1.5vw]"
                            src="images\UserCircleGear.svg"
                            alt="not found"
                          />
                        </div>
                        <div className="text-[#fff] text-[17px] font-semibold">
                          Creater
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 flex flex-row justify-between items-center">
                      <div className="flex flex-row items-center">
                        <div>
                          {" "}
                          <img
                            className="w-[3vw] rounded-[100px]"
                            src="images\cf0e2ba9f56a8d940d9128a0a78c76fc (1).png"
                            alt="not found"
                          />
                        </div>
                        <div className="flex flex-col justify-center ml-2">
                          <div className="text-[#fff] text-[17px]">
                            Nate Jacobs
                          </div>
                          <div className="text-[#6F6F6F] text-[17px]">
                            0x12r45...6HJ9
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="rounded-[15px] text-[#8FD224] bg-[#243900] px-3 py-1 text-[12px] mb-4">
                            Beneficiary
                          </div>
                        </div>
                      </div>
                      <div className="border-[1px] border-[#2c2c2c] rounded-[10px] px-2 py-1 flex flex-row">
                        <div className="mr-2">
                          {" "}
                          <img src="images\Info.svg" alt="not found" />
                        </div>
                        <div className="text-[#FFFFFF] max-w-[25vw] text-[12px]">
                          You are voting to execute the wallet backup before the
                          specified auto-execute time. Make sure you trust the
                          beneficiary involved
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-[1px] rounded-[10px] border-[#2C2C2C] px-4 py-4 my-6">
                  <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row justify-center items-center py-1">
                      <div className="text-[#fff] mr-2 text-[22px]">
                        Backup Contract
                      </div>
                      <div className="ml-2 rounded-[15px] py-1 px-3 bg-[#080020] text-[#6437F4] flex flex-row items-center justify-center">
                        <div className="mx-1 text-[15px] flex items-center">
                          0x4554...54
                        </div>
                        <div className="mr-1 flex items-center ">
                          {" "}
                          <img
                            className=""
                            src="\images\Clipboard (1).svg"
                            alt="not found"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row justify-center items-center ">
                      <div className="mr-2 rounded-[10px] py-2 px-2 bg-[#6543D0]   text-[#6437F4] flex flex-row items-center justify-center">
                        <div className="mx-1 flex items-center ">
                          {" "}
                          <img
                            className=""
                            src="/images/ThumbsUp (1).svg"
                            alt="not found"
                          />
                        </div>
                        <div className="mx-1 text-[16px] flex items-center text-[#fff]">
                          Approved
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="my-8" />
                  <div className="flex flex-col">
                    <div className="mb-1 flex flex-row items-center ">
                      <div className="mr-1">
                        {" "}
                        <img
                          className="w-[1.5vw]"
                          src="images\BookOpen.svg"
                          alt="not found"
                        />
                      </div>
                      <div className=" text-[#fff] font-semibold text-[17px]">
                        {" "}
                        Terms
                      </div>
                    </div>
                    <div className=" items-center  text-[#A7A6A6] text-[17px]">
                      <div className="my-1">
                        1. Auto-execute after 3 years of inactivity
                      </div>
                      <div className="my-1">
                        2. Transfer 100 ETH to the beneficiary
                      </div>
                    </div>
                  </div>
                  <hr className="my-6" />
                  <div className="flex flex-col justify-center">
                    <div className="mb-2">
                      <div className="mb-1 flex flex-row items-center ">
                        <div className="mr-1">
                          <img
                            className="w-[1.5vw]"
                            src="images\UserCircleGear.svg"
                            alt="not found"
                          />
                        </div>
                        <div className="text-[#fff] text-[17px] font-semibold">
                          Creater
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 flex flex-row justify-between items-center">
                      <div className="flex flex-row items-center">
                        <div>
                          {" "}
                          <img
                            className="w-[3vw] rounded-[100px]"
                            src="images\cf0e2ba9f56a8d940d9128a0a78c76fc (1).png"
                            alt="not found"
                          />
                        </div>
                        <div className="flex flex-col justify-center ml-2">
                          <div className="text-[#fff] text-[17px]">
                            Nate Jacobs
                          </div>
                          <div className="text-[#6F6F6F] text-[17px]">
                            0x12r45...6HJ9
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="rounded-[15px] text-[#8FD224] bg-[#243900] px-3 py-1 text-[12px] mb-4">
                            Beneficiary
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-[1px] rounded-[10px] border-[#2C2C2C] px-4 py-4 ">
                  <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row justify-center items-center py-1">
                      <div className="text-[#fff] mr-2 text-[22px]">
                        Backup Contract
                      </div>
                      <div className="ml-2 rounded-[15px] py-1 px-3 bg-[#080020] text-[#6437F4] flex flex-row items-center justify-center">
                        <div className="mx-1 text-[15px] flex items-center">
                          0x4554...54
                        </div>
                        <div className="mr-1 flex items-center ">
                          {" "}
                          <img
                            className=""
                            src="\images\Clipboard (1).svg"
                            alt="not found"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row justify-center items-center ">
                      <div className="mr-2 rounded-[10px] py-2 px-2 bg-[#6543D0]   text-[#6437F4] flex flex-row items-center justify-center">
                        <div className="mx-1 flex items-center ">
                          {" "}
                          <img
                            className=""
                            src="/images/ThumbsUp (1).svg"
                            alt="not found"
                          />
                        </div>
                        <div className="mx-1 text-[16px] flex items-center text-[#fff]">
                          Approved
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="my-8" />
                  <div className="flex flex-col">
                    <div className="mb-1 flex flex-row items-center ">
                      <div className="mr-1">
                        {" "}
                        <img
                          className="w-[1.5vw]"
                          src="images\BookOpen.svg"
                          alt="not found"
                        />
                      </div>
                      <div className=" text-[#fff] font-semibold text-[17px]">
                        {" "}
                        Terms
                      </div>
                    </div>
                    <div className=" items-center  text-[#A7A6A6] text-[17px]">
                      <div className="my-1">
                        1. Auto-execute after 3 years of inactivity
                      </div>
                      <div className="my-1">
                        2. Transfer 100 ETH to the beneficiary
                      </div>
                    </div>
                  </div>
                  <hr className="my-6" />
                  <div className="flex flex-col justify-center">
                    <div className="mb-2">
                      <div className="mb-1 flex flex-row items-center ">
                        <div className="mr-1">
                          <img
                            className="w-[1.5vw]"
                            src="images\UserCircleGear.svg"
                            alt="not found"
                          />
                        </div>
                        <div className="text-[#fff] text-[17px] font-semibold">
                          Creater
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 flex flex-row justify-between items-center">
                      <div className="flex flex-row items-center">
                        <div>
                          {" "}
                          <img
                            className="w-[3vw] rounded-[100px]"
                            src="images\cf0e2ba9f56a8d940d9128a0a78c76fc (1).png"
                            alt="not found"
                          />
                        </div>
                        <div className="flex flex-col justify-center ml-2">
                          <div className="text-[#fff] text-[17px]">
                            Nate Jacobs
                          </div>
                          <div className="text-[#6F6F6F] text-[17px]">
                            0x12r45...6HJ9
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="rounded-[15px] text-[#8FD224] bg-[#243900] px-3 py-1 text-[12px] mb-4">
                            Beneficiary
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
