import React, { useState } from "react";
import Assets from "../../../constants/Assets";
import { Table } from "react-bootstrap";
import BarChart from "../../../components/layout/BarChart";
import { Link } from "react-router-dom";
import { orderItems, orders, partners } from "../../../data";
import Pagination from "../../../components/Ui/Pagination";
export default function Dashboard() {
  const [showDropdown, setShowDropdown] = useState(
    Array(orders.length).fill(false)
  );

  const toggleDropdown = (index) => {
    setShowDropdown((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div>
      <div class="container-fluid py-4">
        <div class="flex flex-col">
          <div className="flex justify-end mb-2">
            <Link to="/settings">
              <button className="flex items-center justify-between px-5 py-2 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400">
                <div className="flex items-center justify-center w-[50px] h-[50px] bg-[#f5a445] rounded-full mr-10">
                  <img src={Assets.icons} alt="" width={30} height={30} />
                </div>
                <span className="mr-10">Complete your KYC</span>
              </button>
            </Link>
          </div>
          <div className="flex max-[500px]:grid max-[500px]:grid-cols-2 gap-4 md:justify-between pt-2 md:p-3">
            {orderItems.map((items, index) => (
              <div
                key={index}
                className="flex bg-[#f3f8fb] max-[500px]:px-8 p-3 space-x-10 rounded"
              >
                <div>
                  <h1 className="text-[#A0AEC0] text-[12px] font-bold">
                    {items.status}
                  </h1>
                  <p className="text-[#2D3748] text-[18px] font-bold">
                    {items.price}
                  </p>
                </div>
                <img src={items.img} alt="" />
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white shadow-sm rounded-md mt-16 md:p-5 p-3">
          <BarChart />
        </div>
        <div class=" mt-4">
          <div class="mb-lg-0 mb-4">
            <div class="bg-white shadow-sm rounded-md mt-16 md:p-5">
              <div className="p-3">
                <h1 className="fs-3 fw-normal text-black">Orders</h1>
              </div>
              <div class="table-responsive p-3">
                <Table responsive>
                  <thead>
                    <tr className="fs-5">
                      <th className="fs-6">Company</th>
                      <th className="fs-6">Date</th>
                      <th className="fs-6">Product</th>
                      <th className="fs-6">QTY</th>
                      <th className="fs-6">Price</th>
                      <th className="fs-6">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order, index) => (
                      <tr key={index}>
                        <td>
                          <img
                            src={Assets.house}
                            alt="Company Logo"
                            className="me-2 fs-6"
                          />
                          {order.company}
                        </td>
                        <td className="fs-6">{order.date}</td>
                        <td className="fs-6">{order.product}</td>
                        <td className="fs-6"> {order.qty}</td>
                        <td className="fs-6">{order.price}</td>
                        <td className="fs-6">
                          <span className={` badge bg-${order.statusClass}`}>
                            {order.status}
                          </span>
                        </td>
                        <td>
                          <div className="relative inline-block">
                            <button
                              className="relative z-10"
                              onClick={() => toggleDropdown(index)}
                            >
                              <img src={Assets.action} alt="" />
                            </button>
                            {showDropdown[index] && (
                              <div className="absolute right-3  bg-[#FFF]  shadow-md z-50 w-[110px] p-3 space-y-3">
                                <p
                                  className="cursor-pointer hover:bg-gray-100 whitespace-nowrap flex space-x-3"
                                  onClick={() => console.log("Remove User")}
                                >
                                  <span>Edit</span>
                                </p>
                                <p
                                  className="cursor-pointer hover:bg-gray-100 whitespace-nowrap flex space-x-3 items-center"
                                  onClick={() => console.log("Make Admin")}
                                >
                                  <span>Delete</span>
                                </p>
                              </div>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
              <Pagination />
            </div>

            <div className="bg-white shadow-sm rounded-md mt-16 border2">
              <div className="md:flex md:justify-between p-5 gx-5">
                <div className="col-lg-5">
                  <div>
                    <h1 className="fs-3 fw-normal text-black">Top Partner</h1>
                  </div>
                  <div className="table-responsive">
                    <Table responsive>
                      <thead>
                        <tr className="fs-5">
                          <th className="fs-6">Company</th>
                          <th className="fs-6">Revenue</th>
                          <th className="fs-6">Details</th>
                        </tr>
                      </thead>
                      <tbody>
                        {partners.map((partner, index) => (
                          <tr key={index}>
                            <td>
                              <img
                                src={Assets.emzor}
                                alt="Company Logo"
                                className="me-2"
                              />
                            </td>
                            <td className="fs-6">{partner.number}</td>
                            <td className="fs-6">{partner.details}</td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                    <div className="mt-4">
                      <div className="flex items-center">
                        <button className="text-gray-500 hover:text-gray-700 hidden md:flex">
                          Previous
                        </button>
                        <div className="flex space-x-1">
                          {[1, 2, 3, 4, 5].map((page) => (
                            <button
                              key={page}
                              className="px-3 py-1 border rounded"
                            >
                              {page}
                            </button>
                          ))}
                        </div>
                        <button className="text-gray-500 hover:text-gray-700 hidden md:flex">
                          Next
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="mt-7">
                    <img src={Assets.health} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer class="footer pt-3  ">
          <div class="container-fluid">
            <div class="row align-items-center justify-content-lg-between">
              <div class="col-lg-6 mb-lg-0 mb-4">
                <div class="copyright text-center text-sm text-muted text-lg-start">
                  © 2024, made with <i class="fa fa-heart"></i> by
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
