import React, { useEffect, useState } from "react";
import addIcon from "../assets/add.svg";
import { Typography } from "@mui/material";
import PostAddIcon from "@mui/icons-material/PostAdd";
import MHWButton from "../utils/MHWButton";
import Card from "../utils/Card";
import AddUpdateTableDialog from "../utils/AddUpdateTableDialog";

const HomeScreen = () => {
  const [open, setOpen] = useState(false);
  const [comesFrom, setComesFrom] = useState("");
  const [tablesData, setTablesData] = useState<any>([]);
  const [orderData, setOrderDate] = useState<any>({});
  useEffect(() => {
    console.log("td", tablesData);
  }, [tablesData]);

  const handleUpdateCard = (updatedData: any) => {
    setTablesData((prevData: any) =>
      prevData.map((data: any) =>
        data.index === updatedData.index ? updatedData : data
      )
    );
  };
  return (
    <>
      {!tablesData.length ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img
            style={{ width: "20%", cursor: "pointer" }}
            src={addIcon}
            alt="add-icon"
            onClick={() => {
              setOpen(true);
              // setTablesData((preData: any) => [
              //   ...preData,
              //   { tableName: "Table1", index: 1 },
              // ]);
            }}
          />
          <Typography
            style={{ fontSize: "30px", fontWeight: "bold", cursor: "pointer" }}
            onClick={() => {
              setComesFrom("add");
              setOpen(true);

              // setTablesData((preData: any) => [
              //   ...preData,
              //   { tableName: "Table1", index: 1 },
              // ]);
            }}
          >
            Click here to add
          </Typography>
        </div>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              marginRight: "20px",
              marginTop: "16px",
            }}
            onClick={() => {
              setOrderDate({});
              setComesFrom("add");
              setOpen(true);
            }}
          >
            <PostAddIcon style={{ fontSize: "40px", cursor: "pointer" }} />
          </div>
          <div
            style={{
              marginTop: "10px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              justifyContent: "center",

              gap: "20px",
            }}
          >
            {tablesData?.map((data: any) => (
              <Card
                data={data}
                handleAction={(action) => {
                  if (action === "update") {
                    setComesFrom("edit");
                    setOrderDate(data);
                    setOpen(true);
                  } else if (action === "viewTotal") {
                    setComesFrom("viewDetails");
                    setOrderDate(data);
                    setOpen(true);
                  }
                }}
              />
            ))}
          </div>
        </>
      )}
      <AddUpdateTableDialog
        comesFrom={comesFrom}
        open={open}
        prevOrderData={orderData}
        handleClose={() => {
          setOpen(false);
        }}
        handleOrder={(orderData) => {
          if (orderData.index !== undefined) {
            handleUpdateCard(orderData);
          } else {
            setTablesData((prevData: any) => [
              ...prevData,
              { ...orderData, index: prevData.length + 1 },
            ]);
          }
          setOpen(false);
        }}
        // handleOrder={(orderData) => {
        //   setTablesData((prevData: any) => [...prevData, orderData]);
        //   setOpen(false);
        // }}
      />
    </>
  );
};

export default HomeScreen;
