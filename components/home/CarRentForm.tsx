import { ComboboxDemo } from "../ui/combobox";
import { DatePickerWithRange } from "../ui/DateRangePicker";


export default function CarRentForm() {
    return (
        <div className="md:mt-20 text-lg">
            <h3>PickUp Location</h3>
            <ComboboxDemo/>
            <div className="flex justify-between items-center w-[90%] mt-5">
                <div>Pick Up Date</div>
                <div>Pick Off Date</div>
            </div>
            <DatePickerWithRange/>
            <h3 className="mt-5">Contact Number</h3>
            <input type="tel" placeholder="Contact Number" className="outline-none border-gray-300 border-1 py-2 text-sm w-[90%] rounded-sm px-4 placeholder:font-medium" />
        </div>
    );
}