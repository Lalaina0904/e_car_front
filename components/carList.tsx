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
import { get ,DeleteRequest} from "@/utils/apiUtils";
import { urlBase } from "@/utils/urlBase";
import { DataProvider } from "react-admin";
import { dataProvider } from "@/lib/dataProvider";
import Image from "next/image";
import { BsFuelPump } from "react-icons/bs";
import { IoMdSpeedometer } from "react-icons/io";
import { useToast } from "./ui/use-toast";
import { DialogClose } from "@radix-ui/react-dialog";
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
            <section className="">
                <div>
                    <div className="text-xl text-neutral-100 grid grid-cols-4 gap-3 w-full">
                        {
                            cars.map((car)=><Car car={car} key={car.id}/>)
                        }
                    </div>
                </div>
            </section>
        </div>
    );
}

 const Car=({car}:{car:Car})=>{
  const [isLoading,setIsLoading]=useState(false)
  const {toast}=useToast()
  const handleDelete=async()=>{
   try{
     setIsLoading(true)
  await DeleteRequest(urlBase+"/car/delete?id="+car.id)
   }
   catch(error){
    console.log(error);
    

   }
   finally{
   setIsLoading(false)
   toast({
    title:"deletion",
    description:"the car is successfully deleted"
   })
   window.location.reload()
   }

 
  
}
    return(
          <Card key={car.id} className="border-[#4a7b92]">
              <CardHeader>
                
               <div className="relative w-full h-[200px] group" >
                 <Image src={car.pics[0]} alt=""  className="border border-red absolute top-0 left-0 inset-0 transition-opacity duration-300 group-hover:opacity-0"
                  layout="fill"
                objectFit="cover"
                
                />
                 <Image src={car.pics[1]} alt=""  className="border border-red absolute top-0 left-0 inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
                      <Dialog>
      <DialogTrigger asChild>
           <Button type="submit" 
                       className="mx-auto"
                      
                       >{!isLoading?"delete":<div className="w-6 h-6 border-t-2 border-b-black rounded-full animate-spin"></div>}
                       </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
         
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            are you sure to delete this car?
           
          </div>
       
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary" onClick={handleDelete}>
              yes
            </Button>
          </DialogClose>
          <DialogClose>
            <Button variant={"secondary"}>no</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>

                    
                
              </CardFooter>
            </Card>
    )
}