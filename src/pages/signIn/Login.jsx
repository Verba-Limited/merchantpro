import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/css/argon-dashboard.css";

import businessbackground from "../../assets/img/businessman.png";
import mplogo from "../../assets/img/mplogo.png";
import frameservices from "../../assets/img/frameservices.png";

export default function Login() {
  const navigate = useNavigate();

  const myStyle = {
    backgroundImage: `url(${businessbackground})`,
    backgroundSize: "cover",
  };

  // const [message, setMessage] = useState("");
  // const [error, setError] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [token, setToken] = useState("");
  // const [userProfile, setUserProfile] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    navigate("/dashboard");
    // try {
    //   const parsedRequest = { email, password };
    //   console.log(parsedRequest);
    //   const response = await axios.post(
    //     "http://localhost:5001/api/merchant/auth/login",
    //     parsedRequest
    //   );
    //   console.log(response.data);
    //   // Redirect or show success message
    //   setError(false);
    //   setMessage(response.data.message);
    //   if (response.data.statusCode === 200) {
    //     setToken(response.data.data.extra.token);
    //     setUserProfile(response.data.data.info);

    //     localStorage.setItem("mpToken", response.data.data.extra.token);
    //     localStorage.setItem(
    //       "mpUserProfile",
    //       JSON.stringify(response.data.data.info)
    //     );

    //     setTimeout(() => {
    //       // 👇 Redirects to about page, note the `replace: true`
    //       navigate("/dashboard", { replace: true });
    //     }, 1500);
    //   }
    // } catch (error) {
    //   console.error("Error:", error?.response?.data?.message);
    //   // Handle error
    //   setError(true);
    //   setMessage(error?.response?.data?.message);
    // }
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     // 👇 Redirects to about page, note the `replace: true`
  //     navigate("/about", { replace: true });
  //   }, 3000);
  // }, []);
  return (
    <div>
      <main className="main-content  mt-0">
        <section>
          <div className="page-header min-vh-100">
            <div className="container">
              <div className="row">
                <div className="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 end-0 text-start justify-content-center flex-column">
                  <div
                    className="position-relative h-100 px-7 d-flex flex-column justify-content-center overflow-hidden"
                    style={myStyle}
                  >
                    <span className="mask opacity-6"></span>
                    <h1 className="mt-12 pt-7 text-white text-4xl font-weight-bolder position-relative">
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
                      <span style={{ color: "#FFFFFF" }}>
                        Sign Up seamlessly today!
                      </span>
                    </p>

                    <div className="m-5 text-start">
                      <img src={frameservices} alt="frameservices" />
                    </div>
                  </div>
                </div>

                <div className="col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0 mx-auto">
                  <div className="card card-plain">
                    <div className="card-header pb-0 text-start">
                      <div className="mb-5">
                        <img src={mplogo} alt="mplogo" />
                      </div>

                      <h4 className="font-weight-bolder">
                        Sign in to your account
                      </h4>
                      <p className="mb-0">
                        Enter your email and password to sign in
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
                        <div className="mb-3">
                          <input
                            type="email"
                            className="form-control form-control-lg"
                            placeholder="Email"
                            aria-label="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <input
                            type="password"
                            className="form-control form-control-lg"
                            placeholder="Password"
                            aria-label="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="rememberMe"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="rememberMe"
                            >
                              Remember me
                            </label>
                          </div>
                          <p className="text-sm text-end mt-n4">
                            <a
                              href="/forgotpassword"
                              className="text-primary text-gradient font-weight-bold"
                            >
                              Forgot Password?
                            </a>
                          </p>
                        </div>
                        <div className="text-center">
                          <button
                            type="submit"
                            className="btn btn-lg btn-success btn-lg w-100 mt-4 mb-0"
                          >
                            Login
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="card-footer text-center pt-0 px-lg-2 px-1">
                      <p className="mb-4 text-sm mx-auto">
                        Don't have an account? &nbsp;
                        <a
                          href="/register"
                          className="text-success text-gradient font-weight-bold"
                        >
                          Sign up
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
