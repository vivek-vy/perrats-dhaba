/* eslint-disable react/no-unescaped-entities */

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <>
      {/* <Box sx={{ textAlign: "center", bgcolor: "black", color: "white", p: 3,position:"absolute" ,bottom:"0",width:"100%"}}
      > */}
       <Box sx={{ textAlign: "center", bgcolor: "black", color: "white", p: 2}}
      >
      <Box sx={{m:2,"& svg":{
        fontSize:"xxx-large",
        cursor:"pointer",
        mr:2,
      },
      "& svg:hover":{
        color:"red",
        transform:"translateY(-5px)",transition:"all 400ms"
      }}}>
        <InstagramIcon/>
        < FacebookIcon/>
        <WhatsAppIcon/>
        <XIcon/>
      </Box>

        <Typography
          variant="h5"
          sx={{ "@media(max-width:600px)": { fontSize: "1rem" } }}
        >
          All Rights Reserved &copy; Perrat's Dhaba
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
