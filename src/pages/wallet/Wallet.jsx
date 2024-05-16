import React from "react";
import Assets from "../../constants/Assets";

export default function Wallet() {
  const transaction = [
    {
      id: 1,
      icon: Assets.arrowRight,
      title: " Payment to Emzor",
      date: " Today, 26th Sept at 3:am",
      price: "N50,000,00",
      img: Assets.approve,
      status: "Success",
    },
    {
      id: 2,
      icon: Assets.arrowLeft,
      title: " Payment to Emzor",
      date: " Today, 26th Sept at 3:am",
      price: "N50,000,00",
      img: Assets.approve,
      status: "Success",
    },
    {
      id: 3,
      icon: Assets.arrowRight,
      title: " Payment to Emzor",
      date: " Today, 26th Sept at 3:am",
      price: "N50,000,00",
      img: Assets.decline,
      status: "Success",
    },
    {
      id: 4,
      icon: Assets.arrowRight,
      title: " Payment to Emzor",
      date: " Today, 26th Sept at 3:am",
      price: "N50,000,00",
      img: Assets.pending,
      status: "Success",
    },
  ];

  return (
    <>
      <div className="container md:space-y-7">
        <div className="px-4 w-full pt-4">
          <div className="flex justify-between p-5 items-center bg-[#f3f8fb] rounded-xl w-full">
            <div>
              <span className="text-[#353F4D] font-normal italic text-[20px]">
                #123756
              </span>
              <div className="flex space-x-3 items-center">
                <h1 className="text-[#ACB0B6] font-normal text-[24px]">
                  Wallet Balance
                </h1>
                <img src={Assets.eye} alt="" />
              </div>
              <h1 className="text-[40px] font-semibold">N0.19</h1>
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

        <div className="px-6">
          <div className="flex items-center justify-between">
            <h1 className="text-[#353F4D] font-medium text-[28px]">
              Recent Transactions
            </h1>

            <button className="flex items-center ">
              <p className="text-[#4D9A1D] font-bold text-[18px]"> See All</p>
              <img src={Assets.arrow} alt="" width={24} height={24} />
            </button>
          </div>

          <div className="pt-5 pb-16">
            {transaction.map((items, index) => (
              <div key={index} className="border-2 border-[#f5f5f5] rounded-md">
                <div className="flex justify-between  items-center p-3">
                  <button className="rounded-full bg-[#f7ffe0] p-4">
                    <img
                      src={items.icon}
                      alt="transfer icon"
                      width={23}
                      height={23}
                    />
                  </button>
                  <div>
                    <h1 className="text-[#234A75] text-[20px] font-medium">
                      {items.title}
                    </h1>
                    <p className="text-[#353F4D] font-light text-[16px]">
                      {items.date}
                    </p>
                  </div>

                  <div>
                    <p className="font-medium text-[#234A75]">{items.price}</p>
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
