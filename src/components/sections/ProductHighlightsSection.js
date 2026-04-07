"use client";
import { Box, Container, Typography, Card, CardContent, IconButton, Grid } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Link from "next/link";
import ScienceIcon from '@mui/icons-material/Science';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';

export default function ProductHighlightsSection() {
  const highlights = [
    {
      title: "Cardiovascular Range",
      desc: "Advanced formulations for hypertension and heart failure management.",
      icon: <MonitorHeartIcon fontSize="large" />,
      link: "/products"
    },
    {
      title: "Antibiotics & Anti-infectives",
      desc: "Broad-spectrum solutions for various systemic infections.",
      icon: <MedicalInformationIcon fontSize="large" />,
      link: "/products"
    },
    {
      title: "Diabetology",
      desc: "Comprehensive oral hypoglycemic agents for diabetes care.",
      icon: <ScienceIcon fontSize="large" />,
      link: "/products"
    }
  ];

  return (
    <Box sx={{ py: { xs: 8, md: 14 }, background: "#FFFFFF", position: "relative", overflow: "hidden" }}>
      <Box sx={{ position: "absolute", top: 0, left: 0, width: "100%", height: "50%", background: "linear-gradient(180deg, #F9FBFC 0%, #FFFFFF 100%)", zIndex: 0 }} />
      
      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Typography sx={{ color: "#00A8A8", fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5, fontSize: "0.85rem", mb: 2 }}>
              Therapeutic Segments
            </Typography>
            <Typography variant="h2" sx={{ color: "#0B3C5D", mb: 3 }}>
              Focus Areas & Products
            </Typography>
            <Box sx={{ width: 60, height: 4, background: "linear-gradient(90deg, #0B3C5D 0%, #00A8A8 100%)", borderRadius: 2, mx: "auto" }} />
          </motion.div>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {highlights.map((item, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                style={{ height: "100%" }}
              >
                  <Card
                    component={Link}
                    href={item.link}
                    sx={{
                      height: "100%",
                      borderRadius: "24px",
                      textDecoration: "none",
                      display: "flex",
                      flexDirection: "column",
                      p: 2,
                      border: "1px solid rgba(0,0,0,0.05)",
                      background: "white",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
                      transition: "all 0.4s ease",
                      "&:hover": {
                        transform: "translateY(-10px)",
                        boxShadow: "0 20px 40px rgba(0,168,168,0.1)",
                        borderColor: "transparent",
                        "& .icon-box": {
                          background: "linear-gradient(135deg, #0B3C5D 0%, #00A8A8 100%)",
                          color: "white",
                        }
                      }
                    }}
                  >
                    <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 3 }}>
                      <Box
                        className="icon-box"
                        sx={{
                          width: 64,
                          height: 64,
                          borderRadius: "16px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#00A8A8",
                          background: "var(--accent-main)",
                          transition: "all 0.4s ease"
                        }}
                      >
                        {item.icon}
                      </Box>
                      <Box>
                        <Typography variant="h5" sx={{ fontWeight: 700, color: "#0B3C5D", mb: 1.5 }}>
                          {item.title}
                        </Typography>
                        <Typography sx={{ color: "#6B7280", lineHeight: 1.6 }}>
                          {item.desc}
                        </Typography>
                      </Box>
                      <Typography sx={{ color: "#00A8A8", fontWeight: 700, display: "flex", alignItems: "center", gap: 0.5, mt: "auto", fontSize: "0.9rem" }}>
                        Explore Portfolio <ArrowForwardIosIcon sx={{ fontSize: "0.8rem" }} />
                      </Typography>
                    </CardContent>
                  </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
