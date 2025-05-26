export default function Searchinput() {
    return (
        <div>
            <h2 className="text-center text-gray-500">Let's Search what you need</h2>
            <div>
                
                <div className="flex items-center text-gray-400 m-4 border-b-gray-400 border-b-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="25" height="25">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 11.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 22s8-7.5 8-13a8 8 0 10-16 0c0 5.5 8 13 8 13z" />
                    </svg>

                    <input type="text" placeholder="Location" className="p-2 outline-none " />
                </div>
            </div>
        </div>
    );
}