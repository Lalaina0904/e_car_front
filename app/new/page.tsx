import Footer from "@/components/footer";
import Nav from "@/components/nav";
import Image from "next/image";
import Link from "next/link";
import React from "react";

 
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <>
      <Nav />
      <main className="container mx-auto my-4">
        <div className="flex gap-1 text-sm font-semibold text-slate-700">
          <Link href="/" className="underline">
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
              BMW iX2
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
                      {Array.from({ length: 2 }).map((_, index) => (
                      <CarouselItem key={index}>
                        <div className="p-1">
                          <Card>
                            <CardContent className="flex aspect-square items-center justify-center p-6">
                              <span className="text-4xl font-semibold w-full"> <Image src="/imgs/cosySec.png" alt="ix2"
                                layout="fill"
                                />
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
               In spite of its sharp styling, the BMW iX2 is more practical
                than you might think, and it is very good to drive too. Other
                electric cars have much better range and efficiency, though
            
            </div>
          </div>
          {/* --- */}
          <div className="col-span-1">
              <div className="text-3xl flex flex-col gap-7 mt-24">
                    
                    <div className="flex flex-row gap-1 items-center">
                      <div className="font-semibold">price:</div>
                      <div className=" text-slate-700">300k</div>
                    </div>
                   <div className="flex flex-row gap-1 items-center">
                      <div className="font-semibold">motor type:</div>
                      <div className=" text-slate-700">diesel</div>
                    </div>
                    <div className="flex flex-row gap-1 items-center">
                      <div className="font-semibold">power:</div>
                      <div className=" text-slate-700">400</div>
                    </div>
                    <div className="flex flex-row gap-1 items-center">
                      <div className="font-semibold">place number:</div>
                      <div className=" text-slate-700">4</div>
                    </div>
                    <div className="flex flex-row gap-1 items-center">
                      <div className="font-semibold">color:</div>
                      <div className=" text-slate-700">black</div>
                    </div>
                    <Button className="text-2xl mt-8" >appointment</Button>
                </div>
                
          </div>
          
        </div>
      </main>

      <Footer />
    </>
  );
};

export default page;
