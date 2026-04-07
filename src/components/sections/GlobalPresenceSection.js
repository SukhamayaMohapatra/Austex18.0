"use client";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import MapIcon from '@mui/icons-material/Map';
import LanguageIcon from '@mui/icons-material/Language';

export default function GlobalPresenceSection() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, background: "#F9FBFC", position: "relative", overflow: "hidden" }}>
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 4, lg: 8 }} alignItems="center">
          <Grid item xs={12} lg={5} sx={{ width: '100%' }}>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ width: "100%" }}
            >
              <Typography sx={{ color: "#00A8A8", fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5, fontSize: "0.85rem", mb: 2 }}>
                Global Footprint
              </Typography>
              <Typography variant="h2" sx={{ color: "#0B3C5D", mb: 4, fontSize: { xs: "2.2rem", md: "3rem" }, fontWeight: 800 }}>
                Impacting Lives Across Borders
              </Typography>
              <Typography sx={{ color: "#6B7280", mb: 4, fontSize: "1.1rem", lineHeight: 1.8 }}>
                With a robust supply chain and extensive distribution network, Austex Pharma&apos;s products reach patients in over 50 countries. We continuously expand our footprint to address global healthcare needs.
              </Typography>

              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Paper sx={{ p: 4, borderLeft: "4px solid #00A8A8", background: "white", boxShadow: "0 10px 30px rgba(0,0,0,0.03)", height: "100%" }}>
                    <MapIcon sx={{ color: "#00A8A8", mb: 2, fontSize: 40 }} />
                    <Typography variant="h6" sx={{ color: "#0B3C5D", mb: 1, fontWeight: 700 }}>5 Continents</Typography>
                    <Typography sx={{ color: "#6B7280", fontSize: "0.95rem", lineHeight: 1.5 }}>Worldwide Distribution Network</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Paper sx={{ p: 4, borderLeft: "4px solid #0B3C5D", background: "white", boxShadow: "0 10px 30px rgba(0,0,0,0.03)", height: "100%" }}>
                    <LanguageIcon sx={{ color: "#0B3C5D", mb: 2, fontSize: 40 }} />
                    <Typography variant="h6" sx={{ color: "#0B3C5D", mb: 1, fontWeight: 700 }}>Localized Care</Typography>
                    <Typography sx={{ color: "#6B7280", fontSize: "0.95rem", lineHeight: 1.5 }}>Region-specific Formulations</Typography>
                  </Paper>
                </Grid>
              </Grid>
            </motion.div>
          </Grid>
          
          <Grid item xs={12} lg={7} sx={{ width: '100%', mt: { xs: 4, lg: 0 } }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ width: "100%" }}
            >
              {/* Modern Map Visualization */}
              <Box 
                sx={{ 
                  width: "100%", 
                  height: { xs: 400, md: 500, lg: 650 }, 
                  backgroundImage: "url('/images/banner1.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: '24px',
                  boxShadow: "0 20px 50px rgba(11, 60, 93, 0.15)",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden"
                }}
              >
                {/* Overlay gradient */}
                <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(11,60,93,0.85) 0%, rgba(0,168,168,0.7) 100%)", zIndex: 1 }} />
                
                {/* Animated map markers/pulses */}
                <Box sx={{ 
                  position: "absolute", 
                  inset: 0, 
                  zIndex: 2,
                  "@keyframes mapPulse": {
                    "0%": { transform: "scale(1)", opacity: 0.8 },
                    "100%": { transform: "scale(2.5)", opacity: 0 }
                  }
                }}>
                  {/* Nodes */}
                  <Box sx={{ position: 'absolute', top: '35%', left: '25%', width: 14, height: 14, borderRadius: '50%', background: '#FFF' }}>
                    <Box sx={{ position: 'absolute', top: -5, left: -5, width: 24, height: 24, borderRadius: '50%', border: '2px solid #FFF', animation: 'mapPulse 2s infinite' }} />
                  </Box>
                  <Box sx={{ position: 'absolute', top: '50%', left: '50%', width: 18, height: 18, borderRadius: '50%', background: '#00A8A8' }}>
                    <Box sx={{ position: 'absolute', top: -5, left: -5, width: 28, height: 28, borderRadius: '50%', border: '2px solid #00A8A8', animation: 'mapPulse 2s infinite 0.6s' }} />
                  </Box>
                  <Box sx={{ position: 'absolute', top: '65%', left: '75%', width: 14, height: 14, borderRadius: '50%', background: '#FFF' }}>
                    <Box sx={{ position: 'absolute', top: -5, left: -5, width: 24, height: 24, borderRadius: '50%', border: '2px solid #FFF', animation: 'mapPulse 2s infinite 1.2s' }} />
                  </Box>
                  
                  {/* Connecting dashed SVG lines */}
                  <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
                    <path d="M 25% 35% Q 35% 20% 50% 50% T 75% 65%" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeDasharray="5,5" />
                  </svg>
                </Box>
                
                <Typography variant="h2" sx={{ color: "white", zIndex: 3, fontWeight: 800, letterSpacing: 1.5, textShadow: "0 4px 15px rgba(0,0,0,0.4)" }}>
                  Global Network
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
