import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div>
        <div className="hidden  sm:block bg-[#ffff] ">
          <Image src="/ogani .png" alt="Next.js Logo" width={120} height={30} />
          <div
            className="flex space-x-4  justify-center font-serif
          text-3xl w-100 h-100 py-5">
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->*/}
            <Link
              href="/"
              className="rounded-md bg-[#57831d] px-3 py-2 text-sm font-medium text-black"
              aria-current="page">
              HOME
            </Link>
            <Link
              href="/shop"
              className="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-[#57831d] hover:text-white">
              SHOP
            </Link>
            <Link
              href="/pages"
              className="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-[#57831d] hover:text-white">
              PAGES
            </Link>
            <Link
              href="/blogs"
              className="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-[#57831d] hover:text-white">
              BLOG
            </Link>
            <Link
              href="/contact"
              className="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-[#57831d] hover:text-white">
              CONTACT
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
