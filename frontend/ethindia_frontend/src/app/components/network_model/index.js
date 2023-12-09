export default function Network_model() {
  return (
    <>
      <div className="justify-center items-center my-20 ">
        <div className="flex flex-wrap w-[100vw] justify-center pt-12 items-center ">
          <div className=" py-2  px-6 lg:px-12 w-[80%] md:w-[25%]  lg:w-[25%] rounded-[24px] bg-black border-solid border-[2px] border-[#222222]  bg-opacity-100 items-center">
            <div className="flex flex-row my-2 items-center ">
              <div><img src="\images\Cube.svg" alt="not found" /></div>
              <div className="text-[#fff] text-[20px] font-[500]"> Supported Networks</div>
            </div>
            <hr className="index_line" />
            <div>
              <div
                className={`mb-3 index_connectwallet flex items-center rounded-[10px] border-[#222222] border-[2px] border-solid py-2 `}
              >
                <div className=" px-1">
                  <img
                    className="w-[1.5vw] "
                    src="\images\Link (1).svg"
                    alt="not found image"
                  ></img>
                </div>

                <div className=" text-center px-1 text-[#fff]">
                  Polygon
                </div>
              </div>
              <div
                className={`my-3 index_connectwallet flex items-center rounded-[10px] border-[#222222] border-[2px] border-solid py-2 `}
              >
                <div className=" px-1">
                  <img
                    className="w-[1.5vw] "
                    src="images\4de1e4ceabd7b3585d0d9b2ead65bfee.png"
                    alt="not found image"
                  ></img>
                </div>

                <div className=" text-center px-1 text-[#fff]">
                  Mantel Network
                </div>
              </div>
              <div
                className={`my-3 index_connectwallet flex items-center rounded-[10px] border-[#222222] border-[2px] border-solid py-2 `}
              >
                <div className=" px-1">
                  <img
                    className="w-[1.5vw] "
                    src="\images\b4dd5adc814aca43352741034a650133.png"
                    alt="not found image"
                  ></img>
                </div>

                <div className=" text-center px-1 text-[#fff]">
                  Ethereum
                </div>
              </div>
              <div
                className={`my-3 index_connectwallet flex items-center rounded-[10px] border-[#222222] border-[2px] border-solid py-2 `}
              >
                <div className=" px-1">
                  <img
                    className="w-[1.5vw] "
                    src="\images\basenet.png"
                    alt="not found image"
                  ></img>
                </div>

                <div className=" text-center px-1 text-[#fff]">
                  Base Mainnet
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
