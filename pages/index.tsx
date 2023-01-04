import { getSession, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import Ripples from "react-ripples";

export default function Home() {
  const { data: session } = useSession();
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <div>
      <div className="w-[900px] mx-auto mt-16">
        <nav className="px-4 flex flex-row justify-between items-start">
          <h3 className="text-xl font-semibold">NEXT Shop</h3>
          <div
            className="w-[30px] h-[30px] relative cursor-pointer"
            onBlur={() =>
              setTimeout(() => {
                setShowMenu(false);
              }, 300)
            }
            tabIndex={0}
          >
            <Image
              src={session?.user?.image as string}
              alt={session?.user?.name as string}
              width={30}
              height={30}
              onClick={() => setShowMenu(!showMenu)}
              className="rounded-md"
            />
            {showMenu && (
              <div className="absolute top-[120%] w-[77.5px] right-0 border">
                <Ripples>
                  <button
                    className="text-sm bg-[#ededed] px-3 py-1 rounded-md"
                    onClick={() => signOut()}
                  >
                    Log Out
                  </button>
                </Ripples>
              </div>
            )}
          </div>
        </nav>
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
