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
  description: z.string().min(5),
  brand: z.string(),
  model: z.string(),
  price: z.number(),
  color: z.string(),
  motorType: z.string(),
  power: z.number(),
  placeNumber: z.number(),
});

export function NewCarForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: "",
      brand: "",
      model: "",
      price: 0,
      color: "",
      motorType: "",
      power: 0,
      placeNumber: 0,
    },
  });

  const dataProvider = useDataProvider();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await dataProvider.create("user/new", { data: values });
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 border border-black"
      >
        <div className="flex flex-row gap-1">
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
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
              <FormItem>
                <FormLabel>brand</FormLabel>
                <FormControl>
                  <Input placeholder="brand" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-row gap-1">
          <FormField
            control={form.control}
            name="model"
            render={({ field }) => (
              <FormItem>
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
              <FormItem>
                <FormLabel>price</FormLabel>
                <FormControl>
                  <Input placeholder="price" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-row gap-1">
          <FormField
            control={form.control}
            name="color"
            render={({ field }) => (
              <FormItem>
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
              <FormItem>
                <FormLabel>motor type</FormLabel>
                <FormControl>
                  <Input placeholder="motor type" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-row gap-1">
          <FormField
            control={form.control}
            name="power"
            render={({ field }) => (
              <FormItem>
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
              <FormItem>
                <FormLabel>place number</FormLabel>
                <FormControl>
                  <Input placeholder="place number" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
