import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { DhabaMenuList } from "../data/dhabaData.jsx";
import "../styles/MenuStyles.css";

const Menu = () => {
  return (
    <>
      <Typography
        variant="h4"
        align="center"
        sx={{
          mt: 5,
          fontWeight: "bold",
          color: " #8B4513",
          textTransform: "uppercase",
          fontFamily: "Caveat Brush, serif",
          fontSize:"3rem",letterSpacing: '7px',
          wordSpacing:"7px",
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
          animation: 'fadeSlideUp 1.5s ease-out',
  
          '@keyframes fadeSlideUp': {
            '0%': {
              opacity: 0,
              transform: 'translateY(25px)',
            },
            '100%': {
              opacity: 1,
              transform: 'translateY(0)',
            },
          },
  
          '@media (max-width: 600px)': {
            fontSize: '2rem',
          },
        }}
        className="classic-dhaba-title"
      >
        Classic Dhaba Delights
      </Typography>
      <div className="menu-list">
        {DhabaMenuList.map((menuItem, index) => {
          return (
            <Box key={index}>
              <Card className="card" sx={{ maxWidth: 345, boxShadow: 15 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={menuItem.image}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      fontWeight={"bold"}
                    >
                      {menuItem.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#423737",
                        fontFamily: "sans-serif",
                        fontSize: "medium",
                        textAlign: "justify",
                      }}
                    >
                      {menuItem.description}{" "}
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{ color: "black", fontWeight: "bold", mt: 1 }}
                    >
                      Price: ₹ {menuItem.price}{" "}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions sx={{ mb: 3, align: "center", ml: 1 }}>
                  <Button
                    size="large"
                    sx={{
                      backgroundColor: "#2acc1a ",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    Order Now
                  </Button>
                  <Button
                    size="large"
                    sx={{
                      backgroundColor: "#3f8df5 ",
                      color: "#ebf6f2  ",
                      fontWeight: "bold",
                    }}
                  >
                    add to card
                  </Button>
                </CardActions>
              </Card>
            </Box>
          );
        })}
      </div>
    </>
  );
};

export default Menu;
