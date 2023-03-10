import React, { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Ripples from "react-ripples";
import Link from "next/link";

const NavBar = () => {
  const { data: session } = useSession();
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <nav className="fixed w-full bg-white flex flex-row justify-between items-center border-b px-8 py-[10px] space-x-4 flex-shrink-0 z-[20]">
      <h3 className="text-xl font-semibold">NEXT Shop</h3>
      <div className="grow flex flex-row justify-end items-center space-x-5 uppercase pr-[84px]">
        <Link href={"/admin"}>
          <span className="text-[14px] font-medium">Home</span>
        </Link>
        <Link href={"/admin/employee"}>
          <span className="text-[14px] font-medium">Employee Account</span>
        </Link>
        <Link href={"/admin/newproduct"}>
          <span className="text-[14px] font-medium">Add New Product</span>
        </Link>
      </div>
      <div
        className="relative cursor-pointer flex flex-row justify-start items-start space-x-2"
        onBlur={() =>
          setTimeout(() => {
            setShowMenu(false);
          }, 300)
        }
        tabIndex={0}
      >
        <Image
          src={(session?.user?.image as string) || ""}
          alt={"user profile"}
          width={30}
          height={30}
          onClick={() => setShowMenu(!showMenu)}
          className="rounded-full"
        />
        <div>
          <h4 className="text-sm font-semibold -mb-[8px] -mt-[2px]">
            {session?.user?.name}
          </h4>
          <span className="text-[10px]">{session?.user?.email}</span>
        </div>
        {showMenu && (
          <div className="absolute top-[120%] w-[77.5px] -left-2 border">
            <Ripples>
              <button
                className="text-sm bg-[#fafafa] px-3 py-1 "
                onClick={() => signOut()}
              >
                Log Out
              </button>
            </Ripples>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
