import { useState } from "react";

export default function CarCar(props:any) {

    const [Car, setCar] = useState(props.car)
    return (
        <div>
            {Car.name}
        </div>
    );
}