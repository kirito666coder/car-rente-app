import CarCar from "./CarCar";

export default function CarsLists(props:any) {

    return (
        <div>
            {
                props.CarList.map((car:any,index:Number)=>{

                 return(<div>
                    <CarCar car={car}/>
                 </div>)
                })
            }
        </div>
    );
}