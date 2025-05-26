import Image from "next/image";
import { useState } from "react";

export default function CarCar(props:any) {

    const [Car, setCar] = useState(props.car)
    return (
        <div className="bg-white m-10 text-black p-5 rounded-2xl">
            <h2 className="text-4xl font-semibold mb-2">{Car.name}</h2>
            <h2 className="text-3xl font-bold mb-2">
                <span className="text-[19px] font-medium">$</span>
                {Car.price}
                <span className="text-[19px] font-medium">\day</span>
            </h2>
            <div className="flex justify-center items-center">
            <Image
            src={Car.image?.url}
            alt="car-Image"
            height={300}
            width={300}
            />
            </div>
        </div>
    );
}