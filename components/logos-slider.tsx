"use client";

// import Autoplay from "embla-carousel-autoplay";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import { Logo } from "@/types/logo";

interface LogoSliderProps {
    logos: Logo[];
}

export default function LogoSlider({ logos }: LogoSliderProps) {
    return (
        <>
            <section className="container mx-auto w-full py-4">
                <div className="g:max-w-full px-16">
                    <Carousel
                        opts={{
                            loop: true,
                            align: "start",
                        }}>
                        <CarouselContent>
                            {logos.map((logo, index) => (
                                <CarouselItem
                                    key={index}
                                    className="sm:basis-1/2 md:basis-1/3 lg:basis-1/5">
                                    <div className="flex flex-col px-4 py-5 sm:p-6">
                                        <div className="mt-6 flex justify-center gap-3">
                                            <div>
                                                <p>{logo.icon}</p>
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 fill-black border-slate-600" />
                        <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 fill-black border-slate-600" />
                    </Carousel>
                </div>
            </section>
        </>
    );
}
