import { urlBase } from "./urlBase";
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
export async function fetchCarById(id: string){
 try{
     const res = await fetch(`${urlBase}/car/${id}`);
    return res.json();
 }catch(error){
    console.log(error);
    
 }

}
export async function fetchCarByBrand(brand: string){
 try{
     const res = await fetch(`${urlBase}/cars/${brand}?pageNumber=0`);
    return res.json();
 }catch(error){
    console.log(error);
    
 }


}
export async function fetchBrands(){
   try{
      const res = await fetch(`${urlBase}/brands`);
      return res.json();
   }catch(error){
      console.log(error);
      
   }
}