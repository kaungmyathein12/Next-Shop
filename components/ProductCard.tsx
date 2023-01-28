import Image from "next/image";
import React from "react";

const ProductCard = (props: any) => {
  return (
    <div
      className={`px-5 py-3 rounded-2xl border ${
        props.selected && "bg-black text-white"
      } hover:bg-black hover:text-white group transition-all`}
      onClick={() => props.addToCart(props.item)}
    >
      <h1 className="text-lg font-semibold -mb-1">{props.item.name}</h1>
      <span className="text-xs font-semibold opacity-40">Category</span>
      <div className="flex flex-row justify-between items-end">
        <div>
          <h5
            className={`font-semibold tracking-wide group-hover:text-white ${
              props.selected ? "text-white" : "text-black "
            }`}
          >
            $ {props.item.price}
          </h5>
        </div>

        <Image
          src={props.item.image}
          width={60}
          height={60}
          alt={props.item.name}
          className="border rounded overflow-hidden"
        />
      </div>
    </div>
  );
};

export default ProductCard;
