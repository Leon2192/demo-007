import { Box, Fade } from "@mui/material";
import { useInView } from "react-intersection-observer";

const Frase = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Box
      ref={ref}
      sx={{
        width: "100%",
        minHeight: "40vh",
        backgroundColor: "#ffffff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: 6,
      }}
    >
      <Fade in={inView} timeout={1000}>
        <Box
          component="img"
          src="/images/frase.png"
          alt="Frase del evento"
          sx={{
            width: { xs: "85%", md: "50%" },
            maxWidth: "700px",
            height: "auto",
            objectFit: "contain",
          }}
        />
      </Fade>
    </Box>
  );
};

export default Frase;
