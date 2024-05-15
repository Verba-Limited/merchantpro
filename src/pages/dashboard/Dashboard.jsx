import React, { useState, useEffect } from "react";
import house from "../../assets/img/house.png";
import dots from "../../assets/img/dots.png";
import pink from "../../assets/img/pink.png";
import emzor from "../../assets/img/emzor.png";
import bg from "../../assets/img/Mask.png";
import health from "../../assets/img/health.png";
// import "bootstrap/dist/css/bootstrap.css";

import { Table, Pagination } from "react-bootstrap";
import BarChart from "../../components/layout/BarChart";

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

  const myStyle = {
    backgroundImage: `url(${bg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "200px",
    position: "relative",
  };
  return (
    <div>
      <div class="container-fluid py-4">
        <div class="row">
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
                      {/* <p class="mb-0">
                        <span class="text-success text-sm font-weight-bolder">
                          +55%
                        </span>
                        since yesterday
                      </p> */}
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
                      {/* <p class="mb-0">
                        <span class="text-success text-sm font-weight-bolder">
                          +3%
                        </span>
                        since last week
                      </p> */}
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
                      {/* <p class="mb-0">
                        <span class="text-danger text-sm font-weight-bolder">
                          -2%
                        </span>
                        since last quarter
                      </p> */}
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
                      {/* <p class="mb-0">
                        <span class="text-success text-sm font-weight-bolder">
                          +5%
                        </span>{" "}
                        than last month
                      </p> */}
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
                          {/* <Dropdown as={ButtonGroup}>
                              <Dropdown.Toggle
                                split
                                variant="secondary"
                                id="dropdown-split-basic"
                              />
                              <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">
                                  Action
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-2">
                                  Another action
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-3">
                                  Something else
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown> */}
                          <img src={dots} alt="" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
              <div className="d-flex justify-content-end">
                <Pagination>
                  <Pagination.First />
                  <Pagination.Prev />
                  <Pagination.Item active>{1}</Pagination.Item>
                  <Pagination.Item>{2}</Pagination.Item>
                  <Pagination.Item>{3}</Pagination.Item>
                  <Pagination.Item>{4}</Pagination.Item>
                  <Pagination.Item>{5}</Pagination.Item>
                  <Pagination.Next />
                  <Pagination.Last />
                </Pagination>
              </div>
            </div>

            <div className="card mt-4">
              <div className="row p-5 gx-5">
                <div className="col-lg-5 ">
                  <div>
                    <h1 className="fs-3 fw-normal text-black">Top Partner</h1>
                  </div>

                  {/* <div className="input-group">
                    <input
                      className="form-control border-end-0 border rounded-pill"
                      type="text"
                      value="search"
                      id="example-search-input"
                    />
                    <span className="input-group-append">
                      <button
                        className="btn btn-outline-secondary bg-white border-start-0 border rounded-pill ms-n3"
                        type="button"
                      >
                        <i className="fa fa-search"></i>
                      </button>
                    </span>
                  </div> */}

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
                      <Pagination>
                        <Pagination.First />
                        <Pagination.Prev />
                        <Pagination.Item active>{1}</Pagination.Item>
                        <Pagination.Item>{2}</Pagination.Item>
                        <Pagination.Item>{3}</Pagination.Item>
                        <Pagination.Next />
                        <Pagination.Last />
                      </Pagination>
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
                  <a
                    href="#"
                    class="font-weight-bold"
                    target="_blank"
                    rel="noreferrer"
                  >
                    #####
                  </a>
                </div>
              </div>
              {/* <div class="col-lg-6">
                    <ul class="nav nav-footer justify-content-center justify-content-lg-end">
                      <li class="nav-item">
                        <a href="https://www.creative-tim.com" class="nav-link text-muted" target="_blank" rel="noreferrer">Creative Tim</a>
                      </li>
                      <li class="nav-item">
                        <a href="https://www.creative-tim.com/presentation" class="nav-link text-muted" target="_blank" rel="noreferrer">About Us</a>
                      </li>
                      <li class="nav-item">
                        <a href="https://www.creative-tim.com/blog" class="nav-link text-muted" target="_blank" rel="noreferrer">Blog</a>
                      </li>
                      <li class="nav-item">
                        <a href="https://www.creative-tim.com/license" class="nav-link pe-0 text-muted" target="_blank" rel="noreferrer">License</a>
                      </li>
                    </ul>
                  </div> */}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
