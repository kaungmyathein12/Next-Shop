import React from "react";
import { getSession } from "next-auth/react";
import riceroll from "../assets/img/riceroll.png";
import sushi from "../assets/img/sushi.png";

import Image from "next/image";

const categories = [
  {
    name: "Rice Roll",
    img: riceroll,
    count: 10,
  },
  {
    name: "Sushi",
    img: sushi,
    count: 18,
  },
  {
    name: "Rice Roll",
    img: riceroll,
    count: 10,
  },
  {
    name: "Sushi",
    img: sushi,
    count: 18,
  },
  {
    name: "Rice Roll",
    img: riceroll,
    count: 10,
  },
  {
    name: "Sushi",
    img: sushi,
    count: 18,
  },
  {
    name: "Rice Roll",
    img: riceroll,
    count: 10,
  },
  {
    name: "Sushi",
    img: sushi,
    count: 18,
  },
  {
    name: "Rice Roll",
    img: riceroll,
    count: 10,
  },
  {
    name: "Sushi",
    img: sushi,
    count: 18,
  },
];

export default function Home() {
  return (
    <div className="mx-auto flex flex-row justify-start items-start flex-shrink-0 font-poppins">
      <div className="border-r w-[78%] flex-shrink-0 h-screen pl-8">
        <div className="mt-[80px]">
          <h4 className="text-[18px] font-medium">Categories</h4>
          <div className="mt-5">
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
              {categories.map((item, key: React.Key) => (
                <div
                  key={key}
                  className="w-[100px] h-[100px] border flex-shrink-0 rounded"
                >
                  <div className="w-[100%] h-[60px] relative grid place-items-center">
                    <Image
                      src={item.img}
                      width={40}
                      height={50}
                      alt={item.name}
                    />
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
        <div className="mt-[50px]">
          <h4 className="text-[18px] font-medium">Special menu for you</h4>
        </div>
      </div>
      <div className="grow flex-shrink-0 px-4"></div>
    </div>
  );
}
export async function getServerSideProps(context: any) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/auth/signin",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}
