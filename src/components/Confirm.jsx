import { Box } from "@mui/material";
import ButtonLinks from "./ButtonLinks/ButtonLInks";

const Confirm = () => {
  return (
    <Box
      component="div"
      sx={{
        width: "100%",
        minHeight: { xs: "50vh", md: "auto" }, // 👈 altura mínima en mobile
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      {/* Imagen de fondo */}
      <Box
        component="img"
        src="/images/nueva/conf.png"
        alt="Fondo confirmación"
        sx={{
          width: "100%",
          height: "auto",
          display: "block",
        }}
      />

      {/* Contenido encima */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: "translateY(110px)", // 👈 desplazamiento vertical del botón
          zIndex: 2,
        }}
      >
        <ButtonLinks
          label="Confirmar Asistencia"
          href="https://docs.google.com/forms/d/e/1FAIpQLSfDka_e9517I6J5DyWCfdBLr1KPpmBlBZPyRgRbfiNruEv1mQ/viewform"
          newTab
        />
      </Box>
    </Box>
  );
};

export default Confirm;
