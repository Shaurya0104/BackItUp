export default function Wallet_connect_model() {
  return (
    <>
      <div className="justify-center items-center my-20 ">
        <div className="flex flex-wrap w-[100vw] justify-center pt-12 items-center ">
          <div className="py-8 px-6 lg:px-12 w-[80%] md:w-[25%]  lg:w-[25%] rounded-[24px] bg-black border-solid border-[2px] border-[#222222]  bg-opacity-100 items-center">
            <p className="text-[#ffffff] text-[20px] tracking-[.025rem]  font-[500] ">
              Connect Wallet
            </p>
            <p className="text-[10px] lg:text-[15px] text-[#fff] py-2 pb-2">
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
        </div>
      </div>
    </>
  );
}
