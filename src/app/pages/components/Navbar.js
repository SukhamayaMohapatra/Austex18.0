"use client";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import Link from "next/link";

export default function Navbar() {
  const navStyle = {
    fontWeight: 600,
    fontSize: "0.85rem",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "#6C3BFF",
    position: "relative",
    "&:hover": {
      background: "transparent",
    },
    "&::after": {
      content: '""',
      position: "absolute",
      width: 0,
      height: "2px",
      bottom: -4,
      left: 0,
      backgroundColor: "#6C3BFF",
      transition: "width 0.3s ease",
    },
    "&:hover::after": {
      width: "100%",
    },
  };

  return (
    <AppBar
      position="fixed"
      elevation={1}
      sx={{
        background: "#fff",
        color: "#1a1a1a",
        fontFamily:
          "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: { xs: 2, md: 6 },
          py: 1.5,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
          <Typography
            sx={{
              fontWeight: 700,
              letterSpacing: 0.5,
              fontFamily: "inherit",
              fontSize: "36px",
            }}
          >
            Austex Pharma{" "}
          </Typography>{" "}
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 4,
          }}
        >
          <Link href="/" passHref>
            <Button sx={navStyle}>Home</Button>
          </Link>

          <Link href="/pages/about" passHref>
            <Button sx={navStyle}>About Us</Button>
          </Link>

          <Link href="/pages/products" passHref>
            <Button sx={navStyle}>Our Products</Button>
          </Link>

          <Link href="/pages/services" passHref>
            <Button sx={navStyle}>Services & Capabilities</Button>
          </Link>

          <Link href="/pages/patient-alert" passHref>
            <Button sx={navStyle}>Patient Alert Cards</Button>
          </Link>

          <Link href="/pages/contact" passHref>
            <Button sx={navStyle}>Contact Us</Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
