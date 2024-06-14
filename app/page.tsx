"use client"
import Cards from "@/components/cards";
import Faq from "@/components/faq";
import Filters from "@/components/filters";
import Hero from "@/components/hero";
import LogoSlider from "@/components/logos-slider";

import {
  SiTesla,
  SiNissan,
  SiToyota,
  SiBmw,
  SiAcura,
  SiVolkswagen,
} from "react-icons/si";

import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { useState } from "react";




const logos = [
  {
    id: 1,
    name: "tesla",
    icon: <SiTesla size="60" />,
  },
  {
    id: 2,
    name: "nissan",
    icon: <SiNissan size="60" />,
  },
  {
    id: 3,
    name: "bmw",
    icon: <SiBmw size="60" />,
  },
  {
    id: 5,
    name: "volkswagen",
    icon: <SiVolkswagen size="60" />,
  },
  {
    id: 4,
    name: "acura",
    icon: <SiAcura size="60" />,
  },
  {
    id: 6,
    name: "toyota",
    icon: <SiToyota size="60" />,
  },
];




//car list
const cars = [
  { id: "1", model: "Model S", price: 100000, motorType: "Electric", power: 100, pics: ["/imgs/electric.png"] },
   
  
  
  {
     id: "2", model: "Model X", price: 120000, motorType: "Electric", power: 120, pics: ["/imgs/pickups.png"] ,

  },
  {
      id: "3", model: "Model 3", price: 80000, motorType: "Electric", power: 80, pics: ["/imgs/redesigned.png"] ,
  },
  {
    id: "4", model: "Model Y", price: 90000, motorType: "Electric", power: 90, pics: ["/imgs/compare.png"]
  },
];

export default function Home() {
   const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };
  

  return (
    <>
      <Nav onSearch={handleSearch} />
      <main>
        <Hero />
        <LogoSlider logos={logos} />
        <Filters onSelect={handleSearch} />
        <Cards searchQuery={searchQuery}/>
        <Faq />
      </main>
      <Footer />
    </>
  );
}
