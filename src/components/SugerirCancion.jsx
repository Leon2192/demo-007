import { Box, Fade } from "@mui/material";
import { useInView } from "react-intersection-observer";

const SuggestSong = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const backgroundImage = "/images/nueva/canciones.png";

  return (
    <Box
      ref={ref}
      sx={{
        minHeight: "40vh",
        width: "100%",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
        textAlign: "center",
        pb: { xs: 1.5, md: 3 }, // 🔹 sube un poco el botón en mobile
      }}
    >
      <Fade in={inView} timeout={1000}>
        <Box
          component="a"
          href="https://docs.google.com/forms/d/e/1FAIpQLSfjVQuSy7GeaGmfaoHhPI2E-99-5ySP0Qdqi3497XcJvu1wkg/viewform?usp=header"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: "inline-block",
            px: 4,
            py: 1.2,
            borderRadius: "50px",
            backgroundColor: "#000",
            color: "#fff",
            fontFamily: "'Quicksand', sans-serif",
            fontWeight: "bold",
            fontSize: "1rem",
            textDecoration: "none",
            transition: "all 0.3s ease",
            mb: { xs: 4, md: 2 },
            animation: "bounceBtn 2s infinite",
            "@keyframes bounceBtn": {
              "0%, 20%, 50%, 80%, 100%": {
                transform: "translateY(0)",
              },
              "40%": {
                transform: "translateY(-6px)",
              },
              "60%": {
                transform: "translateY(-3px)",
              },
            },
            "&:hover": {
              backgroundColor: "#fff",
              color: "#000",
              transform: "scale(1.05)",
            },
          }}
        >
          Sugerir canción
        </Box>
      </Fade>
    </Box>
  );
};

export default SuggestSong;
