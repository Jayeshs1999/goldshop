import React from "react";
import { img1, img2 } from "../assets";
import { Button, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router";
import Card from "../utils/Card";
import { useGetProductDetailsQuery } from "../slices/productsAPISlice";
import { Link } from "react-router-dom";
import useDeviceType from "../utils/DeviceType";
import Loader from "../components/Loader";
import Message from "../components/Message";

const ProductDetail = ({ image, title, description, price }: any) => {
  const deviceType = useDeviceType();
  const { id: productId } = useParams();
  // const product = {
  //   image: "product-image-url.jpg",
  //   title: "Product Title",
  //   description:
  //     "Why do we Where, eahis book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.Where can I get some? There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc",
  //   price: 100,
  // };
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
    const {
      data: products,
      isLoading,
      refetch,
      error,
    } = useGetProductDetailsQuery(productId);
  
  const buttonAndPrice = () => {
    return (
      <div>
        <p>Price: Rs. {products?.price}</p>
        <p>
          Shop Name: <span style={{color:'red', fontSize:'20px'}}>{products?.shopName}</span>
        </p>
        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: deviceType === "mobile" ? "center" : "start",
            marginBottom: "20px",
          }}
        >
          <Button
            onClick={handleInquiry}
            variant="contained"
            color="error"
            style={{ fontWeight: "bold" }}
          >
            Inquiry Now
          </Button>
          <Button
            onClick={() => {
              window.open(`tel:${products?.phoneNumber}`);
            }}
            variant="contained"
            color="primary"
            style={{ fontWeight: "bold" }}
          >
            Call Now
          </Button>
        </div>
      </div>
    );
  }
  console.log("data:",products)
  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <Link to={"/"} className="btn btn-light my-3">
        Go Back to home
      </Link>
      {isLoading ? (
        <div style={{ marginTop: "5%" }}>
          <Loader />
        </div>
      ) : error ? (
        <Message variant="danger">
          something_went_wrong_please_refresh_the_page
        </Message>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              gap: "26px",
              flexDirection: deviceType === "mobile" ? "column" : "row",
              // background: "linear-gradient(45deg, black, transparent)",
            }}
            className="product-detail"
          >
            <div style={{ width: deviceType === "mobile" ? "100%" : "40%" }}>
              <img
                style={{
                  width: "100%",
                  height: deviceType === "mobile" ? "250px" : "380px",
                  objectFit: "fill",
                }}
                src={products?.image}
                alt={products?.name}
              />
            </div>
            <div style={{ width: deviceType === "mobile" ? "100%" : "60%" }}>
              <h2>{products?.name}</h2>
              {deviceType === "mobile" && buttonAndPrice()}
              <p style={{ wordBreak: "break-word" }}>{products?.description}</p>
              {deviceType !== "mobile" && buttonAndPrice()}

              {/* <button onClick={handleInquiry}>Get Inquiry</button> */}
            </div>
          </div>
          <div style={{ marginTop: "20px" }}>
            <h2>Related Products</h2>
            {/* <div
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
        </div> */}
            <h1
              style={{ textAlign: "center", marginTop: "50px", color: "green" }}
            >
              Comming Soon
            </h1>
          </div>
        </>
      )}
    </div>
  );
};

const handleInquiry = () => {
  // Implement your inquiry logic here
  console.log("Inquiry button clicked");
};

export default ProductDetail;
