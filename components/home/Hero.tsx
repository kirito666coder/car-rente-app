import Image from "next/image";

export default function Hero() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 ml-10 md:ml-20 mt-20 ">
            <div className="md:mt-55 md:ml-20">
                <h1 className="font-semibold text-5xl">Premium Car rental in your Area</h1>
                <p className="mt-10 text-gray-500 font-semibold text-2xl max-w-[90%]">Book the selected car effortiessly, Pay for driving only, Book the Cra Now</p>
                <button className="mt-5 bg-yellow-500/95 h-10 px-4 rounded-full flex justify-center items-center hover:bg-yellow-500  hover:scale-102 cursor-pointer font-bold ">
                    Explore Cars
                    </button>
            </div>
            <div className="overflow-hidden  flex justify-start md:justify-end">
            <Image
            className="md:hidden"
            src={'/car-abc.png'}
            alt="hero-section"
            height={415}
            width={415}
            />
            <Image
            className="hidden md:flex"
            src={'/car-abc.png'}
            alt="hero-section"
            height={455}
            width={684}
            />
                
            </div>
        </div>
    );
}