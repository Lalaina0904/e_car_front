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
          <option value="">Motor type</option>
          <option value="plastic">diesel</option>
          <option value="metal">electric</option>
        </select>

      
      </div>
    </div>
  );
};

export default Filters;
