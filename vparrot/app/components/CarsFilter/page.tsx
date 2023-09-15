import React, { useState, useEffect } from "react";
import axios from "axios";
import CarCard from "../CarCardView/page";

type Props = {
  price: number;
  year: number;
  km: number;
};

type CarCardProps = {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  km: number;
  year: number;
};

function CarFilter() {
  const [cardData, setCardData] = useState<CarCardProps[]>([]);
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");
  const [minYear, setMinYear] = useState<string>("");
  const [maxYear, setMaxYear] = useState<string>("");
  const [minKm, setMinKm] = useState<string>("");
  const [maxKm, setMaxKm] = useState<string>("");
  const [filteredCars, setFilteredCars] = useState<CarCardProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/cars");
        setCardData(response.data);
        setFilteredCars(response.data); // Au départ, affichez toutes les voitures
      } catch (error) {
        console.error("Erreur de récupération des données:", error);
      }
    };

    fetchData();
  }, []);

  const applyFilters = () => {
    const filtered = cardData.filter((data: CarCardProps) => {
      const price = data.price;
      const year = data.year;
      const km = data.km;
      return (
        (minPrice === "" || price >= parseFloat(minPrice)) &&
        (maxPrice === "" || price <= parseFloat(maxPrice)) &&
        (minYear === "" || year >= parseInt(minYear)) &&
        (maxYear === "" || year <= parseInt(maxYear)) &&
        (minKm === "" || km >= parseFloat(minKm)) &&
        (maxKm === "" || km <= parseFloat(maxKm))
      );
    });

    setFilteredCars(filtered); // Met à jour les voitures filtrées
  };

  const resetFilters = () => {
    setMinPrice("");
    setMaxPrice("");
    setMinYear("");
    setMaxYear("");
    setMinKm("");
    setMaxKm("");
    setFilteredCars(cardData); // Réinitialise les filtres pour afficher toutes les voitures
  };

  return (
    <div className="m-4">
      <div className="collapse collapse-arrow bg-base-200">
        <input type="checkbox" />
        <p className="collapse-title text-xl font-medium">Filtrer les annonces</p>
        <div className="collapse-content">
          <div className="flex gap-4">
            <div>
              <label htmlFor="minPrice">Prix Minimum:</label>
              <input
                className="input input-bordered w-full max-w-xs"
                type="text"
                id="minPrice"
                name="minPrice"
                placeholder=""
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="maxPrice">Prix Maximum:</label>
              <input
                className="input input-bordered w-full max-w-xs"
                type="text"
                id="maxPrice"
                name="maxPrice"
                placeholder=""
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="minYear">Année Minimum:</label>
              <input
                className="input input-bordered w-full max-w-xs"
                type="text"
                id="minYear"
                name="minYear"
                placeholder=""
                value={minYear}
                onChange={(e) => setMinYear(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="maxYear">Année Maximum:</label>
              <input
                className="input input-bordered w-full max-w-xs"
                type="text"
                id="maxYear"
                name="maxYear"
                placeholder=""
                value={maxYear}
                onChange={(e) => setMaxYear(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="minKm">Kilométrage Minimum:</label>
              <input
                className="input input-bordered w-full max-w-xs"
                type="text"
                id="minKm"
                name="minKm"
                placeholder=""
                value={minKm}
                onChange={(e) => setMinKm(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="maxKm">Kilométrage Maximum:</label>
              <input
                className="input input-bordered w-full max-w-xs"
                type="text"
                id="maxKm"
                name="maxKm"
                placeholder=""
                value={maxKm}
                onChange={(e) => setMaxKm(e.target.value)}
              />
            </div>
          </div>
          <div className="flex m-4 gap-4 justify-center">
            <button className="btn btn-primary" onClick={applyFilters}>
              Appliquer les filtres
            </button>
            <button className="btn btn-primary" onClick={resetFilters}>
              Réinitialiser les filtres
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 text-center justify-center m-4">
        {filteredCars.map((data) => (
          <CarCard
            key={data.id}
            id={data.id}
            imageUrl={data.imageUrl}
            title={data.title}
            description={data.description}
            price={data.price}
            km={data.km}
            year={data.year}
          />
        ))}
      </div>
    </div>
  );
}

export default CarFilter;
