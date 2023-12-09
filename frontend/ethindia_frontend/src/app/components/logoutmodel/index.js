export default function Logout_model() {
  const cancel=()=>{
    
  }
  const logout=()=>{

  }
  return (
    <div>
      <div className="bg-[#222222] rounded-[10px] px-5 py-3 text-[15px] ">
        <div className="text-[#fff] flex flex-row my-2">
          <div><img src="\images\SignOut (1).svg" alt="not found" /></div>
          <div className="text-[15px]">Logout</div>
        </div>
        <hr className="logoutmodel_line" />
        <div className="flex flex-col justify-between items-center my-1">
            <div className="text-[#C9C9C9] text-[10px] flex items-center justify-centerm my-1">Are you sure you want to log out</div>
            <div className="my-2 flex items-center justify-center"><img src="\images\undraw_login_re_4vu2 1.svg" alt="not found" /></div>
        </div>
        <div className="flex flex-row justify-between px-4 ">
            <div onclick={cancel} className="hover:cursor-pointer bg-[#6543D0] text-[8px] text-[#fff] px-5 py-1 rounded-[5px]">Cancel</div>
            <div onclick={logout} className="hover:cursor-pointer bg-[#B61515] text-[8px] text-[#fff] px-5 py-1 rounded-[5px]">Logout</div>
        </div>
      </div>
    </div>
  );
}
