import React from "react";
import { img1, img2 } from "../assets";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import Card from "../utils/Card";

const ProductDetail = ({ image, title, description, price }: any) => {
  const navigate = useNavigate();
  const product = {
    image: "product-image-url.jpg",
    title: "Product Title",
    description:
      "Why do we Where, eahis book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.Where can I get some? There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc",
    price: 100,
  };
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
  ];
  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "26px",
          // background: "linear-gradient(45deg, black, transparent)",
        }}
        className="product-detail"
      >
        <div style={{ width: "40%" }}>
          <img
            style={{ width: "100%", height: "380px", objectFit: "fill" }}
            src={img2}
            alt={product.title}
          />
        </div>
        <div style={{ width: "60%" }}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <Button onClick={handleInquiry} variant="contained" color="error">
            Inquiry Now
          </Button>
          {/* <button onClick={handleInquiry}>Get Inquiry</button> */}
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <h2>Related Products</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            // justifyContent: "center",
          }}
        >
          {goldArray.map((data) => (
            <Card
              handleClick={() => {
                window.scroll(0, 0);
                navigate("/productDetail");
              }}
              imageSrc={data?.imageSrc}
              heading={data?.heading}
              subtitle={data?.subtitle}
            />
          ))}
        </div>
      </div>
    </>
  );
};

const handleInquiry = () => {
  // Implement your inquiry logic here
  console.log("Inquiry button clicked");
};

export default ProductDetail;
