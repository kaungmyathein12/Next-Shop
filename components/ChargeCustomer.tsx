import React, { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface ChargeCustomerProps {
  onClose: Dispatch<SetStateAction<boolean>>;
  selectedCart: any;
  totalAmount: Number;
}
const ChargeCustomer: React.FC<ChargeCustomerProps> = ({
  onClose,
  selectedCart,
  totalAmount,
}: any) => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed inset-0 bg-black z-50 bg-opacity-50"
        onClick={() => {
          onClose(false);
        }}
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed w-[500px] bg-white z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-xl px-5 py-6"
      >
        <h4 className="text-lg font-semibold mb-6">Total Amount</h4>
        <div>
          {selectedCart &&
            selectedCart.cart.length > 0 &&
            selectedCart.cart.map((item: any, index: React.Key) => (
              <div
                key={index}
                className="flex flex-row justify-between items-start mb-4"
              >
                <div className="flex flex-row justify-start items-start space-x-2">
                  <Image src={item.image} width={40} height={40} alt="" />
                  <div>
                    <h3 className="-mb-2 font-medium tracking-wide">
                      {item.name}
                    </h3>
                    <span className="text-[10px] opacity-40 font-medium">
                      {item.category.label}
                    </span>
                  </div>
                </div>
                <div className="text-sm">
                  $ {item.totalAmount || item.price}
                </div>
              </div>
            ))}
        </div>
        <div className="w-full text-center text-4xl font-medium text-green-500 my-6 grid place-items-center">
          <div className="py-4 px-4 rounded-full">${totalAmount}</div>
        </div>
        <div className="text-center mb-2">
          <button
            className="d-inline bg-green-500 hover:bg-green-600 active:bg-green-700 px-3 py-2 rounded text-white font-medium"
            onClick={() => onClose(false)}
          >
            Charge Customer
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ChargeCustomer;
