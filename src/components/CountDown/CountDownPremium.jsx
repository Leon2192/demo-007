import { Box, Typography, Grid, Fade } from "@mui/material";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const targetDate = new Date("2025-11-08T22:00:00");

const getTimeLeft = () => {
  const now = new Date();
  const difference = targetDate - now;

  const totalSeconds = Math.max(0, Math.floor(difference / 1000));
  const dias = Math.floor(totalSeconds / (3600 * 24));
  const horas = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutos = Math.floor((totalSeconds % 3600) / 60);
  const segundos = totalSeconds % 60;

  return { dias, horas, minutos, segundos };
};

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const unidades = Object.entries(timeLeft);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Box
      ref={ref}
      id="info"
      sx={{
        width: "100%",
        minHeight: { xs: "25vh", md: "35vh" },
        backgroundImage: "url('/images/nueva/cuenta.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        display: "flex",
        flexDirection: "column", // 👈 para apilar el texto y el contador
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        overflow: "hidden",
        py: 4,
      }}
    >
      {/* 🔹 Capa blanca translúcida */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "rgba(255,255,255,0.65)",
          zIndex: 1,
        }}
      />

      {/* 🔹 Texto “Faltan…” */}
      <Fade in={inView} timeout={800}>
        <Typography
          sx={{
            fontFamily: "'Quicksand'",
            fontSize: { xs: "1.5rem", md: "2rem" },
            fontWeight: 500,
            color: "#000000",
            mb: 2, // 🔹 separa del contador
            position: "relative",
            zIndex: 2,
          }}
        >
          Faltan…
        </Typography>
      </Fade>

      {/* 🔹 Contenido del contador */}
      <Fade in={inView} timeout={1000}>
        <Grid
          container
          spacing={3}
          justifyContent="center"
          sx={{
            position: "relative",
            zIndex: 2,
          }}
        >
          {unidades.map(([unit, value]) => (
            <Grid item key={unit}>
              <Box textAlign="center">
                <Typography
                  sx={{
                    fontSize: { xs: "2.4rem", md: "3.5rem" },
                    fontWeight: "bold",
                    color: "#000000",
                    fontFamily: "'Quicksand'",
                  }}
                >
                  {String(value).padStart(2, "0")}
                </Typography>
                <Typography
                  sx={{
                    textTransform: "capitalize",
                    fontSize: { xs: "1rem", md: "1.2rem" },
                    fontFamily: "'Quicksand'",
                    color: "#000000",
                    fontWeight: 500,
                  }}
                >
                  {unit}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Fade>
    </Box>
  );
};

export default Countdown;
