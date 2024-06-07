import React from "react";
import Assets from "../../constants/Assets";
import { Table } from "react-bootstrap";
import BarChart from "../../components/layout/BarChart";
import { Link } from "react-router-dom";
import { orderItems, orders, partners } from "../../data";
import Pagination from "../../components/Ui/Pagination";
export default function Dashboard() {
  return (
    <div>
      <div class="container-fluid py-4">
        <div class="row">
          <div className="d-flex justify-content-end mb-4">
            <Link to="/settings">
              <button className="bg-[#f28f1e] text-white px-7 rounded-xl py-2 flex space-x-5 items-center max-[500px]:px-6">
                <div className="rounded-full bg-[#f5a445] p-3 ">
                  <img src={Assets.icons} alt="" width={30} height={30} />
                </div>
                <span className="whitespace-nowrap"> Complete your KYC</span>
              </button>
            </Link>
          </div>
          <div className="flex max-[500px]:grid max-[500px]:grid-cols-2 gap-4 md:justify-between pt-4 md:p-3">
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
                          <img src={Assets.action} alt="" />
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
                <div className="col-lg-5 ">
                  <div>
                    <h1 className="fs-3 fw-normal text-black">Top Partner</h1>
                  </div>

                  <div class="table-responsive">
                    <Table responsive>
                      <thead>
                        <tr className="fs-5">
                          <th className="fs-6">
                            {" "}
                            <img
                              src={Assets.pinky}
                              alt="Company Logo"
                              className="me-2"
                            />
                          </th>
                          <th className="fs-6">20,000</th>
                          <th className="fs-6">View Details</th>
                        </tr>
                      </thead>
                      <tbody>
                        {partners.map((order, index) => (
                          <tr key={index}>
                            <td>
                              <img
                                src={Assets.emzor}
                                alt="Company Logo"
                                className="me-2"
                              />
                              {/* {order.company} */}
                            </td>{" "}
                            <td>{order.number}</td>
                            <td>{order.details}</td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                    <div className="mt-4">
                      <div className="flex ">
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

                <div className="col-lg-5  ">
                  <div className=" mt-7">
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
