import React, { useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router";
import { useCreateProductMutation, useGetProductsQuery } from "../slices/productsAPISlice";
// import useDeviceType from "../utils/DeviceType";
// import Paginate from "../components/Paginate";
// import Loader from "../components/Loader";
// import Message from "../components/Message";
// import ProductEditScreen from "./admin/ProductEditScreen";
import { Button, Form } from "react-bootstrap";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { toast } from "react-toastify";
import storage from "../utils/firebase";
import { getDownloadURL, ref, uploadBytes } from "@firebase/storage";
import Loader from "../components/Loader";
import './Landing.css';



const Landing = () => {

  const { pageNumber, keyword, categoryName } = useParams();
  const { data } = useGetProductsQuery({
    keyword,
    pageNumber,
    categoryName,
  });

  const [createProduct, { isLoading: loadingCreate }] =
  useCreateProductMutation();

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [phoneNumber, setPhoneNumber] = useState<any>("");
  const [address, setAddress] = useState("");
  console.log("data:", data);
  const [loader, setLoader] = useState(false);
  const navigate =useNavigate();
  const [isDisabled,setIsDisabled] = useState(true);


  useEffect(()=>{

    if(name && image &&  description && address && phoneNumber ) {
      setIsDisabled(false)
    }else {
      setIsDisabled(true)
    }

  },[name,image,description,phoneNumber,address])


  const submitHandler = async (e: any) => {
    e.preventDefault();

    const updatedProduct = {
      name,
      image: image,
      description,
      address,
      phoneNumber,
      // bookType,
    };

    if (phoneNumber.length === 13) {
      const result = await createProduct(updatedProduct);
      if (result) {
        // navigate('/productlist')
        toast.success("Form submitted successfully!");
        navigate('/success')
      } else {
        toast.error("Something went wrong");
      }
    } else {
      toast.error("Please Enter valid Phone Number");
    }
  };

  const uploadFileHandler = async (e: any) => {
    try {
      setLoader(true);
      const storageRef = ref(storage, `images/${e.target.files[0].name}`);
      await uploadBytes(storageRef, e.target.files[0]);
      const downloadURL = await getDownloadURL(storageRef);
      // setImageURL(downloadURL);
      setImage(downloadURL);
      if (downloadURL) {
        toast.success("Image uploaded successfully!");
      }
      setLoader(false);
    } catch (error) {
      setLoader(false);
      toast.error("Something went wrong");
    }
  };


  return (
    <div style={{ margin: "20px" }}>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="name" style={{ marginTop: "20px" }}>
          <Form.Label style={{fontWeight:'bold'}}>Name <span style={{color:'red'}}>*</span></Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="description" className="my-4">
          <Form.Label style={{fontWeight:'bold'}}>Address<span style={{color:'red'}}>*</span></Form.Label>
          <Form.Control
            as="textarea" // Set "as" prop to "textarea"
            rows={3} // Specify the number of visible rows (adjust as needed)
            placeholder="Enter Your Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="phonenumber" className="my-4">
              <Form.Label style={{fontWeight:'bold'}}>
                Phone Number<span style={{color:'red'}}>*</span>
                {/* Please Add your phone number again &#128528; */}
              </Form.Label>
              <PhoneInput
                defaultCountry="IN"
                countries={['IN']}
                placeholder="Enter phone number"
                limitMaxLength={true}
                value={''}
                onChange={(e: any) => {
                  setPhoneNumber(e);
                }}/>
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-4">
              <Form.Label style={{fontWeight:'bold'}}>Upload best photo here<span style={{color:'red'}}>*</span></Form.Label>
              {/* <Form.Control
                type="text"
                readOnly
                placeholder="Enter Image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></Form.Control> */}
              <Form.Control
              className="custom-file-input"
                type="file"
                // label="Choose file"
                onChange={uploadFileHandler}
              ></Form.Control>
            </Form.Group>
            {loader && <Loader />}

            <Form.Group controlId="description" className="my-4">
          <Form.Label style={{fontWeight:'bold'}}>Description<span style={{color:'red'}}>*</span></Form.Label>
          <Form.Control
            as="textarea" // Set "as" prop to "textarea"
            rows={3} // Specify the number of visible rows (adjust as needed)
            placeholder="Enter photo description (if any)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></Form.Control>
          <div className="mt-3" style={{fontWeight:'bold'}}><span style={{color:'red'}}>*</span> All fields are required</div>
        </Form.Group>

            <Button
              className="mt-2 w-100"
              disabled={isDisabled}
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
