// import { Box, useMediaQuery, useTheme } from "@mui/material";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// const Thanks = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

//   const desktopImage = "/images/gracias.png";
//   const mobileImage = "/images/gracias.png";

//   return (
//     <Box
//       sx={{
//         position: "relative",
//         height: "50vh",
//         m: 0,
//         p: 0,
//         // En mobile: cover (llena y recorta). En desktop: contain (se ve completa).
//         backgroundImage: `url(${isMobile ? mobileImage : desktopImage})`,
//         backgroundSize: isMobile ? "cover" : "contain",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//         // Color de fondo para “letterboxing” cuando usamos contain
//         backgroundColor: theme.palette.background.default,
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         textAlign: "center",
//         overflow: "hidden",
//       }}
//     >
//       {/* Capa opcional (por ahora transparente) */}
//       <Box
//         sx={{
//           position: "absolute",
//           inset: 0,
//           background:
//             "transparent", 
//           zIndex: 1,
//         }}
//       />

//       {/* Contenido principal */}
//       <Box
//         sx={{
//           zIndex: 2,
//           px: 2,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           transition: "transform 1s ease",
//         }}
//       >
//       </Box>
//     </Box>
//   );
// };

// export default Thanks;
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
          src="/images/gracias.png"
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

export default Thanks;

