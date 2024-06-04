import React from "react";

export default function Pagination() {
  return (
    <div>
      <div className="flex justify-end items-center py-2">
        <button className="text-gray-500 hover:text-gray-700 hidden md:flex">
          Previous
        </button>
        <div className="flex space-x-1">
          {[1, 2, 3, 4, 5].map((page) => (
            <button key={page} className="px-3 py-1 border rounded">
              {page}
            </button>
          ))}
        </div>
        <button className="text-gray-500 hover:text-gray-700 hidden md:flex">
          Next
        </button>
      </div>
    </div>
  );
}
