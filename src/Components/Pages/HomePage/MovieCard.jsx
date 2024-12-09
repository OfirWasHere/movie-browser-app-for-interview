import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function MovieCard({
  id,
  title,
  release_date,
  overview,
  posterImage,
  vote_average,
  poster_path
}) {
  let navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favoriteMovies")) || [];
    setIsFavorite(favorites.some((movie) => movie.id === id));
  }, [id]);

  const handleFavoriteClick = () => {
    const favorites = JSON.parse(localStorage.getItem("favoriteMovies")) || [];
    if (isFavorite) {
      const updatedFavorites = favorites.filter((movie) => movie.id !== id);
      localStorage.setItem("favoriteMovies", JSON.stringify(updatedFavorites));
    } else {
      favorites.push({
        id,
        title,
        release_date,
        overview,
        poster_path: posterImage || poster_path,
        vote_average,
      });
      localStorage.setItem("favoriteMovies", JSON.stringify(favorites));
    }
    setIsFavorite(!isFavorite);
  };

  const handleDetailsButton = () => {
    navigate(`/details/${id}`);
  };

  return (
    <Box>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          bgcolor: "#f0f4f8",
        }}
      >
        <CardMedia
          component="img"
          sx={{ height: 500, objectFit: "cover" }}
          image={`https://image.tmdb.org/t/p/w500${posterImage || poster_path}`}
          title={title}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              height: "100px",
              color: "text.secondary",
              overflow: "hidden",
              textOverflow: "ellipsis",
              WebkitLineClamp: 3,
            }}
          >
            {overview}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", marginTop: 1 }}
          >
            {release_date} | 🌟 {vote_average}/10
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="large"
            variant="outlined"
            fullWidth
            onClick={handleDetailsButton}
            disableRipple
            disableTouchRipple
            sx={{
              "&:focus": {
                bgcolor: "lightblue",
              },
            }}
          >
            Details
          </Button>
          <Button
            disableRipple
            disableTouchRipple
            sx={{
              "&:focus": {
                bgcolor: "lightblue",
              },
            }}
            size="large"
            onClick={handleFavoriteClick}
          >
            {isFavorite ? "Unfavorite" : "Favorite"}
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default MovieCard;
