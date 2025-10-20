import { Box, Fade } from "@mui/material";
import { useInView } from "react-intersection-observer";

const Thanks = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Box
      ref={ref}
      sx={{
        width: "100%",
        height: { xs: "50vh", md: "60vh" }, // 🔹 altura adaptable
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden", // 🔹 oculta lo que se salga del contenedor
      }}
    >
      <Fade in={inView} timeout={1000}>
        <Box
          component="img"
          src="/images/nueva/final.png"
          alt="Imagen final del evento"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover", // 🔹 llena todo el espacio, recortando si hace falta
          }}
        />
      </Fade>
    </Box>
  );
};

export default Thanks;
