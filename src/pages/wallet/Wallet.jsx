import React from "react";
import Assets from "../../constants/Assets";
import { transaction } from "../../data";

export default function Wallet() {
  return (
    <>
      <div className="md:container md:space-y-7 md:px-6">
        <div className="md:px-4 w-full pt-4">
          <div className="flex justify-between max-[500px]:flex-col p-3 items-center md:h-[30vh] bg-[#f3f8fb] rounded-xl w-full max-[500px]:space-y-3">
            <div className="max-[500px]:mr-[12rem]">
              <span className="text-[#353F4D] font-normal italic md:text-[20px] text-xl">
                #123756
              </span>
              <div className="flex space-x-3 items-center">
                <h1 className="text-[#ACB0B6] font-normal whitespace-nowrap md:text-[24px] text-xl">
                  Wallet Balance
                </h1>
                <img src={Assets.eye} alt="" width={24} height={24} />
              </div>
              <h1 className="md:text-[40px] font-semibold text-xl">N0.19</h1>
            </div>
            <div className="flex space-x-16 items-center">
              <div className="space-y-3 flex flex-col items-center">
                <button className="rounded-full bg-[#fff] p-4">
                  <img
                    src={Assets.transfer}
                    alt="transfer icon"
                    width={23}
                    height={23}
                  />
                </button>
                <p> Transfer</p>
              </div>
              <div className="space-y-3 flex flex-col items-center">
                <button className="rounded-full bg-[#4d9a1d] p-4">
                  <img
                    src={Assets.plus}
                    alt="withdraw icon"
                    width={23}
                    height={23}
                  />
                </button>
                <p> Fund Wallet</p>
              </div>
              <div className="space-y-3 flex flex-col items-center">
                <button className="rounded-full bg-[#fff] p-4">
                  <img
                    src={Assets.withdraw}
                    alt="withdraw icon"
                    width={23}
                    height={23}
                  />
                </button>
                <p> withdraw</p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:px-7 p-2">
          <div className="flex items-center md:p-5 justify-between">
            <h1 className="text-[#353F4D] font-medium whitespace-nowrap md:text-[28px] text-xl">
              Recent Transactions
            </h1>

            <button className="flex items-center ">
              <p className="text-[#4D9A1D] font-bold md:text-[18px] whitespace-nowrap">
                {" "}
                See All
              </p>
              <img src={Assets.arrow} alt="" width={24} height={24} />
            </button>
          </div>

          <div className="pt-5 md:p-5 pb-16">
            {transaction.map((items, index) => (
              <div key={index} className="border-2 border-[#f5f5f5] rounded-md">
                <div className="flex justify-between max-[500px]:grid max-[500px]:grid-cols-4 gap-4 items-center p-3">
                  <div className=" ">
                    <img
                      src={items.icon}
                      alt="transfer icon"
                      width={70}
                      height={70}
                    />
                  </div>
                  <div>
                    <h1
                      className={`md:text-[20px] font-medium ${
                        items.title === "Withdrawal"
                          ? "text-[#4d9a1d]"
                          : "text-[#234A75]"
                      }`}
                    >
                      {items.title}
                    </h1>
                    <p className="text-[#353F4D] font-light text-[16px] hidden md:block">
                      {items.date.toLocaleString()}
                    </p>
                  </div>

                  <div>
                    <p className="font-medium text-[#234A75]">₦{items.price}</p>
                  </div>

                  <div className="flex flex-col items-center">
                    <img src={items.img} alt="" />
                    <p>{items.status}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
