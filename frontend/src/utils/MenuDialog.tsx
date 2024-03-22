import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import MHWTextField from "./MHWTextField";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ControlPointIcon from "@mui/icons-material/ControlPoint";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface MenudialogProps {
  open: boolean;
  handleClose: () => void;
  handleSaveClick: (menuData: any) => void;
}
export default function MenuDialog({
  open,
  handleClose,
  handleSaveClick,
}: MenudialogProps) {
  // const handleClickOpen = () => {
  //   setOpen(true);
  // };
  const [menuData, setMenuData] = React.useState<any>([
    { label: "", price: "" },
  ]);

  const handleDeleteItem = (indexToDelete: number) => {
    setMenuData((prevState: any) => {
      const updatedOrderItems = [...prevState];
      updatedOrderItems.splice(indexToDelete, 1);
      return updatedOrderItems;
    });
  };

  const handleChange = (e: any, fieldName: any, index: any) => {
    const { value } = e.target;
    setMenuData((prevMenuData: any) => {
      const updatedMenuData = [...prevMenuData];
      updatedMenuData[index][fieldName] = value;
      return updatedMenuData;
    });
  };

  // const handleSaveClick = () => {
  //   console.log("md:", menuData);
  // };

  const isAnyFieldEmpty = menuData.some(
    (data: any) => data.price === "" || data.label === ""
  );
  console.log("isAnyFieldEmpty :", isAnyFieldEmpty);

  return (
    <React.Fragment>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative", background: "tomato" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Add Menu
            </Typography>
            <Button
              autoFocus
              color="inherit"
              disabled={isAnyFieldEmpty}
              onClick={() => {
                handleSaveClick(menuData);
              }}
            >
              Save
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <div
            style={{
              padding: "20px",
              height: "calc(100vh - 160px)",
              overflow: "auto",
            }}
          >
            {menuData.map((formData: any, index: any) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  // gridTemplateColumns: "1fr 1fr",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "20px",
                  marginTop: "20px",
                }}
              >
                <div style={{ width: "48%" }}>
                  <MHWTextField
                    type={"text"}
                    value={formData.label}
                    label="Menu Name"
                    placeHolder="Enter menu name"
                    size="small"
                    // disabled={comesFrom !== "viewDetails" ? false : true}
                    handleChange={(e) => {
                      handleChange(e, "label", index);
                    }}
                  />
                </div>
                <div style={{ width: "48%" }}>
                  <MHWTextField
                    type={"text"}
                    value={formData.price}
                    label="Price"
                    placeHolder="Enter price"
                    size="small"
                    // disabled={comesFrom !== "viewDetails" ? false : true}
                    handleChange={(e) => {
                      handleChange(e, "price", index);
                    }}
                  />
                </div>

                {index !== 0 && (
                  <div>
                    <DeleteForeverIcon
                      style={{ cursor: "pointer" }}
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        handleDeleteItem(index);
                      }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div
            style={{
              cursor: "pointer",
              textAlign: "center",
              marginTop: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={() => {
              setMenuData((prevData: any) => [
                ...prevData,
                { label: "", price: "" },
              ]);
            }}
          >
            <IconButton color="primary" aria-label="add to shopping cart">
              <ControlPointIcon />
            </IconButton>
            <Typography style={{ fontWeight: "bold", fontSize: "20px" }}>
              {" "}
              Add More
            </Typography>
          </div>
        </List>
      </Dialog>
    </React.Fragment>
  );
}
