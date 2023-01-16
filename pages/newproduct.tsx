import React from "react";
import Select from "react-select";
import ImagePicker from "../components/ImagePicker";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const Newproduct = () => {
  return (
    <>
      <div className="h-screen w-[500px] mx-auto">
        <div className="pt-[100px]">
          <label className="text-sm">Product Name</label>
          <input
            type="text"
            className="w-full border py-2 px-3 outline-none mt-2 rounded-md"
          />
        </div>
        <div className=" mt-6">
          <div>
            <label className="text-sm"> Categories</label>
            <Select
              options={options}
              isMulti
              className="mt-2 outline-none"
              classNamePrefix="select"
            />
          </div>
        </div>
        <div className="mt-6">
          <label className="text-sm">Preview Image</label>
          <ImagePicker />
        </div>
        <div className="grid grid-cols-2 gap-x-4 mt-6">
          <div>
            <label className="text-sm">Price</label>
            <div className="flex flex-row justify-start items-stretch border mt-2 rounded-md overflow-hidden">
              <input
                type="number"
                defaultValue={0}
                className="w-full py-2 px-3 outline-none grow"
              />
              <div className="text-[12px] bg-black text-white px-2 grid place-items-center font-bold tracking-wider">
                MMK
              </div>
            </div>
          </div>
          <div>
            <label className="text-sm">Discount Price</label>
            <div className="flex flex-row justify-start items-stretch border mt-2 rounded-md overflow-hidden">
              <input
                type="number"
                defaultValue={0}
                className="w-full py-2 px-3 outline-none grow"
              />
              <div className="text-[12px] bg-black text-white px-4 grid place-items-center font-bold tracking-wider">
                %
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 bg-black text-white text-[14px] text-center py-3 rounded-md">
          Add Product
        </div>
      </div>
    </>
  );
};

export default Newproduct;
