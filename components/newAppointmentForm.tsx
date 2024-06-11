"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { date } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { Loading, useDataProvider } from "react-admin";
import { redirect } from "next/navigation";
import { Post } from "@/utils/apiUtils";
import { urlBase } from "@/utils/urlBase";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  message: z.string().min(2).max(50),
  contact: z.string().min(2).max(50),
  appointmentDate:z.string().refine((val) => !isNaN(Date.parse(val+"T00:00:00Z")), {
    message: "Invalid date format",
  }),
  idCar: z.string().min(2).max(50),
  status: z.string().min(2).max(50),
});

export function NewApointmentForm({idCar}: {idCar:string}) {
const [isLoading,setIsloading]=useState<boolean>(false);
const {toast}=useToast();

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      contact: "",
      appointmentDate:new Date().toISOString().split("T")[0],

      idCar: idCar,
      status: "pending",

    },
  });

  //const dataProvider =  useDataProvider();

  async function onSubmit(values: z.infer<typeof formSchema>) {
   // await dataProvider.create("appointment/new", { data: values });
   setIsloading(true);
   try{
      const appointmentDate = new Date(values.appointmentDate + "T00:00:00Z").toISOString();
    const data = { ...values, appointmentDate }
    await Post(`${urlBase}/appointment/new`,data);
    console.log(values);
    
    
   }catch(e){
     console.log(e);
   }
   finally{
     setIsloading(false);
     toast({
        title:"Appointment",
        description:"Your appointment has been sucessfully sent",
     });
   
   }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>name</FormLabel>
              <FormControl>
                <Input placeholder="name" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>email</FormLabel>
              <FormControl>
                <Input placeholder="email" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        
          <FormField
          control={form.control}
          name="appointmentDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>date</FormLabel>
              <FormControl>
                <Input type="date" {...field} min={new Date().toISOString().split("T")[0]} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
          <FormField
          control={form.control}
          name="contact"
          render={({ field }) => (
            <FormItem>
              <FormLabel>contact</FormLabel>
              <FormControl>
                <Input placeholder="contact" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1">
              <FormLabel>message</FormLabel>
              <FormControl>
                <textarea placeholder="message" {...field}  className="border rounded-lg"/>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" >{!isLoading?"submit":<div className="w-6 h-6 border-t-2 border-b-black rounded-full animate-spin"></div>}</Button>
      </form>
    </Form>
  );
}
