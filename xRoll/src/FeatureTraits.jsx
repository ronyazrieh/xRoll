import React from "react";
import FeatureCard from "./FeatureCard";

const FeatureTraits = ({ traits }) => {
  return (
    <div>
      <h2>Features & Traits</h2>
      <div>
        {traits.map((trait, index) => (
          <FeatureCard key={index} name={trait.name} description={trait.description} />
        ))}
      </div>
    </div>
  );
};

export default FeatureTraits;
