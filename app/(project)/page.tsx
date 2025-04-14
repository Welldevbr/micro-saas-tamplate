import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="font-bold text-2xl text-gray-900">Landing page</h1>
      <Link
        href="/login"
        className="px-4 py-2 transition ease-in-out duraction-300 border border-gray-900 rounded-md hover:bg-gray-200"
      >
        Realizar login
      </Link>
    </div>
  );
}
