import { Box, Typography, Slide } from "@mui/material";
import { useInView } from "react-intersection-observer";

const InfoEvent = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Box
      ref={ref}
      sx={{
        width: "100%",
        height: { xs: "50vh", md: "100vh" }, // 🔹 ocupa toda la altura visible
        backgroundImage: "url('/images/nueva/fondo2.png')", // 🔹 fondo completo
        backgroundSize: "cover", // 🔹 cubre el área completa sin deformarse
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center", // 🔹 centra vertical y horizontalmente
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Slide in={inView} direction="up" timeout={800}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            p: 2,
          }}
        >
          {/* GIF */}
          <Box
            component="img"
            src="/images/fiesta.gif"
            alt="Fiesta"
            sx={{
              width: 120,
              height: 120,
              mb: 2,
            }}
          />

          {/* Título */}
          <Typography
            variant="h4"
            sx={{
              fontFamily: "'Eyesome'",
              fontSize: { xs: "2.4rem", md: "3rem" },
              color: "#000",
              fontWeight: 600,
              mb: 1,
            }}
          >
            Fiesta
          </Typography>

          {/* Fecha */}
          <Typography
            sx={{
              fontFamily: "'Quicksand', serif",
              fontSize: { xs: "1rem", md: "1.3rem" },
              color: "#000",
              fontWeight: "bold",
              mb: 1,
            }}
          >
            Sábado 08 de Noviembre
          </Typography>

          {/* Hora */}
          <Typography
            sx={{
              fontFamily: "'Quicksand', serif",
              fontSize: { xs: "1rem", md: "1.3rem" },
              color: "#000",
              fontWeight: "bold",
              mb: 1,
            }}
          >
            22:00 hs
          </Typography>

          {/* Dirección */}
          <Typography
            sx={{
              fontFamily: "'Quicksand', serif",
              fontSize: { xs: "1rem", md: "1.3rem" },
              color: "#000",
              fontWeight: "bold",
            }}
          >
            Salón Cultural
          </Typography>
        </Box>
      </Slide>
    </Box>
  );
};

export default InfoEvent;
