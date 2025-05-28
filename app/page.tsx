"use client"
import CarsCatalog from "@/components/home/CarfillterSection";
import CarsLists from "@/components/home/CarsLists";
import Hero from "@/components/home/Hero";
import Searchinput from "@/components/home/Searchinput";
import getCarsList from "@/services";
import { useEffect, useState } from "react";

export default function Home() {

const [CarList, setCarList] = useState<any>([])
const [CarOrgList, setOrgCarList] = useState<any>([])

 const getcarsList = async()=>{
  const result:any = await getCarsList()
  console.log(result)
  setCarList(result?.carLists)
  setOrgCarList(result?.carLists)
 }

 useEffect(() => {
getcarsList()
 }, [])
 

 const filterCarList= (brand:string)=>{
  const filterLIst=CarOrgList.filter((Item:any)=>
  Item.carBrand==brand)

  setCarList(filterLIst)
 }

  return (
    <main>
    <Hero/>
    <Searchinput/>
    <CarsCatalog CarOrgList={CarOrgList} setBrand={(value:string)=>filterCarList(value)}/>
    <CarsLists CarList={CarList}/>
    </main>
  );
}
