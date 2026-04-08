import * as React from 'react'
import { Box, Typography } from "@mui/material"

//material de iconos 
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

export const Foter = () => {
  return (
        <Box sx={{
        border: "1px solid black",
        backgroundColor: "#1E2022",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        py: { xs: 1, sm: 1 },
        px: { xs: 2, sm: 4 }
        }}>
        <Typography sx={{
        color: "white",
        my: 1.1,
        fontSize: { xs: "11px", sm: "12px", md: "13px" }
        }}>
            © 2026 DineroSmart. Todos los derechos reservados por Bryan Franco Gomez.
        </Typography>
        <Typography sx={{
        color: "white",
        fontSize: { xs: "10px", sm: "11px", md: "12px" },
        maxWidth: "600px",
        lineHeight: 1.6
        }}>
            Herramienta diseñada para ayudarte a gestionar y controlar tus gastos diarios de forma simple y eficiente.
        </Typography>
        <Box sx={{
        mt: 1.5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: { xs: 1, sm: 1.5 }
        }}>
            <FacebookIcon sx={IconStyle} />
            <InstagramIcon sx={IconStyle} />
            <TwitterIcon sx={IconStyle} />
        </Box>
    </Box>
  )
}

const IconStyle = {
    color: "white",
  fontSize: { xs: 20, sm: 22, md: 24 },
  cursor: "pointer",
  transition: "0.3s",
  "&:hover": {
    color: "#4db6ac"
  }
}
