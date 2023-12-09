export default function Delete_contract(){
    const cancel =()=>{

    }
    const Delete =()=>{

    }
    return(

        <div>
            <div className="border-[1px] border-[#2c2c2c] rounded-[10px] px-4 py-4 w-[25vw]">
                <div className="flex flex-row items-center">
                    <div className=""><img src="images\Trash (1).svg" alt="" /></div>
                    <div className="text-[#fff] text-[20px] ml-2">Delete Contract</div>
                </div>
                <hr className="my-3" />
                <div className="flex flex-col justify-center items-center">
                    <div className="text-[16px] text-[#C9c9c9]">Are you sure you want to delete this contract?</div>
                    <div className="my-4"> <img src="images\undraw_throw_away_re_x60k 1.svg" alt="" /></div>
                    <div className="flex flex-row justify-between items-center">
                        <div onClick={cancel} className="hover:cursor-pointer mx-4 rounded-[10px] bg-[#6543D0] px-8 py-2 text-[14px]  text-[#fff]">Cancel</div>
                        <div onClick={Delete} className="hover:cursor-pointer mx-4 rounded-[10px] bg-[#B61515] px-8 py-2 text-[14px]  text-[#fff]">Delete</div>
                        {/* <div className="mx-4"></div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}