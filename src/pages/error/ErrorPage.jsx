import React from "react";
import { useNavigate } from "react-router-dom";
import { ARROW_LEFT, ERROR_CLOSE } from "../../constants/icons/Icons";

export default function ErrorPage({ role }) {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // This takes the user to the previous page
  };

  const goToHome = () => {
    if (role === "JOB_SEEKER") {
      navigate("/job-seeker/dashboard");
    } else if (role === "JOB_RECRUITER") {
      navigate("/employer/dashboard");
    } else if (role === "ADMIN") {
      navigate("/admin/dashboard");
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center pb-[104px]">
      <div>
        <ERROR_CLOSE />
      </div>
      <div className="mt-4">
        <h2 className="text-[36px] font-bold leading-[44px]">404 Error!</h2>
      </div>
      <div className="mt-4 max-w-[592px]">
        <p className="text-grey font-normal text-22 leading-[28px] text-center">
          Sorry, you’ve encountered an error because this page does not exist or
          might have been removed.
        </p>
      </div>
      <div className="flex gap-4 mt-12">
        <button
          className="border border-[#234A75] text-black flex items-center gap-2 text-base font-bold leading-[24px] px-4 rounded py-3"
          onClick={goBack}
        >
          <div>
            <ARROW_LEFT />
          </div>
          Go Back
        </button>
        <button
          className="bg-[#234A75] text-white flex items-center gap-2 text-base font-bold leading-[24px] px-4 rounded py-3"
          onClick={goToHome}
        >
          Go to Home
        </button>
      </div>
    </div>
  );
}
