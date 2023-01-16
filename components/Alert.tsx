import Link from "next/link";
import React from "react";

export const SuccessAlert = () => {
  return (
    <div className="my-3 text-[13px] bg-green-50 text-center py-[12px] rounded-md">
      Product Added Successfully,{" "}
      <span className="text-blue-500 font-medium">
        <Link href={"/"}>Back to homepage</Link>
      </span>
    </div>
  );
};
export const ErrorAlert = () => {
  return (
    <div className="my-3 text-[13px] bg-red-50 text-center py-[12px] rounded-md">
      Product Added Failed,{" "}
      <span className="text-red-500 font-medium">
        <Link href={"/newproduct"}>Please Try Again</Link>
      </span>
    </div>
  );
};
