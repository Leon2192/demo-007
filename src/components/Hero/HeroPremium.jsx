import {
  Box,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import PauseIcon from "@mui/icons-material/Pause";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const desktopImage = "/images/nueva/portada.png";
  const mobileImage = "/images/nueva/portada.png";


 

  const { ref } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Box
      ref={ref}
      sx={{
        position: "relative",
        height: "100vh",
        width: "100vw",
        margin: 0,
        padding: 0,
        backgroundImage: `url(${isMobile ? mobileImage : desktopImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* Capa opcional (transparente) */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "transparent",
          zIndex: 1,
        }}
      />

      {/* Botón de música */}
     
      <Box
        sx={{
          position: "absolute",
          bottom: 20,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          animation: "bounce 2s infinite",
          fontSize: "3rem",
          "@keyframes bounce": {
            "0%, 20%, 50%, 80%, 100%": {
              transform: "translateX(-50%) translateY(0)",
            },
            "40%": {
              transform: "translateX(-50%) translateY(-10px)",
            },
            "60%": {
              transform: "translateX(-50%) translateY(-5px)",
            },
          },
        }}
      >
        <a href="#info" style={{ color: "#000000", textDecoration: "none" }}>
          <KeyboardArrowDownIcon fontSize="inherit" />
        </a>
      </Box>
    </Box>
  );
};

export default Hero;
