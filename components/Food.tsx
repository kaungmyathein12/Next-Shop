import React from "react";
import Image from "next/image";

const Food = ({ categories }: any) => {
  return (
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
                {categories.length} Items
              </span>
            </div>
          </div>
          {categories.map((item: any, key: React.Key) => (
            <div
              key={key}
              className="w-[100px] h-[100px] border flex-shrink-0 rounded"
            >
              <div className="w-[100%] h-[60px] relative grid place-items-center">
                <Image src={item.img} width={40} height={50} alt={item.name} />
              </div>
              <div className="text-center h-[20px] text-xs ">
                <p className="text-[10px]">{item.name}</p>
                <span className="opacity-50">{item.count} Items</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Food;
