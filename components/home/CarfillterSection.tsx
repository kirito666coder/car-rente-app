import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function CarsCatalog() {
    return (
        <div className="ml-10 md:ml-40">
            <h3 className="text-2xl font-bold mt-10 ">Cars Catalog</h3>
            <p>Explore our cars you might likes</p>

            <div>
                <DropdownMenu>
                    <DropdownMenuTrigger className="flex justify-center items-center gap-1 ">Price
                        <svg className="mt-0.5" width="13" height="13" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="25,45 5,5 45,5" fill="currentColor" />
                        </svg>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Billing</DropdownMenuItem>
                        <DropdownMenuItem>Team</DropdownMenuItem>
                        <DropdownMenuItem>Subscription</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>


                <DropdownMenu>
                    <DropdownMenuTrigger className="flex justify-center items-center gap-1 ">Manefoctur
                        <svg className="mt-0.5" width="13" height="13" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="25,45 5,5 45,5" fill="currentColor" />
                        </svg>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Billing</DropdownMenuItem>
                        <DropdownMenuItem>Team</DropdownMenuItem>
                        <DropdownMenuItem>Subscription</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
}