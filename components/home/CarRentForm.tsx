import { ComboboxDemo } from "../ui/combobox";
import { DatePickerWithRange } from "../ui/DateRangePicker";


export default function CarRentForm() {
    return (
        <div className="md:mt-20 text-lg">
            <h3>PickUp Location</h3>
            <ComboboxDemo/>
            <div className="flex justify-between">
                <div>Pick Up Date</div>
                <div>Pick Off Date</div>
            </div>
            <DatePickerWithRange/>
            <h3>Contact Number</h3>
        </div>
    );
}