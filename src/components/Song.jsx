import { Box, Typography, IconButton } from "@mui/material";
import { useState, useRef } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

const Song = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.muted = false;
      audio
        .play()
        .catch((err) => console.error("Error al reproducir audio:", err));
      setIsPlaying(true);
    }
  };

  const backgroundImage = "/images/modificaciones/cancion.png"; 

  return (
    <Box
      sx={{
        height: { xs: "40vh", md: "50vh" }, // 🔹 Mucho más bajo que Hero
        width: "100%",
       backgroundImage: `url(${backgroundImage})`,
       backgroundSize: "cover",
       backgroundPosition: "center",
       backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        gap: 2,
     
      }}
    >
      <Typography
        variant="h5"
        sx={{
          color: "#000",
          fontWeight: 500,
          fontFamily: "'Eyesome'",
            fontSize: { xs: "2.2rem", md: "3.5rem" },
        }}
      >
         Dale play a mi canción favorita
      </Typography>

      <IconButton
        onClick={toggleAudio}
        sx={{
          backgroundColor: "rgba(0,0,0,0.05)",
          color: "#000",
          width: 70,
          height: 70,
          borderRadius: "50%",
          boxShadow: 2,
          "&:hover": {
            backgroundColor: "rgba(0,0,0,0.1)",
          },
        }}
      >
        {isPlaying ? (
          <PauseIcon sx={{ fontSize: 40 }} />
        ) : (
          <PlayArrowIcon sx={{ fontSize: 40 }} />
        )}
      </IconButton>

      <audio ref={audioRef} src="/images/Sparks.mp3" preload="auto" loop />
    </Box>
  );
};

export default Song;
