import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div
      className="sticky top-0 z-10 h-0 md:h-20 rounded-b-xl bg-gradient-to-l from-[#002e69]/90 to-[#0059db]/80 
                 px-4 shadow-md shadow-gray-500/60 transition-all"
    >
      {/* Desktop NavBar */}
      <div className="hidden w-full h-full items-center justify-between backdrop-blur-xl md:flex">
        <ul className="flex items-center gap-x-7 px-7 py-6 text-xl text-gray-200">
          <li className="duration-600 transition-all hover:-translate-y-2 hover:scale-150">
            <Link href="/" className="block py-2">
              خانه
            </Link>
          </li>
          <li className="duration-600 transition-all hover:-translate-y-2 hover:scale-150">
            <Link href="/blogs" className="block py-2">
              بلاگ ها
            </Link>
          </li>
          <li className="duration-600 transition-all hover:-translate-y-2 hover:scale-150">
            <Link href="/services" className="block py-2">
              مزایده
            </Link>
          </li>
          <li className="duration-600 transition-all hover:-translate-y-2 hover:scale-150">
            <Link href="/about" className="block py-2">
              درباره ما
            </Link>
          </li>
        </ul>

        <img src="/images/logo.png" className="h-20 w-20" />
      </div>

      {/* Mobile NavBar */}
      <div className="mr-5 flex md:hidden">
        <div onClick={handleNav} className="z-30 rounded-lg right-3 top-3 fixed bg-blue-900 p-3">
          {!nav ? <AiOutlineClose color="white" size={30} /> : <AiOutlineMenu color="white" size={30} />}
        </div>

        <div
          className={
            !nav
              ? "fixed left-0 top-0 z-20 w-[70%] duration-500 ease-in-out"
              : "fixed left-[-100%] top-0 duration-300 ease-in-out"
          }
        >
          <ul className="h-screen flex-col bg-gradient-to-r from-[#002e69]/90 to-[#0059db]/90 backdrop-blur-xl px-7 py-6 text-2xl text-white">
            <li className="">
              <Link href="/" className="block py-5">
                 خانه
              </Link>
            </li>
            <li className="">
              <Link href="/blogs" className="block py-5">
                 بلاگ ها
              </Link>
            </li>
            <li className="">
              <Link href="/services" className="block py-5">
                 مزایده
              </Link>
            </li>
            <li className="">
              <Link href="/about" className="block py-5">
                 درباره ما
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
