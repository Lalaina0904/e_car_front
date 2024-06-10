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
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { useDataProvider } from "react-admin";
import { redirect } from "next/navigation";


const formSchema = z.object({
  name: z.string().min(2).max(50),
  firstName: z.string().min(2).max(50),
  email: z.string().email(),
  message: z.string().min(2).max(50),
  contact: z.string().min(2).max(50),
  appointmentDate:z.date(),
  idCar: z.string().min(2).max(50),
  status: z.string().min(2).max(50),
});

export function NewApointmentForm(idCar:string) {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      firstName: "",
      email: "",
      message: "",
      contact: "",
      appointmentDate:new Date(),

      idCar: idCar,
      status: "pending",

    },
  });

  //const dataProvider =  useDataProvider();

  async function onSubmit(values: z.infer<typeof formSchema>) {
   // await dataProvider.create("appointment/new", { data: values });
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
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>name</FormLabel>
              <FormControl>
                <Input placeholder="first name" {...field} />
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
                <Input placeholder="date" type="date" {...field} />
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
            <FormItem>
              <FormLabel>message</FormLabel>
              <FormControl>
                <textarea placeholder="message" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
