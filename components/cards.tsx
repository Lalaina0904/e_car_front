"use client";
import React, { useEffect,useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {get} from "@/utils/apiUtils";
import { Button } from "./ui/button";
import { describe } from "node:test";
import { urlBase } from "@/utils/urlBase";
import { set } from "react-hook-form";
import Image from "next/image";
import { IoMdSpeedometer } from "react-icons/io";
import { BsFuelPump } from "react-icons/bs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
type Car = {
    id:string,
    model: string,
    price: number,
    motorType: string,
    power: number,
    description:string,
    pics: string[]
    
}


/*const cars = [
  {id:"1", model: "Model S", price: 100000, motorType: "Electric", power: 100, pics: ["/imgs/electric.png"],description:"The Tesla description"},
    {id:"2", model: "Model 3", price: 80000, motorType: "Electric", power: 80, pics: ["/imgs/electric.png"],description:"the testla description" },
    {id:"3", model: "Model X", price: 120000, motorType: "Electric", power: 120, pics: ["/imgs/pickups.png"],description:"the testla description"},
    {id:"4", model: "Model Y", price: 90000, motorType: "Electric", power: 90, pics: ["/imgs/redesigned.png"],description:"the testla description"},
    {id:"5", model: "Model Z", price: 90000, motorType: "Electric", power: 90, pics: ["/imgs/compare.png"],description:"the testla descriptoin"},
];*/



const Cards = () => {
    const [cars,setCars]=useState<Car[]>([]);
    useEffect(() => {
    const getCars=async()=>{
        const response=await(get(urlBase+"/cars"));
        const data=await response;
        setCars(data);
    }
    getCars()
  console.log(cars);
},[])
  return (
    <>
      <section className="container mx-auto w-full py-4">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {cars.map((car, index) => (
            <Car id={car.id} model={car.model} price={car.price} motorType={car.motorType} power={car.power} pics={car.pics} key={index} description={car.description} />
          ))}
        </div>
      </section>
    </>
  );
};
const Car=(car:Car)=>{
    return(
          <Card key={car.id} className="border-[#4a7b92]">
              <CardHeader>
               <div className="relative w-full h-[200px] " >
                 <Image src={car.pics[0]} alt=""  className="border border-red absolute top-0 left-0"
                  layout="fill"
                objectFit="cover"
                
                />
               </div>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                  <CardTitle className="text-md mx-auto">{car.model}</CardTitle>
                  <CardTitle className="mx-auto">{car.price}$</CardTitle>
                <div className="flex flex-row justify-between">
                  <div className="flex flex-col gap-1">
                    <IoMdSpeedometer className="flex flex-row text-3xl items-center" />
                    <CardDescription>{car.power} KW</CardDescription>
                  </div>
                  <div>
                    <div className="flex flex-col gap-1">
                      <BsFuelPump className="flex flex-row text-3xl items-center" />
                      <CardDescription>{car.motorType}</CardDescription>
                    </div>
                  </div>
                </div>
              </CardContent>

              <CardFooter>
                <Button className="w-full bg-[#013248] font-semibold text-white uppercase text-xs">
                  Details
                </Button>
              </CardFooter>
            </Card>
    )
}
export default Cards;
