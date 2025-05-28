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

export default function CarsLists(props: any) {
    console.log(props)
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 ">
            {
                props.CarList.map((car: any, index: number) => {

                    return (
                        <Drawer key={car.id}>
                            <DrawerTrigger>
                                <div>
                                    <CarCar car={car} />
                                </div>
                            </DrawerTrigger>
                            <DrawerContent>
                                <DrawerHeader>
                                    <DrawerTitle>{car.name}</DrawerTitle>
                                    <DrawerDescription>This action cannot be undone.</DrawerDescription>
                                </DrawerHeader>
                                <DrawerFooter>
                                    <Button>Submit</Button>
                                    <DrawerClose>
                                        <Button variant="outline">Cancel</Button>
                                    </DrawerClose>
                                </DrawerFooter>
                            </DrawerContent>
                        </Drawer>

                    )
                })
            }
        </div>
    );
}