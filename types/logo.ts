import React from "react";

export type Logo = {
    id: number;
    icon: React.ReactNode;
    name: string;
};

export type CardData = {
    title: string;
    description: string;
    img: React.ReactNode;
};
