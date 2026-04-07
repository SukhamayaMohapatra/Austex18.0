"use client";
import { Box, Typography, Container, Paper, Button, Grid, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import PageHeroBanner from "../../components/common/PageHeroBanner";
import SectionWrapper from "../../components/common/SectionWrapper";
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import DownloadIcon from '@mui/icons-material/Download';

export default function PatientAlert() {
  const alerts = [
    { title: "Diabetes Alert Card", desc: "Important info for diabetic emergencies and crucial health checkpoints." },
    { title: "Cardiac Alert Card", desc: "Quick access to heart condition details, pacemakers, and critical care guidelines." },
    { title: "Allergy Alert Card", desc: "Critical allergy information for patients to prevent severe anaphylactic reactions." },
  ];

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      <Navbar />

      <PageHeroBanner 
        title="Patient Alert Cards" 
        subtitle="Critical Information"
        backgroundImage="/images/banner2.jpg"
        breadcrumbs={[{ label: "Patient Alert" }]}
      />

      <SectionWrapper>
        <Grid container spacing={8}>
          <Grid item xs={12} md={5}>
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Typography variant="h4" sx={{ color: "#0B3C5D", fontWeight: 800, mb: 3, letterSpacing: -0.5 }}>
                Patient Safety comes first.
              </Typography>
              <Typography sx={{ color: "#6B7280", lineHeight: 1.8, fontSize: "1.05rem", mb: 4 }}>
                These cards contain important safety information that patients and caregivers should be intimately aware of while undergoing rigorous treatment routines. Please download and keep them accessible at all times.
              </Typography>
              <Paper sx={{ p: 4, borderRadius: "20px", background: "#FEF2F2", border: "1px solid #FCA5A5", boxShadow: "none" }}>
                <Typography sx={{ fontWeight: 800, color: "#991B1B", mb: 2, display: "flex", alignItems: "center", gap: 1 }}>
                  <WarningAmberIcon /> Immediate Medical Attention
                </Typography>
                <Typography sx={{ color: "#7F1D1D", mb: 2, fontSize: "0.95rem" }}>
                  Serious side effects may occur at any time. Monitor for:
                </Typography>
                <Box component="ul" sx={{ pl: 3, color: "#7F1D1D", fontSize: "0.95rem", '& li': { mb: 1.5 } }}>
                  <li>Breathing difficulties or severe lung issues</li>
                  <li>Liver-related complications and jaundice</li>
                  <li>Irregular heartbeat or chest discomfort</li>
                  <li>Severe hormonal or metabolic imbalances</li>
                </Box>
              </Paper>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={7}>
            <Grid container spacing={3}>
              {alerts.map((a, i) => (
                <Grid item xs={12} sm={6} key={i}>
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} style={{ height: "100%" }}>
                    <Paper
                      sx={{
                        height: "100%",
                        borderRadius: "20px",
                        p: 3,
                        background: "white",
                        border: "1px solid #E2E8F0",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.02)",
                        transition: "all 0.3s",
                        display: "flex",
                        flexDirection: "column",
                        "&:hover": {
                          transform: "translateY(-5px)",
                          borderColor: "#EF4444",
                          boxShadow: "0 20px 40px rgba(239,68,68,0.1)",
                        }
                      }}
                    >
                      <Typography variant="h6" sx={{ mb: 2, fontWeight: 700, color: "#0B3C5D" }}>
                        {a.title}
                      </Typography>
                      <Typography sx={{ mb: 4, color: "#6B7280", flexGrow: 1, fontSize: "0.95rem" }}>
                        {a.desc}
                      </Typography>
                      <Button
                        fullWidth
                        startIcon={<DownloadIcon />}
                        sx={{
                          background: "#FEF2F2",
                          color: "#EF4444",
                          fontWeight: 700,
                          py: 1.5,
                          borderRadius: "12px",
                          "&:hover": {
                            background: "#EF4444",
                            color: "white",
                          }
                        }}
                      >
                        Download PDF
                      </Button>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </SectionWrapper>

      <Footer />
    </Box>
  );
}
