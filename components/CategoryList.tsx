import React from "react";
import APIGet from "../hooks/APIGet";

const CategoryList = () => {
  const { categoryQuery } = APIGet();
  return (
    <div className="pt-[80px] sticky top-0  z-[10]">
      <h4 className="text-[18px] font-medium">Categories</h4>
      <div className="mt-5 pb-[30px]">
        <div className="flex flex-row justify-start items-center space-x-4 w-[100%] overflow-auto scrollbar-hide pr-6">
          <div className="bg-green-500 text-white text-sm min-w-[80px] px-4 py-[6px] grid place-items-center rounded-full font-medium">
            All Menu
          </div>
          {categoryQuery.isSuccess &&
            categoryQuery.data.length > 0 &&
            categoryQuery.data.map((item: any, index: React.Key) => (
              <div
                key={index}
                className="bg-white text-black text-sm min-w-[80px] px-4 py-[6px] rounded-full flex flex-row justify-start items-center space-x-4 font-medium"
              >
                {item.label}{" "}
                <div className="text-xs ml-2">{`(${item.products.length} items)`}</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
