"use server"
import Footer from "@/components/footer";
import Nav from "@/components/nav";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GetServerSideProps } from "next";
 
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
import { NewApointmentForm } from "@/components/newAppointmentForm";
import {urlBase} from "@/utils/urlBase";

import {get} from "@/utils/apiUtils";
import { fetchCarById } from "@/utils/carHelper";

type Car = {
    id:string,
    model: string,
    price: number,
    motorType: string,
    power: number,
    color:string,
    placeNumber:number,
    description:string,
    pics: string[]
    
}
type CarPageProps = {
  params: {
    id: string;
  };
};

const page = async ({params}:CarPageProps) => {
try{
    const car: Car = await fetchCarById(params.id)||{};
}
catch(error){
  console.log(error);
  
}


  return (
    <>
      <Nav/>
      <main className="container mx-auto my-4">
        <div className="flex gap-1 text-sm font-semibold text-slate-700">
          <Link href="/" passHref>
            Home{" "}
          </Link>
          /
          <Link href="/new" className="underline">
            News & actualities
          </Link>
        </div>

        <div className="my-8">
          <h1 className="text-2xl font-semibold text-slate-800">
            News & actualities
          </h1>
          <p className="text-sm text-slate-700">
            The latest car news, videos and expert reviews, from Cars.com&apos;s
            independent automotive journalists
            <br />
          </p>
        </div>

        <div className="grid grid-cols-4">
          <div className="col-span-3 mr-10">
            <h2 className="text-xl font-semibold text-slate-700">
              {car.model}
            </h2>

            <div className="relative">
              <div className="absolute bottom-[50%]">
                <p className="text-[6rem] text-slate-400" aria-hidden="true">
                  ix2
                </p>
                <p className="" aria-hidden="true"></p>
              </div>

              <div>
               
                 <Carousel className="w-full max-w-[600px]">
                    <CarouselContent>
                      {car.pics.map((pic,index) => (
                      <CarouselItem key={index}>
                        <div className="p-1">
                          <Card>
                            <CardContent className="flex aspect-square items-center justify-center p-6">
                              <span className="text-4xl font-semibold w-full h-full"> 
                                {
                                  <img src={pic} className="w-full h-full" />
                                
                                }
                               
                                </span>
                            </CardContent>
                        

                          </Card>
                         </div>
                      </CarouselItem>
                      
                             ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                 </Carousel>
              </div>
            </div>

            <div>
               {
                car.description
               }
            
            </div>
          </div>
          {/* --- */}
          <div className="col-span-1">
              <div className="text-3xl flex flex-col gap-7 mt-24">
                    
                    <div className="flex flex-row gap-1 items-center">
                      <div className="font-semibold">price:</div>
                      <div className=" text-slate-700">{car.price}$</div>
                    </div>
                   <div className="flex flex-row gap-1 items-center">
                      <div className="font-semibold">motor type:</div>
                      <div className=" text-slate-700">{car.motorType}</div>
                    </div>
                    <div className="flex flex-row gap-1 items-center">
                      <div className="font-semibold">power:</div>
                      <div className=" text-slate-700">{car.power}</div>
                    </div>
                    <div className="flex flex-row gap-1 items-center">
                      <div className="font-semibold">place number:</div>
                      <div className=" text-slate-700">{car.placeNumber}</div>
                    </div>
                    <div className="flex flex-row gap-1 items-center">
                      <div className="font-semibold">color:</div>
                      <div className=" text-slate-700">{car.color}</div>
                    </div>
                     <Dialog>
      <DialogTrigger asChild>
        <Button className="text-2xl mt-8" >appointment</Button>
      </DialogTrigger>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle>make an appointment</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
      
        <NewApointmentForm idCar={car.id} />
      </DialogContent>
    </Dialog>
                    
                </div>
                
          </div>
          
        </div>
      </main>

      <Footer />
    </>
  );
};

export default page;