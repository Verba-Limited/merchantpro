import React from "react";
import { useParams } from "react-router-dom";
import AddProduct from "../layout/AddProduct";

export default function SubPages() {
  const { details } = useParams();

  switch (details) {
    case "addProduct":
      return <AddProduct />;

    default:
      return <h1>404 Page Not Matched</h1>;
  }
}
