/* eslint-disable react/no-unescaped-entities */
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <>
      <Box
        sx={{
          my: 15,
          p: 2,
          mx:6,
          textAlign: "center",
          "& h4": { fontWeight: "bold", fontSize: "3rem", mb: 2 },
          "& p": { textAlign: "justify" },
          "@media (max-width:600px)": {
            m: 0,
            "& h4": { fontSize: "1.5rem" },
          },
        }}
      >
        <Typography variant="h4">Welcome to Perrat's Dhaba</Typography>
        <p>
          At Perrat's Dhaba, we bring you a blend of tradition and taste,
          serving authentic and flavorful dishes that celebrate the richness of
          Indian cuisine. Our recipes are crafted with the finest ingredients,
          ensuring every bite carries a burst of flavors that will delight your
          taste buds.
        </p>
        <br />
        <p>
          Whether you're craving crispy dosas, spicy curries, or creamy paneer
          dishes, our menu has something for everyone. We take pride in our
          warm hospitality, making your dining experience not just a meal but a
          cherished memory. Join us to savor the essence of home-cooked meals
          with a touch of love and tradition.
        </p>
        <br />
        <p>
          Thank you for choosing Perrat's Dhaba. We look forward to serving you
          and sharing our passion for food. Come as a guest, leave as a friend!
        </p>
      </Box>
    </>
  );
};

export default About;
