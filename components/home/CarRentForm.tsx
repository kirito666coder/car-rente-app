import { useEffect, useState } from "react";
import { ComboboxDemo } from "../ui/combobox";
import { DatePickerWithRange } from "../ui/DateRangePicker";


export default function CarRentForm() {
    const [Formdata, setFormdata] = useState({
        location: "",
        pickUpDate: "",
        PickOffDate: "",
        ContactNumber: "",
    })

    useEffect(() => {
        console.log(Formdata)
    }, [Formdata])


    return (
        <div className="md:mt-20 text-lg">
            <h3>PickUp Location</h3>
            <ComboboxDemo setFormdata={setFormdata} />
            <div className="flex justify-between items-center w-[90%] mt-5">
                <div>Pick Up Date</div>
                <div>Pick Off Date</div>
            </div>
            <DatePickerWithRange setFormdata={setFormdata} />
            <h3 className="mt-5">Contact Number</h3>
            <input
                value={Formdata.ContactNumber}
                onChange={(e) => {
                    setFormdata((prev) => ({
                        ...prev,
                        ContactNumber: e.target.value,
                    }))
                }}
                type="tel"
                placeholder="Contact Number"
                className="outline-none border-gray-300 border-1 py-2 text-sm w-[90%] rounded-sm px-4 placeholder:font-medium" />
        </div>
    );
}