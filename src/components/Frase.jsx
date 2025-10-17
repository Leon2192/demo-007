import { Box, Fade } from "@mui/material";
import { useInView } from "react-intersection-observer";

const Frase = () => {
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
          height: "auto",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {/* Fondo adaptable */}
        <Box
          component="img"
          src="/images/new/lavida.png"
          alt="Frase del evento"
          sx={{
            width: "100%",
            height: "auto",
            maxHeight: "100vh", // 👈 nunca sobrepasa la altura visible
            objectFit: "cover", // 👈 llena el ancho sin deformarse
            objectPosition: "center",
            display: "block",
          }}
        />
      </Box>
    </Fade>
  );
};

export default Frase;
