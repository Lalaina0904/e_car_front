import Cards from "@/components/cards";
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

const logos = [
    {
        id: 1,
        name: "Tesla",
        icon: <SiTesla size="60" className="text-slate-500" />,
    },
    {
        id: 2,
        name: "Nissan",
        icon: <SiNissan size="60" className="text-slate-500" />,
    },
    {
        id: 3,
        name: "Bnw",
        icon: <SiBmw size="60" className="text-slate-500" />,
    },
    {
        id: 4,
        name: "Acura",
        icon: <SiAcura size="60" className="text-slate-500" />,
    },
    {
        id: 6,
        name: "Toyota",
        icon: <SiToyota size="60" className="text-slate-500" />,
    },
    {
        id: 5,
        name: "Volkswagen",
        icon: <SiVolkswagen size="60" className="text-slate-500" />,
    },
];

export default function Home() {
    return (
        <main>
            <Hero />
            <LogoSlider logos={logos} />
            <Filters />
            <Cards />
        </main>
    );
}
