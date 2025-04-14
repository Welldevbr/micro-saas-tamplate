import { handleAuth } from "@/app/actions/handle-auth";
import { Google } from "iconsax-reactjs";

export default function Login() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="font-bold text-7xl text-gray-900">Login</h1>
      <form action={handleAuth}>
        <button
          type="submit"
          className="group flex items-center gap-3 border border-indigo-500 font-medium text-indigo-500 text-lg px-4 py-2 rounded-md hover:bg-indigo-500 hover:text-gray-100 transition ease-in-out duration-300 cursor-pointer"
        >
          <Google
            size="24"
            className="fill-indigo-500 group-hover:fill-gray-100"
            variant="Bold"
          />
          Cadastre-se com o Google
        </button>
      </form>
    </div>
  );
}
