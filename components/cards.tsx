"use client";
import React, { useEffect } from "react";
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
    const [cardBrand, setCarBrand] = useState<CardData[]>([]);
    const [pageNumber, setPageNumber] = useState<number>(0);

    useEffect(() => {
        fetchData(pageNumber).then((data) => {
            if (data && data.length > 0) {
                setCarBrand(data);
            } else {
                setPageNumber((prevPageNumber) => prevPageNumber - 1);
            }
        });
        console.log(cardBrand);
    }, [pageNumber]);

    const handlePreviousBtn = () => {
        let actualNumber = pageNumber;
        if (pageNumber > 0) {
            actualNumber -= 1;
            setPageNumber(actualNumber);
        }
    };
    console.log(pageNumber);
    console.log(cardBrand.length);

    const handleNextBtn = () => {
        let actualNumber = pageNumber;
        if (cardBrand.length > 0) {
            actualNumber += 1;
            setPageNumber(actualNumber);
        }
    };
    return (
        <div className="container mx-auto my-4">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
                {/* //faire une map pour afficher les cards */}
                {cardsData.map((card, index) => (
                    <Card key={index}>
                        <CardHeader>
                            {/* <CardTitle>{card.title}</CardTitle> */}
                            {card.img}
                        </CardHeader>
                        <CardContent>
                            <CardDescription>
                                {card.description}
                            </CardDescription>
                        </CardContent>
                        <CardFooter>
                            <button className="btn btn-primary">
                                Make an Appointment
                            </button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Cards;
