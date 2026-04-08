import * as React from 'react'
import { useState } from 'react'

import { NavLink } from 'react-router-dom'

import { Card, CardContent, CardActions, Typography, Box, Button, TextField  } from '@mui/material'

export const Contraseña = () => {

      const [errorCorreo, setErrorCorreo] = useState("");
    
          function validation() {
              let correo = document.getElementById("correo").value;
    
                setErrorCorreo("");
    
              if (correo === "") {
                setErrorCorreo("porfavor complete el campo")
                return false;
              }
              if (!correo.includes("@")) {
                setErrorCorreo("porfavor ingrese el @ de su correo")
                return false;
              }
              alert("Todo correcto");
              return true;
          }

  return (
        <Box sx={{
          width: "100%",
          height: "600px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>

          {/* recuadro principal del inicio de sesion */}

          <Card sx={CardStyle}>
            <CardContent sx={CardContentStyle}>
            <Typography sx={tituloStyle}>
              Recuperar contraseña
            </Typography>
            <br />
            <TextField label='Correo' id='correo' name='correo' type='text' error={errorCorreo !== ""} helperText={errorCorreo} sx={TextFieldStyle}></TextField>
            <br />
            <Button sx={Buttonstyle} onClick={validation}>
              Recuperar
            </Button>
            <br />
            <Typography sx={{textAlign: "center"}}>
              Ingresa tu correo para validar la recuperacion 
            </Typography>
            <br />
            <Typography sx={{textAlign: "center"}}>
                ¿Ya Recuepraste tu cuenta? <NavLink style={{color: "blue"}} to="/sesion" variant="contained">Iniciar sesion</NavLink>
            </Typography>
            </CardContent>
          </Card>
        </Box>
  )
}

const CardStyle = {
  backgroundColor: "#dfe2e4",
  width: "30%",
  height: "80%",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  borderRadius: "20px",
  boxShadow: "4px 6px 10px rgba(0, 0, 0, 0.47)",
}

const CardContentStyle = {
  width: "90%",
  height: "90%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
}

const TextFieldStyle = {
  width: "100%",
}

const tituloStyle = {
  fontSize: { xs: "14px", sm: "16px", md: "18px" },
  marginBottom: "10px",
  color: "#000000"
}

const Buttonstyle = {
  width: "90%",
  backgroundColor: "#C9D6DF",
  color: "#52616B",
  borderRadius: "18px",
  boxShadow: "2px 4px 6px rgba(0,0,0,0.25)",
  cursor: "pointer",
  transition: "background-color 0.4s ease",

  "&:hover": {
      backgroundColor: "#52616B",
      color: "#C9D6DF"
    },
  
  Height: {
    xs: "22px",
    sm: "26px",
    md: "30px"
  },

  fontSize: {
    xs: "0.7rem",
    sm: "0.8rem",
    md: "0.9rem"
  },

}