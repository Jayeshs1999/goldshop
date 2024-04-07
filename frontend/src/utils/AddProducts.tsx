import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import Loader from "../components/Loader";
import categories, { bookConditions } from "./objects";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import storage from "./firebase";
import { toast } from "react-toastify";
import { useCreateProductMutation } from "../slices/productsAPISlice";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useSelector } from "react-redux";

const AddProducts = (props: any) => {
  const { userInfo } = useSelector((state: any) => state.auth);
  const prevProductLocation = localStorage.getItem("product_added_location");
  const prevShopName = localStorage.getItem("product_added_shopName");
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [shopName, setShopName] = useState( userInfo ? userInfo?.goldShopName : prevShopName ? prevShopName : "");
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState("");
  const [phoneNumber, setPhoneNumber] = useState<any>(
    userInfo.isAdmin ? "+918888585093" : ""
  );
  const [address, setAddress] = useState(
    userInfo ? userInfo?.address : prevProductLocation ? prevProductLocation : ""
  );
  const [bookType, setBookType] = useState("New Book");
  const [loader, setLoader] = useState(false);
  const [category, setCategory] = useState("Adventure stories");
  const [showButtonDisable, setShowButtonDisabled] = useState(true);
  const [createProduct, { isLoading: loadingCreate }] =
    useCreateProductMutation();

  const handleClosePopup = () => {
    props.handleDialog(false);
  };
  useEffect(() => {
    if (
      name !== "" &&
      price > 0 &&
      // brand !== "" &&
      // countInStock > 0 &&
      description !== "" &&
      // category !== "" &&
      image !== "" &&
      address !== "" &&
      shopName !== "" &&
      phoneNumber !== undefined
    ) {
      setShowButtonDisabled(false);
    } else {
      setShowButtonDisabled(true);
    }
  }, [
    name,
    price,
    // brand,
    // countInStock,
    description,
    // category,
    image,
    address,
    phoneNumber,
    shopName
    // bookType,
  ]);

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

  const submitHandler = async (e: any) => {
    e.preventDefault();
    const updatedProduct = {
      name,
      price: price,
      image: image,
      // brand,
      // category,
      // countInStock,
      description,
      address,
      phoneNumber,
      shopName
      // bookType,
    };
    localStorage.setItem("product_added_location", address);
    localStorage.setItem("product_added_shopName", shopName);

    if (phoneNumber.length === 13) {
      const result = await createProduct(updatedProduct);
      if (result) {
        // navigate('/productlist')
        props.handleDialog(false);
        toast.success("Book added Successfully");
      } else {
        toast.error("Something went wrong");
      }
    } else {
      toast.error("Please Enter valid Phone Number");
    }
  };

  return (
    <Modal
      show={true}
      size="lg"
      onHide={handleClosePopup}
      backdrop="static" // This prevents closing when clicking outside the modal
      keyboard={false} // This prevents closing when pressing the Esc key
    >
      <Modal.Header closeButton>
        <Modal.Title>Add Jewellery</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ height: "30em", overflow: "auto" }}>
        <>
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="price" className="my-2">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Price"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="image" className="my-2">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                readOnly
                placeholder="Enter Image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></Form.Control>
              <Form.Control
                type="file"
                // label="Choose file"
                onChange={uploadFileHandler}
              ></Form.Control>
            </Form.Group>
            {loader && <Loader />}

            <Form.Group controlId="description" className="my-2">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea" // Set "as" prop to "textarea"
                rows={3} // Specify the number of visible rows (adjust as needed)
                placeholder="Enter Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="phonenumber" className="my-2">
              <Form.Label>Phone Number</Form.Label>
              <PhoneInput
                readOnly={userInfo.isAdmin}
                defaultCountry="IN"
                placeholder="Enter phone number"
                value={phoneNumber}
                onChange={(e: any) => {
                  setPhoneNumber(e);
                }}
              />
            </Form.Group>

            <Form.Group controlId="shopName" className="my-2">
              <Form.Label>Jewellery Shop Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter shop name"
                value={shopName}
                onChange={(e) => setShopName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="address" className="my-3">
              <Form.Label>Shop Address</Form.Label>
              <Form.Control
                readOnly={userInfo.isAdmin}
                as="textarea" // Set "as" prop to "textarea"
                rows={3} // Specify the number of visible rows (adjust as needed)
                placeholder="Enter Shop Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button
              className="mt-2"
              style={{ marginRight: "10px" }}
              disabled={showButtonDisable}
              type="submit"
              variant="primary"
            >
              Create
            </Button>
            <Button
              className="mt-2"
              type="button"
              variant="outline-primary"
              onClick={(e) => props.handleDialog(false)}
            >
              Cancel
            </Button>
          </Form>
          {loadingCreate && <Loader />}
        </>
      </Modal.Body>
    </Modal>
  );
};

export default AddProducts;
