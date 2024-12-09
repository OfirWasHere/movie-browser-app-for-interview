import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function PageNotFound() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  useEffect((e) => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        navigate("/");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      textAlign="center"
      bgcolor="#f0f4f8"
      p={3}
    >
      <Typography variant="h1" color="primary" fontWeight="bold" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" color="textSecondary" gutterBottom>
        Oops! Page Not Found
      </Typography>
      <Typography variant="body1" color="textSecondary" mb={3}>
        The page you're looking for doesn't exist or has been moved.
      </Typography>
      <Button
        size="large"
        variant="contained"
        color="primary"
        onClick={handleGoHome}
      >
        Press ESC to go back home
      </Button>
    </Box>
  );
}

export default PageNotFound;
