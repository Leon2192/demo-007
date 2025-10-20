import { Box, IconButton } from "@mui/material";
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

  const backgroundImage = "/images/new/play.png";

  return (
    <Box
      sx={{
        height: { xs: "25vh", md: "50vh" },
        width: "100%",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <IconButton
        onClick={toggleAudio}
        sx={{
          transform: "translateY(30px)", // 👈 baja un poco el botón para alinearlo con la imagen
          backgroundColor: "rgba(0,0,0,0.05)",
          color: "#000",
          width: 70,
          height: 70,
          borderRadius: "50%",
          boxShadow: 2,
          "&:hover": {
            backgroundColor: "rgba(0,0,0,0.1)",
          },
          transition: "transform 0.3s ease",
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
