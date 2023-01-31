import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import OrderCard from "../../components/OrderCard";
import APIGet from "../../hooks/APIGet";
import ChargeCustomer from "../../components/ChargeCustomer";
import CategoryList from "../../components/CategoryList";
import MenuCategory from "../../components/MenuCategory";

export default function Home(props: any) {
  // State
  const [selectedCart, setSelectedCart] = useState<any>({
    count: 0,
    cart: [],
  });
  const [openVoucher, setOpenVoucher] = useState<boolean>(false);
  const [totalAmount, setTotalAmount] = useState(0);

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
        if (b.totalAmount) {
          return a + b.totalAmount;
        } else {
          return a + b.price;
        }
      }, initalValue);

      setTotalAmount(total);
      setOpenVoucher(true);
    }
  };

  // Side Effects for resetting the total amount
  useEffect(() => {
    if (!openVoucher) {
      setSelectedCart({
        count: 0,
        cart: [],
      });
      setTotalAmount(0);
    }
  }, [openVoucher]);

  return (
    <div className="relative">
      {/* Modal Box for Total */}
      {openVoucher && (
        <ChargeCustomer
          totalAmount={totalAmount}
          onClose={setOpenVoucher}
          selectedCart={selectedCart}
        />
      )}
      <div className="mx-auto flex flex-row justify-start items-start flex-shrink-0 font-poppins bg-[#EFF3F6]">
        {/* Menu */}
        <div className="border-r w-[72%] flex-shrink-0 h-screen pl-8">
          <CategoryList />
          <MenuCategory selectedCart={selectedCart} addToCart={addToCart} />
        </div>
        {/* Current Order */}
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
                className="text-center w-full text-sm bg-green-500 hover:bg-green-600 text-white py-3  rounded-xl"
                onClick={checkTotal}
              >
                Calculate Total Amount
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
