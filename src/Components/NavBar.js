import { AppBar, Button, IconButton, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import logo from "../Images/logo.png";

function Navbar() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#000000",
        backgroundImage: "linear-gradient(147deg, #000000 0%, #434343 74%)",
        boxShadow: "0 4px 12px rgba(218, 165, 32, 0.3)"
      }}
    >
      <Toolbar sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "0 16px"
      }}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          to="/leagues"
          component={Link}
          sx={{
            marginRight: 2,
            "&:hover": {
              backgroundColor: "rgba(218, 165, 32, 0.1)"
            }
          }}
        >
          <img src={logo} className="App-logo" alt="logo" height={40} />
        </IconButton>

        <Button
          sx={{
            color: "#DAA520",
            minWidth: "140px",
            fontWeight: "bold",
            fontSize: "1rem",
            letterSpacing: "1px",
            margin: "0 8px",
            border: "1px solid transparent",
            "&:hover": {
              backgroundColor: "rgba(218, 165, 32, 0.1)",
              border: "1px solid #DAA520",
              boxShadow: "0 0 10px rgba(218, 165, 32, 0.5)"
            }
          }}
          variant="text"
          size="large"
          to="/leagues"
          component={Link}
        >
          Лиги
        </Button>
        <Button
          sx={{
            color: "#DAA520",
            minWidth: "140px",
            fontWeight: "bold",
            fontSize: "1rem",
            letterSpacing: "1px",
            margin: "0 8px",
            border: "1px solid transparent", // Убрана постоянная рамка
            "&:hover": {
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              border: "1px solid #DAA520", // Рамка появляется только при наведении
              boxShadow: "0 0 15px rgba(218, 165, 32, 0.7)"
            }
          }}
          variant="text" // Изменил variant на "text" (было "outlined")
          size="large"
          to="/teams"
          component={Link}
        >
          Команды
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;