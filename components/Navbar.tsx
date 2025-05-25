import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ModeToggle } from "./ModeToggle";

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

        <UserButton />
        <ModeToggle />
      </div>
      {/* menu for small screens */}
      <div className="mr-5 flex md:hidden gap-4">
        <Sheet>
          <SheetTrigger><svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-black"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
          </SheetTrigger>
          <SheetContent className="w-70">
            <div className="flex flex-col justify-center items-center mt-5 gap-4">
              <Link className="cursor-pointer relative hover:text-yellow-400 after:absolute after:content-empty after:w-0 hover:after:w-full after:h-[2px] after:transition-all after:duration-300 after:bottom-0 after:left-0 after:bg-yellow-300" href={"/"} >Home</Link>
              <Link className="cursor-pointer relative hover:text-yellow-400 after:absolute after:content-empty after:w-0 hover:after:w-full after:h-[2px] after:transition-all after:duration-300 after:bottom-0 after:left-0 after:bg-yellow-300" href={"/history"} >History</Link>
              <Link className="cursor-pointer relative hover:text-yellow-400 after:absolute after:content-empty after:w-0 hover:after:w-full after:h-[2px] after:transition-all after:duration-300 after:bottom-0 after:left-0 after:bg-yellow-300" href={"/contact"} >Contact Us</Link>
            </div>

          </SheetContent>
        </Sheet>

        <UserButton />
        <ModeToggle />
      </div>

    </nav>
  );
}