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




const logos = [
  {
    id: 1,
    name: "Tesla",
    icon: <SiTesla size="60" />,
  },
  {
    id: 2,
    name: "Nissan",
    icon: <SiNissan size="60" />,
  },
  {
    id: 3,
    name: "Bnw",
    icon: <SiBmw size="60" />,
  },
  {
    id: 5,
    name: "Volkswagen",
    icon: <SiVolkswagen size="60" />,
  },
  {
    id: 4,
    name: "Acura",
    icon: <SiAcura size="60" />,
  },
  {
    id: 6,
    name: "Toyota",
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
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <LogoSlider logos={logos} />
        <Filters />
        <Cards/>
        <Faq />
      </main>
      <Footer />
    </>
  );
}
