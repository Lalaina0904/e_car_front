import React, { ChangeEvent } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
interface FilterProps {
  onSelect: (value: string) => void;
}

const Filters = ({onSelect}:FilterProps) => {
   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSelect(e.target.value);
    console.log(e.target.value);
    
  };
  return (
    <div className="container mx-auto flex justify-between my-14">
      <div className="flex gap-4">
        {/* --- Headphone Type --- */}
        <Select>
          <SelectTrigger className="focus:ring-offset-0 focus:ring-0 border-none bg-slate-200 bg-opacity-60 rounded-full w-auto">
            <SelectValue placeholder="Car Type" />
          </SelectTrigger>
          <SelectContent >
            <SelectGroup >
              <SelectItem value="sport">Sports</SelectItem>
              <SelectItem value="pickup">Pickup</SelectItem>
              <SelectItem value="minivan">Minivan</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        {/* --- Price --- */}
        <Select>
          <SelectTrigger className="focus:ring-offset-0 focus:ring-0 border-none bg-slate-200 bg-opacity-60 rounded-full w-auto">
            <SelectValue placeholder="Price" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup onSelect={handleChange}>
              <SelectItem value="0-100">0-100</SelectItem>
              <SelectItem value="100-200">100-200</SelectItem>
              <SelectItem value="200-300">200-300</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        {/* --- Review --- */}
        <Select >
          <SelectTrigger className="focus:ring-offset-0 focus:ring-0 border-none bg-slate-200 bg-opacity-60 rounded-full w-auto">
            <SelectValue placeholder="Review" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup onSelect={handleChange}>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3</SelectItem>
              <SelectItem value="4">4</SelectItem>
              <SelectItem value="5">5</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        {/* --- color --- */}
        <Select>
          <SelectTrigger className="focus:ring-offset-0 focus:ring-0 border-none bg-slate-200 bg-opacity-60 rounded-full w-auto">
            <SelectValue placeholder="Color" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="black" >Black</SelectItem>
              <SelectItem value="white">White</SelectItem>
              <SelectItem value="red">Red</SelectItem>
              <SelectItem value="blue">Blue</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        {/* --- Material --- */}
        <Select>
          <SelectTrigger className="focus:ring-offset-0 focus:ring-0 border-none bg-slate-200 bg-opacity-60 rounded-full w-auto">
            <SelectValue placeholder="Material" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup onSelect={handleChange}>
              <SelectItem value="plastic">Plastic</SelectItem>
              <SelectItem value="metal">Metal</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        {/* --- All Filters --- */}
        <Select>
          <SelectTrigger className="focus:ring-offset-0 focus:ring-0 border-none bg-slate-200 bg-opacity-60 rounded-full w-auto">
            <SelectValue placeholder="All Filters" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="all">All</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="flex-none w-32">
        {/* Store by */}

        <Select>
          <SelectTrigger className="focus:ring-offset-0 focus:ring-0 border-none bg-slate-200 bg-opacity-60 rounded-full">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="price">Price</SelectItem>
              <SelectItem value="rating">Rating</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default Filters;
