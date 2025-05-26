export default function CarsLists(props:any) {

    return (
        <div>
            {
                props.CarList.map((car:any,index:Number)=>{

                 return(<div>
                    {car.name}
                 </div>)
                })
            }
        </div>
    );
}