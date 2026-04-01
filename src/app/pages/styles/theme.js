import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#1565c0" }, // medical blue
    secondary: { main: "#42a5f5" }, // lighter blue
    background: { default: "#f7fbff" }, // soft white-blue
    text: { primary: "#1a1a1a" },
  },

  typography: {
    fontFamily: "'Poppins', sans-serif",
    h2: { fontWeight: 700 },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 600 },
  },

  shape: {
    borderRadius: 14,
  },

  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          background: "#ffffff",
          boxShadow: "0 8px 25px rgba(0,0,0,0.05)",
          transition: "0.3s",
          "&:hover": {
            transform: "translateY(-6px)",
            boxShadow: "0 12px 30px rgba(21,101,192,0.15)",
          },
        },
      },
    },
  },
});

export default theme;
