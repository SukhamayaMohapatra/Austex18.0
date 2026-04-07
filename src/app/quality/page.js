"use client";
import { Box, Typography, Container, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import PageHeroBanner from "../../components/common/PageHeroBanner";
import SectionWrapper from "../../components/common/SectionWrapper";

export default function QualityPage() {
  const processes = [
    "Raw Material Testing",
    "In-Process Quality Control (IPQC)",
    "Finished Product Analysis",
    "Stability Testing (ICH Guidelines)",
    "Microbiological Evaluation",
    "Vendor Qualification"
  ];

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      <Navbar />

      <PageHeroBanner 
        title="Quality Assurance" 
        subtitle="Uncompromising Standards"
        backgroundImage="/images/service.jpg"
        breadcrumbs={[{ label: "Capabilities", href: "/services" }, { label: "Quality Assurance" }]}
      />

      <SectionWrapper>
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={7}>
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Typography variant="h3" sx={{ color: "#0B3C5D", mb: 4, fontWeight: 800 }}>
                Quality is Built into Every Step.
              </Typography>
              <Typography sx={{ color: "#6B7280", lineHeight: 1.8, fontSize: "1.05rem", mb: 3 }}>
                At Austex Pharma, Quality Assurance goes beyond testing the final product—it is a continuous, embedded process designed into every stage of development, manufacturing, and distribution. We operate under a robust Quality Management System (QMS) aligned with cGMP requirements of major global regulatory agencies.
              </Typography>
              <Typography sx={{ color: "#6B7280", lineHeight: 1.8, fontSize: "1.05rem" }}>
                Our independent Quality Assurance division has oversight and veto power over all manufacturing operations, ensuring that zero compromised products ever reach the market.
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={5}>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Paper sx={{ p: 4, borderRadius: "24px", bgcolor: "#06253B", color: "white" }}>
                <Typography variant="h5" sx={{ color: "#00A8A8", fontWeight: 700, mb: 3 }}>
                  Quality Checkpoints
                </Typography>
                <Grid container spacing={2}>
                  {processes.map((p, i) => (
                    <Grid item xs={12} key={i}>
                      <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                        <Box sx={{ width: 24, height: 24, borderRadius: "50%", bgcolor: "rgba(0,168,168,0.2)", color: "#00A8A8", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.8rem", flexShrink: 0 }}>
                          {i + 1}
                        </Box>
                        <Typography sx={{ fontWeight: 500 }}>{p}</Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </SectionWrapper>

      <Footer />
    </Box>
  );
}
