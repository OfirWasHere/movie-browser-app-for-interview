import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Box, Typography, Grid } from "@mui/material";
import MovieCard from "./MovieCard";

function MovieList({ search, movies: favoriteMovies }) {
  const { data: movies, loading, error } = useSelector((state) => state.movies);
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    const moviesToFilter = favoriteMovies || movies;
    if (moviesToFilter) {
      let filtered = moviesToFilter;
      console.log(favoriteMovies);

      if (search) {
        filtered = filtered.filter((movie) =>
          movie.title.toLowerCase().includes(search.toLowerCase())
        );
      }
      setFilteredMovies(filtered);
    }
  }, [search, movies, favoriteMovies]);

  if (loading) return <Box sx={{ p: 2 }}>Loading...</Box>;
  if (error) return <Box sx={{ p: 2 }}>Error: {error}</Box>;

  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={2}>
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
              <MovieCard
                id={movie.id}
                title={movie.title}
                release_date={movie.release_date}
                overview={movie.overview}
                posterImage={movie.poster_path}
                vote_average={movie.vote_average}
              />
            </Grid>
          ))
        ) : (
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignContent={"center"}
            width={"100%"}
            my={"10%"}
          >
            <Typography variant="h1" color="#fff" textAlign={"center"}>
              No movies found, please try again
            </Typography>
          </Box>
        )}
      </Grid>
    </Box>
  );
}

export default MovieList;
