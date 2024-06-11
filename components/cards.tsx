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
import useNavigate from "next/navigation";
import Link from "next/link";
import {Car} from "@/components/carCard";
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
  {id:"1", model: "Model S", price: 100000, motorType: "Electric", power: 100, pics: ["/imgs/electric.png","/imgs/pickups.png"],description:"The Tesla description"},
    {id:"2", model: "Model 3", price: 80000, motorType: "Electric", power: 80, pics: ["/imgs/electric.png"],description:"the testla description" },
    {id:"3", model: "Model X", price: 120000, motorType: "Electric", power: 120, pics: ["/imgs/pickups.png"],description:"the testla description"},
    {id:"4", model: "Model Y", price: 90000, motorType: "Electric", power: 90, pics: ["/imgs/redesigned.png"],description:"the testla description"},
    {id:"5", model: "Model Z", price: 90000, motorType: "Electric", power: 90, pics: ["/imgs/compare.png"],description:"the testla descriptoin"},
];*/

interface CardProps {
  searchQuery: string;
}


const Cards = ({searchQuery}:CardProps) => {
    const [cars,setCars]=useState<Car[]>([]);
 useEffect(() => {
    const getCars = async () => {
      try {
        let response;
        if (searchQuery == null || searchQuery === '') {
          response = await get(urlBase + "/cars");
        } else {
          response = await get(urlBase + "/cars?query=" + searchQuery);
        }
        const data = await response;
        if (Array.isArray(data)) {
          setCars(data);
        } else {
          console.error("Response is not an array:", data);
        }
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    getCars();
  }, [searchQuery]);
  return (
    <>
      <section className="container mx-auto w-full py-4">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {
            cars.length==0? <div className="text-center text-2xl">no cars found</div>:
            cars.map((car, index) => (
            <Car id={car.id} model={car.model} price={car.price} motorType={car.motorType} power={car.power} pics={car.pics} key={index} description={car.description} />
          ))}
        </div>
      </section>
    </>
  );
};


export default Cards;
