import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import MHWTextField from "./MHWTextField";
import MHWButton from "./MHWButton";
import { Link, useNavigate } from "react-router-dom";
import googleLogo from "../assets/google.svg";
import MHWAutoSelect from "./MHWAutoSelect";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

interface AddUpdateTableDialogProps {
  open: boolean;
  prevOrderData: any;
  comesFrom: string;
  handleClose: () => void;
  handleOrder: (orderData: any) => void;
}

export default function AddUpdateTableDialog({
  open = false,
  prevOrderData,
  comesFrom,
  handleClose,
  handleOrder,
}: AddUpdateTableDialogProps) {
  console.log("prevOrderData:", prevOrderData);
  const [orderData, setOrderData] = React.useState<any>(
    prevOrderData.tableName
      ? prevOrderData
      : {
          tableName: "",
          orderItems: [
            {
              menu: "",
              qty: "",
              price: 0,
            },
          ],
        }
  );

  const totalOrder = prevOrderData?.orderItems?.reduce(
    (total: number, item: any) => {
      // Convert qty to numbers before summing
      const qty = parseInt(item?.qty || "0", 10) * item?.price;
      // Sum the qty values
      return total + qty;
    },
    0
  ); // Initial value for accumulator is 0

  const handleChange = (
    index: number,
    fieldName: string,
    value: string,
    price?: number
  ) => {
    setOrderData((prevData: any) => {
      const updatedOrderItems = prevData.orderItems.map((item: any, i: any) => {
        if (i === index) {
          // if (fieldName === "menu") {
          return {
            ...item,
            [fieldName]: value,
            price: fieldName === "menu" ? price : item?.price,
          };
          // }
        }
        return item;
      });

      return {
        ...prevData,
        orderItems: updatedOrderItems,
      };
    });
  };
  const handleDeleteItem = (indexToDelete: number) => {
    setOrderData((prevState: any) => {
      const updatedOrderItems = [...prevState.orderItems];
      updatedOrderItems.splice(indexToDelete, 1);
      return {
        ...prevState,
        orderItems: updatedOrderItems,
      };
    });
  };
  React.useEffect(() => {
    if (open) {
      setOrderData(
        prevOrderData.tableName
          ? prevOrderData
          : {
              tableName: "",
              orderItems: [{ menu: "", qty: "", price: 0 }],
            }
      );
    }
  }, [open]);

  const isCreateOrderDisabled = () => {
    for (const orderItem of orderData.orderItems) {
      if (
        orderData?.tableName === "" ||
        orderItem.menu?.trim().length === 0 ||
        orderItem.menu === undefined ||
        orderItem.qty?.trim().length === 0 ||
        orderItem.qty === undefined
      ) {
        return true;
      }
    }
    return false;
  };

  const handleTableNo = (e: any, fieldName: any) => {
    setOrderData((prevData: any) => {
      return {
        ...prevData,
        [fieldName]: e.target.value,
      };
    });
  };
  return (
    <React.Fragment>
      <BootstrapDialog
        // onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth
      >
        <DialogTitle
          sx={{ m: 0, p: 2, fontSize: "20px", fontWeight: "bold" }}
          id="customized-dialog-title"
        >
          {prevOrderData?.tableName ? "Update Order" : "Add Order"}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers style={{ height: "50vh" }}>
          <>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <MHWTextField
                type={"text"}
                value={orderData?.tableName}
                label="Table name"
                placeHolder="Enter table name"
                size="small"
                disabled={comesFrom !== "viewDetails" ? false : true}
                handleChange={(e) => {
                  handleTableNo(e, "tableName");
                }}
              />
              {orderData?.orderItems?.map((data: any, index: any) => (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "20px",
                  }}
                >
                  {/* <div style={{ width: index === 0 ? "55%" : "50%" }}> */}
                  <MHWAutoSelect
                    value={data?.menu}
                    label="Menu"
                    dropdownData={[
                      { label: "The Shawshank Redemption", price: 1994 },
                      { label: "The Godfather", price: 1972 },
                      { label: "The Godfather: Part II", price: 1974 },
                      { label: "The Dark Knight", price: 2008 },
                    ]}
                    disabled={comesFrom !== "viewDetails" ? false : true}
                    handleChange={(newValue) => {
                      handleChange(
                        index,
                        "menu",
                        newValue?.label,
                        newValue?.price
                      );
                    }}
                  />
                  {data?.price ? (
                    <MHWTextField
                      type={"text"}
                      value={data?.price}
                      label="Price"
                      placeHolder=""
                      size="small"
                      disabled={true}
                      handleChange={(e) => {}}
                    />
                  ) : null}
                  {/* </div> */}
                  {/* <div style={{ width: index === 0 ? "43%" : "40%" }}> */}
                  <MHWAutoSelect
                    label="Quantity"
                    value={data?.qty || 0}
                    dropdownData={[
                      { label: "1", year: 1994 },
                      { label: "2", year: 1972 },
                      { label: "3", year: 1974 },
                      { label: "4", year: 2008 },
                    ]}
                    disabled={comesFrom !== "viewDetails" ? false : true}
                    handleChange={(newValue) => {
                      handleChange(index, "qty", newValue?.label);
                    }}
                  />
                  {/* </div> */}
                  {index !== 0 && (
                    <div>
                      {comesFrom !== "viewDetails" && (
                        <DeleteForeverIcon
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            handleDeleteItem(index);
                          }}
                        />
                      )}
                    </div>
                  )}
                </div>
              ))}
              {comesFrom !== "viewDetails" && (
                <div
                  style={{ cursor: "pointer", textAlign: "center" }}
                  onClick={() => {
                    setOrderData((prevData: any) => ({
                      ...prevData,
                      orderItems: [
                        ...prevData.orderItems,
                        { menu: "", qty: "", price: 0 },
                      ],
                    }));
                  }}
                >
                  Add More
                </div>
              )}
            </div>
          </>
        </DialogContent>
        {/* <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions> */}
        {comesFrom !== "viewDetails" && (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "10px",
              margin: "20px",
            }}
          >
            <div style={{ width: "49%" }}>
              <MHWButton
                background="slategray"
                fontSize="16px"
                fontWeight="bold"
                handleClick={() => {
                  handleClose();
                }}
                height="40px"
                width="100%"
                label="Cancel"
              />
            </div>
            <div style={{ width: "49%" }}>
              <MHWButton
                background=""
                disable={isCreateOrderDisabled()}
                fontSize="16px"
                fontWeight="bold"
                handleClick={() => {
                  handleOrder(orderData);
                }}
                height="40px"
                width="100%"
                label={
                  prevOrderData?.tableName ? "Update Order" : "Create Order"
                }
              />
            </div>
          </div>
        )}
        {comesFrom === "viewDetails" && (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "10px",
              margin: "20px",
              fontWeight: "bold",
            }}
          >
            <div>Total Order:</div>
            <Typography
              style={{ fontWeight: "bold", fontSize: "20px", color: "red" }}
            >
              {totalOrder}
            </Typography>
          </div>
        )}
      </BootstrapDialog>
    </React.Fragment>
  );
}
