import React, { useEffect, useState } from "react";
import PriceCard from "../PriceCard/PriceCard";

const Pricelist = () => {
  const [prices, Setprices] = useState([]);
  useEffect(() => {
    fetch("price.json")
      .then((res) => res.json())
      .then((data) => Setprices(data));
  }, []);
  return (
    <div className="mx-12">
      <h1 className="text-4xl bg-purple-300 text-center font-bold p-4 text-purple-950">
        Awesome Affordable Price
      </h1>
      <div className="grid md:grid-cols-3 gap-3">
        {prices.map((priceall) => (
          <PriceCard key={priceall.id} priceall={priceall}></PriceCard>
        ))}
      </div>
    </div>
  );
};

export default Pricelist;
