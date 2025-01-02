/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";

const Contact = () => {
  return (
    <>
      <Box
        sx={{
          my: 6,
          mx: 10,
          "& h4": { fontWeight: "bold", mb: 2 },
          "@media (max-width:700px)": { mx: 4 },
        }}
      >
        <Typography variant="h4">Contact Perrat's Dhaba</Typography>
        <p style={{ textAlign: "justify" }}>
          We value your feedback and inquiries at Perrat's Dhaba. For
          reservations, catering services, or any questions, feel free to reach
          out to us. You can contact us via phone at{" "}
          <strong>+91 98765 43210</strong> or email us at{" "}
          <strong>info@perratsdhaba.com</strong>. Visit us at our location to
          experience our warm hospitality and delicious cuisine. We look forward
          to serving you and making your dining experience memorable!
        </p>
      </Box>
      <Box
        sx={{
          mb:7,
          width: "600px",
          ml: 10, boxShadow: 24 ,
          "@media (max-width:700px)": {
            width: "300px",
            mx: 4,
          },
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <TableCell
                  align="center"
                  sx={{ bgcolor: "black", color: "white", fontWeight: "bold" }}
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} />
                  1800-00-0000 (toll-free)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <MailIcon sx={{ color: "skyblue", pt: 1 }} />{" "}
                  help@perratsdhaba.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <PhoneIcon sx={{ color: "green", pt: 1 }} />
                  +91 98765 43210
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default Contact;
