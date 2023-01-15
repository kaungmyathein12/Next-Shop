import React from "react";
import NavBar from "../components/NavBar";

const newproduct = () => {
  return (
    <>
      <NavBar />
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
            <label className="text-sm">Categories</label>
            <select
              name="categories"
              id=""
              className="w-full border py-2 px-3 outline-none mt-2 rounded-md block appearance-none"
            >
              <option value="sushi">Sushi</option>
              <option value="juice">Juice</option>
              <option value="snackfood">Snack Food</option>
              <option value="icecream">Ice Cream</option>
              <option value="instantnoodle">Instant Noodle</option>
            </select>
          </div>
        </div>
        <div className="mt-6">
          <label className="text-sm">Preview Image</label>
          <div className="mt-2 border h-[150px] rounded-md"></div>
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

export default newproduct;
