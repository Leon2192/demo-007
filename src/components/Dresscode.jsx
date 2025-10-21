import { Box, Fade } from "@mui/material";
import { useInView } from "react-intersection-observer";

const Dresscode = () => {
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
          minHeight: "40vh", // 👈 da altura mínima razonable
          backgroundImage: "url('/images/ultimo/dresscode.png')",
          backgroundSize: "cover", // 👈 muestra toda la imagen sin recortar
          backgroundPosition: "center top", // 👈 centrada arriba
          backgroundRepeat: "no-repeat",
          display: "block",
        }}
      />
    </Fade>
  );
};

export default Dresscode;
