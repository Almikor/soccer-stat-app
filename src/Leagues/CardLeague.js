import {
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import DefaultImg from "../Images/noimg.png";

function CardLeague({ idLeague, name, country, flag }) {
  const leagueLink = `/leagues/${idLeague}/matches`;
  if (!flag) {
    flag = DefaultImg;
  }
  return (
    <Grid item xs={6} sm={4} md={3} margin={2}>
      <Card
        raised
        sx={{
          maxWidth: 350,
          borderRadius: "16px",
          backgroundColor: "rgba(30, 30, 30, 0.9)",
          border: "1px solid rgba(218, 165, 32, 0.2)",
          transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
          ":hover": {
            boxShadow: "0 8px 16px rgba(218, 165, 32, 0.4)",
            transform: "translateY(-4px)",
            borderColor: "#DAA520",
          },
        }}
      >
        <CardActionArea 
          component={Link} 
          to={leagueLink}
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            padding: 2
          }}
        >
          <CardMedia
            component="img"
            alt="League"
            src={flag}
            sx={{
              width: "100%",
              height: "140px",
              objectFit: "contain",
              filter: "drop-shadow(0 0 8px rgba(218, 165, 32, 0.3))",
              marginBottom: 1
            }}
          />

          <Typography
            variant="h6"
            sx={{ 
              fontWeight: "bold",
              color: "#DAA520",
              textAlign: "center",
              textShadow: "0 0 6px rgba(218, 165, 32, 0.5)",
              marginTop: 1
            }}
          >
            {country}
          </Typography>

          <Typography 
            variant="subtitle1" 
            sx={{
              color: "rgba(255, 255, 255, 0.9)",
              textAlign: "center",
              fontStyle: "italic",
              marginBottom: 1
            }}
          >
            {name}
          </Typography>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default CardLeague;