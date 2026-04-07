"use client";
import { Box, Container, Grid, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";
import AnimatedCounter from "../common/AnimatedCounter";
import PublicIcon from '@mui/icons-material/Public';
import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid';
import GroupsIcon from '@mui/icons-material/Groups';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export default function StatsSection() {
  const stats = [
    { label: "Countries Served", value: 50, suffix: "+", icon: <PublicIcon fontSize="large" /> },
    { label: "Products", value: 250, suffix: "+", icon: <MedicationLiquidIcon fontSize="large" /> },
    { label: "Professionals", value: 1200, suffix: "+", icon: <GroupsIcon fontSize="large" /> },
    { label: "Years Experience", value: 20, suffix: "+", icon: <AccessTimeIcon fontSize="large" /> },
  ];

  return (
    <Box sx={{ py: 10, background: "#0B3C5D", position: "relative", overflow: "hidden" }}>
      {/* Decorative background elements */}
      <Box sx={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(0,168,168,0.5), transparent)" }} />
      <Box sx={{ position: "absolute", bottom: -200, right: -200, width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,168,168,0.1) 0%, transparent 70%)" }} />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={4}>
          {stats.map((stat, idx) => (
            <Grid item xs={12} sm={6} md={3} key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <Paper
                  sx={{
                    p: 4,
                    textAlign: "center",
                    background: "rgba(255,255,255,0.03)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.05)",
                    borderRadius: "20px",
                    color: "white",
                    transition: "transform 0.3s ease, background 0.3s ease",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 2,
                    "&:hover": {
                      transform: "translateY(-10px)",
                      background: "rgba(0,168,168,0.1)",
                      border: "1px solid rgba(0,168,168,0.3)",
                    }
                  }}
                  elevation={0}
                >
                  <Box sx={{ color: "#00A8A8" }}>
                    {stat.icon}
                  </Box>
                  <Box>
                    <Typography variant="h3" sx={{ fontWeight: 800, color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </Typography>
                    <Typography sx={{ color: "#9CA3AF", mt: 1, fontWeight: 500, letterSpacing: 1, textTransform: "uppercase", fontSize: "0.85rem" }}>
                      {stat.label}
                    </Typography>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
