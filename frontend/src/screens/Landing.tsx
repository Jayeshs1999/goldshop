import React from "react";
import Card from "../utils/Card";
import { img1, img2 } from "../assets";
import { useNavigate, useParams } from "react-router";
import { useGetProductsQuery } from "../slices/productsAPISlice";
import useDeviceType from "../utils/DeviceType";
import Paginate from "../components/Paginate";
import Loader from "../components/Loader";
import Message from "../components/Message";

const Landing = () => {
  const deviceType = useDeviceType();
  const navigate = useNavigate();

  const { pageNumber, keyword, categoryName } = useParams();
  const { data, isLoading, error, isFetching } = useGetProductsQuery({
    keyword,
    pageNumber,
    categoryName,
  });
  console.log("data:", data)
  return (
    <>
      {isLoading || isFetching ? (
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
              position: "absolute",
              bottom: deviceType==='mobile'?'66px': "80px",
              left: "50%", // Use left: 50% to position the element relative to its parent
              transform: "translateX(-50%)", // Use transform to center the element horizontally
            }}
          >
            <Paginate
              comesFrom=""
              pages={data?.pages}
              page={data?.page}
              keyword={keyword ? keyword : ""}
              category={categoryName ? categoryName : ""}
            />
          </div>

          <div
            style={{
              display: deviceType === "mobile" ? "grid" : "flex",
              gridTemplateColumns: deviceType === "mobile" ? "1fr 1fr" : "",
              flexWrap: deviceType === "mobile" ? "initial" : "wrap",
              justifyContent: deviceType === "mobile" ? "" : "center",
              padding: deviceType === "mobile" ? "6px" : "20px",
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
        </>
      )}
    </>
  );
};

export default Landing;
