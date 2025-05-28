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
export default function CarPOPup() {
    return (
        <Drawer>
            <DrawerTrigger>
                <div>
                    <CarCar car={car} />
                </div>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Rent A Car Now!</DrawerTitle>
                    <DrawerDescription className="grid grid-cols-1 md:grid-cols-2">
                        <div>
                            <CarCar car={car} />
                        </div>
                        <div></div>
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