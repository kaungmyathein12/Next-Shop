import { getSession, signOut, useSession } from "next-auth/react";
import { useEffect } from "react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <div>
      <nav className="border px-4 py-[10px]">
        <h3 className="text-xl font-semibold">
          NEXT Shop {session?.user?.email}
        </h3>
        <button onClick={() => signOut()}>Sign Out</button>
      </nav>
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
