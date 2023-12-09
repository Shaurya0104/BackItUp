export default function Wireframe_6() {
  return (
    <div>
      <nav className="z-50 flex flex-row justify-between items-center w-[100vw] bg-[#222222] h-[6vh] px-8">
        <div className="items-center flex flex-row justify-center text-[#fff] rounded-[10px] bg-[#0D061D] px-2 py-1.5 w-20 h-10"></div>
        <div className="items-center flex flex-row justify-center ">
          <div className="text-[#fff] flex flex-row justify-center items-center rounded-[10px] bg-[#000] px-2 py-2 mx-2">
            <div className="mx-1">
              <img src="\images\Cube.svg" alt="not found" />
            </div>
            <div className="mx-1">Networks</div>
          </div>
          <div className="text-[#fff] flex flex-row justify-center items-center rounded-[10px] bg-[#000] px-2 py-2 mx-2">
            <div className="mx-1">
              <img src="\images\Wallet.svg" alt="not found" />
            </div>
            <div className="mx-1">Wallet</div>
          </div>
          <div className="text-[#D11D1D] flex flex-row justify-center items-center rounded-[10px] border-[1px] border-[#D11D1D] px-2 py-2 ml-2">
            Logout
          </div>
        </div>
      </nav>

      <div className="flex justify-center items-center my-10">
        <div className="flex flex-col my-2 items-center justify-center">
          <div className="text-[24px] flex flex-row items-center justify-center my-2 border-[1px] rounded-[10px] bg-[#060606] border-[#2C2C2C] px-1 py-1">
            <div className="px-10 py-2 bg-[#6543D0] rounded-[10px]  text-[#fff] mx-1 font-semibold">
              {" "}
              Your Contracts
            </div>
            <div className="px-10 py-2  rounded-[10px]  text-[#6F6F6F] mx-1 font-semibold ">
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
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
