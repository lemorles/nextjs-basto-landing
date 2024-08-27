import Image from "next/image";

export default function Header() {
  return (
    <nav className="max-w-screen-2lg mx-auto flex justify-between items-center pb-6">
      <Image src="/logo-white.webp" alt="logo basto" width="110" height="50" />
      <button type="button" className="lg:text-base bg-green-basto text-sm text-white px-4 rounded-lg h-10">
        Login
      </button>
    </nav>
  );
}
