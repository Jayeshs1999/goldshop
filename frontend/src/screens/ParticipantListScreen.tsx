import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useCreateProductMutation, useDeleteProductMutation, useGetProductsQuery } from "../slices/productsAPISlice";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { Table } from "react-bootstrap";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";



const ParticipantListScreen = () => {
  const { pageNumber } = useParams();
  const [showVerificationPopup, setShowVerificationPopup] = useState(false);
  const { userInfo } = useSelector((state: any) => state.auth);
  const { data, isLoading, refetch, error, isFetching } = useGetProductsQuery({
    pageNumber,
    // userId: userInfo?._id,
  });
  const navigate = useNavigate();

  // Filter products based on the logged-in user's ID
//   const userProducts = data?.products?.filter(
//     (product: any) => product?.user === userInfo?._id
//   );

  console.log("userProducts :", data);

  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      {isLoading || isFetching ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
              <div
        className="mb-2"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "4px",
          alignSelf: "start",
        }}
      >
        <ArrowBackIcon onClick={() => navigate("/")} />
        <h2 className="mb-0">Participants</h2>
      </div>
      <div style={{}}>
                  {/* <Link to={"/"} className="btn btn-light my-3">
            Go Back to home
          </Link> */}
          {data?.length === 0 ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* <img style={{ width: "25%" }} src={notfoundbooksicons} alt="" /> */}
              <h2>Jewellery Not Found</h2>
              <span>
                Please click on <strong>"Create Jewellery"</strong> to add your
                Jewellery
              </span>
            </div>
          ) : (
            <>
              <Table striped hover responsive className="table-sm">
                <thead>
                  <tr>
                    {/* <th>ID</th> */}
                    <th>NAME</th>
                    {/* <th>PRICE</th> */}
                    {/* <th>CATEGORY</th>
                    <th>BRAND</th> */}
                    {/* <th>UPDATE</th>
                    <th>DELETE</th> */}
                  </tr>
                </thead>
                <tbody>
                  {data?.products?.map((product: any) => (
                    <tr key={product?._id}>
                      {/* <td>{product._id}</td> */}
                      <td>{product?.name?.split(" ")?.[0]}</td>
                      {/* <td>{product.price}</td> */}
                      {/* <td>{product.category}</td>
                      <td>{product.brand}</td> */}
                    </tr>
                  ))}
                </tbody>
              </Table>
            </>
          )}

      </div>

        </>
      )}
    </div>
  );
};

export default ParticipantListScreen;