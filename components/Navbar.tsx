import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="w-screen flex justify-between items-center border-b-[1px] shadow-md shadow-white/50">
            {/* logo */}
          <div className=" ml-5 md:ml-15">
            <Image
            src={'/logo.png'}
            alt="logo"
            height={120}
            width={120}
            
            />
          </div>
            {/* menu for big screens */}
          <div className="mr-15 hidden md:flex justify-center items-center gap-4">
            <Link className="cursor-pointer relative hover:text-yellow-400 after:absolute after:content-empty after:w-0 hover:after:w-full after:h-[2px] after:transition-all after:duration-300 after:bottom-0 after:left-0 after:bg-yellow-300" href={"/"} >Home</Link>
            <Link className="cursor-pointer relative hover:text-yellow-400 after:absolute after:content-empty after:w-0 hover:after:w-full after:h-[2px] after:transition-all after:duration-300 after:bottom-0 after:left-0 after:bg-yellow-300" href={"/history"} >History</Link>
            <Link className="cursor-pointer relative hover:text-yellow-400 after:absolute after:content-empty after:w-0 hover:after:w-full after:h-[2px] after:transition-all after:duration-300 after:bottom-0 after:left-0 after:bg-yellow-300" href={"/contact"} >Contact Us</Link>

            <UserButton/>
          </div>
          {/* menu for small screens */}
          <div className="flex md:hidden">

          </div>
         
        </nav>
    );
}