import { auth } from "@/app/lib/auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import { handleAuth } from "@/app/actions/handle-auth";
import { LogoutCurve } from "iconsax-reactjs";
export default async function Dashboard() {
  const session = await auth();

  if (!session) {
    return redirect("/login");
  }

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="font-bold text-7xl text-gray-900">
        Bem-vindo {session?.user?.name ? session?.user?.name : ""}
      </h1>
      <div className="flex items-center gap-2 h-fit bg-gray-200">
        <Image
          src={session?.user?.image ? session?.user?.image : ""}
          width={512}
          height={512}
          alt="picture-profile"
          className="w-10 h-10 rounded-full ring-2 ring-gray-400"
        />
        <p className="text-xl text-gray-500 font-medium">
          {session?.user?.email
            ? session?.user?.email
            : "Usuário não está logado!"}
        </p>
      </div>
      {session?.user?.email && (
        <form className="mt-10" action={handleAuth}>
          <button
            type="submit"
            className="group flex items-center gap-3 border border-red-500 font-medium text-red-500 text-lg p-2 rounded-md hover:bg-red-500 hover:text-gray-100 transition ease-in-out duration-300 cursor-pointer"
          >
            <LogoutCurve
              className="fill-red-500 group-hover:fill-gray-100"
              variant="Bold"
              size="24"
            />
            Sair
          </button>
        </form>
      )}
    </div>
  );
}
