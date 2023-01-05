import { getSession } from "next-auth/react";

export default function Home() {
  return (
    <div className="mx-auto flex flex-row justify-start items-start flex-shrink-0">
      <div className="border-r w-[78%] flex-shrink-0 h-screen">
        
      </div>
      <div className="grow flex-shrink-0 px-4">
        <div className="flex flex-row justify-between items-center mt-[80px] ">
          <h4 className="text-lg font-medium">Order Details</h4>
          <i className="ri-more-2-fill"></i>
        </div>
        <div className="border-t flex flex-row justify-between items-center mt-4 pt-4">
          <h5 className=" font-medium">Total</h5>
          <span className=" font-bold">0 MMK</span>
        </div>
        <button className="mt-4 bg-green-500 w-full text-center text-white text-[14px] rounded py-2">
          Pay 0 MMK
        </button>
      </div>
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
