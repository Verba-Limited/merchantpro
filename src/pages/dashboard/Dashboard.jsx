import React from "react";
import house from "../../assets/img/house.png";
import dots from "../../assets/img/dots.png";
import pink from "../../assets/img/pink.png";
import emzor from "../../assets/img/emzor.png";
import health from "../../assets/img/health.png";
import icon from "../../assets/img/images/Icon.png";

import { Table } from "react-bootstrap";
import BarChart from "../../components/layout/BarChart";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const orders = [
    {
      company: "C1k567891078",
      date: "21 July",
      product: "Lotam",
      qty: 200,
      price: "₦14,000",
      status: "Approved",
      statusClass: "success",
    },
    {
      company: "C1k567891078",
      date: "21 July",
      product: "Lotam",
      qty: 200,
      price: "₦14,000",
      status: "Approved",
      statusClass: "success",
    },
    {
      company: "C1k567891078",
      date: "21 July",
      product: "Lotam",
      qty: 200,
      price: "₦14,000",
      status: "Pending",
      statusClass: "warning",
    },
    {
      company: "C1k567891078",
      date: "21 July",
      product: "Lotam",
      qty: 200,
      price: "₦14,000",
      status: "Approved",
      statusClass: "success",
    },
    {
      company: "C1k567891078",
      date: "21 July",
      product: "Lotam",
      qty: 200,
      price: "₦14,000",
      status: "Approved",
      statusClass: "success",
    },
  ];

  const partners = [
    {
      number: "20,000",
      details: "View Details",
    },
    {
      number: "20,000",
      details: "View Details",
    },
    {
      number: "20,000",
      details: "View Details",
    },
    {
      number: "20,000",
      details: "View Details",
    },
    {
      number: "20,000",
      details: "View Details",
    },
    {
      number: "20,000",
      details: "View Details",
    },
  ];

  return (
    <div>
      <div class="container-fluid py-4">
        <div class="row">
          <div className="d-flex justify-content-end mb-4">
            <Link to="/settings">
              <button className="bg-[#f28f1e] text-white px-7 rounded-xl py-2 flex space-x-5 items-center">
                <div className="rounded-full bg-[#f5a445] p-3 ">
                  <img src={icon} alt="" />
                </div>
                <span> Complete your KYC</span>
              </button>
            </Link>
          </div>
          <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
            <div class="card">
              <div class="card-body p-3">
                <div class="row">
                  <div class="col-8">
                    <div class="numbers">
                      <p class="text-sm mb-0 text-uppercase font-weight-bold">
                        Today's Order
                      </p>
                      <h5 class="font-weight-bolder">N53,000</h5>
                    </div>
                  </div>
                  <div class="col-4 text-end">
                    <div class="icon icon-shape bg-gradient-primary shadow-primary text-center rounded-circle">
                      <i
                        class="ni ni-money-coins text-lg opacity-10"
                        aria-hidden="true"
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
            <div class="card">
              <div class="card-body p-3">
                <div class="row">
                  <div class="col-8">
                    <div class="numbers">
                      <p class="text-sm mb-0 text-uppercase font-weight-bold">
                        Today's Users
                      </p>
                      <h5 class="font-weight-bolder">2,300</h5>
                    </div>
                  </div>
                  <div class="col-4 text-end">
                    <div class="icon icon-shape bg-gradient-danger shadow-danger text-center rounded-circle">
                      <i
                        class="ni ni-world text-lg opacity-10"
                        aria-hidden="true"
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
            <div class="card">
              <div class="card-body p-3">
                <div class="row">
                  <div class="col-8">
                    <div class="numbers">
                      <p class="text-sm mb-0 text-uppercase font-weight-bold">
                        Partners
                      </p>
                      <h5 class="font-weight-bolder">+3,462</h5>
                    </div>
                  </div>
                  <div class="col-4 text-end">
                    <div class="icon icon-shape bg-gradient-success shadow-success text-center rounded-circle">
                      <i
                        class="ni ni-paper-diploma text-lg opacity-10"
                        aria-hidden="true"
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6">
            <div class="card">
              <div class="card-body p-3">
                <div class="row">
                  <div class="col-8">
                    <div class="numbers">
                      <p class="text-sm mb-0 text-uppercase font-weight-bold">
                        Sales
                      </p>
                      <h5 class="font-weight-bolder">$103,430</h5>
                    </div>
                  </div>
                  <div class="col-4 text-end">
                    <div class="icon icon-shape bg-gradient-warning shadow-warning text-center rounded-circle">
                      <i
                        class="ni ni-cart text-lg opacity-10"
                        aria-hidden="true"
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-lg-12 mb-lg-0 mb-4">
            <div class="card z-index-2 h-100 ">
              <div class="card-body p-3">
                <BarChart />
              </div>
            </div>
          </div>
        </div>
        <div class=" mt-4">
          <div class="mb-lg-0 mb-4">
            <div class="card ">
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
                            src={house}
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
                          <img src={dots} alt="" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
              <div className="flex justify-end items-center py-2">
                <button className="text-gray-500 hover:text-gray-700">
                  Previous
                </button>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((page) => (
                    <button key={page} className="px-3 py-1 border rounded">
                      {page}
                    </button>
                  ))}
                </div>
                <button className="text-gray-500 hover:text-gray-700">
                  Next
                </button>
              </div>
            </div>

            <div className="card mt-4">
              <div className="flex space-x-28 p-5 gx-5">
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
                              src={pink}
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
                                src={emzor}
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
                        <button className="text-gray-500 hover:text-gray-700">
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
                        <button className="text-gray-500 hover:text-gray-700">
                          Next
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-5  ">
                  <div className=" mt-7">
                    <img src={health} alt="" />
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
