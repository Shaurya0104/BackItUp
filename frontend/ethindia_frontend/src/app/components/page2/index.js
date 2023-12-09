export default function Page2() {
  return (
    <div className="my-24" >
      <div className="page2_ellipse1">
      </div>
      <div className="flex items-center justify-center z-10  ">
        <div className="items-center rounded-[10px] flex justify-center border-[2px] border-[#2c2c2c] mr-[3rem] h-[25rem] w-[32rem]">
          <div className="page2_container_background h-[24.5rem] w-[31.5rem]"></div>
          <div className="page2_container_background2 h-[24.5rem] w-[31.5rem]"></div>
          <div className="justify-center">
            <div className="page2_container justify-center flex  mb-6">
              <img src="/images/CurrencyEth.png" alt="not found" />
            </div>
            <div className="text-[#fff]  my-2 justify-center flex text-[20px] font-bold">
              1500 ETH lost Daily
            </div>
            <div className="text-[#999999] justify-center flex">
              Due to loss of access
            </div>
            <div className="text-[#999999] justify-center flex">
              to the Wallet
            </div>
          </div>
        </div>
        <div className=" items-center rounded-[10px] flex justify-center border-[2px] border-[#2c2c2c] ml-[3rem] h-[25rem] w-[32rem]">
          <div className="page2_container_background h-[24.5rem] w-[31.5rem]"></div>
          <div className="page2_container_background2 h-[24.5rem] w-[31.5rem]"></div>
          <div className="justify-center ">
            <div className="page2_container justify-center flex  mb-6">
              <img src="\images\CurrencyBtc.png" alt="not found" />
            </div>
            <div className="text-[#fff]  my-2 justify-center flex text-[20px] font-bold">
              120% of all BTC
            </div>
            <div className="text-[#999999] justify-center flex">
              Is lost and forever
            </div>
            <div className="text-[#999999] justify-center flex">
              unrecoverable
            </div>
          </div>
        </div>
      </div>
      <div className="my-[8rem] tempcheck flex justify-center items-center">
        {/* <div className="h-[18rem] w-[51.5rem] border-[2px] rounded-[10px] border-[#2c2c2c] mx-3 flex justify-center items-center"> */}
        <div className="h-[18rem] w-[58.3rem] border-[2px] rounded-[10px] border-[#2c2c2c] mx-3 flex justify-center items-center">
        <div className="page2_container_background h-[17.5rem] w-[58.3rem]"></div>
        <div className="page2_container_background2 h-[17.5rem] w-[58.3rem]"></div>
          <div className="page2_line flex justify-center items-center">
            {" "}
            <img src="\images\Line 3L.svg" alt="not found " />
          </div>
          <div className="flex flex-row text-[#fff] justify-center items-center">
            <div className="flex flex-col justify-center items-center mx-5 page2_c2">
              <div className="text-[18px]">Step 1</div>
              <div>
                <img src="\images\Group 3.svg" alt="not found" />
              </div>
              <div>

              <div className="text-[20px] text-center">Create a</div>
              <div className="text-[20px] text-center">Backup</div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="text-[#999999] text-[10px]">
                  Create a smart contract
                </div>
                <div className="text-[#999999] text-[10px]">
                  that can recover your crypto{" "}
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center mx-5 page2_c2">
              <div className="text-[18px]">Step 2</div>
              <div>
                <img src="\images\Group 3.svg" alt="not found" />
              </div>
              <div className="text-[20px] text-center">
                Use your crypto as Before
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="text-[#999999] text-[10px]">
                Use without any restrictions.
                </div>
                <div className="text-[#999999] text-[10px]">
                Spend, transfer and withdraw{" "}
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center mx-5 page2_c2">
              <div className="text-[18px]">Step 3</div>
              <div>
                <img src="\images\Group 3.svg" alt="not found" />
              </div>
              <div className="text-[20px] flex text-center">
                Ooops... Access Lost
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="text-[#999999] text-[10px]">
                  You have irretrievably lost
                </div>
                <div className="text-[#999999] text-[10px]">
                  access to your wallet {" "}
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center mx-5 page2_c2">
              <div className="text-[18px]">Step 4</div>
              <div>
                <img src="\images\Group 3.svg" alt="not found" />
              </div>
              <div className="text-[20px]">We got you covered</div>
              <div className="flex flex-col justify-center items-center">
                <div className="text-[#999999] text-[10px]">
                  You have nothing to worry about.
                </div>
                <div className="text-[#999999] text-[10px]">
                  Your crypto is easily recovered.{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
