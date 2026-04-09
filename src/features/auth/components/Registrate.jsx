import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Card, CardContent, Typography, Box, Button, TextField } from '@mui/material'
import { registerUser } from '../../../services/auth.service' 

export const Registrate = () => {

  const [form, setForm] = useState({
    nombre: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  const validation = () => {
    let newErrors = {};

    if (!form.nombre) newErrors.nombre = "Campo obligatorio";
    if (!form.email) newErrors.email = "Campo obligatorio";
    if (!form.password) newErrors.password = "Campo obligatorio";

    if (form.email && !form.email.includes("@")) {
      newErrors.email = "Correo inválido";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validation()) return;

    try {
      await registerUser(form); 
      alert("Usuario registrado correctamente");
    } catch (err) {
      console.log(err.response.data);
      alert("Error al registrar");
    }
  };

  return (
    <Box sx={containerStyle}>
      <Card sx={CardStyle}>
        <CardContent sx={CardContentStyle}>
          <Typography sx={tituloStyle}>
            Registrate
          </Typography>

          <TextField
            label='Nombre'
            value={form.nombre}
            onChange={(e) => setForm({ ...form, nombre: e.target.value })}
            error={!!errors.nombre}
            helperText={errors.nombre}
            sx={TextFieldStyle}
          />

          <TextField
            label='Correo'
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            error={!!errors.email}
            helperText={errors.email}
            sx={TextFieldStyle}
          />

          <TextField
            label='Contraseña'
            type='password'
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            error={!!errors.password}
            helperText={errors.password}
            sx={TextFieldStyle}
          />

          <Button sx={Buttonstyle} onClick={handleSubmit}>
            Crear cuenta
          </Button>

          <Typography sx={{ textAlign: "center" }}>
            ¿Ya tienes cuenta? <NavLink to="/sesion">Iniciar sesión</NavLink>
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
  height: "85%",
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
  marginBottom: "16px" 
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

