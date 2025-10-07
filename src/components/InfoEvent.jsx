import { Box, Typography, Slide, Button } from "@mui/material";
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
        py: { xs: 6, md: 8 },
        display: "flex",
        alignItems: "flex-start", // 👈 el contenido empieza un poco más arriba
        justifyContent: "center",
        backgroundColor: "#ffffff",
        textAlign: "center",
      }}
    >
      <Slide in={inView} direction="up" timeout={800}>
        <Box
          sx={{
            maxWidth: { xs: "300px", md: "360px" },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* GIF más arriba y separado */}
          <Box
            component="img"
            src="/images/fiesta.gif"
            alt="Ceremonia"
            sx={{
              width: 130,
              height: 130,
              mb: 3, // 👈 más separación con el texto
              mt: -2, // 👈 lo sube un poquito
            }}
          />

          <Typography
            variant="h4"
            sx={{
              fontFamily: "'Eyesome'",
              fontSize: { xs: "2rem", md: "2.8rem" },
              color: "#000000",
              fontWeight: 600,
              lineHeight: 1.2,
              mb: 2,
            }}
          >
            Fiesta
          </Typography>

          {/* Fecha */}
          <Typography
            sx={{
              mb: 1.5,
              fontFamily: "'Quicksand', serif",
              fontSize: { xs: "1rem", md: "1.2rem" },
              color: "#000000",
              fontWeight: "bold",
              lineHeight: 1.3,
              whiteSpace: "nowrap",
            }}
          >
            Sábado 08 de Noviembre
          </Typography>

          {/* Hora */}
          <Typography
            sx={{
              mb: 1.5,
              fontFamily: "'Quicksand', serif",
              fontSize: { xs: "1rem", md: "1.2rem" },
              color: "#000000",
              fontWeight: "bold",
              lineHeight: 1.3,
              whiteSpace: "nowrap",
            }}
          >
            22:00 hs
          </Typography>

          {/* Dirección */}
          <Typography
            sx={{
              mb: 1.5,
              fontFamily: "'Quicksand', serif",
              fontSize: { xs: "1rem", md: "1.2rem" },
              color: "#000000",
              fontWeight: "bold",
              lineHeight: 1.3,
            }}
          >
            Salon Cultural
          </Typography>

          
        </Box>
      </Slide>
    </Box>
  );
};

export default InfoEvent;
