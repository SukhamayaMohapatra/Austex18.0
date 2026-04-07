"use client";
import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function HeroSection() {
  const images = [
    "/images/banner1.jpg",
    "/images/banner2.jpg",
    "/images/banner3.jpg",
    "/images/banner4.jpg",
    "/images/banner5.jpg",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Box
      sx={{
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Background Slideshow */}
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{
            position: "absolute",
            inset: 0,
            background: `url(${images[index]}) center/cover no-repeat`,
            zIndex: 0,
          }}
        />
      </AnimatePresence>

      {/* Modern Gradient Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(90deg, rgba(6,37,59,0.95) 0%, rgba(11,60,93,0.7) 50%, rgba(11,60,93,0.3) 100%)",
          zIndex: 1,
        }}
      />

      {/* Floating Particles Overlay */}
      <Box sx={{ position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none" }}>
        {[...Array(6)].map((_, i) => (
          <Box
            key={i}
            className={i % 2 === 0 ? "animate-float" : "animate-float-slow"}
            sx={{
              position: "absolute",
              width: i % 2 === 0 ? 30 : 60,
              height: i % 2 === 0 ? 30 : 60,
              borderRadius: "50%",
              background: i % 3 === 0 ? "rgba(0,168,168,0.1)" : "rgba(255,255,255,0.05)",
              backdropFilter: "blur(4px)",
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 80 + 10}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </Box>

      {/* Content */}
      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 3, color: "white" }}>
        <motion.div
          key={`text-${index}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Box sx={{ maxWidth: 800 }}>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
              <Typography
                sx={{
                  color: "#00A8A8",
                  fontWeight: 700,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  mb: 3,
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  fontSize: "0.9rem",
                  "&::before": {
                    content: '""',
                    width: 40,
                    height: 2,
                    background: "#00A8A8",
                    display: "block",
                  },
                }}
              >
                Pioneering Healthcare
              </Typography>
            </motion.div>

            <Typography variant="h1" sx={{ mb: 3 }}>
              Innovating Healthcare,<br />
              <span style={{ color: "#00A8A8" }}>Globally.</span>
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "1.1rem", md: "1.25rem" },
                color: "#E6F4F7",
                mb: 5,
                lineHeight: 1.6,
                maxWidth: 600,
              }}
            >
              Advanced pharmaceutical manufacturing with global standards. We are dedicated to providing accessible, high-quality healthcare solutions worldwide.
            </Typography>

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
              <Link href="/products" passHref>
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    background: "linear-gradient(135deg, #00A8A8 0%, #33CDCD 100%)",
                    color: "white",
                    borderRadius: "50px",
                    px: { xs: 4, md: 5 },
                    py: { xs: 1.5, md: 2 },
                    fontSize: "1.1rem",
                    boxShadow: "0 10px 25px -5px rgba(0, 168, 168, 0.4)",
                    "&:hover": {
                      background: "linear-gradient(135deg, #007A7A 0%, #00A8A8 100%)",
                      transform: "translateY(-3px)",
                      boxShadow: "0 15px 30px -5px rgba(0, 168, 168, 0.5)",
                    },
                  }}
                >
                  View Products
                </Button>
              </Link>
              <Link href="/contact" passHref>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: "rgba(255,255,255,0.5)",
                    color: "white",
                    borderRadius: "50px",
                    px: { xs: 4, md: 5 },
                    py: { xs: 1.5, md: 2 },
                    fontSize: "1.1rem",
                    "&:hover": {
                      borderColor: "white",
                      background: "rgba(255,255,255,0.1)",
                    },
                  }}
                >
                  Contact Us
                </Button>
              </Link>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
