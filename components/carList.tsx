import { Button } from "./ui/button";
import { NewCarForm } from "./newCarForm";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@radix-ui/react-select";
import { Input } from "postcss";
import { Card, CardHeader, CardContent, CardTitle, CardDescription, CardFooter } from "./ui/card";
import { useState,useEffect } from "react";
import { get } from "@/utils/apiUtils";
import { urlBase } from "@/utils/urlBase";
import { DataProvider } from "react-admin";
import { dataProvider } from "@/lib/dataProvider";
type Car={
    id: string,
    model: string,
    price: number,
    motorType: string,
    power: number,
    description:string
    pics:string[]
}
export const CarList=()=>{
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

    return(
        <div className="container mx-auto">
             <Dialog >
      <DialogTrigger asChild className="my-16">
        <Button variant="outline">new car+</Button>
      </DialogTrigger>
      <DialogContent >
        <div className="grid gap-4 py-4">
            <NewCarForm/>
        </div>
      </DialogContent>
    </Dialog>
            <section className="flex justify-between">
                <div>
                    <div className="text-xl text-neutral-100 grid grid-cols-6 gap-3">
                        {
                            cars.map((car)=>Car(car))
                        }
                    </div>
                </div>
            </section>
        </div>
    );
}

const Car=(car:Car)=>{
    const handleDelete=(id:string)=>async()=>{
    const response=await dataProvider.delete("car/delete",{id:id});
    console.log(response);


}
    return(
          <Card key={car.id} className="border-[#4a7b92] h-72">
           
               
              <CardHeader><img src={car.pics[0]} alt="" /></CardHeader>
              <CardContent>
                <CardTitle className="text-md">{car.model}</CardTitle>
                <CardDescription>{car.description}</CardDescription>
              </CardContent>

              <CardFooter>
                <Button className="w-full bg-[#013248] font-semibold text-white uppercase text-xs">
                  Details
                </Button>
              </CardFooter>
            </Card>
    )
}