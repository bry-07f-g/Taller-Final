import * as React from 'react'
import { useState, useEffect } from "react"

// utilidades
import { NavLink, useNavigate } from 'react-router-dom'
import { Box, Typography, Button, AppBar, Toolbar, Stack } from "@mui/material"

export const Header = () => {

  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuth(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuth(false);
    navigate("/sesion");
  };

  return (
    <AppBar sx={{
      backgroundColor: "#52616B",
      width: "100%",
      height: { xs: "56px", sm: "64px" },
      color: "#C9D6DF"
    }}>
      <Toolbar>
        <Box sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          width: "100%",
          height: "100%"
        }}>

          {/* LOGO */}
          <Box sx={{
            width: {
              xs: "80%",
              sm: "50%",
              md: "40%",
              lg: "30%"
            },
            height: "90%",
            display: "flex",
            alignItems: "center"
          }}>
            <img 
              src="/img/Financial_business_logo___Premium_Vector-removebg-preview.png"
              alt="Logo"
              style={{ height: "100%" }}
            />
            <Typography sx={{
              marginTop: "4%",
              fontSize: {
                xs: "0.9rem",
                sm: "1rem",
                md: "1.2rem"
              }
            }}>
              DineroSmart
            </Typography>
          </Box>

          <Box sx={{
            width: {
              xs: "100%",
              sm: "60%",
              md: "40%",
              lg: "30%"
            },
            height: "90%"
          }}>

            <Stack
              direction="row"
              spacing={{ xs: 0.5, sm: 1 }}
              flexWrap="wrap"
              justifyContent={{
                xs: "center",
                sm: "flex-end"
              }}
              marginTop="2%"
            >

              <Button component={NavLink} to="/" sx={Buttonstyle2}>
                Inicio
              </Button>

              {isAuth && (
              <Button component={NavLink} to="/appnode" sx={Buttonstyle1}>
                App Node
              </Button>
              )}

              <Button component={NavLink} to="/api" sx={Buttonstyle2}>
                Api
              </Button>

              {/* 🔓 SI NO ESTÁ LOGUEADO */}
              {!isAuth && (
                <Button component={NavLink} to="/sesion" sx={Buttonstyle1}>
                  Iniciar sesión
                </Button>
              )}

              {/* 🔒 SI ESTÁ LOGUEADO */}
              {isAuth && (
                <Button onClick={handleLogout} sx={Buttonstyle1}>
                  Cerrar sesión
                </Button>
              )}

            </Stack>
          </Box>

        </Box>
      </Toolbar>
    </AppBar>
  )
}

const Buttonstyle1 = {
  backgroundColor: "#C9D6DF",
  color: "#52616B",
  borderRadius: "18px",
  boxShadow: "0px 2px 4px rgba(0,0,0,0.25)",
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
    xs: "0.5rem",
    sm: "0.6rem",
    md: "0.7rem"
  },

}

const Buttonstyle2 = {
  addingTop: "5px",
  backgroundColor: "#C9D6DF",
  color: "#52616B",
  borderRadius: "18px",
  boxShadow: "0px 2px 4px rgba(0,0,0,0.25)",
  cursor: "pointer",
  transition: "background-color 0.4s ease",

  "&:hover": {
      backgroundColor: "#52616B",
      color: "#C9D6DF"
    },

  Height: {
    xs: "32px",
    sm: "36px",
    md: "40px"
  },

  fontSize: {
    xs: "0.5rem",
    sm: "0.6rem",
    md: "0.7rem"
  },
}
