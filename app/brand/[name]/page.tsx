import { fetchCarByBrand } from "@/utils/carHelper"
import React from "react"
import {Car} from  "@/components/carCard"
import { BiLeftArrowAlt } from "react-icons/bi"
import Link from "next/link"
import { urlBase } from "@/utils/urlBase"
type Car = {
    id:string,
    model: string,
    price: number,
    motorType: string,
    power: number,
    description:string,
    pics: string[]
    
}
type CarPageProps = {
  params: {
    name: string;
  };
};
const page=async({params}:CarPageProps)=>{
    const cars:Car[] = await fetchCarByBrand(params.name) || [];
    return(
         <>
      <section className="container mx-auto w-full py-4">
        <div className="flex flex-row items-center gap-2 absolute">
          <Link href={"/"}>
            <BiLeftArrowAlt className="text-3xl text-[#192931]" />
          </Link>
        </div>
        <div className="text-center text-4xl mb-4 text-[#1b2c34]">The list of {params.name} cars</div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {
            cars.length==0? <div className="text-center text-2xl">no cars found</div>:
            cars.map((car) => (
            <Car id={car.id} model={car.model} price={car.price} motorType={car.motorType} power={car.power} pics={car.pics}
             key={car.id} description={car.description} />
          ))}
        </div>
      </section>
    </>
    )
}
export default page;