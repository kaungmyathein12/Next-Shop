import Image from "next/image";
import React, { useState } from "react";

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
    <div className="border p-3 rounded-xl bg-white flex flex-row justify-start items-start space-x-3">
      <Image
        src={props.item.image}
        width={50}
        height={50}
        alt={"image"}
        className="mt-[6px]"
      />
      <div className="grow">
        <div className="flex flex-row justify-between items-center">
          <h4 className="font-medium">{props.item.name}</h4>
          <span
            className="text-[10px] opacity-50 cursor-pointer"
            onClick={() => {
              props.removeFromCart(props.item);
            }}
          >
            remove
          </span>
        </div>
        <div className="flex flex-row justify-between items-center mt-4">
          <div className="grid grid-cols-3 w-[35%] gap-x-2">
            <div
              className="bg-black text-white grid place-items-center rounded cursor-pointer select-none"
              onClick={removeItem}
            >
              -
            </div>
            <div className="grid place-items-center py-1">{count}</div>
            <div
              className="bg-black text-white grid place-items-center rounded  cursor-pointer select-none"
              onClick={addItem}
            >
              +
            </div>
          </div>
          <div className="font-semibold">
            $ {currentAmount ? currentAmount : props.item.price}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
