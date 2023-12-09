import { useState } from "react";

export default function Create_new_contract() {
  const addnewgaurdian = () => {};

  const [isChecked, setIsChecked] = useState(true);
  const addnewfund = ()=>{

  };
  const done=()=>{

  }

  const handleCheckboxChange = (e) => {
    setIsChecked(!isChecked);
    console.log(isChecked);
  };
  const customize_execution_terms1 = isChecked
    ? "rounded-[10px] border-[#462AA0] border-[2px] border-solid "
    : "rounded-[10px] border-transparent border-[2px] border-solid ";
  const customize_execution_terms2 = isChecked
    ? "rounded-[10px] border-transparent border-[2px] border-solid "
    : "rounded-[10px] border-[#462AA0] border-[2px] border-solid ";
  const customize_execution_terms11 = isChecked
    ? "rounded-[12px] border-[#2E175A] border-[2px] border-solid "
    : "rounded-[12px] border-transparent border-[2px] border-solid ";
  const customize_execution_terms22 = isChecked
    ? "rounded-[12px] border-transparent border-[2px] border-solid "
    : "rounded-[12px] border-[#2E175A] border-[2px] border-solid ";
  return (
    <div className="flex rounded-[10px] flex-col items-start gap-[24px] p-[24px] relative bg-black border border-solid border-[#2b2b2b]">
      <div className="flex items-center justify-center gap-[8px] relative flex-[0_0_auto]">
        <img
          className="relative w-[24px] h-[24px]"
          alt="Plus"
          src="images\Plus.svg"
        />
        <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-white text-[20px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
          New contract
        </div>
      </div>
      <img
        className="relative w-[440px] h-px object-cover"
        alt="Line"
        src="images\Line 4.png"
      />
      <div className="relative ">
        <div className=" [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[18px]  tracking-[0] leading-[normal]">
          Beneficiary
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-row my-2">
            <div className="text-[#fff]">Name :</div>
            <div className="ml-8">
              <input
                className="bg-transparent border-[1px] rounded-[10px] border-[#462AA0] text-[#fff] px-1"
                type="text"
              />
            </div>
          </div>
          <div className="flex flex-row ">
            <div className="text-[#fff]">Nullifier :</div>
            <div className="ml-5">
              <input
                className="bg-transparent border-[1px] rounded-[10px] border-[#462AA0] text-[#fff] px-1"
                type="text"
              />
            </div>
          </div>
        </div>
      </div>
      <img
        className="relative w-[440px] h-px object-cover"
        alt="Line"
        src="images\Line 4.png"
      />
      <div className="inline-flex flex-col items-start gap-[16px] relative flex-[0_0_auto]">
        <div className=" [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[18px] tracking-[0] leading-[normal]">
          Guardians
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-row my-2">
            <div className="text-[#fff]">Gaurdian 1 Name :</div>
            <div className="ml-8">
              <input
                className="bg-transparent border-[1px] rounded-[10px] border-[#462AA0] text-[#fff] px-1"
                type="text"
              />
            </div>
          </div>
          <div className="flex flex-row ">
            <div className="text-[#fff]">Gaurdian 1 Nullifier :</div>
            <div className="ml-5">
              <input
                className="bg-transparent border-[1px] rounded-[10px] border-[#462AA0] text-[#fff] px-1"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-row my-2">
            <div className="text-[#fff]">Gaurdian 2 Name :</div>
            <div className="ml-8">
              <input
                className="bg-transparent border-[1px] rounded-[10px] border-[#462AA0] text-[#fff] px-1"
                type="text"
              />
            </div>
          </div>
          <div className="flex flex-row ">
            <div className="text-[#fff]">Gaurdian 2 Nullifier :</div>
            <div className="ml-5">
              <input
                className="bg-transparent border-[1px] rounded-[10px] border-[#462AA0] text-[#fff] px-1"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[440px] h-[52px] items-center justify-center gap-[8px] px-[99px] py-[10px] relative rounded-[8px] overflow-hidden border border-solid border-[#2b2b2b]">
          <div className="inline-flex items-center gap-[12px] relative flex-[0_0_auto]">
            <img
              className="relative w-[24px] h-[24px]"
              alt="Plus"
              src="images\Plus.svg"
            />
            <div
              onClick={addnewgaurdian}
              className="hover:cursor-pointer relative w-fit [font-family:'Montserrat-Medium',Helvetica] font-medium text-[#c9c9c9] text-[16px] tracking-[0] leading-[normal]"
            >
              Add new guardian
            </div>
          </div>
        </div>
      </div>
      <img
        className="relative w-[440px] h-px object-cover"
        alt="Line"
        src="images\Line 4.png"
      />
      <div className="">
        <div className=" [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[18px] text-white tracking-[0] leading-[normal]">
          Auto-execute terms
        </div>
        <div className={`${customize_execution_terms11}  mt-4`}>
          <div className={`flex items-center  ${customize_execution_terms1}`}>
            <div className="flex items-center justify-center px-2">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                id="custom-checkbox1"
                className="index_checkbox  border-2 border-[#6543D0]"
              />
            </div>

            <div className="flex justify-center items-center pl-2 py-2 px-2">
              <label
                htmlFor="custom-checkbox1"
                // className="cursor-pointer w-6 h-6 rounded-md border-2 border-purple-500 flex items-center justify-center"
                className="text-[#fff] text-[12px]"
              >
                {/* <input type="text" className="text-[#000]" /> */}
                Auto-execute recovery if the account is inactive for <input  type="text" className="w-4 px-0 mx-1 bg-transparent text-[#fff] appearance-none" placeholder="0" /> year(s)
              </label>
            </div>
          </div>
        </div>

        <div className={`${customize_execution_terms22}`}>
          <div className={`flex items-center  ${customize_execution_terms2}`}>
            <div className="flex justify-center px-2">
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
                // className="cursor-pointer w-6 h-6 rounded-md border-2 border-purple-500 flex items-center justify-center"
                className="text-[#fff] text-[12px]"
              >
                Auto-execute recovery on <input type="date" className="bg-[#000]  text-[#ffffff] ml-1 w-25" />
              </label>
            </div>
          </div>
        </div>

      </div>
      {/* <hr /> */}
      <img
        className="relative w-[440px] h-px object-cover"
        alt="Line"
        src="images\Line 4.png"
      />
      <div className="relative w-fit [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[18px] tracking-[0] leading-[normal]">
        Tokens
      </div>
      <div className="inline-flex flex-col items-start gap-[16px] relative flex-[0_0_auto]">
        <div onclick={addnewfund} className="hover:cursor-pointer flex flex-col w-[440px] h-[52px] items-center justify-center gap-[8px] px-[99px] py-[10px] relative rounded-[8px] overflow-hidden border border-solid border-[#2b2b2b]">
          <div  className=" inline-flex items-center gap-[12px] relative flex-[0_0_auto]">
            <img
              className="relative w-[24px] h-[24px]"
              alt="Plus"
              src="images\Plus.svg"
            />
            <div  className=" relative w-fit [font-family:'Montserrat-Medium',Helvetica] font-medium text-[#c9c9c9] text-[16px] tracking-[0] leading-[normal]">
              Add new fund
            </div>
          </div>
        </div>
      </div>
      <div onclick={done}  className=" hover:cursor-pointer inline-flex items-center justify-center gap-[8px] px-[194px] py-[20px] relative flex-[0_0_auto] bg-[#6543d0] rounded-[12px] overflow-hidden">
        <div className=" relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[20px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
          Done
        </div>
      </div>
    </div>
  );
}
