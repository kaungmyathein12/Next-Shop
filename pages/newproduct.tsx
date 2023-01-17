import React, { useState } from "react";
import Select from "react-select";
import ImagePicker from "../components/ImagePicker";
import { ErrorAlert, SuccessAlert } from "../components/Alert";
import { GetServerSideProps } from "next";
import prisma from "../lib/prisma";

const Newproduct = (props: any) => {
  const [alert, setAlert] = useState<string>("");
  const [data, setData] = useState({
    name: "",
    category: 0,
    price: 0,
    discount: 0,
  });

  const onSubmit = async () => {
    // const product = await prisma.product.create({
    //   data: {
    //     id: "030e",
    //     name: "hello",
    //     price: 0,
    //     discount: 0,
    //     categoryId: 1,
    //   },
    // });
  };
  return (
    <>
      <div className="h-screen w-[500px] mx-auto">
        <div className="pt-[100px]">
          {alert === "success" && <SuccessAlert />}
          {alert === "error" && <ErrorAlert />}
          <label className="text-sm">Product Name</label>
          <input
            type="text"
            value={data.name}
            className="w-full border py-2 px-3 outline-none mt-2 rounded-md"
            onChange={(e: any) => setData({ ...data, name: e.target.value })}
          />
        </div>
        {props.category && props.category.length > 0 && (
          <div className=" mt-6">
            <div>
              <label className="text-sm">Categories</label>
              <Select
                options={props.category}
                className="mt-2 outline-none"
                classNamePrefix="select"
              />
            </div>
          </div>
        )}
        <div className="mt-6">
          <label className="text-sm">Preview Image</label>
          <ImagePicker />
        </div>
        <div className="grid grid-cols-2 gap-x-4 mt-6">
          <div>
            <label className="text-sm">Price</label>
            <div className="flex flex-row justify-start items-stretch border mt-2 rounded-md overflow-hidden">
              <input
                type="text"
                className="w-full py-2 px-3 outline-none grow"
                value={data.price}
                onInput={(e: any) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, "");
                }}
                onChange={(e: any) =>
                  setData({ ...data, price: e.target.value })
                }
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
                type="text"
                defaultValue={0}
                className="w-full py-2 px-3 outline-none grow"
                value={data.discount}
                onInput={(e: any) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, "");
                }}
                onChange={(e: any) =>
                  setData({ ...data, discount: e.target.value })
                }
              />
              <div className="text-[12px] bg-black text-white px-4 grid place-items-center font-bold tracking-wider">
                %
              </div>
            </div>
          </div>
        </div>
        <button
          className="mt-6 bg-black text-white text-[14px] text-center py-3 rounded-md block w-full"
          onClick={() => {}}
        >
          Add Product
        </button>
      </div>
    </>
  );
};

export default Newproduct;

export const getServerSideProps: GetServerSideProps = async (params: any) => {
  const category = await prisma.category.findMany();
  return {
    props: {
      category,
    },
  };
};
