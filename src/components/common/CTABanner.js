"use client";
import { Box, Container, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CTABanner({ title, subtitle, buttonText, buttonLink }) {
  return (
    <Box sx={{ position: "relative", overflow: "hidden", py: { xs: 10, md: 14 } }}>
      <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, #06253B 0%, #0B3C5D 100%)", zIndex: 0 }} />
      <Box sx={{ position: "absolute", inset: 0, background: "radial-gradient(circle at center, rgba(0,168,168,0.2) 0%, transparent 60%)", zIndex: 1 }} />
      <Box sx={{ position: "absolute", inset: 0, opacity: 0.1, backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23ffffff\\' fill-opacity=\\'1\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')", zIndex: 1 }} />

      <Container sx={{ position: "relative", zIndex: 2, textAlign: "center" }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Typography variant="h2" sx={{ color: "#fff", mb: 3, fontWeight: 800, letterSpacing: "-0.02em", fontSize: { xs: "2.2rem", md: "3.5rem" } }}>
            {title}
          </Typography>
          <Typography sx={{ color: "#E6F4F7", mb: 5, maxWidth: "700px", mx: "auto", fontSize: "1.125rem", lineHeight: 1.6 }}>
            {subtitle}
          </Typography>
          <Link href={buttonLink} passHref>
            <Button
              variant="contained"
              size="large"
              sx={{
                background: "linear-gradient(135deg, #00A8A8 0%, #33CDCD 100%)",
                color: "#fff",
                px: 5,
                py: 2,
                borderRadius: "50px",
                fontSize: "1.1rem",
                fontWeight: 700,
                boxShadow: "0 10px 20px -10px rgba(0, 168, 168, 0.5)",
                "&:hover": {
                  background: "linear-gradient(135deg, #007A7A 0%, #00A8A8 100%)",
                  boxShadow: "0 15px 25px -10px rgba(0, 168, 168, 0.6)",
                  transform: "translateY(-3px)",
                },
              }}
            >
              {buttonText} →
            </Button>
          </Link>
        </motion.div>
      </Container>
    </Box>
  );
}
