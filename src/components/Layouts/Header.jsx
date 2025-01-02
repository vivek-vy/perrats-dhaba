/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  AppBar,
  Typography,
  Toolbar,
  IconButton,
  Drawer,
  Divider,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import "../../styles/HeaderStyles.css";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useState } from "react";
import logo from "../../../public/images/logosquare.jpg";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  // handle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // navigation items such that home about menu sevices 

  const NavigationItems = () => {
    return(
    <>
   
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About</NavLink>
      </li>
      <li>
        <NavLink to={"/menu"}>Menu</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>Contact</NavLink>
      </li>
      
    </>)
  };

  // menu drawer
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", height: "100%", bgcolor: "wheat" }}
    >
      <img src={logo} alt="logo" width={"200px"} height={"91px"} />

      <Divider sx={{ mt: 3 }} />

      <ul className="mobile-navigation">
        <NavigationItems/>
      </ul>
    </Box>
  );

  return (
    <Box>
      <AppBar
        component={"nav"}
        sx={{ p: "0px", bgcolor: "wheat", borderBottom: "1px solid black" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            area-label="open drawer"
            edge="start"
            sx={{
              me: 2,
              display: { sm: "none" },
            }}
            onClick={handleDrawerToggle}
          >
            <MenuRoundedIcon />
          </IconButton>

          <Typography
            variant="h5"
            component={"div"}
            sx={{ flexGrow: 1, fontWeight: "bold", fontSize: "xx-large" }}
          >
            {/* main image nav  */}
            <img src={logo} alt="logo" width={"150px"} height={"54px"} />
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <ul className="navigation-menu">
        <NavigationItems/>
            
            </ul>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component={"nav"}>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{
            display: {
              sx: "block",
              sm: "none",
              "& .MuiDrawer-paper": { boxSizing: "border-box", width: "200px" },
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box>
        <Toolbar />
      </Box>
    </Box>
  );
};

export default Header;
