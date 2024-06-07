import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card";

import { Car } from "@/types/car";
import { Button } from "./ui/button";

const cars = [
    {
        title: "Card Title 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        img: <img src="/imgs/electric.png" alt="electric" />,
    },
    {
        title: "Card Title 2",
        description:
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: <img src="/imgs/pickups.png" alt="" />,
    },
    {
        title: "Card Title 3",
        description:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        img: <img src="/imgs/redesigned.png" alt="" />,
    },
    {
        title: "Card Title 4",
        description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        img: <img src="/imgs/suvs.png" alt="" />,
    },
    {
        title: "Card Title 5",
        description:
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        title: "Card Title 6",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        title: "Card Title 7",
        description:
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        title: "Card Title 8",
        description:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
];

const Cards = () => {
    return (
        <>
            <section className="container mx-auto w-full py-4">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {cars.map((car, index) => (
                        <Card key={index} className="border-[#013248]">
                            <CardHeader>{car.img}</CardHeader>
                            <CardContent>
                                <CardTitle className="text-md">
                                    {car.title}
                                </CardTitle>
                                <CardDescription>
                                    {car.description}
                                </CardDescription>
                            </CardContent>

                            <CardFooter className="flex gap-2 flex-wrap">
                                <Button className="bg-[#013248] font-semibold text-white uppercase text-xs">
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
