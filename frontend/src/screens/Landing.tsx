import React from "react";
import Card from "../utils/Card";
import { img1, img2 } from "../assets";

const Landing = () => {
  const goldArray = [
    {
      imageSrc: img1,
      heading: "Ring",
      subtitle: "Starting from 760000",
    },
    {
      imageSrc: img2,
      heading: "Gold Phone",
      subtitle: "Starting from 760000",
    },
    {
      imageSrc: img1,
      heading: "Gold Laptop",
      subtitle: "Starting from 760000",
    },
    {
      imageSrc: img2,
      heading: "Watch",
      subtitle: "Starting from 30000",
    },
    {
      imageSrc: img1,
      heading: "Table",
      subtitle: "Starting from 40000",
    },
    {
      imageSrc: img2,
      heading: "Gold Laptop",
      subtitle: "Starting from 760000",
    },
    {
      imageSrc: img1,
      heading: "Watch",
      subtitle: "Starting from 30000",
    },
    {
      imageSrc: img2,
      heading: "Table",
      subtitle: "Starting from 40000",
    },
    {
      imageSrc: img1,
      heading: "Beautiful Card",
      subtitle: "This is a beautiful card with a fixed image.",
    },
  ];
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {goldArray.map((data) => (
        <Card
          imageSrc={data?.imageSrc}
          heading={data?.heading}
          subtitle={data?.subtitle}
        />
      ))}
    </div>
  );
};

export default Landing;
