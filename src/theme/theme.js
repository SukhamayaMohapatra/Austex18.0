"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0B3C5D", // Deep Blue
      light: "#185B8A",
      dark: "#06253B",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#00A8A8", // Teal
      light: "#33CDCD",
      dark: "#007A7A",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#F9FBFC",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#1A1A1A",
      secondary: "#6B7280",
    },
    accent: {
      main: "#E6F4F7",
    },
  },
  typography: {
    fontFamily: "'Inter', 'Roboto', 'Arial', sans-serif",
    h1: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 800,
      fontSize: "3.5rem",
      lineHeight: 1.2,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 700,
      fontSize: "2.5rem",
      lineHeight: 1.2,
      letterSpacing: "-0.01em",
    },
    h3: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 600,
      fontSize: "2rem",
      lineHeight: 1.3,
    },
    h4: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 600,
      fontSize: "1.5rem",
      lineHeight: 1.3,
    },
    h5: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 600,
      fontSize: "1.25rem",
      lineHeight: 1.4,
    },
    h6: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 600,
      fontSize: "1.125rem",
      lineHeight: 1.4,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.6,
    },
    button: {
      fontWeight: 600,
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "10px 24px",
          boxShadow: "none",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 6px 16px rgba(11, 60, 93, 0.15)",
          },
        },
        containedPrimary: {
          background: "linear-gradient(135deg, #0B3C5D 0%, #185B8A 100%)",
          "&:hover": {
            background: "linear-gradient(135deg, #06253B 0%, #0B3C5D 100%)",
          },
        },
        containedSecondary: {
          background: "linear-gradient(135deg, #00A8A8 0%, #33CDCD 100%)",
          "&:hover": {
            background: "linear-gradient(135deg, #007A7A 0%, #00A8A8 100%)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0 8px 30px rgba(0, 0, 0, 0.04)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "translateY(-6px)",
            boxShadow: "0 16px 40px rgba(0, 168, 168, 0.1)",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
  },
});

export default theme;
