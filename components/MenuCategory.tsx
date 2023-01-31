import React from "react";
import ProductCard from "./ProductCard";
import APIGet from "../hooks/APIGet";

interface MenuCategoryProps {
  selectedCart: any;
  addToCart: (item: any) => void;
}
const MenuCategory: React.FC<MenuCategoryProps> = ({
  selectedCart,
  addToCart,
}) => {
  const { productQuery } = APIGet();
  return (
    <div className="mt-[20px] pb-[40px]">
      <h4 className="text-[18px] font-medium">Menu Category</h4>
      <div className="mt-8 mr-6 grid grid-cols-3 gap-5">
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
  );
};

export default MenuCategory;
