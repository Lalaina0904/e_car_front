import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card";

import { Button } from "./ui/button";

const cars = [
    {
        title: "Electric car",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        img: <img src="/imgs/electric.png" alt="electric" />,
    },
    {
        title: "Pickups car",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        img: <img src="/imgs/pickups.png" alt="" />,
    },
    {
        title: "Redesigned",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        img: <img src="/imgs/redesigned.png" alt="" />,
    },
    {
        title: "Card Title 4",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        img: <img src="/imgs/compare.png" alt="" />,
    },
];

const Cards = () => {
    return (
        <>
            <section className="container mx-auto w-full py-4">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {cars.map((car, index) => (
                        <Card key={index} className="border-[#4a7b92]">
                            <CardHeader>{car.img}</CardHeader>
                            <CardContent>
                                <CardTitle className="text-md">
                                    {car.title}
                                </CardTitle>
                                <CardDescription>
                                    {car.description}
                                </CardDescription>
                            </CardContent>

                            <CardFooter>
                                <Button className="w-full bg-[#013248] font-semibold text-white uppercase text-xs">
                                    Details
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Cards;
