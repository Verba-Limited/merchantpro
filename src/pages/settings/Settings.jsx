import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom/dist";
import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Assets from "../../constants/Assets";
import BvnVerification from "../../components/layout/BvnVerification";
import DocsUpload from "../../components/layout/DocsUpload";
import EmailCode from "../../components/layout/EmailCode";
import AddNewPassword from "../../components/layout/AddNewPassword";
import Select from "react-select";
import axios from "axios";
import { stateData, localGovtData } from "../../data";

export default function Settings() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({});

  const [selectedState, setSelectedState] = useState(null);
  const [selectedLga, setSelectedLga] = useState(null);

  const handleStateChange = (selectedOption) => {
    setSelectedState(selectedOption);
    setSelectedLga(null); // Reset LGA selection when state changes
  };

  const handleLgaChange = (selectedOption) => {
    setSelectedLga(selectedOption);
  };

  // Transforming data for React Select
  const stateOptions = Object.keys(localGovtData).map((state) => ({
    value: state,
    label: state,
  }));

  const lgaOptions = selectedState
    ? localGovtData[selectedState.value].map((lga) => ({
        value: lga,
        label: lga,
      }))
    : [];

  useEffect(() => {
    axios
      .get(
        "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
      )
      .then((response) => {
        setCountries(response.data.countries);
        setSelectedCountry(response.data.userSelectValue);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
      });
  }, []);

  const [formData, setFormData] = useState({
    tin: "",
    rcNumber: "",
    businessEmail: "",
    // country: "",
    businessNumber: "",
    state: "",
    localGovernment: "",
    // selectedCountry: "",
  });

  const [file, setFile] = useState(null);
  const [formStep, setFormStep] = useState(1);
  const [activeTab, setActiveTab] = useState("profile");
  const [bvn, setBvn] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Sole Proprietorship");
  const [codeConfirmed, setCodeConfirmed] = useState(false);

  const handleVerification = () => {
    setIsVerifying(true);
    // Simulate an API call
    setTimeout(() => {
      setIsVerified(true);
      setIsVerifying(false);
    }, 2000);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      console.log("Uploading file:", file);
    } else {
      toast.warn("Please select a file to upload", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNext = () => {
    if (Object.values(formData).every((value) => value.trim() !== "")) {
      setFormStep((prevStep) => prevStep + 1);
    } else {
      toast.warn("Please fill out all fields!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
      });

      console.log("Please fill out all fields");
    }
  };

  const handlePrev = () => {
    setFormStep((prevStep) => prevStep - 1);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleChanges = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleNextKyc = () => {
    setActiveTab("kyc");
  };
  const handleConfirmed = () => {
    setCodeConfirmed(true);
  };

  return (
    <>
      <div className="md:container md:px-10">
        <div className="md:flex space-x-3 relative md:space-x-20 mt-2">
          <button
            className={`transform ease-in-out duration-500 delay-100 cursor-pointer px-[10px] py-[5px] ${
              activeTab === "profile"
                ? "bg-[#5c99cf] text-white"
                : "border-b-[3px] border-transparent"
            }`}
            onClick={() => handleTabClick("profile")}
          >
            {" "}
            Profile
          </button>
          <button
            className={`transform ease-in-out duration-500 delay-100 cursor-pointer px-[10px] py-[5px] ${
              activeTab === "kyc"
                ? "bg-[#5c99cf] text-white"
                : "border-b-[3px] border-transparent"
            }`}
            onClick={() => handleTabClick("kyc")}
          >
            KYC
          </button>
          <button
            className={`transform ease-in-out duration-500 delay-100 cursor-pointer px-[10px] py-[5px] ${
              activeTab === "updatePassword"
                ? "bg-[#5c99cf] text-white"
                : "border-b-[3px] border-transparent"
            }`}
            onClick={() => handleTabClick("updatePassword")}
          >
            Update Password
          </button>
        </div>

        {activeTab === "profile" && (
          <div className="p-3">
            <div className="flex justify-end">
              <p className="font-bold text-2xl text-[#234A75]">
                Step {formStep} of 3
              </p>
            </div>
            <div>
              {formStep === 1 && (
                <form>
                  <div className="flex justify-evenly space-x-5">
                    <div className="mb-3 w-1/2 row">
                      <label className=" text-[17px] font-normal text-black">
                        TIN
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter"
                        aria-label="TIN"
                        name="tin"
                        value={formData.tin}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3 w-1/2 row">
                      <label className=" text-[17px] font-normal text-black">
                        RC Number
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter"
                        aria-label="RC Number"
                        name="rcNumber"
                        value={formData.rcNumber}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-3 w-full row">
                    <label className=" text-[17px] font-normal text-black">
                      Business Email
                    </label>
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      placeholder="Email Address"
                      aria-label="TIN"
                      name="businessEmail"
                      value={formData.businessEmail}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3 w-full row">
                    <label className=" text-[17px] font-normal text-black">
                      Business Phone Number
                    </label>
                    <input
                      type="number"
                      className="form-control form-control-lg"
                      placeholder="Phone Number"
                      aria-label="TIN"
                      name="businessNumber"
                      value={formData.businessNumber}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="flex justify-evenly space-x-5">
                    <div className="mb-3 w-1/2 row">
                      <label className=" text-[17px] font-normal text-black">
                        Country
                      </label>

                      <Select
                        options={countries}
                        className="form-control form-control-lg outline-none"
                        value={selectedCountry}
                        onChange={(selectedOption) =>
                          setSelectedCountry(selectedOption)
                        }
                      />
                    </div>
                    <div className="mb-3 w-1/2 row">
                      <label className=" text-[17px] font-normal text-black">
                        State
                      </label>
                      <Select
                        value={selectedState}
                        className="form-control form-control-lg outline-none"
                        onChange={handleStateChange}
                        options={stateOptions}
                      />
                    </div>
                  </div>
                  <div className="mb-3 w-full row">
                    <label className="text-[17px] font-normal text-black">
                      Local Government
                    </label>

                    <Select
                      value={selectedLga}
                      className="form-control form-control-lg outline-none"
                      onChange={handleLgaChange}
                      options={lgaOptions}
                      isDisabled={!selectedState}
                    />
                  </div>

                  <div className="flex md:justify-end">
                    <ToastContainer />
                    <button
                      type="button"
                      onClick={handleNext}
                      className="px-5 py-3 bg-[#4D9A1D] text-white rounded-xl"
                    >
                      Next
                    </button>
                  </div>
                </form>
              )}

              {formStep === 2 && (
                <form>
                  <div className="mb-3">
                    <label className="block text-sm font-medium text-gray-700">
                      Business Type
                    </label>
                    <div className="mt-1 relative">
                      <select
                        value={selectedOption}
                        onChange={handleChanges}
                        className="block w-full pl-3 pr-10 py-4 p-3 text-base bg-transparent border-2 border-[#f5f5f5] outline-none  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                      >
                        <option>Sole Proprietorship</option>
                        <option>Partnership</option>
                        <option>Corporation</option>
                        <option>LLC</option>
                        <option>Nonprofit</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="block text-sm font-medium text-gray-700">
                      Age of Business
                    </label>
                    <div className="mt-1 relative">
                      <select
                        value={selectedOption}
                        onChange={handleChanges}
                        className="block w-full pl-3 pr-10 py-4 p-3 text-base bg-transparent border-2 border-[#f5f5f5]  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                      >
                        <option>Enter Age</option>
                        <option>Partnership</option>
                        <option>Corporation</option>
                        <option>LLC</option>
                        <option>Nonprofit</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="block text-sm font-medium text-gray-700">
                      Company Tier Revenue
                    </label>
                    <div className="mt-1 relative">
                      <select
                        value={selectedOption}
                        onChange={handleChanges}
                        className="block w-full pl-3 pr-10 py-4 p-3 text-base bg-transparent border-2 border-[#f5f5f5]  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                      >
                        <option>Select</option>
                        <option>Partnership</option>
                        <option>Corporation</option>
                        <option>LLC</option>
                        <option>Nonprofit</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="block text-sm font-medium text-gray-700">
                      Company Size
                    </label>
                    <div className="mt-1 relative">
                      <select
                        value={selectedOption}
                        onChange={handleChanges}
                        className="block w-full pl-3 pr-10 py-4 p-3 text-base bg-transparent border-2 border-[#f5f5f5]  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                      >
                        <option>Select size</option>
                        <option>Partnership</option>
                        <option>Corporation</option>
                        <option>LLC</option>
                        <option>Nonprofit</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="block text-sm font-medium text-gray-700">
                      Position at Company
                    </label>
                    <div className="mt-1 relative">
                      <select
                        value={selectedOption}
                        onChange={handleChanges}
                        className="block w-full pl-3 pr-10 py-4 p-3 text-base bg-transparent border-2 border-[#f5f5f5]  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                      >
                        <option>Select a position</option>
                        <option>Partnership</option>
                        <option>Corporation</option>
                        <option>LLC</option>
                        <option>Nonprofit</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-20 flex justify-between items-center space-x-4 sm-plus:mt-5">
                    <button
                      onClick={handlePrev}
                      type="button"
                      className="px-4 py-3 border-2 border-[#81919B] text-[#81919B] rounded-xl"
                    >
                      Previous
                    </button>
                    <div className="md:text-[20px] md:flex items-center">
                      <p className="whitespace-nowrap"> Skip to your </p>
                      <Link to={"/dashboard"} className="text-[#4D9A1D]">
                        Dashboard
                      </Link>
                    </div>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="px-5 py-3 bg-[#4D9A1D] text-white rounded-xl"
                    >
                      Next
                    </button>
                  </div>
                </form>
              )}

              {formStep === 3 && (
                <div className="mt-4 space-y-6">
                  <div className="flex max-[500px]:grid max-[500px]:grid-cols-1 md:space-x-14 w-full space-y-4">
                    <label
                      htmlFor="file-upload"
                      className="flex flex-col items-center w-full py-4 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-gray-400"
                    >
                      <div className="flex space-x-10 items-center">
                        <div className="flex flex-col items-center md:space-y-3">
                          <img src={Assets.uploadIcon} alt="uplaod icon" />

                          <button
                            onClick={handleUpload}
                            typeof="file"
                            className="text-nowrap text-white bg-[#234a75] py-3 px-5 rounded-lg"
                          >
                            Browse file
                          </button>
                        </div>

                        <div className="flex flex-col space-y-2 p-1">
                          <div>
                            <p className="text-sm text-gray-500">
                              <span className="font-semibold">
                                Drag & Drop file here <br /> or browse your
                                device
                              </span>
                            </p>
                          </div>
                          <div className="">
                            <p className="text-xs text-gray-500 ">
                              Allowed Documents: jpg, <br /> png, tiff, pdf -
                              5MB maximum <br /> file size.
                            </p>
                          </div>
                        </div>
                      </div>

                      <input
                        id="file-upload"
                        type="file"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                    </label>

                    <label
                      htmlFor="file-upload"
                      className="flex flex-col items-center w-full py-4 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-gray-400"
                    >
                      <div className="W">
                        <div className="flex space-x-10 items-center">
                          <div className="flex flex-col items-center md:space-y-3">
                            <img src={Assets.uploadIcon} alt="uplaod icon" />

                            <button
                              onClick={handleUpload}
                              typeof="file"
                              className="text-nowrap text-white bg-[#234a75] py-3 px-5 rounded-lg"
                            >
                              Browse file
                            </button>
                          </div>

                          <div className="flex flex-col space-y-2 p-1">
                            <div>
                              <p className="text-sm text-gray-500">
                                <span className="font-semibold">
                                  Drag & Drop file here <br /> or browse your
                                  device
                                </span>
                              </p>
                            </div>
                            <div className="">
                              <p className="text-xs text-gray-500 ">
                                Allowed Documents: jpg, <br /> png, tiff, pdf -
                                5MB maximum <br /> file size.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <input
                        id="file-upload"
                        type="file"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                    </label>
                  </div>

                  <div>
                    <div className="flex  space-x-5">
                      <div className="mb-3 w-1/2 row">
                        <label className=" text-[17px] font-normal text-black">
                          Url(Optional)
                        </label>
                        <input
                          type="text"
                          className="py-3 w-full border-gray-300 border-2 outline-none"
                        />
                      </div>
                      <div className="mb-3 w-1/2 row">
                        <label className=" text-[17px] font-normal text-black">
                          Url(Optional)
                        </label>
                        <input
                          type="text"
                          className="py-3 w-full border-gray-300 border-2 outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div className=" flex justify-between items-center space-x-4">
                    <button
                      onClick={handlePrev}
                      type="button"
                      className="px-4 py-3 border-2 border-[#81919B] text-[#81919B] rounded-xl"
                    >
                      Previous
                    </button>
                    <div className="md:text-[20px] md:flex items-center">
                      <p className="whitespace-nowrap"> Skip to your </p>
                      <Link to={"/dashboard"} className="text-[#4D9A1D]">
                        Dashboard
                      </Link>
                    </div>
                    <button
                      type="button"
                      onClick={handleNextKyc}
                      className="px-5 py-3 bg-[#4D9A1D] text-white rounded-xl"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === "kyc" && (
          <>
            <div className="flex justify-end">
              <p className="font-bold text-2xl text-[#234A75]">Step 1 of 1</p>
            </div>
            <div className="space-y-4 pt-4">
              <h1 className="text-[24px] text-[#353F4D] font-normal">
                Director's Information
              </h1>
              <div>
                <BvnVerification
                  bvn={bvn}
                  setBvn={setBvn}
                  isVerified={isVerified}
                  isVerifying={isVerifying}
                  handleVerification={handleVerification}
                />
                {/* <DisplayVerified isVerified={isVerified} /> */}
              </div>
              <div className="pt-7 mb-6">
                <h1 className="text-[24px] text-[#353F4D] font-normal">
                  Documents Upload
                </h1>
                <div className="mt-3">
                  <DocsUpload />
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === "updatePassword" && (
          <>
            <div>
              <div className="pt-5 p-3">
                {!codeConfirmed ? (
                  <EmailCode onCodeConfirm={handleConfirmed} />
                ) : (
                  <AddNewPassword />
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
