import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="w-screen flex justify-between items-center">
            {/* logo */}
          <div className="ml-5">
            <Image
            src={'/logo.png'}
            alt="logo"
            height={120}
            width={120}
            
            />
          </div>
            {/* menu for big screens */}
          <div className="mr-5 flex justify-center items-center gap-4">
            <Link href={"/"} >Home</Link>
            <Link href={"/history"} >History</Link>
            <Link href={"/contact"} >Contact Us</Link>

            <UserButton/>
          </div>
         
        </nav>
    );
}