import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  TextField,
  Button,
  Typography,
} from "@mui/material";

const Filters = ({
  search,
  onSearch,
  handleNavButtonClick,
  activeView,
}) => {
  const handleSearchChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#020202" }}>
      <Toolbar
        sx={{ justifyContent: "space-between", flexWrap: "wrap", gap: 2 }}
      >
        <Typography variant="h6" sx={{ flexShrink: 0, color: "#fff" }}>
          Movie Explorer
        </Typography>

        <Box display="flex" gap={1} flexWrap="wrap">
          <Button
            onClick={() => handleNavButtonClick("Popular")}
            variant={activeView === "Popular" ? "contained" : "outlined"}
            color="primary"
          >
            Popular Movies
          </Button>
          <Button
            onClick={() => handleNavButtonClick("Airing")}
            variant={activeView === "Airing" ? "contained" : "outlined"}
            color="primary"
          >
            Airing Now
          </Button>
          <Button
            onClick={() => handleNavButtonClick("Favorites")}
            variant={activeView === "Favorites" ? "contained" : "outlined"}
            color="primary"
          >
            My Favorites
          </Button>
        </Box>

        <TextField
          label="Search Movies"
          variant="outlined"
          value={search}
          onChange={handleSearchChange}
          size="small"
          sx={{
            backgroundColor: "#fff",
            borderRadius: 1,
            minWidth: 300,
          }}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Filters;
