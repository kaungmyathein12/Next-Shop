import { getProviders, getSession, signIn, useSession } from "next-auth/react";
import React from "react";

export default function SignIn({ providers }: any) {
  const { data: session } = useSession();
  return (
    <div className="h-screen w-screen flex justify-center pt-20">
      <div className="w-[250px]">
        <h3 className="text-xl font-medium text-center">Next Shop</h3>
        <div className="mt-4">
          <label className=" opacity-50 text-sm">Email</label>
          <input
            type="email"
            className="border outline-none w-full px-3 py-[8px] rounded-md text-[14px]"
          />
        </div>
        <div className="mt-3">
          <label className=" opacity-50 text-sm">Password</label>
          <input
            type="password"
            className="border outline-none w-full px-3 py-[8px] rounded-md text-[14px]"
          />
        </div>
        <div className="mt-4">
          <button className="text-center bg-green-500 hover:bg-green-600 transition-all w-full text-white py-[7px] text-[15px] rounded-md">
            Sign In
          </button>
          {Object.values(providers).map((provider: any) => (
            <button
              key={provider.name}
              onClick={() => signIn(provider.id)}
              className="text-center bg-black transition-all w-full text-white py-[7px] rounded-md mt-2 text-[15px] flex flex-row justify-center items-center gap-x-2"
            >
              <i className="ri-github-fill text-[16px]"></i> or using{" "}
              {provider.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const providers = await getProviders();
  const session = await getSession(context);
  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: { providers },
  };
}
