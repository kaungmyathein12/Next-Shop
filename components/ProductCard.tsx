import Image from "next/image";
import React from "react";

const ProductCard = (props: any) => {
  console.log(props.item);
  return (
    <div
      className={`bg-white px-5 py-4 flex flex-row rounded-xl overflow-hidden cursor-pointer ${
        props.selected && "opacity-50"
      }`}
      onClick={() => props.addToCart(props.item)}
    >
      <div className="grow flex flex-col justify-between">
        <div>
          <h1 className="font-semibold tracking-wide">{props.item.name}</h1>
          <span className="text-xs opacity-40">
            {props.item.category.label}
          </span>
        </div>
        <div className="flex flex-row justify-start items-center space-x-4">
          <h1 className="font-semibold text-green-500">$ {props.item.price}</h1>
          {props.item.discount ? (
            <div className="text-[10px] bg-green-500 text-white px-2 py-1 rounded-full font-medium tracking-wide">
              {props.item.discount} % discount
            </div>
          ) : null}
        </div>
      </div>
      <Image
        width={80}
        height={70}
        src={props.item.image}
        alt=""
        className="border rounded-xl flex-shrink-0"
      />
    </div>
  );
};

export default ProductCard;
