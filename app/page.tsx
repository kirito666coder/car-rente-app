"use client"
import CarsCatalog from "@/components/home/CarfillterSection";
import Hero from "@/components/home/Hero";
import Searchinput from "@/components/home/Searchinput";
import getCarsList from "@/services";
import { useEffect, useState } from "react";

export default function Home() {

const [CarList, setCarList] = useState()

 const getcarsList = async()=>{
  const result:any = await getCarsList()
  console.log(result)
  setCarList(result)
 }

 useEffect(() => {
getcarsList()
 }, [])
 

  return (
    <main>
    <Hero/>
    <Searchinput/>
    <CarsCatalog/>
    </main>
  );
}
