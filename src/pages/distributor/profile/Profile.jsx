import React, { useEffect } from "react";
import Assets from "../../../constants/Assets";
import { useFetchProfile } from "../../../components/hooks/distributorCustomHooks";
import { useSelector } from "react-redux";

export default function Profile() {
  const user = useSelector((state) => state.auth.user);
  const userId = user ? user._id : null;

  const { fetchProfile, profile, status, error } = useFetchProfile(userId);

  console.log(userId);

  useEffect(() => {
    if (userId) {
      fetchProfile();
    } else {
      console.log("No userId provided to Profile component");
    }
  }, [fetchProfile, userId]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  const myStyle = {
    backgroundImage: `url(${Assets.productbg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "344px",
    width: "100%",
    // position: "relative",
  };
  return (
    <>
      <div className="md:container mt-4 md:p-4 p-2">
        <div className="space-y-6">
          <div style={myStyle} className="">
            <div className="">
              <div className="flex justify-between p-5">
                <img src={Assets.avatar2} alt="avatar-logo" />
                <div>
                  <button className="text-white bg-[#4196bc] py-3 px-5 rounded-md hidden md:block">
                    502k Sales
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center max-[500px]:justify-between md:space-x-16 p-2">
            <h1 className="text-[#234A75] text-xl md:text-4xl font-medium">
              {profile?.data?.firstName} {profile?.data?.lastName}
            </h1>
            <button className="bg-[#234A75] flex px-4 py-2 rounded-md items-center space-x-3">
              <img src={Assets.mobile} alt="" />
              <span className="text-white md:text-[24px] text-xl">Call RM</span>
            </button>
          </div>
        </div>

        <div className="pt-6">
          <div className="flex justify-between items-center p-2">
            <h1 className="font-bold md:text-3xl text-xl font-[inter] text-[#353F4D]">
              Account Details
            </h1>
            <button className="bg-[#4d9a1d] px-5 py-3 text-white rounded-lg font-normal text-sm">
              Download
            </button>
          </div>

          <div className="border border-gray-300 mt-4">
            <div className="p-6 flex max-[500px]:flex-col gap-5 justify-evenly ">
              <div className="flex flex-col space-y-6">
                <div>
                  <h1 className="text-[#353F4D] font-bold text-xl">Email</h1>
                  <p>
                    {" "}
                    <p>{profile?.data?.email}</p>
                  </p>
                </div>
                <div>
                  <h1 className="text-[#353F4D] font-bold text-xl">Username</h1>
                  <p>Ezeja</p>
                </div>
                <div>
                  <h1 className="text-[#353F4D] font-bold text-xl">
                    Documents
                  </h1>
                  <div className="flex items-center space-x-4">
                    <p className="text-[#4d9a1d] text-base">Verified</p>
                    <button className="text-white bg-[#234A75]  px-2  rounded-md">
                      Edit
                    </button>
                  </div>
                </div>
                <div>
                  <h1 className="text-[#353F4D] font-bold text-xl">
                    Total Sales
                  </h1>
                  <p>10,000</p>
                </div>
                <div>
                  <h1 className="text-[#353F4D] font-bold text-xl">
                    Payment Type
                  </h1>
                  <p>{profile?.data?.serviceInfo?.paymentPlan}</p>
                </div>

                <div>
                  <h1 className="text-[#353F4D] font-bold text-xl">
                    Business Name
                  </h1>
                  <p>{profile?.data?.businessInfo?.businessName}</p>
                </div>
              </div>
              <div className="flex flex-col space-y-6">
                <div>
                  <h1 className="text-[#353F4D] font-bold text-xl">Phone</h1>
                  <p>{profile?.data?.businessInfo?.businessPhoneNumber}</p>
                </div>

                <div>
                  <h1 className="text-[#353F4D] font-bold text-xl">
                    Wallet ID
                  </h1>
                  <p>234500</p>
                </div>
                <div>
                  <h1 className="text-[#353F4D] font-bold text-xl">
                    Last Seen
                  </h1>
                  <p>10 hours ago</p>
                </div>
                <div>
                  <h1 className="text-[#353F4D] font-bold text-xl">
                    Total Volume
                  </h1>
                  <p>N200,000</p>
                </div>

                <div>
                  <h1 className="text-[#353F4D] font-bold text-xl">
                    Total Volume
                  </h1>
                  <p>N200,000</p>
                </div>
                <div>
                  <h1 className="text-[#353F4D] font-bold text-xl">Status</h1>
                  <p>Active</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
