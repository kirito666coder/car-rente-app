import CarCar from "./CarCar";
import CarPOPup from "./CarPopUP";

export default function CarsLists(props: any) {
    console.log(props)
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 ">
            {
                props.CarList.map((car: any, index: number) => {

                    return (
                                <CarPOPup key={car.id} car={car}>
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