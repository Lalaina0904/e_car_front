import { Link } from "lucide-react"
import { Button } from "react-admin"
import { BsFuelPump } from "react-icons/bs"
import { IoMdSpeedometer } from "react-icons/io"
import { Card, CardHeader, CardContent, CardTitle, CardDescription, CardFooter } from "./ui/card"
import Image from "next/image"
type Car = {
    id:string,
    model: string,
    price: number,
    motorType: string,
    power: number,
    description:string,
    pics: string[]
    
}

export const Car=(car:Car)=>{
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
                  <Button className="w-full bg-[#013248] font-semibold text-white uppercase text-xs"
                
                     >
                    <Link href={`/car/${car.id}`}>

                      Details
                    </Link>
                  </Button>
                
              </CardFooter>
            </Card>
    )
}