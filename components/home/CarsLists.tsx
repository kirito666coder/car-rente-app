import CarCar from "./CarCar";

export default function CarsLists(props:any) {

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 ">
            {
                props.CarList.map((car:any,index:number)=>{

                 return(<div key={index}>
                    <CarCar car={car}/>
                 </div>)
                })
            }
        </div>
    );
}