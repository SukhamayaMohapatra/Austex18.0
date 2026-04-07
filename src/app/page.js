"use client";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/sections/HeroSection";
import StatsSection from "../components/sections/StatsSection";
import CertificationsStrip from "../components/sections/CertificationsStrip";
import GlobalPresenceSection from "../components/sections/GlobalPresenceSection";
import ProductHighlightsSection from "../components/sections/ProductHighlightsSection";
import SectionWrapper from "../components/common/SectionWrapper";
import CTABanner from "../components/common/CTABanner";
import { Grid, Paper, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

export default function Home() {
  const capabilities = [
    { title: "R&D Excellence", desc: "Advanced formulation capabilities focusing on complex generics and novel delivery systems." },
    { title: "World-Class Manufacturing", desc: "State-of-the-art facilities compliant with US-FDA, EU-GMP, and WHO-GMP standards." },
    { title: "Stringent Quality Assurance", desc: "Rigorous quality control processes ensuring the highest safety and efficacy in every dose." }
  ];

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      <Navbar />
      
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Certifications Strip */}
      <CertificationsStrip />

      {/* 3. Stats */}
      <StatsSection />

      {/* 4. About / Capabilities Snapshot */}
      <SectionWrapper 
        title="Driving Healthcare Innovation" 
        subtitle="Our Capabilities" 
        bg="gray"
      >
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {capabilities.map((cap, idx) => (
            <Grid item xs={12} md={4} key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                style={{ height: "100%" }}
              >
                <Paper 
                  elevation={0}
                  sx={{ 
                    p: 4, 
                    height: "100%", 
                    borderRadius: "20px", 
                    background: "#FFFFFF",
                    borderLeft: "4px solid #0B3C5D",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
                    transition: "transform 0.3s",
                    "&:hover": { transform: "translateY(-5px)", borderLeft: "4px solid #00A8A8" }
                  }}
                >
                  <Typography variant="h5" sx={{ color: "#0B3C5D", fontWeight: 700, mb: 2 }}>
                    {cap.title}
                  </Typography>
                  <Typography sx={{ color: "#6B7280", lineHeight: 1.7 }}>
                    {cap.desc}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </SectionWrapper>

      {/* 5. Product Highlights */}
      <ProductHighlightsSection />

      {/* 6. Global Presence */}
      <GlobalPresenceSection />

      {/* 7. CTA */}
      <CTABanner 
        title="Ready to Partner With Us?"
        subtitle="Join hands with Austex Pharma to distribute high-quality healthcare solutions in your region. We offer robust contract manufacturing and distribution models."
        buttonText="Get in Touch"
        buttonLink="/contact"
      />

      <Footer />
    </Box>
  );
}
