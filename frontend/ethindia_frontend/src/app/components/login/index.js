export default function Login() {
  return (
    <div>
      <div className="border-[1px] broder-[#2c2c2c] rounded-[10px] w-[25vw] px-4 py-4">
        <div className="flex flex-row items-center ">
          <div className="mr-2">
            {" "}
            <img src="\images\Vector.png" alt="not found" />
          </div>
          <div className="text-[20px] text-[#fff]"> Login</div>
        </div>
        <hr className="my-3" />
        <div className="flex flex-col justify-center items-center">
          <div className="text-[#C9C9C9] flex flex-col justify-center items-center">
            {" "}
            Upload your signed aadhaar so that we can verify your identity
          </div>
          <div className="my-4">
            {" "}
            <img src="images\undraw_social_bio_re_0t9u 1.svg" alt="not found" />
          </div>
          <div className="flex justify-center items-center w-[22vw] rounded-[10px] bg-[#6543D0] text-[#fff] text-[20xpx] font-semibold px-5 py-2">
            Upload Signed Aadhar
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
    </div>
  );
}
