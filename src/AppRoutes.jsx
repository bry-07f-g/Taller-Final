import { HashRouter, Routes, Route, Navigate } from "react-router-dom"
import { Toolbar, Box } from "@mui/material"

// layout
import { Header } from "./features/layout/components/Header"
import { Foter } from "./features/layout/components/Foter"
import { Content } from "./features/layout/components/Content"

// auth
import { Sesion } from "./features/auth/components/Sesion"
import { Registrate } from "./features/auth/components/Registrate"
import { Contraseña } from "./features/auth/components/Contraseña"

// shared
import { Api } from "./shared/Api"

// view
import AppNode from "./features/view/components/AppNode"


const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/sesion" />;
  }

  return children;
};


const PublicRoute = ({ children }) => {
  return children;
};


export const AppRoutes = () => {
  return (
    <HashRouter>
      <Box
        sx={{
          minHeight: { xs: "100dvh", sm: "100vh" },
          display: "flex",
          flexDirection: "column",
          width: "100%"
        }}
      >
        <Header />

        <Toolbar
          sx={{
            minHeight: { xs: "56px", sm: "64px" }
          }}
        />

        <Box
          sx={{
            flexGrow: 1,
            width: "100%",
            display: "flex",
            flexDirection: "column"
          }}
        >
          <Routes>

            {/* públicas */}
            <Route path="/" element={<Content />} />

            <Route path="/sesion" element={
              <PublicRoute>
                <Sesion />
              </PublicRoute>
            } />

            <Route path="/registrate" element={
              <PublicRoute>
                <Registrate />
              </PublicRoute>
            } />

            <Route path="/contraseña" element={<Contraseña />} />
            <Route path="/api" element={<Api />} />

            {/* protegida */}
            <Route
              path="/AppNode"
              element={
                <ProtectedRoute>
                  <AppNode />
                </ProtectedRoute>
              }
            />

          </Routes>
        </Box>

        <Foter />
      </Box>
    </HashRouter>
  );
};

export default AppRoutes;