export default function Topbar() {

  return (
    <div>
        <nav className="z-50 flex flex-row justify-between items-center w-[100vw] bg-[#222222] h-[6vh] px-8">
            <div className="items-center flex flex-row justify-center text-[#fff] rounded-[10px] bg-[#0D061D] px-2 py-1.5 w-20 h-10"></div>
            <div className="items-center flex flex-row justify-center ">
                <div className="text-[#fff] flex flex-row justify-center items-center rounded-[10px] bg-[#000] px-2 py-2 mx-2"> 
                <div className="mx-1"><img src="\images\Cube.svg" alt="not found" /></div>
                <div className="mx-1">Networks</div>
                </div>
                <div className="text-[#fff] flex flex-row justify-center items-center rounded-[10px] bg-[#000] px-2 py-2 mx-2"> 
                <div className="mx-1"><img src="\images\Wallet.svg" alt="not found" /></div>
                <div className="mx-1">Wallet</div>
                </div>
                <div className="text-[#D11D1D] flex flex-row justify-center items-center rounded-[10px] border-[1px] border-[#D11D1D] px-2 py-2 ml-2"> 
                    Logout
                </div>
                
            </div>
        </nav>
    </div>
  );
}