import { Box, Fade } from "@mui/material";
import { useInView } from "react-intersection-observer";

const Frase2 = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Fade in={inView} timeout={1000}>
      <Box
        ref={ref}
        sx={{
          width: "100%",
          height: { xs: "35vh", md: "45vh" }, // 🔹 altura más baja para que no se vea tan grande
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src="/images/nueva/fecha2.png"
          alt="Frase del evento"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover", // 🔹 mantiene la proporción y llena el contenedor
            objectPosition: "center",
            display: "block",
          }}
        />
      </Box>
    </Fade>
  );
};

export default Frase2;
