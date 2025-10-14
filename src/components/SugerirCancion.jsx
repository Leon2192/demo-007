import { Box, Button, Fade } from "@mui/material";
import { useInView } from "react-intersection-observer";

const SuggestSong = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const backgroundImage = "/images/modificaciones/sugerencia.png";

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
        pb: { xs: 0.5, md: 2 }, // 👈 sube el botón (menos espacio inferior)
      }}
    >
      <Fade in={inView} timeout={1000}>
        <Button
          component="a"
          href="https://docs.google.com/forms/d/e/1FAIpQLSfjVQuSy7GeaGmfaoHhPI2E-99-5ySP0Qdqi3497XcJvu1wkg/viewform?usp=header"
          target="_blank"
          rel="noopener noreferrer"
          variant="contained"
          sx={{
            borderRadius: 999,
            px: 2,
            py: 1,
            backgroundColor: "#000000",
            fontFamily: "'Prata'",
            color: "#ffffff",
            boxShadow: "none",
            animation: "bounceBtn 2s infinite",
            transition: "all 0.3s ease",
            mb: { xs: 8, md: 2 }, // 👈 ajusta visualmente aún más hacia arriba
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
              color: "#000000",
              transform: "scale(1.05)",
            },
          }}
        >
          Sugerir canción
        </Button>
      </Fade>
    </Box>
  );
};

export default SuggestSong;
