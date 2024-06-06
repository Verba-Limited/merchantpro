import React from "react";
import { headers } from "../../data";

export default function OrderTable({ data }) {
  return (
    <>
      <div className="overflow-x-auto border-none">
        <table className="">
          <thead>
            <tr>
              {headers.map((header) => (
                <th key={header} className="py-2 px-5 text-left">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="border px-5 py-3 ">
                <td className="flex items-center">
                  <img
                    src={row.avatar}
                    alt="avatar"
                    className=" rounded-full mr-2"
                    width={31}
                    height={31}
                  />
                  <span>{row.distributor}</span>
                </td>
                <td className=" px-5 py-3 whitespace-nowrap">{row.date}</td>
                <td className=" px-5 py-3">{row.product}</td>
                <td className=" px-5 py-3">{row.qty}</td>
                <td className=" px-5 py-3">{row.prize}</td>
                <td className=" px-5 py-3">{row.status}</td>
                <td className=" px-5 py-3">
                  <img src={row.Action} alt="action" width={64} height={31} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
