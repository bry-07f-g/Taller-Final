import * as React from 'react'
import {  Card, CardContent, Typography, Box, Button } from "@mui/material"

export const Content = () => {
  return (    
    <Box sx={{
      width: "100%",
    }}>

      {/* Caja de imagen de entrada del landing */}

      <Box sx={{
      width: "100%",
      height: "700px",
      backgroundImage: "url(/img/Presupuesto.png)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "flex-end"
    }}>

      {/* Caja de texto de la imagen de entrada */}

      <Box sx={{
        width: "40%",
        margin: "2%"
      }}>
          <Typography sx={{
          fontSize: { xs: "11px", sm: "13px", md: "14px" },
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "1.5px",
          color: "#ffffff",
          }}>
          LANDING PAGE - GESTION DE GASTOS
          </Typography>

          <Typography sx={{
          fontSize: { xs: "22px", sm: "32px", md: "42px", lg: "48px" },
          fontWeight: 700,
          color: "#ffffff",
          lineHeight: 1.2,
                  
          }}>
          Controla tus gastos, mejora tus finanzas.
          </Typography>

          <Typography sx={{
          fontSize: { xs: "14px", sm: "16px", md: "18px" },
          color: "#ffffff",
          lineHeight: 1.6,
          }}>
              Con DineroSmart puedes registrar, organizar y analizar tus gastos diarios de forma fácil y rápida.
              Nuestra plataforma te ayuda a entender en qué gastas tu dinero y a tomar mejores decisiones para alcanzar
              tus metas financieras.
          </Typography>
      </Box>
      
    </Box>
    <br />

      {/* cards del landing con informacion */}

      <Box sx={{
      width: "100%",
      height: "450px",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center"
    }}>

      {/* Card 1 */}

      <Card sx={Cardstyle}>
        <CardContent sx={CardContent11}></CardContent>
        <CardContent sx={CardContent2}>
          <Typography sx={tituloStyle}>
            Análisis de gastos
          </Typography>
          <Typography sx={textStyle}>
            DineroSmart te permite visualizar y analizar en qué estás utilizando tu dinero. 
            Identifica patrones de consumo, detecta gastos innecesarios.
          </Typography>
        </CardContent>
      </Card>

      {/* Card 2 */}
      
      <Card sx={Cardstyle}>
        <CardContent sx={CardContent12}></CardContent>
        <CardContent sx={CardContent2}>
          <Typography sx={tituloStyle}>
            Gestión de gastos
          </Typography>
          <Typography sx={textStyle}>
            Registra y organiza todos tus gastos de forma rápida y sencilla.
            Mantén un control claro de tu dinero y administra mejor tus finanzas
            personales.
          </Typography>
        </CardContent>
      </Card>

      {/* Card 3 */}

      <Card sx={Cardstyle}>
        <CardContent sx={CardContent13}></CardContent>
        <CardContent sx={CardContent2}>
          <Typography sx={tituloStyle}>
            Plan económico
          </Typography>
          <Typography sx={textStyle}>
            Establece metas financieras y crea un plan para alcanzarlas. 
            Con DineroSmart podrás planificar tus ahorros, controlar tus gastos y 
            construir una economía.
          </Typography>
        </CardContent>
      </Card>

    </Box>
      <br />

      {/* y akgo mas que no se que poner */}

      <Box sx={{
      width: "100%",
      height: "300px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <Card
          sx={{
            backgroundColor: "#dfe2e4",
            width: "40%",
            height: "80%",
            flexDirection: "column",
            borderRadius: "20px",
            boxShadow: "4px 6px 10px rgba(0, 0, 0, 0.47)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2
          }}
        >
          <Typography sx={tituloStyle}>
            Toma el control de tu dinero
          </Typography>

          <Typography sx={{
              fontSize: { xs: "10px", sm: "12px", md: "14px" },
              color: "#474747e3",
              textAlign: "center"
              }}>
            Empieza hoy mismo a organizar tus gastos, mejorar tus hábitos financieros
            y alcanzar tus metas de forma inteligente.
          </Typography>

          <Button sx={Buttonstyle1}>
            Comenzar ahora
          </Button>
        </Card>
    </Box>
      <br />
      <br />
      
    </Box>              
  )
}

const Cardstyle = {
  backgroundColor: "#dfe2e4",
  width: "30%",
  height: "80%",
  display: "flex",
  flexDirection: "column",
  borderRadius: "20px",
  boxShadow: "4px 6px 10px rgba(0, 0, 0, 0.47)",
}

const CardContent11 = {
  width: "100%",
  height: "60%", 
  backgroundImage: "url(/img/imagen1.png)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
}

const CardContent12 = {
  width: "100%",
  height: "60%", 
  backgroundImage: "url(/img/imagen2.png)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
}

const CardContent13 = {
  width: "100%",
  height: "60%", 
  backgroundImage: "url(/img/imagen3.png)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
}

const CardContent2 = {
  width: "100%",
  height: "40%"
}

const tituloStyle = {
  fontSize: { xs: "14px", sm: "16px", md: "18px" },
  marginBottom: "10px",
  color: "#000000"
}

const textStyle = {
  fontSize: { xs: "10px", sm: "12px", md: "14px" },
  color: "#474747e3"
}

const Buttonstyle1 = {
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
