"use client";
import React, { useEffect, useState } from "react";
import { get } from "@/utils/apiUtils";
import { urlBase } from "@/utils/urlBase";
import { Car } from "@/components/carCard";

interface CardProps {
  searchQuery: string;
}
type Car = {
  id:string,
  model: string,
  price: number,
  motorType: string,
  power: number,
  description:string,
  pics: string[]
  
}

const Cards = ({ searchQuery }: CardProps) => {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // État de chargement

  useEffect(() => {
    const getCars = async () => {
      setLoading(true); // Commence à charger les données
      try {
        let response;
        if (searchQuery == null || searchQuery === "") {
          response = await get(urlBase + "/cars");
        } else {
          response = await get(urlBase + "/cars?query=" + searchQuery);
        }
        const data = await response;
        if (Array.isArray(data)) {
          setCars(data);
        } else {
          console.error("Response is not an array:", data);
        }
      } catch (error) {
        console.error("Error fetching cars:", error);
      } finally {
        setLoading(false); // Fin du chargement des données
      }
    };

    getCars();
  }, [searchQuery]);

  return (
    <>
      <section className="container mx-auto w-full py-4">
        {/* Affichage de l'état de chargement */}
        {loading ? (
          <div className="flex justify-center items-center h-32">
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-gray-400"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {cars.length === 0 ? (
              <div className="text-center text-2xl">No cars found</div>
            ) : (
              cars.map((car, index) => (
                <Car
                  id={car.id}
                  model={car.model}
                  price={car.price}
                  motorType={car.motorType}
                  power={car.power}
                  pics={car.pics}
                  key={index}
                  description={car.description}
                />
              ))
            )}
          </div>
        )}
      </section>
    </>
  );
};

export default Cards;
