import { Button } from "../ui/button";
import CarCar from "./CarCar";
import CarPOPup from "./CarPopUP";

export default function CarsLists(props: any) {
    console.log(props)
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 ">
            {
                props.CarList.map((car: any, index: number) => {

                    return (
                                <CarPOPup car={car}>
                                <div>
                                    <CarCar car={car} />
                                </div>
                                </CarPOPup>
                           

                    )
                })
            }
        </div>
    );
}