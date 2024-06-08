"use client";
import React, { useState } from 'react';
import axios from 'axios';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Logo } from '@/types/logo';
import Link from 'next/link';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface LogoSliderProps {
  logos: Logo[];
}

const LogoSlider: React.FC<LogoSliderProps> = ({ logos }) => {
  const [selectedLogo, setSelectedLogo] = useState<Logo | null>(null);
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchCars = async (brand: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://e-commerce-back-2tyn.onrender.com/cars/${brand}?pageNumber=0`
      );
      setCars(response.data);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogoClick = (logo: Logo) => {
    setSelectedLogo(logo);
    fetchCars(logo.name);
  };

  return (
    <>
      <section className="container mx-auto w-full py-4">
        <div className="g:max-w-full px-16">
          <Carousel>
            <CarouselContent>
              {logos.map((logo, index) => (
                <Dialog key={index}>
                  <CarouselItem className="sm:basis-1/2 md:basis-1/3 lg:basis-1/5">
                    <div className="flex flex-col px-4 py-5 sm:p-6">
                      <div className="mt-6 flex justify-center gap-3">
                        <div className="text-center text-slate-600">
                          <DialogTrigger asChild>
                            <Link href="#" onClick={() => handleLogoClick(logo)}>
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

                  <DialogContent className="max-w-[95%] h-[90vh]">
                    <DialogHeader>
                      <DialogTitle>{logo.name} Cars</DialogTitle>
                      {loading && <p>Loading...</p>}
                      {error && <p>Error: {error.message}</p>}
                      <DialogDescription>
                        {cars.length > 0 ? (
                          cars.map((car) => (
                            <div key={car.id} className="border-b py-2">
                              <h3 className="text-lg font-bold">{car.model}</h3>
                              <p>Price: {car.price}</p>
                              <p>Motor Type: {car.motorType}</p>
                              <p>Power: {car.power}</p>
                              <img src={car.pics[0]} alt={car.model} />
                            </div>
                          ))
                        ) : (
                          <p>No cars available for this brand.</p>
                        )}
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
};

export default LogoSlider;
