import { useState } from "react";

export default function Edit_contracts() {
  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = (e) => {
    setIsChecked(!isChecked);
    console.log(isChecked);
  };
  const customize_execution_terms1 = isChecked
    ? "rounded-[10px] border-[#462AA0] border-[1px] border-solid "
    : "rounded-[10px] border-transparent border-[1px] border-solid ";
  const customize_execution_terms2 = isChecked
    ? "rounded-[10px] border-transparent border-[1px] border-solid "
    : "rounded-[10px] border-[#462AA0] border-[1px] border-solid ";
  const customize_execution_terms11 = isChecked
    ? "rounded-[12px] border-[#2E175A] border-[1px] border-solid "
    : "rounded-[12px] border-transparent border-[1px] border-solid ";
  const customize_execution_terms22 = isChecked
    ? "rounded-[12px] border-transparent border-[1px] border-solid "
    : "rounded-[12px] border-[#2E175A] border-[1px] border-solid ";
  return (
    <div>
      <div className="border-[1px] border-[#2c2c2c] rounded-[10px] px-5 py-5 w-[30vw]">
        <div className="flex flex-row items-center">
          <div className="mr-2">
            <img
              className="w-[1.5vw]"
              src="images\PencilSimple.svg"
              alt="not found"
            />
          </div>
          <div className="text-[#fff] text-[20px]">Edit Contract</div>
        </div>
        <hr className="my-5" />
        <div className="">
          <div className="mb-2 text-[#fff] font-semibold text-[18px]">
            Beneficiary
          </div>
          <div className="flex flex-row justify-between items-center">
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
                <div className="text-[#fff] text-[18px]">Nate Jacobs</div>
                <div className="text-[#6F6F6F] text-[18px]">0x12r45...6HJ9</div>
              </div>
            </div>
            <div className="border-[1px] rounded-[10px] border-[#D62020] flex flex-row items-center justify-center py-2 px-2">
              <div className="mx-1">
                {" "}
                <img src="\images\X red.svg" alt="" />
              </div>
              <div className="mx-1 text-[#D62020]"> Remove</div>
            </div>
          </div>
        </div>
        <hr className="my-5" />
        <div className="">
          <div className="mb-2 text-[#fff] font-semibold text-[18px]">
            Beneficiary
          </div>
          <div>
            <div className="flex flex-row justify-between items-center">
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
                  <div className="text-[#fff] text-[18px]">Nate Jacobs</div>
                  <div className="text-[#6F6F6F] text-[18px]">
                    0x12r45...6HJ9
                  </div>
                </div>
              </div>
              <div className="border-[1px] rounded-[10px] border-[#D62020] flex flex-row items-center justify-center py-2 px-2">
                <div className="mx-1">
                  {" "}
                  <img src="\images\X red.svg" alt="" />
                </div>
                <div className="mx-1 text-[#D62020]"> Remove</div>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center my-2">
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
                  <div className="text-[#fff] text-[18px]">Nate Jacobs</div>
                  <div className="text-[#6F6F6F] text-[18px]">
                    0x12r45...6HJ9
                  </div>
                </div>
              </div>
              <div className="border-[1px] rounded-[10px] border-[#D62020] flex flex-row items-center justify-center py-2 px-2">
                <div className="mx-1">
                  {" "}
                  <img src="\images\X red.svg" alt="" />
                </div>
                <div className="mx-1 text-[#D62020]"> Remove</div>
              </div>
            </div>
            <div className="text-[#C9C9C9] text-[16px] py-2 rounded-[10px] border-[1px] border-[#2C2C2C] flex flex-row justify-center items-center">
              + Add New Gaurdian
            </div>
          </div>
        </div>
        <hr className="my-5" />

        <div className="text-[18px] text-[#fff] mb-1">Auto-Execute Terms</div>
        <div className={`${customize_execution_terms11}`}>
          <div className={`flex items-center ${customize_execution_terms1}`}>
            <div className="items-center px-2">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                id="custom-checkbox1"
                className="index_checkbox  border-2 border-[#6543D0]"
              />
            </div>

            <div className="items-center pl-2 py-2 px-2">
              <label
                htmlFor="custom-checkbox1"
                className="text-[#fff] text-[12px]"
              >
                Auto-execute recovery if the account is inactive for 7 Years

              </label>
            </div>
          </div>
        </div>
        <div className={`${customize_execution_terms22}`}>
          <div className={`flex items-center  ${customize_execution_terms2}`}>
            <div className="items-center px-2">
              <input
                type="checkbox"
                checked={!isChecked}
                onChange={handleCheckboxChange}
                id="custom-checkbox2"
                className="index_checkbox  border-2 border-[#6543D0]"
              />
            </div>
            <div className="pl-2 px-2 py-2">
              <label
                htmlFor="custom-checkbox2"
                className="text-[#fff] text-[12px]"
              >
                Auto-execute recovery on DD|MM|YYYY{" "}
              </label>
            </div>
          </div>
        </div>
        <hr className="my-5" />
        <div className="text-[16px] text-[#fff] font-semibold"> Tokens</div>
        <div className="my-5">
            <div className="flex flex-row items-center justify-between">
                <div className="text-[16px] text-[#C9C9C9]">Funds</div>
                <div className=" flex flex-row justify-center items-center">
                    <div className="border-[1px] border-[#2c2c2c] text-[#C9C9C9] px-10 py-2 rounded-[10px] flex justify-center items-center">1000</div>
                    <div className="border-[1px] border-[#2c2c2c] text-[#C9C9C9] px-2 py-2 rounded-[10px] flex justify-center items-center ml-2">
                        <div className="mx-1 text-[#c9c9c9]">ETH</div>
                        <div className="mx-1"><img src="images\CaretDown.svg" alt="" /></div>
                    </div>
                </div>  
            </div>
            <div className="flex flex-row items-center justify-between my-4">
                <div className="text-[16px] text-[#C9C9C9]"></div>
                <div className=" flex flex-row justify-center items-center">
                    <div className="border-[1px] border-[#2c2c2c] text-[#C9C9C9] px-10 py-2 rounded-[10px] flex justify-center items-center">1000</div>
                    <div className="border-[1px] border-[#2c2c2c] text-[#C9C9C9] px-2 py-2 rounded-[10px] flex justify-center items-center ml-2">
                        <div className="mx-1 text-[#c9c9c9]">SOL</div>
                        <div className="mx-1"><img src="images\CaretDown.svg" alt="" /></div>
                    </div>
                </div>  
            </div>
            <div className="text-[#C9C9C9] py-2 border-[1px] border-[#2b2b2b] rounded-[10px] flex justify-center items-center">
                + Add New Funds
            </div>
        </div>
        <div className="bg-[#6543D0] rounded-[10px] py-2 flex justify-center items-center text-[#fff] text-[20px] font-semibold">Done</div>

      </div>
    </div>
  );
}
