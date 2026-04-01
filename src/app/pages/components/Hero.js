"use client";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const images = [
    "images/banner1.jpg",
    "images/banner2.jpg",
    "images/banner3.jpg",
    "images/banner4.jpg",
    "images/banner5.jpg",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000); // change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        height: "90vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Slideshow */}
      {images.map((img, i) => (
        <Box
          key={i}
          sx={{
            position: "absolute",
            inset: 0,
            background: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transition: "opacity 1s ease-in-out",
            opacity: i === index ? 1 : 0,
          }}
        />
      ))}

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          alignItems: "center",
          px: 8,
          color: "white",
        }}
      >
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            style={{
              color: "blueviolet",
              fontFamily: "emoji",
              fontWeight: "700",
            }}
          >
            Building Hope.
            <br />
            Spreading Health.
          </Typography>

          <Typography
            mt={3}
            sx={{
              maxWidth: 500,
              color: "blue",
              fontFamily: "emoji",
              fontWeight: "500",
            }}
          >
            Advanced pharmaceutical manufacturing with global standards.
          </Typography>

          <Button variant="contained" color="secondary" sx={{ mt: 4 }}>
            Explore Products
          </Button>
        </motion.div>
      </Box>
    </Box>
  );
}
