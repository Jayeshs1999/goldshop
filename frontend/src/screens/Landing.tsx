import React from "react";
import Card from "../utils/Card";
import { img1, img2 } from "../assets";
import { useNavigate, useParams } from "react-router";
import { useGetProductsQuery } from "../slices/productsAPISlice";
import useDeviceType from "../utils/DeviceType";

const Landing = () => {
  const deviceType = useDeviceType();
  const navigate = useNavigate();
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
  const { pageNumber, keyword, categoryName } = useParams();
  const { data, isLoading, error, isFetching } = useGetProductsQuery({
    keyword,
    pageNumber,
    categoryName,
  });
  console.log("data:",data)
  return (
    <div
      style={{
        display: deviceType === "mobile" ? "grid" : "flex",
        gridTemplateColumns: deviceType === "mobile" ? "1fr 1fr" : "",
        flexWrap: deviceType === "mobile" ? "initial" : "wrap",
        justifyContent: deviceType === "mobile" ? "" : "center",
        padding: deviceType==='mobile'? '6px' :"20px",
      }}
    >
      {data?.products.map((data: any) => (
        <Card
          handleClick={() => {
            window.scroll(0, 0);
            navigate(`/productDetail/${data?._id}`);
          }}
          imageSrc={data?.image}
          heading={data?.name}
          subtitle={data?.price}
          address={data?.address}
        />
      ))}
    </div>
  );
};

export default Landing;
