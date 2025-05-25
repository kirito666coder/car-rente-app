import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="flex ">
            {/* logo */}
          <div>
            <Image
            src={'/car-rente-logo.png'}
            alt="logo"
            height={120}
            width={120}
            className="invert"
            />
          </div>
            {/* menu for big screens */}
          <div>


            <UserButton/>
          </div>
         
        </nav>
    );
}