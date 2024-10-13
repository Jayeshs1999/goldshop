import React from "react";
import {  useParams } from "react-router";
import { useGetProductsQuery } from "../slices/productsAPISlice";
// import useDeviceType from "../utils/DeviceType";
// import Paginate from "../components/Paginate";
// import Loader from "../components/Loader";
// import Message from "../components/Message";
// import ProductEditScreen from "./admin/ProductEditScreen";
import { Button, Form } from "react-bootstrap";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'



const Landing = () => {

  const { pageNumber, keyword, categoryName } = useParams();
  const { data } = useGetProductsQuery({
    keyword,
    pageNumber,
    categoryName,
  });
  console.log("data:", data);

  const submitHandler = async (e: any) => {};
  return (
    <div style={{ margin: "20px" }}>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="name" style={{ marginTop: "20px" }}>
          <Form.Label style={{fontWeight:'bold'}}>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Your Name"
            // value={name}
            // onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="description" className="my-4">
          <Form.Label style={{fontWeight:'bold'}}>Address</Form.Label>
          <Form.Control
            as="textarea" // Set "as" prop to "textarea"
            rows={3} // Specify the number of visible rows (adjust as needed)
            placeholder="Enter Your Address"
            // value={description}
            // onChange={(e) => setDescription(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="phonenumber" className="my-4">
              <Form.Label style={{fontWeight:'bold'}}>
                Phone Number
                {/* Please Add your phone number again &#128528; */}
              </Form.Label>
              <PhoneInput
                defaultCountry="IN"
                placeholder="Enter phone number"
                limitMaxLength={true}
                
                value={''}
                onChange={()=>{}}/>
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-4">
              <Form.Label style={{fontWeight:'bold'}}>Upload Photo </Form.Label>
              <Form.Control type="file" />
            </Form.Group>

            <Button
              className="mt-2 w-100"
              // disabled={showButtonDisable}
              type="submit"
              variant="warning"
            >
              Submit
            </Button>
            
        
      </Form>
    </div>
  );
};

export default Landing;
