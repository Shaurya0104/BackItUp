export default function Create_new_contract() {
  return (
    <div className="inline-flex rounded-[10px] flex-col items-start gap-[24px] p-[24px] relative bg-black border border-solid border-[#2b2b2b]">
      <div className="inline-flex items-center justify-center gap-[8px] relative flex-[0_0_auto]">
        <img
          className="relative w-[24px] h-[24px]"
          alt="Plus"
          src="images\Plus.svg"
        />
        <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-white text-[20px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
          New contract
        </div>
      </div>
      <img
        className="relative w-[440px] h-px object-cover"
        alt="Line"
        src="images\Line 4.png"
      />
      <div className="relative w-[440px] h-[90px]">
        <div className="absolute -top-px left-0 [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[18px] text-center tracking-[0] leading-[normal]">
          Beneficiary
        </div>
        <div className="flex flex-col w-[440px] h-[52px] items-center justify-center gap-[8px] px-[99px] py-[10px] absolute top-[38px] left-0 rounded-[8px] overflow-hidden border border-solid border-[#2b2b2b]">
          <div className="inline-flex items-center gap-[12px] relative flex-[0_0_auto]">
            <img
              className="relative w-[24px] h-[24px]"
              alt="Plus"
              src="images\Plus.svg"
            />
            <div className="relative w-fit [font-family:'Montserrat-Medium',Helvetica] font-medium text-[#c9c9c9] text-[16px] tracking-[0] leading-[normal]">
              Add a beneficiary
            </div>
          </div>
        </div>
      </div>
      <img
        className="relative w-[440px] h-px object-cover"
        alt="Line"
        src="images\Line 4.png"
      />
      <div className="inline-flex flex-col items-start gap-[16px] relative flex-[0_0_auto]">
        <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[18px] tracking-[0] leading-[normal]">
          Guardians
        </div>
        <div className="flex flex-col w-[440px] h-[52px] items-center justify-center gap-[8px] px-[99px] py-[10px] relative rounded-[8px] overflow-hidden border border-solid border-[#2b2b2b]">
          <div className="inline-flex items-center gap-[12px] relative flex-[0_0_auto]">
            <img
              className="relative w-[24px] h-[24px]"
              alt="Plus"
              src="images\Plus.svg"
            />
            <div className="relative w-fit [font-family:'Montserrat-Medium',Helvetica] font-medium text-[#c9c9c9] text-[16px] tracking-[0] leading-[normal]">
              Add new guardian
            </div>
          </div>
        </div>
      </div>
      <img
        className="relative w-[440px] h-px object-cover"
        alt="Line"
        src="images\Line 4.png"
      />
      <div className="relative w-[440px] h-[184px]">
        <div className="absolute -top-px left-0 [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[18px] text-white tracking-[0] leading-[normal]">
          Auto-execute terms
        </div>
        <div className="absolute w-[440px] h-[146px] top-[38px] left-0">
          <div className="flex w-[440px] items-center gap-[16px] px-[16px] py-[12px] absolute top-0 left-0 bg-black rounded-[8px] overflow-hidden border border-solid border-[#6543d0] shadow-button-drop-shadow">
            <img
              className="relative w-[16px] h-[16px]"
              alt="Frame"
              src="images/Frame 61.png"
            />
            <div className="inline-flex flex-col items-start justify-center gap-[8px] relative flex-[0_0_auto] mr-[-3.00px]">
              <p className="relative w-[379px] mt-[-1.00px] [font-family:'Inter_Tight-Regular',Helvetica] font-normal text-[12px] text-white tracking-[0] leading-[normal]">
                Auto-execute recovery if the account is inactive for
              </p>
              <div className="relative w-[379px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#989898] text-[15px] tracking-[0] leading-[normal] underline">
                7 years
              </div>
            </div>
          </div>
          <div className="flex w-[440px] items-center gap-[16px] px-[16px] py-[12px] absolute top-[81px] left-0 rounded-[8px] overflow-hidden border border-solid border-[#2b2b2b]">
            <div className="relative w-[16px] h-[16px] rounded-[4px] border border-solid border-[#2b2b2b]" />
            <div className="inline-flex flex-col items-start justify-center gap-[8px] relative flex-[0_0_auto] mr-[-3.00px]">
              <div className="relative w-[379px] mt-[-1.00px] [font-family:'Inter_Tight-Regular',Helvetica] font-normal text-[12px] text-white tracking-[0] leading-[normal]">
                Auto-execute recovery on
              </div>
              <div className="relative w-[379px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#989898] text-[15px] tracking-[0] leading-[normal] underline">
                DD|MM|YYYY
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <hr /> */}
      <img
        className="relative w-[440px] h-px object-cover"
        alt="Line"
        src="images\Line 4.png"
      />
      <div className="relative w-fit [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[18px] tracking-[0] leading-[normal]">
        Tokens
      </div>
      <div className="inline-flex flex-col items-start gap-[16px] relative flex-[0_0_auto]">
        <div className="flex flex-col w-[440px] h-[52px] items-center justify-center gap-[8px] px-[99px] py-[10px] relative rounded-[8px] overflow-hidden border border-solid border-[#2b2b2b]">
          <div className="inline-flex items-center gap-[12px] relative flex-[0_0_auto]">
            <img
              className="relative w-[24px] h-[24px]"
              alt="Plus"
              src="images\Plus.svg"
            />
            <div className="relative w-fit [font-family:'Montserrat-Medium',Helvetica] font-medium text-[#c9c9c9] text-[16px] tracking-[0] leading-[normal]">
              Add new fund
            </div>
          </div>
        </div>
      </div>
      <div className="inline-flex items-center justify-center gap-[8px] px-[194px] py-[20px] relative flex-[0_0_auto] bg-[#6543d0] rounded-[12px] overflow-hidden">
        <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[20px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
          Done
        </div>
      </div>
    </div>
  );
}
