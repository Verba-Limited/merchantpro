import React, { useState } from "react";
import Assets from "../../constants/Assets";

export default function Help() {
  const [openIndex, setOpenIndex] = useState();

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? openIndex : index);
  };

  const faqs = [
    {
      question: "How do Tickets get resolved",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "How do Tickets get resolved",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "How do Tickets get resolved",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <>
      <div className="container">
        <div className="mt-3 space-y-7">
          <h1 className="text-[#747C88] font-normal text-[18px]">
            When merchant have issues they create a new ticket
          </h1>

          <div className="gap-4">
            <div className="border border-[#747C88] p-5">
              <div className="flex flex-col">
                <div className="flex space-x-28">
                  <div className="mb-3 w-2/5 row">
                    <label className=" text-[17px] font-normal text-black">
                      Merchant Name
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter name of product"
                      aria-label="TIN"
                      name="tin"
                      required
                    />
                  </div>
                  <div className="mb-3 w-2/5 row">
                    <label className=" text-[17px] font-normal text-black">
                      Ticket ID
                    </label>
                    <input
                      type="number"
                      className="form-control form-control-lg"
                      placeholder="Enter"
                      aria-label="RC Number"
                      name="rcNumber"
                      required
                    />
                  </div>
                  <div className="mb-3 w-2/5 row">
                    <label className=" text-[17px] font-normal text-black">
                      Select Request
                    </label>
                    <select className="py-3 bg-transparent border rounded-md border-[#d7dbde]">
                      <option>Wallet</option>
                      <option>Select Category</option>
                      <option>Select Category</option>
                      <option>Select Category</option>
                    </select>
                  </div>
                </div>

                <div className="mb-3 w-full row">
                  <label className=" text-[17px] font-normal text-black">
                    Comment
                  </label>
                  <textarea class=" h-24 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"></textarea>
                </div>
              </div>
              <div className="flex justify-center md:pr-16">
                <button className="bg-[#4d9a1d] px-5 py-2 text-white rounded-lg font-medium text-[24px]">
                  Add Ticket
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-between gap-3 mb-4">
            <div className=" w-full ">
              <div className="border border-[#747C88] p-3">
                <h2 className="text-2xl font-bold mb-4">History</h2>
                <div className="flex flex-col space-y-4 justify-center items-center">
                  <img src={Assets.dropImg} alt="" />
                  <h1 className="text-[20px] font-semibold text-[#2F3367]">
                    You do not have any ticket yet!
                  </h1>
                  <p>All tickets shows here</p>
                </div>
              </div>
            </div>
            <div className=" w-full ">
              <div className="max-w-md border border-[#747C88] p-3">
                <h2 className="text-2xl font-bold mb-4">FAQ</h2>
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border border-gray-300 rounded-md "
                  >
                    <button
                      className="w-full text-left px-4 py-2 focus:outline-none"
                      onClick={() => handleItemClick(index)}
                    >
                      <div className="flex justify-between items-center ">
                        <span className="font-bold">{faq.question}</span>
                        <span>{openIndex === index ? "▲" : "▼"}</span>
                      </div>
                    </button>
                    {openIndex === index && (
                      <div className="px-4 py-2 border-t border-gray-300 bg-gray-100">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
