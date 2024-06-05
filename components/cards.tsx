'use client'
import React, { useEffect } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card";
import { fetchData } from '@/app/utils/helper';
import { useState } from "react";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

interface CardData {
    name: string
}
interface CardsProps {
    cardsData: CardData[];
}

const Cards = () => {
    const [cardBrand, setCarBrand] = useState<CardData[]>([]);
    const [pageNumber, setPageNumber] = useState<number>(0);

    useEffect(() => {
        fetchData(pageNumber)
            .then((data) => {
                if (data && data.length > 0) {
                    setCarBrand(data);
                } else {
                    setPageNumber(prevPageNumber => prevPageNumber - 1);
                }
            })
        console.log(cardBrand)
    }, [pageNumber])

    const handlePreviousBtn = () => {
        let actualNumber = pageNumber;
        if (pageNumber > 0) {
            actualNumber -= 1;
            setPageNumber(actualNumber);
        }
    }
    console.log(pageNumber)
    console.log(cardBrand.length)

    const handleNextBtn = () => {
        let actualNumber = pageNumber;
        if (cardBrand.length > 0) {
            actualNumber += 1;
            setPageNumber(actualNumber);
        }
    }
    return (
        <div className="container mx-auto my-4">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
                {/* //faire une map pour afficher les cards */}
                {cardBrand.map((card, index) => (
                    <Card key={index}>
                        <CardHeader>
                            <CardTitle>{card.name}</CardTitle>
                        </CardHeader>
                        <CardFooter>
                            <button className="btn btn-primary">
                                Make an Appointment
                            </button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
            <div className="flex flex-row gap-12 justify-end py-5">
                <button
                    className="flex flex-row items-center hover:scale-95 duration-75"
                    onClick={handlePreviousBtn}>
                    <GrFormPrevious /> previous
                </button>
                <button
                    disabled={!cardBrand.length}
                    className="flex flex-row items-center hover:scale-95 duration-75"
                    onClick={handleNextBtn}>
                    next <GrFormNext />
                </button>
            </div>
        </div>
    );
};

export default Cards;
