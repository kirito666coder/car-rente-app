import CarCar from "./CarCar";

export default function CarsLists(props:any) {
      console.log(props)
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 ">
            {
                props.CarList.map((car:any,index:number)=>{

                 return(<div key={car.id}>
                    <CarCar car={car}/>
                 </div>)
                })
            }
        </div>
    );
}