import Image from "next/image";
import { useState } from "react";

export default function CarCar(props: any) {

    const [Car, setCar] = useState(props.car)
    return (
        <div className="bg-white m-10 text-black p-5 rounded-2xl group border-2 hover:border-blue-500">
            <h2 className="text-4xl font-semibold mb-2">{Car.name}</h2>
            <h2 className="text-3xl font-extrabold mb-2">
                <span className="text-[15px] font-light">$</span>
                {Car.price}
                <span className="text-[15px] font-light">\day</span>
            </h2>
            <div className="flex justify-center items-center">
                <Image
                    src={Car.image?.url}
                    alt="car-Image"
                    height={300}
                    width={300}
                />
            </div>
            <div className="flex justify-around group-hover:hidden">
                <span className="flex justify-center items-center flex-col">
                    <svg width="30" height="30" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">

                        <circle cx="50" cy="50" r="45" stroke="black" stroke-width="6" fill="none" />


                        <circle cx="50" cy="50" r="10" fill="black" />


                        <line x1="50" y1="50" x2="50" y2="15" stroke="black" stroke-width="4" />
                        <line x1="50" y1="50" x2="20" y2="75" stroke="black" stroke-width="4" />
                        <line x1="50" y1="50" x2="80" y2="75" stroke="black" stroke-width="4" />
                    </svg>
                    <h5 className="font-medium">{Car.carType}</h5>
                </span>
                <span className="flex justify-center items-center flex-col">
                    <svg
                        width="30"
                        height="30"
                        viewBox="0 0 150 160"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="black"
                    >

                        <rect x="25" y="110" width="100" height="30" rx="10" ry="10" />

                        <rect x="110" y="40" width="20" height="90" rx="10" ry="10" />

                        <rect x="110" y="10" width="20" height="25" rx="8" ry="8" />
                    </svg>

                    <h5 className="font-medium">{Car.seat} Seat</h5>
                </span>
                <span className="flex justify-center items-center flex-col">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="35"
                        height="35"
                        viewBox="0 0 64 64"
                        fill="black"
                    >

                        <rect x="12" y="12" width="26" height="40" rx="3" />


                        <rect x="18" y="18" width="14" height="10" rx="1" />


                        <rect x="12" y="6" width="20" height="8" rx="2" />

                        <path d="M38 20 C50 20, 50 44, 38 44" stroke="black" stroke-width="3" fill="none" />


                        <rect x="36" y="20" width="6" height="8" rx="1" />
                    </svg>

                    <h5 className="font-medium">{Car.carAvg} MPG</h5>
                </span>
            </div>
            <div className=" group-hover:flex justify-center items-center hidden mt-5">
                <button className="bg-gradient-to-r from-blue-400 to-blue-700 text-white px-4 py-2 rounded-md flex items-center gap-10 hover:brightness-110 transition">
                    <h4 className="font-semibold">Rent Now</h4>
                    <div className="flex items-center gap-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="white"
                        >
                            <path d="M13 5l7 7-7 7M5 12h14" stroke="white" strokeWidth="2" fill="none" />
                        </svg>
                    </div>
                </button>

            </div>
        </div>
    );
}