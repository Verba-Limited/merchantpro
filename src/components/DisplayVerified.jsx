import React from "react";

export default function DisplayVerified({ isVerified }) {
  return (
    <div className="mt-4">
      {isVerified ? (
        <p className="text-green-600">Your BVN has been verified.</p>
      ) : (
        <p className="text-red-600">Your BVN has not been verified.</p>
      )}
    </div>
  );
}
