import React, { useRef, useState } from "react";
import Assets from "../../constants/Assets";

export default function EmailCode({ onCodeConfirm }) {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef(Array(6).fill(null));

  const handleChange = (value, index) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (newCode.every((digit) => digit !== "")) {
      onCodeConfirm();
    } else if (value !== "" && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  return (
    <div className="">
      <div className="flex flex-col items-center space-y-6">
        <img src={Assets.email} alt="" width={60} height={60} />
        <h1 className="font-bold text-[#234A75] text-[32px]">Comfirm Email</h1>
        <p className="text-[#475467]">
          Enter code sent to your e************@gmail.com{" "}
        </p>
        <div className="flex space-x-5">
          {code.map((digit, index) => (
            <input
              key={index}
              type="password"
              className="border-2 border-gray-500 w-14 h-14 rounded-md p-3 outline-none"
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              maxLength={1}
              ref={(input) => {
                inputRefs.current[index] = input;
              }}
            />
          ))}
        </div>
        <div>
          <h1 className="text-[#4D9A1D] text-[14px] font-semibold">
            Resend code
          </h1>
        </div>
      </div>
    </div>
  );
}
