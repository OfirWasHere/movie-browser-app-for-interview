import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  authRequest,
  movieListRequest,
  airNowRequest,
} from "../../../Redux/actions";
import MovieList from "../HomePage/MovieList";
import { Box } from "@mui/material";
import Filters from "./Filters";
import KeyboardNavigation from "../../KeyboardNavigation/KeyboardNavigation";

function HomePage() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const [search, setSearch] = useState("");
  const [activeView, setActiveView] = useState("Popular");
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    dispatch(authRequest());
  }, [dispatch]);

  const handleOnSearch = (value) => {
    setSearch(value);
  };

  useEffect(() => {
    dispatch(movieListRequest());
  }, [dispatch]);

  const handleNavButtonClick = (value) => {
    setActiveView(value);
    if (value === "Popular") {
      dispatch(movieListRequest());
    } else if (value === "Favorites") {
      const favorites = JSON.parse(localStorage.getItem('favoriteMovies')) || [];
      setFavoriteMovies(favorites);
    } else if (value === "Airing") {
      dispatch(airNowRequest());
    }
  };

  return (
    <KeyboardNavigation>
      <Box
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Box
          sx={{
            position: "sticky",
            top: 0,
            zIndex: 1,
            backgroundColor: "background.paper",
          }}
        >
          <Filters
            search={search}
            handleNavButtonClick={handleNavButtonClick}
            onSearch={handleOnSearch}
            activeView={activeView}
          />
        </Box>
        <Box sx={{ flexGrow: 1, overflowY: "auto" }}>
          {auth ? (
            <MovieList 
              search={search} 
              movies={activeView === "Favorites" ? favoriteMovies : null}
            />
          ) : (
            <Box sx={{ p: 2 }}>Authentication failed. Please try again.</Box>
          )}
        </Box>
      </Box>
    </KeyboardNavigation>
  );
}

export default HomePage;

