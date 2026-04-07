"use client";
import { Container, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

export default function SectionWrapper({ title, subtitle, children, bg = "white", align = "center", id }) {
  return (
    <Box
      id={id}
      sx={{
        background: bg === "gray" 
          ? "linear-gradient(180deg, #F9FBFC 0%, #F1F5F9 100%)" 
          : bg === "dark" 
            ? "#06253B" 
            : "#ffffff",
        py: { xs: 8, md: 12 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: align, marginBottom: "4rem" }}
          >
            {subtitle && (
              <Typography
                sx={{
                  color: "#00A8A8",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: 1.5,
                  fontSize: "0.85rem",
                  mb: 1.5,
                }}
              >
                {subtitle}
              </Typography>
            )}
            {title && (
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  color: bg === "dark" ? "#FFFFFF" : "#0B3C5D",
                  letterSpacing: "-0.02em",
                  fontSize: { xs: "2rem", md: "3rem" },
                }}
              >
                {title}
              </Typography>
            )}
            {align === "center" && (
              <Box 
                sx={{ 
                  width: 60, 
                  height: 4, 
                  background: "linear-gradient(90deg, #0B3C5D 0%, #00A8A8 100%)", 
                  borderRadius: 2, 
                  mx: "auto", 
                  mt: 3 
                }} 
              />
            )}
            {align === "left" && (
              <Box 
                sx={{ 
                  width: 60, 
                  height: 4, 
                  background: "linear-gradient(90deg, #0B3C5D 0%, #00A8A8 100%)", 
                  borderRadius: 2, 
                  mt: 3 
                }} 
              />
            )}
          </motion.div>
        )}

        {children}
      </Container>
    </Box>
  );
}
