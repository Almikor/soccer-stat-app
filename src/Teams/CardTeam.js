import {
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import DefaultImg from "../Images/noimg.png";

function CardTeam({ idTeam, name, image }) {
  const teamLink = `/teams/${idTeam}/matches`;
  if (!image) {
    image = DefaultImg;
  }
  return (
    <Grid item xs={5} md={2} margin={2}>
      <Card
        raised
        sx={{
          maxWidth: 350,
          minHeight: 230,
          maxHeight: 230,
          borderRadius: "16px",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          border: "1px solid rgba(218, 165, 32, 0.3)",
          transition: "all 0.3s ease",
          ":hover": {
            boxShadow: "0 0 15px rgba(218, 165, 32, 0.8)",
            border: "1px solid #DAA520",
            transform: "translateY(-5px)"
          },
        }}
      >
        <CardActionArea 
          component={Link} 
          to={teamLink}
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: 1
          }}
        >
          <CardMedia
            component="img"
            alt={name}
            src={image}
            height="150px"
            sx={{ 
              objectFit: "contain", 
              marginTop: 1,
              marginBottom: 1,
              filter: "drop-shadow(0 0 8px rgba(218, 165, 32, 0.5))"
            }}
          />
          <Typography 
            variant="body2" 
            color="#DAA520" 
            fontWeight="bold"
            sx={{
              textAlign: "center",
              padding: 1,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              borderRadius: "8px",
              width: "90%",
              margin: "0 auto 8px auto",
              textShadow: "0 0 5px rgba(218, 165, 32, 0.7)"
            }}
          >
            {name}
          </Typography>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default CardTeam;