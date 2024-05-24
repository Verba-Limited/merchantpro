import React from "react";
import { useState } from "react";
// import axios from "axios";
// eslint-disable-next-line
import "../../assets/css/nucleo-icons.css";
import "../../assets/css/nucleo-svg.css";
import "https://kit.fontawesome.com/42d5adcbca.js";
import "../../assets/css/nucleo-svg.css";
import "../../assets/css/argon-dashboard.css";
import { Link, useNavigate } from "react-router-dom";

import businessbackground from "../../assets/img/businessman.png";
import mplogo from "../../assets/img/icons/flags/aaa.png";
import frameservices from "../../assets/img/frameservices.png";

export default function SignUp() {
  const navigate = useNavigate();
  const myStyle = {
    backgroundImage: `url(${businessbackground})`,
    backgroundSize: "cover",
  };
  // const [message, setMessage] = useState("");
  // const [error, setError] = useState(false);

  const [referralCode, setReferralCode] = useState();
  const [otherChannel, setOtherChannel] = useState();

  const [formData, setFormData] = useState({
    organizationId: "660066e0a9e745f292899182",
    businessName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    rcNumber: "",
    hearAbout: "",
    referralCode: "",
    otherChannel: "",
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
    console.log(value);
    if (value !== "Referral") setReferralCode("");
    if (value !== "Others") setOtherChannel("");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    navigate("/dashboard");

    // try {

    //     const parsedBusinessRequest = {
    //         "organizationId": formData.organizationId,
    //         "businessInfo": {
    //             "businessName": formData.businessName,
    //             "businessPhoneNumber": formData.businessPhoneNumber,
    //             "businessAddress": "",
    //             "country": "",
    //             "state": "",
    //             "lga": "",
    //             "businessType": "",
    //             "ageOfCompany": "",
    //             "companyTieredRevenue": "",
    //             "referralSource": {
    //                 "howDidYouHear": formData.hearAbout,
    //                 "referralCode": referralCode,
    //                 "otherChannel": otherChannel
    //             }
    //         },
    //         "serviceInfo": {
    //             "products": [
    //             {
    //                 "name": "",
    //                 "description": "",
    //                 "amount": 0
    //             }
    //             ],
    //             "paymentPlan": "",
    //             "gracePeriod": ""
    //         },
    //         "firstName": formData.firstName,
    //         "lastName": formData.lastName,
    //         "email": formData.email,
    //         "rcNumber": formData.rcNumber,
    //         "password": formData.password,
    //         "verified": false,
    //         "eSign": false,
    //         "agreementSigned": false,
    //         "kycDocuments": []
    //     }

    //     console.log(parsedBusinessRequest);

    //     const response = await axios.post('http://localhost:5001/api/merchant', parsedBusinessRequest,
    //     {
    //         headers: {
    //             'x-api-key': '80f4b2j0nmiids8k9ar2mb99sy8xl3'
    //         }
    //     });
    //     console.log(response.data.message);
    //     // Redirect or show success message
    //     setError(false);
    //     setMessage(response.data.message);
    // } catch (error) {
    //     console.error('Error:', error.response.data.message);
    //     // Handle error
    //     setError(true);
    //     setMessage(error.response.data.message);
    // }
  };
  return (
    <div>
      <main className="main-content mt-0">
        <section>
          <div className="page-header min-vh-100">
            <div className="container">
              <div className="row">
                <div className="col-5 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 end-0 text-start justify-content-start flex-column">
                  <div
                    className="position-relative h-100 px-7 d-flex flex-column justify-content-start overflow-hidden"
                    style={myStyle}
                  >
                    <span className="mask opacity-6"></span>
                    <h1 className="mt-12 pt-7 text-white font-weight-bolder position-relative">
                      <span style={{ color: "#234A75" }}>
                        Connecting sellers{" "}
                      </span>
                      <br />
                      <span style={{ color: "#234A75" }}>on </span>
                      <span style={{ color: "#4D9A1D" }}>MerchantPro</span>
                    </h1>
                    <p className="text-white position-relative">
                      We help distributors start their B2B project in the
                      medical field online.
                      <br />
                      <h5 style={{ color: "#FFFFFF" }}>
                        Sign Up seamlessly today!
                      </h5>
                    </p>

                    <div className="m-5 text-start">
                      <img src={frameservices} alt="frameservices" />
                    </div>
                  </div>
                </div>

                <div className="col-xl-5 col-lg-6 col-md-8 d-flex flex-column mx-lg-0 mx-auto">
                  <div className="card card-plain">
                    <div className="card-header pb-0 text-start">
                      <div className="mb-5">
                        <img src={mplogo} alt="mplogo" />
                      </div>

                      <h4 className="font-weight-bolder">
                        Register Your Account
                      </h4>
                      <p className="mb-0">
                        Feel free to fill the fields below to get started
                      </p>
                    </div>
                    <div className="card-body">
                      {/* {message && (
                        <div
                          className={
                            error
                              ? "alert alert-danger text-white"
                              : "alert alert-success text-white"
                          }
                          role="alert"
                        >
                          {message}
                        </div>
                      )} */}
                      <form onSubmit={handleSubmit}>
                        <div className="row">
                          <label className="text-body">Business Name</label>
                          <div className="mb-3">
                            <input
                              type="text"
                              className="form-control form-control-lg"
                              placeholder="Business Name"
                              aria-label="Business Name"
                              name="businessName"
                              value={formData.businessName}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="row">
                          <label className="text-body">RC Number</label>
                          <div className="mb-3">
                            <input
                              type="text"
                              className="form-control form-control-lg"
                              placeholder="RC Number"
                              aria-label="RC Number"
                              name="rcNumber"
                              value={formData.rcNumber}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <label className="text-body">First Name</label>
                            <div className="mb-3">
                              <input
                                type="text"
                                className="form-control form-control-lg"
                                aria-label="First Name"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder="First Name"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <label className="text-body">Last Name</label>
                            <div className="mb-3">
                              <input
                                type="text"
                                className="form-control form-control-lg"
                                aria-label="Last Name"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder="Last Name"
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <label className="text-body">Work Email</label>
                          <div className="mb-3">
                            <input
                              type="email"
                              className="form-control form-control-lg"
                              aria-label="Work Email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="Work Email"
                              required
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <label className="text-body">Password</label>
                            <div className="input-group mb-3">
                              <input
                                type="password"
                                className="form-control form-control-lg"
                                aria-label="Password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Password"
                                required
                              />
                              <span className="input-group-text">
                                <i className="fa fa-eye-slash"></i>
                              </span>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <label className="text-body" for="retypepassword">
                              Retype Password
                            </label>
                            <div className="input-group mb-3">
                              <input
                                type="password"
                                className="form-control form-control-lg"
                                placeholder="Retype Password"
                                aria-label="Retype Password"
                              />
                              <span className="input-group-text">
                                <i className="fa fa-eye-slash"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="mb-3">
                            <label className="text-body" for="howdidyouhear">
                              How did you hear about us?
                            </label>
                            <select
                              className="form-control form-control-lg"
                              aria-label="How did you hear about us"
                              name="hearAbout"
                              value={formData.hearAbout}
                              onChange={handleChange}
                            >
                              <option value="Social media">
                                {" "}
                                Social media (Facebook, Instagram, Twitter){" "}
                              </option>
                              <option value="LinkedIn"> LinkedIn </option>
                              <option value="Internet Advertisement">
                                {" "}
                                Internet Advertisement{" "}
                              </option>
                              <option value="Google/Search Engine">
                                {" "}
                                Google / Search Engine{" "}
                              </option>
                              <option value="Friend"> Friend </option>
                              <option value="Referral"> Referral </option>
                              <option value="Others"> Others </option>
                            </select>
                          </div>
                          {formData.hearAbout === "Referral" && (
                            <div>
                              <label className="text-body">Referral Code</label>
                              <div className="mb-3">
                                <input
                                  type="text"
                                  className="form-control form-control-lg"
                                  aria-label="Referral Code"
                                  name="Referral Code"
                                  value={referralCode}
                                  onChange={(e) =>
                                    setReferralCode(e.target.value)
                                  }
                                  placeholder="Referral Code"
                                />
                              </div>
                            </div>
                          )}
                          {formData.hearAbout === "Others" && (
                            <div>
                              <label className="text-body">Other Channel</label>
                              <div className="mb-3">
                                <input
                                  type="text"
                                  className="form-control form-control-lg"
                                  aria-label="Other Channel"
                                  name="Other Channel"
                                  value={otherChannel}
                                  onChange={(e) =>
                                    setOtherChannel(e.target.value)
                                  }
                                  placeholder="Other Channel"
                                />
                              </div>
                            </div>
                          )}
                        </div>
                        <div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="termsAccepted"
                              checked={formData.termsAccepted}
                              onChange={handleChange}
                              required
                            />
                            <label className="form-check-label" for="terms">
                              I agree to the
                              <a
                                href="/terms"
                                className="text-primary font-weight-bold"
                              >
                                {" "}
                                &nbsp;Terms and Condition
                              </a>
                            </label>
                          </div>
                        </div>
                        <div className="text-center">
                          <Link to="/dashboard">
                            <button
                              type="submit"
                              className="btn btn-lg btn-success btn-lg w-100 mt-4 mb-0"
                            >
                              Get Started
                            </button>
                          </Link>
                        </div>
                      </form>
                    </div>
                    <div className="card-footer text-center pt-0 px-lg-2 px-1">
                      <p className="mb-4 text-sm mx-auto">
                        Already have an account? &nbsp;
                        <a
                          href="/login"
                          className="text-success text-gradient font-weight-bold"
                        >
                          Login
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
