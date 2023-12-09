export default function Verify_aadhar() {
  return (
    <div>
      <div className="px-5 py-5 border-[1px] border-[#2C2C2C] rounded-[10px] w-[25vw]">
        <div className="flex flex-row items-center">
          <div className="">
            <img src="images\Fingerprint.svg" alt="" />{" "}
          </div>
          <div className="text-[20px] text-[#fff] ml-2">Verify Aadhar</div>
        </div>
        <hr className="my-4" />
        <div className="border-dashed rounded-[10px] border-[1px] bg-[#070214] border-[#6543D0] flex flex-col justify-center items-center py-5">
          <div className="rounded-[100px] bg-[#160350] flex justify-center items-center px-1 py-1 mb-3">
            <img src="\images\plus.svg" alt="" />
          </div>
          <div className="text-[#fff] text-[14px]">
            Drag and Drop your files here
          </div>
          <div className="text-[14px] flex flex-row justify-center items-center">
            <div className="text-[#fff]">or</div>
            <div className="ml-1 text-[#6543D0] underline">browse file</div>
          </div>
        </div>
        <div className="my-4 text-[#fff] text-[18px]">Password</div>
        <div className="flex justify-center items-center py-2 border-[1px] border-[#2C2C2C] text-[#2C2C2C] rounded-[10px]">
          Enter Password
        </div>
        <div className="flex flex-row justify-center items-center my-2">
          <div className="text-[#fff] text-[12px]">Powered By</div>
          <div className="mx-1">
            {" "}
            <img
              className="w-[1vw]"
              src="images\170b849f737b2da1e557697da3970cff.png"
              alt=""
            />
          </div>
          <div className="text-[#fff] text-[16px] font-semibold">
            Anon Aadhar
          </div>
        </div>
        <div className="text-[12px] text-[#fff] flex flex-row justify-center items-center">
          <div>Don't have signed Aadhaar?</div>
          <div className="text-[#6543D0] ml-1">Get one</div>
        </div>
      </div>
    </div>
  );
}
