import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card";

const cardsData = [
    {
        title: "Card Title 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        img: (
            <img
                src="https://platform.cstatic-images.com/ad-creative/5e713c44-94ac-427d-8ef3-232e222d92ff/shopping-index-popular-searches-electric.png "
                alt="placeholder"
            />
        ),
    },
    {
        title: "Card Title 2",
        description:
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        title: "Card Title 3",
        description:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
        title: "Card Title 4",
        description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
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
    {
        title: "Card Title 9",
        description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
        title: "Card Title 10",
        description:
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        title: "Card Title 11",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        title: "Card Title 12",
        description:
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
];

const Cards = () => {
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
