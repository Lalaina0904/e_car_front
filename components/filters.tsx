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
   const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onSelect(e.target.value);
   
    
  };
 return (
    <div className="container mx-auto flex justify-between my-14">
      <div className="grid grid-cols-3 lg:grid-cols-6">
        {/* Car Type */}
        <select onChange={handleChange} className="focus:ring-offset-0 focus:ring-0 border-none bg-slate-200 bg-opacity-60 rounded-full w-auto p-2 outline-none text-gray-600">
          <option value="">Car Type</option>
          <option value="sport">Sports</option>
          <option value="pickup">Pickup</option>
          <option value="minivan">Minivan</option>
        </select>

        {/* Price */}
        <select onChange={handleChange} className="focus:ring-offset-0 focus:ring-0 border-none bg-slate-200 bg-opacity-60 rounded-full w-auto p-2 outline-none text-gray-600">
          <option value="">Price</option>
          <option value="0-100">0-100</option>
          <option value="100-200">100-200</option>
          <option value="200-300">200-300</option>
        </select>

        {/* Review */}
        <select onChange={handleChange} className="focus:ring-offset-0 focus:ring-0 border-none bg-slate-200 bg-opacity-60 rounded-full w-auto p-2 outline-none text-gray-600">
          <option value="">Review</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        {/* Color */}
        <select onChange={handleChange} className="focus:ring-offset-0 focus:ring-0 border-none bg-slate-200 bg-opacity-60 rounded-full w-auto p-2 outline-none text-gray-600">
          <option value="">Color</option>
          <option value="black">Black</option>
          <option value="white">White</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
        </select>

        {/* Material */}
        <select onChange={handleChange} className="focus:ring-offset-0 focus:ring-0 border-none bg-slate-200 bg-opacity-60 rounded-full w-auto p-2 outline-none text-gray-600">
          <option value="">Material</option>
          <option value="plastic">Plastic</option>
          <option value="metal">Metal</option>
        </select>

        {/* All Filters */}
        <select onChange={handleChange} className="focus:ring-offset-0 focus:ring-0 border-none bg-slate-200 bg-opacity-60 rounded-full w-auto p-2 outline-none text-gray-600">
          <option value="">All Filters</option>
          <option value="all">All</option>
        </select>
      </div>

      <div className="flex-none w-32">
        {/* Sort by */}
        <select onChange={handleChange} className="focus:ring-offset-0 focus:ring-0 border-none bg-slate-200 bg-opacity-60 rounded-full p-2 outline-none text-gray-600">
          <option value="">Sort by</option>
          <option value="newest">Newest</option>
          <option value="price">Price</option>
          <option value="rating">Rating</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
