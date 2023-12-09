import { useState } from "react";
import Login from "../login";

export default function Intro() {
  const [isChecked, setIsChecked] = useState(true);

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
    <>
      <div className="indexclass_ellipse1"></div>
      <div className="indexclass_ellipse2"></div>
      <div className="indexclass_background"></div>
      <div
        id="about"
        className="scroll-mt-20 justify-center items-center mt-15 mb-25 "
      >
        <div className="py-10 items-center text-center md:space-y-[-1rem] ">
          <div className="index_heading tracking-tight text-[#ffffff]  leading-[-777px] ">
            <h1 className="index_heading tracking-tight text-[#ffffff]  leading-[-777px] ">
              {/* On-Chain Backup &{" "} */}
              Crypto Backup &{" "}
            </h1>
            {/* <h1 className="index_heading2">Built completely On-Chain</h1> */}
            {/* <h1 className="index_heading2">&</h1> */}
            <h1 className="index_heading2">Recovery system</h1>
            {/* <h1 className="index_heading2">Will&nbsp;for&nbsp;Crypto</h1> */}
          </div>

          <p className=" font-medium tracking-tight text-[#B0B0B0]  text-[16px] lg:text-[18px] py-12 px-8 md:px-2">
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam temporibus nemo quis odio, earum quod. */}
            Create a smart contract that can recover your crypto if you lose
            access to your wallet.
            {/* <div className="text-[#ffffff]">hello</div> */}
          </p>
          <Login></Login>
        </div>
        {/* <div className="text-[#fff] bg-[url'./images/whiteTick.png)] ">
            hello
          </div> */}

        <div className="flex flex-wrap flex-1 justify-center pt-5 items-center ">
          {/* <div className=" justify-center pt-12 items-center "> */}

          <div className="index_box py-8 px-6 lg:px-12 w-[80%] md:w-[25%] lg:w-[25%] rounded-[24px] bg-black border-[#222222] border-solid border-[2px]  bg-opacity-100 items-center">
            <p className="text-[#fff] text-[20px] tracking-[.025rem]  font-[500]">
              Customize execution terms
            </p>
            <p className="text-[10px] lg:text-[15px] text-[#999999] py-2 pb-2">
              Add terms that auto-executes recovery when conditions match
            </p>
            <hr className="index_line" />
            {/* <div className={`flex ${checkfornow}`}> */}
            <div className={`${customize_execution_terms11}`}>
              <div
                className={`flex items-center ${customize_execution_terms1}`}
              >
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
                    // className="cursor-pointer w-6 h-6 rounded-md border-2 border-purple-500 flex items-center justify-center"
                    className="text-[#fff] text-[12px]"
                  >
                    Auto-execute recovery if the account is inactive for __
                    year(s)
                  </label>
                </div>
              </div>
            </div>
            <div className={`${customize_execution_terms22}`}>
              <div
                className={`flex items-center  ${customize_execution_terms2}`}
              >
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
                    // className="cursor-pointer w-6 h-6 rounded-md border-2 border-purple-500 flex items-center justify-center"
                    className="text-[#fff] text-[12px]"
                  >
                    Auto-execute recovery on DD|MM|YYYY{" "}
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 py-8 max-md:w-[80%] ">
          </div>
          <div className="index_box2 py-8 px-6 lg:px-12 w-[80%] md:w-[25%]  lg:w-[25%] rounded-[24px] bg-black border-solid border-[2px] border-[#222222]  bg-opacity-100 items-center">
            <p className="text-[#ffffff] text-[20px] tracking-[.025rem]  font-[500] ">
              Connect Wallet
            </p>
            <p className="text-[10px] lg:text-[15px] text-[#999999] py-2 pb-2">
              Easily connect your Web3 Wallet within seconds
            </p>
            <hr className="index_line" />
            <div>
              <div
                className={` index_connectwallet flex items-center rounded-[10px] border-[#222222] border-[2px] border-solid py-3 `}
              >
                <div className=" px-2">
                  <img
                    className="w-[2vw] "
                    src="./images/Metamask-icon.png"
                    alt="not found image"
                  ></img>
                </div>
                <div className="pl-2 text-center px-2 text-[#fff]">
                  Metamask
                </div>
              </div>
              <div
                className={`index_connectwallet flex items-center  rounded-[10px] border-[#222222] border-[2px] border-solid my-3 py-3`}
              >
                <div className=" px-2">
                  <img
                    className="w-[2vw]"
                    src="/images/Coinbase-icon-symbol-1.png"
                    alt="coinbase image not found"
                  />
                </div>

                <div className="pl-2  px-2 text-[#fff]">Coinbase</div>
              </div>
              <div
                className={`index_connectwallet flex items-center  rounded-[10px] border-[#222222] border-[2px] border-solid py-3`}
              >
                <div className=" px-2 ">
                  <img
                    className="w-[2vw]"
                    src=".\images\wallet-connect-logo.png"
                    alt="wallet connect image not found"
                  />
                </div>

                <div className="pl-2  px-2 text-[#fff]">WalletConnect</div>
              </div>
            </div>
          </div>

          <div className="px-4 py-8 max-md:w-[80%] ">
            {/* <center>
            <img src="images/plus.svg" className="h-4"></img>
          </center> */}
          </div>
          <div className="index_box3 py-8 px-6 lg:px-12 w-[80%] md:w-[25%]  lg:w-[25%] rounded-[24px] bg-black border-solid border-[2px] border-[#222222]  bg-opacity-100 items-center">
            {/* <img src="images/design.svg" className="h-8 lg:p-[.2rem]"></img> */}
            <p className="text-[#ffffff] text-[20px] tracking-[.025rem]  font-[500] ">
              Add Nominees
            </p>
            <p className="text-[10px] lg:text-[15px] text-[#999999] py-2 pb-2">
              Add trusted accounts that recieve crypto in case of inactivity
            </p>
            <hr className="index_line" />
            <div>
              <div
                className={` index_addnominess flex items-center rounded-[10px] border-[#222222] border-[2px] border-solid py-3 mb-3`}
              >
                <div className=" px-2">
                  <img
                    className="w-[3vw] h-[3vh] "
                    src="\images\pexels-pixabay-39866.jpg"
                    alt="not found image"
                  ></img>
                </div>

                <div className="pl-2  px-2 text-[#fff]">
                  <div className="text-[15px]">Nate Jaccobs</div>
                  <div className="text-[#6E6E6E] text-[15px]">
                    0x12r45...6HJ9
                  </div>
                </div>
                <div className="pl-4">
                  <div className="bg-[#1D2F00] text-[#94EB07] text-[10px] px-3 py-1 rounded-[15px]">
                    Nominee
                  </div>
                </div>
              </div>
              <div
                className={` index_addnominess flex items-center rounded-[10px] border-[#222222] border-[2px] border-solid py-3 my-2`}
              >
                <div className=" px-2">
                  <img
                    className="w-[3vw] h-[3vh] "
                    src="\images\pexels-trinity-kubassek-445109.jpg"
                    alt="not found image"
                  ></img>
                </div>

                <div className="pl-2  px-2 text-[#fff]">
                  <div className="text-[15px]">Christine Hill</div>
                  <div className="text-[#6E6E6E] text-[15px]">
                    0x12r45...6HJ9
                  </div>
                </div>
                <div className="pl-4">
                  <div className="bg-[#1D2F00] text-[#94EB07] text-[10px] px-3 py-1 rounded-[15px]">
                    Nominee
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
