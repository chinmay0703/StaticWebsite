import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import HomeIcon from "@mui/icons-material/Home";
// import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        backgroundColor: "gray",
        backdropFilter: "blur(8px)",
        height: "100%",
        color: "black",
      }}
      role="presentation"
      onClick={() => setOpen(!open)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Link to="/">
          <ListItem button onClick={scrollToTop}>
            <ListItemIcon sx={{ color: "#F0F9FF" }}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>
        {/* <Divider />
        <Link to="products">
          <ListItem button onClick={scrollToTop} >
            <ListItemIcon sx={{ color: "#F0F9FF" }}>
              <LocalGroceryStoreIcon />
            </ListItemIcon>
            <ListItemText primary="Products" />
          </ListItem>
        </Link> */}
        <Divider />

        <Link to="career">
          <ListItem button onClick={scrollToTop}>
            <ListItemIcon sx={{ color: "#F0F9FF" }}>
              <DirectionsWalkIcon />
            </ListItemIcon>
            <ListItemText primary="Career" />
          </ListItem>
        </Link>
        <Divider />
        <Link to="/contactus">
          <ListItem button onClick={scrollToTop}>
            <ListItemIcon sx={{ color: "#F0F9FF" }}>
              <PermContactCalendarIcon />
            </ListItemIcon>
            <ListItemText primary="Contact Us" />
          </ListItem>
        </Link>
        <Divider />
        {/* <Link to="aboutus">
          <ListItem button>
            <ListItemIcon sx={{ color: "#F0F9FF" }}>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="About Us" />
          </ListItem>
        </Link>
        <Divider /> */}
      </List>
    </Box>
  );

  return (
    <div className="animate-company_logo ">
      <React.Fragment>
        <IconButton
          sx={{ color: "#F0F9FF" }}
          size="large"
          onClick={() => setOpen(!open)}
        >
          <MenuIcon />
        </IconButton>
        {/* <Button onClick={() => setOpen(!open)}>Right</Button> */}
        <Drawer anchor="right" open={open} onClose={() => setOpen(!open)}>
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
