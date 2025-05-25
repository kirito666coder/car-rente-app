import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav>
            {/* logo */}
          <div>
            <Image
            src={}
            alt="logo"
            height={32}
            width={32}
            />
          </div>
            {/* menu for big screens */}
          <div>


            <UserButton/>
          </div>
          {/* menu for small screens */}
        </nav>
    );
}