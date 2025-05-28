import { Button } from "../ui/button";
import CarCar from "./CarCar";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import CarRentForm from "./CarRentForm";
export default function CarPOPup({children,car}:any) {
    return (
        <Drawer>
            <DrawerTrigger>
                {children}
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle className="text-4xl text-gray-400">Rent A Car Now!</DrawerTitle>
                    <DrawerDescription className="grid grid-cols-1 md:grid-cols-2">
                        <div>
                            <CarCar car={car} />
                        </div>
                        <div>
                            <CarRentForm/>
                        </div>
                    </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                    <Button>Submit</Button>
                    <DrawerClose>
                        <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}