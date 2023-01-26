import { getProviders, getSession, signIn, useSession } from "next-auth/react";
import React, { useState } from "react";

export default function SignIn({ providers }: any) {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });

  return (
    <div className="h-screen w-screen flex justify-center pt-20">
      <div className="w-[250px]">
        <h3 className="text-xl font-medium text-center">Next Shop</h3>
        <div className="mt-4">
          <label className=" opacity-50 text-sm">Email</label>
          <input
            type="email"
            value={userInfo.email}
            onChange={(e: any) => {
              setUserInfo({ ...userInfo, email: e.target.value });
            }}
            className="border outline-none w-full px-3 py-[8px] rounded-md text-[14px]"
          />
        </div>
        <div className="mt-3">
          <label className=" opacity-50 text-sm">Password</label>
          <input
            type="password"
            value={userInfo.password}
            onChange={(e: any) => {
              setUserInfo({ ...userInfo, password: e.target.value });
            }}
            className="border outline-none w-full px-3 py-[8px] rounded-md text-[14px]"
          />
        </div>
        <div className="mt-4">
          {Object.values(providers).map((provider: any) => (
            <button
              key={provider.name}
              onClick={() => {
                if (provider.name.toLowerCase() === "credentials") {
                  signIn(provider.id, {
                    email: userInfo.email,
                    password: userInfo.password,
                    redirect: true,
                  });
                } else {
                  signIn(provider.id);
                }
              }}
              className={`text-center ${
                provider.name.toLowerCase() === "credentials" &&
                "bg-green-500 text-white hover:bg-green-600"
              }
              ${
                provider.name.toLowerCase() === "github" &&
                "bg-black text-white"
              } transition-all w-full  py-[7px] rounded-md mt-2 text-[15px] flex flex-row justify-center items-center gap-x-2`}
            >
              {provider.name.toLowerCase() === "credentials" && <>Sign In</>}
              {provider.name.toLowerCase() === "github" && (
                <>
                  <i className="ri-github-fill text-[16px]"></i>
                  or using {provider.name}
                </>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

SignIn.getLayout = function PageLayout(page: any) {
  return <>{page}</>;
};

export async function getServerSideProps(context: any) {
  const providers = await getProviders();
  const session = await getSession(context);
  if (session) {
    return {
      redirect: {
        destination: "/admin/",
        permanent: false,
      },
    };
  }
  return {
    props: { providers },
  };
}
