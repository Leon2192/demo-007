import { useState } from "react";
import {
  Box,
  Typography,
  Fade,
  Button,
  Modal,
  Paper,
} from "@mui/material";
import { useInView } from "react-intersection-observer";

const Gift = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {/* Sección principal */}
      <Box
        ref={ref}
        sx={{
          width: "100%",
          minHeight: "50vh",
          backgroundColor: "#ffffff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Fade in={inView} timeout={1000}>
          <Box
            sx={{
              maxWidth: { xs: "90%", md: "700px" },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 3, // espaciado uniforme entre elementos
            }}
          >
            {/* Ícono Regalo */}
            <Box
              component="img"
              src="/images/confirm2.gif"
              alt="Regalo"
              sx={{
                width: 130,
                height: 130,
              }}
            />

            {/* Texto principal */}
            <Typography
              variant="h6"
              sx={{
                fontFamily: "'Quicksand'",
                fontSize: { xs: "1.1rem", md: "1.6rem" },
                color: "#000000",
                fontWeight: 500,
                lineHeight: 1.6,
              }}
            >
              Tu presencia es el mejor regalo que puedo recibir.
              <br />
              Pero si querés tener un gesto especial, te dejo los datos de mi
              cuenta bancaria.
            </Typography>

            {/* Botón para abrir modal */}
            <Button
              variant="contained"
              onClick={handleOpen}
              sx={{
                backgroundColor: "#000000",
                color: "#ffffff",
                borderRadius: "50px",
                px: 3,
                py: 1,
                mt: 1,
                fontFamily: "'Quicksand', serif",
                fontWeight: "bold",
                fontSize: { xs: "0.9rem", md: "1rem" },
                "&:hover": { backgroundColor: "#333333" },
              }}
            >
              Ver datos bancarios
            </Button>
          </Box>
        </Fade>
      </Box>

      {/* Modal con los datos */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "85%", md: 400 },
            outline: "none",
          }}
        >
          <Paper
            elevation={4}
            sx={{
              borderRadius: "16px",
              p: 4,
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}
          >
            {/* GIF en el modal */}
            <Box
              component="img"
              src="/images/confirm2.gif"
              alt="Regalo"
              sx={{
                width: 120,
                height: 120,
                mb: 1,
              }}
            />

            <Typography
              sx={{
                fontFamily: "'Quicksand'",
                fontSize: { xs: "1rem", md: "1.2rem" },
                color: "#000000",
                fontWeight: "bold",
              }}
            >
              Alias: luisinavillafane
            </Typography>

            <Button
              variant="outlined"
              onClick={handleClose}
              sx={{
                mt: 2,
                borderRadius: "50px",
                borderColor: "#000000",
                color: "#000000",
                fontFamily: "'Quicksand', serif",
                fontWeight: "bold",
                "&:hover": { borderColor: "#333333", backgroundColor: "#f8f8f8" },
              }}
            >
              Cerrar
            </Button>
          </Paper>
        </Box>
      </Modal>
    </>
  );
};

export default Gift;
