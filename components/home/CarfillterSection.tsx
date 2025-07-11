import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useEffect, useState } from "react";

export default function CarsCatalog({CarOrgList,setBrand,setPrice}:any) {

    const [brandList, setbrandList] = useState<any>()

    const fillerCarLists=()=>{
        const BrandSet = new Set()
        CarOrgList.forEach((element:any) => {
            BrandSet.add(element.carBrand)
        });
        console.log(BrandSet)
        setbrandList(Array.from(BrandSet))
    }
    
    useEffect(() => {
        if(CarOrgList){
            fillerCarLists()
        }
    }, [CarOrgList])
    

    

    return (
        <div className="ml-10 md:ml-40 flex justify-between items-center">
            <div>
            <h3 className="text-2xl font-bold mt-10 ">Cars Catalog</h3>
            <p className="font-medium">Explore our cars you might likes</p>
            </div>

            <div className="flex gap-2 mt-12 mr-10">
                <DropdownMenu>
                    <DropdownMenuTrigger className="border-2 px-2 py-1 rounded-2xl flex justify-center items-center gap-1 ">Price
                        <svg className="mt-0.5" width="13" height="13" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="25,45 5,5 45,5" fill="currentColor" />
                        </svg>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Price</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={()=>(setPrice(0))}>Min to Max</DropdownMenuItem>
                        <DropdownMenuItem onClick={()=>(setPrice(1))}>Max to Min</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>


                <DropdownMenu>
                    <DropdownMenuTrigger className="border-2 px-2 py-1 rounded-2xl flex justify-center items-center gap-1 ">Manufacture
                        <svg className="mt-0.5" width="13" height="13" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="25,45 5,5 45,5" fill="currentColor" />
                        </svg>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Manufactural</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {
                            brandList?.map((brand:string,index:number)=>(
                                <DropdownMenuItem
                                 key={index}
                                 onClick={()=>{
                                    setBrand(brand)
                                 }}>
                                    {brand}
                                 </DropdownMenuItem>
                            ))
                        }
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
}