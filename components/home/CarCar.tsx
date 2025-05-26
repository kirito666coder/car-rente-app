import Image from "next/image";
import { useState } from "react";

export default function CarCar(props:any) {

    const [Car, setCar] = useState(props.car)
    return (
        <div>
            <h2 className="text-[20px]  font-medium mb-2">{Car.name}</h2>
            <h2 className="text-[20px] font-bold mb-2">
                <span className="text-[12px] font-light">$</span>
                {Car.price}
                <span className="text-[12px] font-light">\day</span>
            </h2>
            <Image
            src={Car.image.url}
            alt="car-Image"
            height={25}
            width={25}
            />
        </div>
    );
}