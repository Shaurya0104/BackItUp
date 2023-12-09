export default function Wallet_model() {
  return (
    <div>
      <div className="bg-[#000] rounded-[10px] w-[25rem]">
        <div className="px-4 py-4">
          <div className="flex flex-row my-3">
            <div className="mr-2">
              <img className="" src="\images\Wallet.svg" alt="not found" />
            </div>
            <div className="text-[#fff]">Wallet</div>
          </div>

          <div className="flex flex-row my-3 justify-between items-center">
            <div className="flex flex-row">
              <div>
                <img
                  className="w-[4rem] rounded-[50px]"
                  src="\images\cf0e2ba9f56a8d940d9128a0a78c76fc.png"
                  alt="not found"
                />
              </div>
              <div className="text-[#fff]">
                <div>Sam Sayek</div>
                <div className="text-[#6F6F6F]">0x12r45...6HJ9</div>
              </div>
            </div>
            <div className="bg-[#243900] rounded-[15px] px-2 py-1">
              {" "}
              <div className="text-[#8FD224] text-[10px]"> Metamask</div>
            </div>
          </div>
          <hr className="wallet_model_line" />
          <div className="text-[#fff] my-3 flex justify-between items-center">
            <div className="text-[#C9C9C9] text-[12px]">Balance</div>
            <div className="flex flex-row ">
              <div className="mx-2 px-1 py-1 rounded-[20px] border-[1px] border-[#2C2C2C] flex items-center justify-center">
                {" "}
                <img src="\images\CurrencyEth.svg" alt="not found" />
              </div>
              <div className="text-[#C9C9C9] text-[12px] items-center flex">
                11.1111 ETH
              </div>
            </div>
          </div>
          <hr className="wallet_model_line" />
          <div className="text-[#fff] my-3 flex flex-row justify-between">
            <div className="flex flex-col justify-center items-center">
              <div className="px-5 ">
                <div className=" px-1 py-1 rounded-[20px] border-[1px] border-[#2C2C2C] flex justify-center items-center">
                  <img src="\images\Link.svg" alt="not found" />
                </div>
              </div>
              <div className="text-[8px]">Chain 1112212</div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="px-5 ">
                <div className=" px-1 py-1 rounded-[20px] border-[1px] border-[#2C2C2C] flex justify-center items-center">
                  <img src="\images\Clipboard.svg" alt="not found" />
                </div>
              </div>
              <div className="text-[8px]">Copy Address</div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="px-5 ">
                <div className=" px-1 py-1 rounded-[20px] border-[1px] border-[#B61515] flex justify-center items-center">
                  <img src="\images\SignOut.svg" alt="not found" />
                </div>
              </div>
              <div className="text-[#B61515] text-[8px]">Disconnect</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
