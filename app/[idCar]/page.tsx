import Image from "next/image"
import { Button } from "@/components/ui/button"
import { color } from "framer-motion"
type Car={
    id: string,
    model: string,
    price: number,
    motorType: string,
    color: string,
    power: number,
    placeNumber:number,
    description:string
    pics:string[]
}
const CarDetails=({id,model,price,motorType,color,power,description,placeNumber,pics}:Car)=>
    {
        
    return(
        <div>
            <div className="text-center text-3xl">Model</div>
            <div className="flex flex-row gap-6 border border-black">

                <div>
                    <Image src={"https://e-commerce-back-2tyn.onrender.com/view/car-2.jpg"} width={500} height={600} alt=""/>
                </div>
               
                <div className="text-3xl flex flex-col gap-2">
                    <div>{description}</div>
                    <div>price:{price}</div>
                    <div>motor type:{motorType}</div>
                    <div>power:{power}</div>
                    <div>descriptoin:{description}</div>
                    <div>place number:{placeNumber}</div>
                    <div>color:{color}</div>
                </div>

            </div>
        </div>
    )
}
export default CarDetails