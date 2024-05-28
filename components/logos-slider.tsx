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
                                            <div className="text-center text-slate-600">
                                                <p>{logo.icon}</p>
                                                <p className="uppercase text-sm font-semibold pt-2">
                                                    {logo.name}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 fill-white text-white border-2 border-[#013248] bg-[#013248]" />
                        <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 fill-white text-white border-2 border-[#013248] bg-[#013248]" />
                    </Carousel>
                </div>
            </section>
        </>
    );
}
