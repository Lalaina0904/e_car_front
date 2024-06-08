import Image from "next/image"
import { Button } from "@/components/ui/button"
type Car={
    id: string,
    model: string,
    price: number,
    motorType: string,
    power: number,
    description:string
    pics:string[]
}
const CarDetails=({id,model,price,motorType,power,description,pics}:Car)=>{
    return(
        <div>
            <h1 className="text-center text-4xl"></h1>
            <div className="flex flex-row gap-6 items-center justify-center">
                <div>
                    <Image src={"https://e-commerce-back-2tyn.onrender.com/view/Captured%E2%80%99%C3%A9crandu2024-06-0612-02-29.png"} width={800} height={800} alt=""/>
                     <div className="text-center text-3xl">Model</div>
                </div>
               
                <div className="text-3xl flex flex-col gap-2">
                    <div>{description}</div>
                    <div>price:{price}</div>
                    <div>motor type:{motorType}</div>
                    <div>power:{power}</div>
                </div>

            </div>
            <Button className="ml-11 mt-2" >appointment</Button>
        </div>
    )
}
export default CarDetails