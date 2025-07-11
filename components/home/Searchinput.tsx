export default function Searchinput() {
    return (
        <div>
            <h2 className="text-center text-gray-500 font-semibold text-2xl m-3">Let's Search what you need</h2>
            <div className="flex justify-center items-center">
                <div className="bg-gray-400/50 flex  w-fit rounded-full px-4 md:gap-15">

                <div className="flex items-center  m-4 border-b-white border-b-2 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="25" height="25">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M12 11.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M12 22s8-7.5 8-13a8 8 0 10-16 0c0 5.5 8 13 8 13z" />
                    </svg>

                    <input type="text" placeholder="Location" className="p-2 outline-none text-white placeholder:text-white" />
                </div>

                <div className="flex items-center text-gray-400 m-4 border-b-white border-b-2">
                    <input type="date" placeholder="Location" className="p-2 outline-none  text-white placeholder:text-white" />
                </div>
                            </div>
            </div>
        </div>
    );
}