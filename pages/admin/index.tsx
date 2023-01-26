import React from "react";
import food0 from "../../assets/img/food0.jpeg";
import Image from "next/image";
import prisma from "../../lib/prisma";
import { GetServerSideProps } from "next";
export default function Home(props: any) {
  return (
    <>
      <div className="mx-auto flex flex-row justify-start items-start flex-shrink-0 font-poppins">
        <div className="border-r w-[78%] flex-shrink-0 h-screen pl-8">
          <div className="pt-[80px] sticky top-0  bg-white z-[10]">
            <h4 className="text-[18px] font-medium">Categories</h4>
            <div className="mt-5 pb-[30px]">
              <div className="flex flex-row justify-start items-center space-x-4 w-[100%] overflow-auto scrollbar-hide pr-6">
                <div className="w-[100px] h-[100px] bg-black flex-shrink-0 rounded">
                  <div className="w-[100%] h-[60%] grid place-items-center">
                    <i className="ri-store-line text-white text-2xl"></i>
                  </div>
                  <div className="text-center h-[20px] text-xs ">
                    <p className="text-[10px] text-white">All</p>
                    <span className="opacity-50 text-white">
                      {props.category.length} Items
                    </span>
                  </div>
                </div>
                {props.category.map((item: any, key: React.Key) => (
                  <div
                    key={key}
                    className="w-[100px] h-[100px] border flex-shrink-0 rounded"
                  >
                    <div className="w-[100%] h-[60px] relative grid place-items-center">
                      <Image
                        src={
                          item.img ||
                          "https://cdn.britannica.com/98/235798-050-3C3BA15D/Hamburger-and-french-fries-paper-box.jpg"
                        }
                        width={40}
                        height={50}
                        alt={item.name}
                      />
                    </div>
                    <div className="text-center h-[20px] text-xs ">
                      <p className="text-[10px]">{item.label}</p>
                      <span className="opacity-50">
                        {item.products.length} Items
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-[20px] pb-[40px]">
            <h4 className="text-[18px] font-medium">Special menu for you</h4>
            <div className="mt-8 mr-6 grid grid-cols-4 gap-8">
              {props.products.map((item: any, index: any) => (
                <div
                  key={index}
                  className="border rounded-lg overflow-hidden relative"
                >
                  <div className="text-white bg-black px-3 py-1 rounded-full grid place-items-center absolute right-2 top-2">
                    <span className="text-xs font-semibold">
                      {item?.discount} %
                    </span>
                  </div>
                  <Image
                    src={item.image}
                    width={100}
                    height={100}
                    alt={item.name}
                    className="mt-5 mb-2"
                  />
                  <div className=" bg-black text-white border-t p-5">
                    <h4 className="font-semibold tracking-wide mb-1">
                      {item.name}
                    </h4>
                    <div className="flex flex-row justify-between item-center mt-2">
                      <span className="text-sm">${item.price}</span>
                      <button className="text-sm bg-white text-black font-semibold px-3 py-1 rounded hover:bg-gray-200 active:bg-gray-400">
                        Add Item
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grow flex-shrink-0 px-4"></div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (params: any) => {
  const category = await prisma.category.findMany({
    include: {
      products: true,
    },
  });
  const products = await prisma.product.findMany({
    include: {
      category: true,
    },
  });
  return {
    props: {
      category,
      products,
    },
  };
};
