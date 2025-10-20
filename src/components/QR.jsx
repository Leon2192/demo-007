import { Box, Typography, Fade } from "@mui/material";
import { useInView } from "react-intersection-observer";

const Qr = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Box
      ref={ref}
      sx={{
        width: "100%",
        minHeight: { xs: "60vh", md: "70vh" }, // 👈 altura adaptada
        maxHeight: { xs: "60vh", md: "none" }, // 👈 en mobile no supera 50vh
        backgroundImage: "url('/images/nueva/fondo.png')",
        backgroundSize: "cover", // 👈 cubre el componente
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
  
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Fade in={inView} timeout={800}>
        <Box
          sx={{
            transform: inView ? "scale(1)" : "scale(0.95)",
            transition: "transform 0.6s ease-out",
            zIndex: 2,
            maxWidth: { xs: "90%", md: "700px" },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* GIF QR */}
          <Box display="flex" justifyContent="center" mb={2}>
            <Box
              component="img"
              src="/images/qr.gif"
              alt="Código QR"
              sx={{
                width: 180,
                height: 180,
                objectFit: "contain",
              }}
            />
          </Box>

          {/* Título */}
          <Typography
            variant="h4"
            sx={{
              fontFamily: "'Eyesome'",
              fontSize: { xs: "2.3rem", md: "3rem" },
              color: "#000",
              mb: 1,
            }}
          >
            Escaneá este QR
          </Typography>

          {/* Subtítulo */}
          <Typography
            variant="h5"
            sx={{
              fontFamily: "'Quicksand'",
              fontSize: { xs: "1.2rem", md: "1.5rem" },
              color: "#000",
              mb: 2,
            }}
          >
            ¡Compartí las fotos del evento conmigo!
          </Typography>

          {/* Texto adicional */}
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Quicksand'",
              fontSize: { xs: "1rem", md: "1.2rem" },
              color: "#000",
              mb: 1,
            }}
          >
            O podés presionar aquí
          </Typography>

          {/* Botón */}
          <Box mt={2}>
            <Box
              component="a"
              href="https://photos.google.com/share/AF1QipM1NEZaRlp-H5KQWu0kJ2VPY_4QNb1129RzQ3hOXWEetBE93-Gdf2gcgLBXDXpNow?key=N19lZUdSNEZZczRfX3hZdVFTQTlIMnJ1dFhCTFRR"
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
                "&:hover": {
                  backgroundColor: "#fff",
                  color: "#000",
                },
              }}
            >
              Ir al Álbum
            </Box>
          </Box>
        </Box>
      </Fade>
    </Box>
  );
};

export default Qr;
