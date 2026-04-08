import * as React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { Card, CardContent, Typography, Box, Button, TextField } from '@mui/material'

import { loginUser } from "../../../services/auth.service";

export const Sesion = () => {

  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");

  const [errorCorreo, setErrorCorreo] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const handleLogin = async () => {

    setErrorCorreo("");
    setErrorPassword("");

    // validaciones
    if (!correo || !password) {
      setErrorCorreo("Por favor complete el campo");
      setErrorPassword("Por favor complete el campo");
      return;
    }

    if (!correo.includes("@")) {
      setErrorCorreo("Correo inválido");
      return;
    }

    try {
      const res = await loginUser({
        email: correo,
        password: password
      });

      console.log(res.data);

      // guardar token
      localStorage.setItem("token", res.data.token);

      window.location.reload();

      alert("Inicio de sesión exitoso ");

    } catch (error) {
      console.error(error);
      alert("Correo o contraseña incorrectos ");
    }
  };

  return (
    <Box sx={containerStyle}>

      <Card sx={CardStyle}>
        <CardContent sx={CardContentStyle}>

          <Typography sx={tituloStyle}>
            Inicia sesión
          </Typography>

          <TextField
            label='Correo'
            type='text'
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            error={errorCorreo !== ""}
            helperText={errorCorreo}
            sx={TextFieldStyle}
          />

          <TextField
            label='Contraseña'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errorPassword !== ""}
            helperText={errorPassword}
            sx={TextFieldStyle}
          />

          <Button sx={Buttonstyle} onClick={handleLogin}>
            Ingresar
          </Button>

          <Typography sx={{ textAlign: "center", mt: 2 }}>
            ¿No tienes cuenta?{" "}
            <NavLink style={{ color: "blue" }} to="/registrate">
              Regístrate
            </NavLink>
          </Typography>

          <Typography sx={{ textAlign: "center", mt: 1 }}>
            ¿Olvidaste tu contraseña?{" "}
            <NavLink style={{ color: "blue" }} to="/Contraseña">
              Recuperar
            </NavLink>
          </Typography>

        </CardContent>
      </Card>

    </Box>
  )
}

const containerStyle = {
  width: "100%",
  height: "600px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
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
  mb: 2
}

const tituloStyle = {
  fontSize: { xs: "14px", sm: "16px", md: "18px" },
  marginBottom: "15px",
  color: "#000000"
}

const Buttonstyle = {
  width: "100%",
  mt: 1,
  backgroundColor: "#C9D6DF",
  color: "#52616B",
  borderRadius: "18px",
  boxShadow: "2px 4px 6px rgba(0,0,0,0.25)",

  "&:hover": {
    backgroundColor: "#52616B",
    color: "#C9D6DF"
  },

  fontSize: {
    xs: "0.7rem",
    sm: "0.8rem",
    md: "0.9rem"
  },
}