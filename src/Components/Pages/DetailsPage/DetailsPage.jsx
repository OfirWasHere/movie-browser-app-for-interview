import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import { getMovieDetails } from "../../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";

function DetailsPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    data: movieDetails,
    loading,
    error,
  } = useSelector((state) => state.movieDetails);

  useEffect(() => {
    dispatch(getMovieDetails(id));
  }, [dispatch]);

  const handleGoBackClick = () => {
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

  if (loading) return <Box sx={{ p: 2 }}>Loading...</Box>;
  if (error) return <Box sx={{ p: 2 }}>Error: {error}</Box>;

  return (
    <Box
      sx={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path})`,
        height: "100vh",
        width: "100vw",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Box
        display={"flex"}
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "#fff",
          height: "100vh",
          width: "100vw",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          p: { xs: 2, md: 4 },
        }}
      >
        <Box sx={{ width: "80%" }}>
          <Typography
            variant="h2"
            sx={{ maxWidth: "90%", textAlign: "center" }}
          >
            {movieDetails.original_title}
          </Typography>
          <Typography
            variant="h5"
            sx={{ mt: 2, fontSize: { xs: "1rem", md: "1.2rem" } }}
          >
            {movieDetails.overview}
          </Typography>
          <Typography
            variant="h5"
            sx={{ mt: 2, fontSize: { xs: "1rem", md: "1rem" } }}
          >
            Runtime: {movieDetails.runtime} minutes
          </Typography>
          <Typography
            variant="h5"
            sx={{ mt: 1, fontSize: { xs: "1rem", md: "1rem" } }}
          >
            Release Date: {movieDetails.release_date}
          </Typography>
        </Box>
        <Box
          container
          p={4}
          gap={4}
          display={"flex"}
          flexDirection={{ xs: "column", md: "row" }}
          sx={{ mt: 4, width: "100%", justifyContent: "center" }}
        >
          <Button
            sx={{ width: { xs: "100%", md: "auto" } }}
            variant="contained"
            size="large"
            onClick={handleGoBackClick}
          >
            Go Back
          </Button>
          <Button
            sx={{ width: { xs: "100%", md: "auto" } }}
            variant="contained"
            size="large"
          >
            Play
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default DetailsPage;
