"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { useDataProvider } from "react-admin";
import { redirect } from "next/navigation";
import { urlBase } from "@/utils/urlBase";
import { useToast } from "./ui/use-toast";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const formSchema = z.object({
  description: z.string().min(5),
  brand: z.string(),
  model: z.string(),
  price: z.string(),
  color: z.string(),
  motorType: z.string(),
  power: z.string(),
  placeNumber: z.string(),
});

export function NewCarForm() {
      const [file1, setFile1] = useState<File | null>(null);
      const [file2, setFile2] = useState<File | null>(null);
      const [isLoading,setIsloading]=useState(false)
      const {toast}=useToast()
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: "",
      brand: "",
      model: "",
      price: "",
      color: "",
      motorType: "",
      power: "",
      placeNumber: "",
    },
  });

  const dataProvider = useDataProvider();

   const handleFile1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile1(e.target.files[0]);
    }
  };

  const handleFile2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile2(e.target.files[0]);
    }
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
try{
      setIsloading(true)
   const carResponse= await dataProvider.create("car/new", { data: values });
   const idCar=carResponse.data.id;
    const formData1 = new FormData();
    const formData2=new FormData();
   if(file1){
      formData1.append("file", file1 as File);
    
     await fetch(urlBase+"/upload?idCar="+idCar, {
        method: "POST",
        body: formData1,
     });
   }
   if(file2){
    formData2.append("file", file2 as File);
    
    await fetch(urlBase+"/upload?idCar="+idCar, {
        method: "POST",
        body: formData2,
    })
}
     
   }
   catch(error){
    console.log(error);
    

   }
   finally{
     setIsloading(false)
      toast({
        title:"car creation",
        description:"the car "+values.brand+" is successfully created"
      })
      window.location.reload()
   }
    
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 "
      >
        <div className="flex flex-row gap-2 w-full">
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>description</FormLabel>
                <FormControl>
                  <Input placeholder="description" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="brand"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>brand</FormLabel>
                <FormControl>
                  <Input placeholder="brand" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-row gap-2">
          <FormField
            control={form.control}
            name="model"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>model</FormLabel>
                <FormControl>
                  <Input placeholder="model" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>price</FormLabel>
                <FormControl>
                  <Input placeholder="price" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-row gap-2">
          <FormField
            control={form.control}
            name="color"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>color</FormLabel>
                <FormControl>
                  <Input placeholder="color" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="motorType"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>motor type</FormLabel>
                <FormControl>
                  <Input placeholder="motor type" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-row gap-2">
          <FormField
            control={form.control}
            name="power"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>power</FormLabel>
                <FormControl>
                  <Input placeholder="power" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="placeNumber"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>place number</FormLabel>
                <FormControl>
                  <Input placeholder="place number" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-row gap-2">
          <FormItem>
            <FormLabel>first pic</FormLabel>
            <FormControl>
              <Input type="file"  onChange={handleFile1Change}/>
            </FormControl>
            <FormMessage />
          </FormItem>
          <FormItem>
            <FormLabel>second pic</FormLabel>
            <FormControl>
              <Input type="file" onChange={handleFile2Change} />
            </FormControl>
            <FormMessage />
          </FormItem>
        </div>

         <Button type="submit" >{!isLoading?"submit":<div className="w-6 h-6 border-t-2 border-b-black rounded-full animate-spin"></div>}</Button>
      </form>
    </Form>
  );
}
