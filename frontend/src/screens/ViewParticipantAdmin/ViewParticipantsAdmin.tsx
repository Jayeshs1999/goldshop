import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, Form, Table } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FaEdit } from "react-icons/fa";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useGetProductsQuery } from "../../slices/productsAPISlice";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import e from "express";



const ViewAdminParticipantScreen = () => {
  const { pageNumber } = useParams();
  const [showVerificationPopup, setShowVerificationPopup] = useState(false);
  const { userInfo } = useSelector((state: any) => state.auth);
  const { data, isLoading, refetch, error, isFetching } = useGetProductsQuery({
    pageNumber,
    // userId: userInfo?._id,
  });
  const navigate = useNavigate();
  const [name, setName] =useState("");
  const [isTrue, setIsTrue] = useState(false);

  // Filter products based on the logged-in user's ID
//   const userProducts = data?.products?.filter(
//     (product: any) => product?.user === userInfo?._id
//   );

  console.log("userProducts :", data);

  const submitHandler = (e:any) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("fds");
    
    if(name==="JayeshBhauShevatkar") {
        setIsTrue(true)
    }else {
        setIsTrue(false)
    }
  }

  return (
<>
{
   !isTrue?<div style={{padding:'20px'}}> <Form onSubmit={submitHandler}>
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
      <Form.Group controlId="name">
        <Form.Label>Validate Admin</Form.Label>
        <Form.Control
          type="text"
          placeholder="Admin Passcode"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></Form.Control>
      </Form.Group>
      <Button
        className="mt-2"
        style={{ marginRight: "10px" }}
        // disabled={showButtonDisable}
        type="submit"
        variant="primary"
      >
        Validate Password
      </Button>
    </Form></div>:
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
     <div style={{height:'60vh',overflow:'auto'}}>
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
                   <th>ID</th>
                   <th>NAME</th>
                   <th>Phone Number</th>
                   <th>Address</th>
                   <th>Description</th>
                   <th>PHOTO</th>
                   {/* <th>UPDATE</th>
                   <th>DELETE</th> */}
                 </tr>
               </thead>
               <tbody>
                 {data?.products?.map((product: any,index:any) => (
                   <tr key={product._id}>
                     <td>{index+1}</td>
                     <td>{product.name}</td>
                     <td>{product.phoneNumber}</td>
                     <td>{product.address}</td>
                     <td>{product.description}</td>
                     <td><td><a href={product.image} target="_blank" rel="noopener noreferrer">Link</a></td>
                     </td>
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

}
</>

  



   
  );
};

export default ViewAdminParticipantScreen;