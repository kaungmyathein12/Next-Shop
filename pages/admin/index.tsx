import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import ProductCard from "../../components/ProductCard";
import OrderCard from "../../components/OrderCard";
import APIGet from "../../hooks/APIGet";

export default function Home(props: any) {
  // State
  const [selectedCart, setSelectedCart] = useState<any>({
    count: 0,
    cart: [],
  });
  const [totalAmount, setTotalAmount] = useState(0);

  // React Query Custom Hook
  const { categoryQuery, productQuery } = APIGet();

  // Function
  const addToCart = (item: any) => {
    const filtered = selectedCart.cart.filter((t: any) => t.id === item.id);
    if (filtered.length === 0) {
      setSelectedCart({
        count: selectedCart.count + item.price,
        cart: [...selectedCart.cart, item],
      });
    }
  };
  const removeFromCart = (item: any) => {
    let filtered = selectedCart.cart.filter((t: any) => t.id === item.id);
    if (filtered.length > 0) {
      filtered = selectedCart.cart.filter((t: any) => t.id !== item.id);
      setSelectedCart({
        count: selectedCart.count - item.price,
        cart: filtered,
      });
    }
  };
  const checkTotal = () => {
    if (selectedCart.cart.length > 0) {
      const initalValue = 0;
      const total = selectedCart.cart.reduce((a: any, b: any) => {
        return a + b.totalAmount;
      }, initalValue);
      setTotalAmount(total);
    }
  };
  return (
    <>
      <div className="mx-auto flex flex-row justify-start items-start flex-shrink-0 font-poppins bg-neutral-100">
        <div className="border-r w-[72%] flex-shrink-0 h-screen pl-8">
          <div className="pt-[80px] sticky top-0  z-[10]">
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
                      {props.category && props.category.length} Items
                    </span>
                  </div>
                </div>
                {categoryQuery.isSuccess &&
                  categoryQuery.data.length > 0 &&
                  categoryQuery.data.map((item: any, key: React.Key) => (
                    <div
                      key={key}
                      className="w-[100px] h-[100px] border flex-shrink-0 rounded bg-white"
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
            <h4 className="text-[18px] font-medium">Menu Category</h4>
            <div className="mt-8 mr-6 grid grid-cols-4 gap-5">
              {productQuery.isSuccess &&
                productQuery.data.length > 0 &&
                productQuery.data.map((item: any, index: any) => {
                  const isSelected = selectedCart.cart.find(
                    (val: any) => val.id === item.id
                  );
                  return (
                    <ProductCard
                      key={index}
                      item={item}
                      selected={isSelected ? true : false}
                      addToCart={addToCart}
                    />
                  );
                })}
            </div>
          </div>
        </div>

        <div className="grow flex-shrink-0 px-4  bg-white">
          <div className="pt-[80px] flex flex-col h-screen">
            <h4 className="text-[18px] font-medium mb-5">Current Order</h4>
            <div className="flex flex-col grow overflow-scroll space-y-2">
              {selectedCart &&
                selectedCart.cart.length > 0 &&
                selectedCart.cart.map((item: any, index: React.Key) => (
                  <OrderCard
                    key={index}
                    item={item}
                    removeFromCart={removeFromCart}
                    selectedCart={selectedCart}
                    setSelectedCart={setSelectedCart}
                  />
                ))}
            </div>
            <div className="my-5">
              <button
                className="text-center w-full text-sm bg-black text-white py-3  rounded-xl"
                onClick={checkTotal}
              >
                Calculate Total Amount
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
