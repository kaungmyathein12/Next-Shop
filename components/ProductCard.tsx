import Image from "next/image";
import React from "react";

const ProductCard = (props: any) => {
  return (
    // <div
    //   className={`px-5 py-3 rounded-2xl border ${
    //     props.selected && "bg-black text-white"
    //   } hover:bg-black hover:text-white group transition-all`}
    //   onClick={() => props.addToCart(props.item)}
    // >
    //   <h1 className="text-lg font-semibold -mb-1">{props.item.name}</h1>
    //   <span className="text-xs font-semibold opacity-40">Category</span>
    //   <div className="flex flex-row justify-between items-end">
    //     <div>
    //       <h5
    //         className={`font-semibold tracking-wide group-hover:text-white ${
    //           props.selected ? "text-white" : "text-black "
    //         }`}
    //       >
    //         $ {props.item.price}
    //       </h5>
    //     </div>

    //     <Image
    //       src={props.item.image}
    //       width={60}
    //       height={60}
    //       alt={props.item.name}
    //       className="border rounded overflow-hidden"
    //     />
    //   </div>
    // </div>
    <div
      className={`border overflow-hidden bg-white relative ${
        props.selected && "opacity-20"
      }`}
    >
      {props.item.discount ? (
        <div className="absolute text-[10px] bg-black text-white right-0 top-[4px] px-2 py-1 z-30 font-medium tracking-wide rounded-l">
          {props.item.discount}% Discount
        </div>
      ) : null}
      <div className="w-full relative overflow-hidden py-5 bg-neutral-10  bg-[#f0f0f0]">
        <Image
          src={props.item.image}
          alt={props.item.image}
          width={80}
          height={80}
          className="mx-auto"
        />
      </div>
      <div className="p-5">
        <h1 className="font-semibold text-black">{props.item.name}</h1>
        <span className="text-xs">$ {props.item.price}</span>
        <button
          disabled={props.selected}
          className="bg-black hover:bg-neutral-900 text-white font-semibold w-full mt-4 text-sm py-2 rounded"
          onClick={() => props.addToCart(props.item)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
