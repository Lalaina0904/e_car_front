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
import Link from "next/link";

interface LogoSliderProps {
    logos: Logo[];
}

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

export default function LogoSlider({ logos }: LogoSliderProps) {
    return (
        <>
            <section className="container mx-auto w-full py-4">
                <div className="g:max-w-full px-16">
                    <Carousel>
                        <CarouselContent>
                            {logos.map((logo, index) => (
                                <Dialog>
                                    {/* ---------- item ----------- */}

                                    <CarouselItem
                                        key={index}
                                        className="sm:basis-1/2 md:basis-1/3 lg:basis-1/5">
                                        <div className="flex flex-col px-4 py-5 sm:p-6">
                                            <div className="mt-6 flex justify-center gap-3">
                                                <div className="text-center text-slate-600">
                                                    <DialogTrigger asChild>
                                                        <Link href="">
                                                            <div className="flex justify-center">
                                                                {logo.icon}
                                                            </div>
                                                            <p className="uppercase text-sm font-semibold pt-2">
                                                                {logo.name}
                                                            </p>
                                                        </Link>
                                                    </DialogTrigger>
                                                </div>
                                            </div>
                                        </div>
                                    </CarouselItem>
                                    {/* -------- content ----------- */}

                                    <DialogContent className="max-w-[95%] h-[90vh]">
                                        <DialogHeader>
                                            <DialogTitle>
                                                {logo.name} Cars
                                            </DialogTitle>
                                            <DialogDescription>
                                                Make changes to your profile
                                                here. Click save when you're
                                                done.
                                            </DialogDescription>
                                        </DialogHeader>
                                    </DialogContent>
                                </Dialog>
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
