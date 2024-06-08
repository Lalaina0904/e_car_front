"use client";

// import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Logo } from "@/types/logo";
import Link from "next/link";

interface LogoSliderProps {
  logos: Logo[];
}

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {get} from "@/utils/apiUtils";
import { list } from "postcss";
import { useEffect, useState } from "react";
import { urlBase } from "@/utils/urlBase";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "react-admin";
import Image from "next/image";

type Car={
    id: string,
    model: string,
    price: number,
    motorType: string,
    power: number,
    description:string
    pics:string[]
}

export default function LogoSlider({ logos }: LogoSliderProps) {
    const [cars,setCars]=useState<Car[]>([]);
    const [brand,setBrand]=useState<string>("");
   
  const getCars=async(brand:string,pageNumber:number)=>{
        const response=await get(urlBase+"/cars/"+brand+"?pageNumber="+pageNumber);
        const data=await response
        setCars(data);
        console.log(data);
        
      }
  return (
    <>
      <section className="container mx-auto w-full py-4">
        <div className="g:max-w-full px-16">
          <Carousel>
            <CarouselContent>
              {logos.map((logo, index) => (
                <Dialog>
                  {/* ---------- item ----------- */}

                  <CarouselItem
                    key={index}
                    className="sm:basis-1/2 md:basis-1/3 lg:basis-1/5"
                  >
                    <div className="flex flex-col px-4 py-5 sm:p-6">
                      <div className="mt-6 flex justify-center gap-3">
                        <div className="text-center text-slate-600">
                          <DialogTrigger asChild>
                            <Link href="" onClick={()=>getCars(logo.name,0)}>
                              <div className="flex justify-center">
                                {logo.icon}
                              </div>
                              <p className="uppercase text-sm font-semibold pt-2">
                                {logo.name}
                              </p>
                            </Link>
                          </DialogTrigger>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                  {/* -------- content ----------- */}

                  <DialogContent className="max-w-[95%] h-[90vh]">
                    <DialogHeader>
                      <DialogTitle>{logo.name} Cars</DialogTitle>
                      <DialogDescription>
                        Make changes to your profile here. Click save when
                        you're done.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid grid-cols-6 gap-1">
                        {
                            cars.map(car=>Car(car))
                        }
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 fill-white text-white border-2 border-[#013248] bg-[#013248]" />
            <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 fill-white text-white border-2 border-[#013248] bg-[#013248]" />
          </Carousel>
        </div>
      </section>
    </>
  );
}

const Car=(car:Car)=>{
        return(
                    <div key={car.id} className="border-[#4a7b92] border rounded-sm  flex flex-col items-center gap-2 h-96">
                            <div><Image src={car.pics[0]} width={300} height={400} alt="" /></div>
                            <div>
                                <div className="text-md text-center text-2xl">{car.model}</div>
                                <div>{car.description}</div>
                            </div>

                            <div>
                                <button className="bg-[#013248] w-20 h-7 font-semibold text-white uppercase text-xs rounded-lg mx-auto">
                                    <span>Details</span>
                                </button>
                            </div>
                    </div>
        )
}