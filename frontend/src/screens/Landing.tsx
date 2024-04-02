import React from "react";
import Card from "../utils/Card";
import goldImage from "../assets/px.jpg";

const Landing = () => {
  const goldArray = [
    {
      imageSrc: goldImage,
      heading: "Beautiful Card",
      subtitle: "This is a beautiful card with a fixed image.",
    },
    {
      imageSrc: goldImage,
      heading: "Beautiful Card",
      subtitle: "This is a beautiful card with a fixed image.",
    },
    {
      imageSrc: goldImage,
      heading: "Beautiful Card",
      subtitle: "This is a beautiful card with a fixed image.",
    },
    {
      imageSrc: goldImage,
      heading: "Beautiful Card",
      subtitle: "This is a beautiful card with a fixed image.",
    },
    {
      imageSrc: goldImage,
      heading: "Beautiful Card",
      subtitle: "This is a beautiful card with a fixed image.",
    },
    {
      imageSrc: goldImage,
      heading: "Beautiful Card",
      subtitle: "This is a beautiful card with a fixed image.",
    },
    {
      imageSrc: goldImage,
      heading: "Beautiful Card",
      subtitle: "This is a beautiful card with a fixed image.",
    },
    {
      imageSrc: goldImage,
      heading: "Beautiful Card",
      subtitle: "This is a beautiful card with a fixed image.",
    },
    {
      imageSrc: goldImage,
      heading: "Beautiful Card",
      subtitle: "This is a beautiful card with a fixed image.",
    },
    {
      imageSrc: goldImage,
      heading: "Beautiful Card",
      subtitle: "This is a beautiful card with a fixed image.",
    },
    {
      imageSrc: goldImage,
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
