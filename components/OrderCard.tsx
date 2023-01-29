import Image from "next/image";
import React, { useState } from "react";
import TrashIcon from "../assets/Icons/TrashIcon";

const OrderCard = (props: any) => {
  const [currentAmount, setCurrentAmount] = useState(props.item.price);
  const [count, setCount] = useState(1);

  const addItem = () => {
    setCurrentAmount((prev: any) => prev + props.item.price);
    setCount((prev: any) => prev + 1);
    let item = {
      ...props.item,
      totalAmount: currentAmount + props.item.price,
    };
    const getIndexOf = props.selectedCart.cart.findIndex(
      (i: any) => i.id === item.id
    );
    props.selectedCart.cart[getIndexOf] = item;
    props.setSelectedCart(props.selectedCart);
  };

  const removeItem = () => {
    if (currentAmount > props.item.price) {
      setCurrentAmount((prev: any) => prev - props.item.price);
      setCount((prev: any) => prev - 1);
    }
  };

  return (
    <div>
      <div className="px-3 py-2 bg-white rounded flex flex-row justify-between items-center space-x-4">
        <div className="flex flex-row justify-start items-start space-x-2">
          <Image src={props.item.image} width={40} height={40} alt="" />
          <div>
            <h1 className="font-medium text-sm -mb-1">
              {props.item.name.slice(0, 8)}
              {props.item.name.length > 8 ? "..." : ""}
            </h1>
            <span className="text-[10px] opacity-50">
              {props.item.category.label}
            </span>
          </div>
        </div>
        <div className="w-[55%] flex flex-row justify-start items-center space-x-2">
          <div className="grow flex flex-row justify-between items-center space-x-2">
            <div
              className="bg-green-500 text-white px-[7.5px] rounded-lg cursor-pointer"
              onClick={removeItem}
            >
              -
            </div>
            <div className="text-xs font-medium">{count}</div>
            <div
              className="bg-green-500 text-white px-[7px] rounded-lg cursor-pointer"
              onClick={addItem}
            >
              +
            </div>
          </div>
          <div className="w-[60px] grid place-items-center text-sm flex-shrink-0">
            $ {currentAmount ? currentAmount : props.item.price}
          </div>
          <TrashIcon
            className="w-[18px] stroke-2 opacity-40 hover:opacity-100 hover:text-red-500"
            onClick={() => {
              props.removeFromCart(props.item);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
