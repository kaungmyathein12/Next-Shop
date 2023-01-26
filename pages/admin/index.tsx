import React, { useState } from "react";
import Image from "next/image";
import prisma from "../../lib/prisma";
import { GetServerSideProps } from "next";
import ProductCard from "../../components/ProductCard";
import OrderCard from "../../components/OrderCard";
export default function Home(props: any) {
  const [selectedCart, setSelectedCart] = useState<any>([]);
  const addToCart = (item: any) => {
    const filtered = selectedCart.filter((t: any) => t.id === item.id);
    if (filtered.length === 0) {
      setSelectedCart([...selectedCart, item]);
    }
  };
  const removeFromCart = (item: any) => {
    let filtered = selectedCart.filter((t: any) => t.id === item.id);
    if (filtered.length > 0) {
      let filtered = selectedCart.filter((t: any) => t.id !== item.id);
      setSelectedCart(filtered);
    }
  };
  return (
    <>
      <div className="mx-auto flex flex-row justify-start items-start flex-shrink-0 font-poppins bg-white">
        <div className="border-r w-[72%] flex-shrink-0 h-screen pl-8">
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
            <div className="mt-8 mr-6 grid grid-cols-3 gap-5">
              {props.products.map((item: any, index: any) => (
                <ProductCard key={index} item={item} addToCart={addToCart} />
              ))}
            </div>
          </div>
        </div>
        <div className="grow flex-shrink-0 px-4  bg-white">
          <div className="pt-[80px] flex flex-col h-screen">
            <h4 className="text-[18px] font-medium mb-5">Current Order</h4>
            <div className="flex flex-col grow overflow-scroll space-y-2">
              {selectedCart &&
                selectedCart.length > 0 &&
                selectedCart.map((item: any, index: React.Key) => (
                  <OrderCard
                    key={index}
                    item={item}
                    removeFromCart={removeFromCart}
                  />
                ))}
            </div>
            <div className="my-5">
              <div className="flex flex-row justify-between items-center mb-5">
                <span className=" font-medium">Total</span>
                <span>0</span>
              </div>
              <button className="text-center w-full text-sm bg-black text-white py-3  rounded-xl">
                Charge Customer
              </button>
            </div>
          </div>
        </div>
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
