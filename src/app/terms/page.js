"use client";
import { Box, Typography, Container, Paper } from "@mui/material";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import PageHeroBanner from "../../components/common/PageHeroBanner";
import SectionWrapper from "../../components/common/SectionWrapper";

export default function TermsPage() {
  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      <Navbar />
      <PageHeroBanner title="Terms of Service" subtitle="Legal" backgroundImage="/images/banner3.jpg" breadcrumbs={[{ label: "Terms of Service" }]} />
      <SectionWrapper align="left">
        <Paper sx={{ p: { xs: 4, md: 8 }, borderRadius: "24px", boxShadow: "0 10px 40px rgba(0,0,0,0.03)" }}>
          <Typography variant="h4" sx={{ color: "#0B3C5D", mb: 4, fontWeight: 700 }}>Website Terms of Use</Typography>
          <Typography sx={{ color: "#6B7280", mb: 3, lineHeight: 1.8 }}>
            By accessing and using the Austex Pharma website, you agree to comply with the following terms and conditions. The content provided is for informational purposes only.
          </Typography>
          <Typography variant="h6" sx={{ color: "#0B3C5D", mt: 4, mb: 2, fontWeight: 700 }}>Medical Disclaimer</Typography>
          <Typography sx={{ color: "#6B7280", mb: 3, lineHeight: 1.8 }}>
            Information regarding our pharmaceutical products is not intended as medical advice. Patients should always consult a qualified healthcare professional before starting or modifying any treatment regimen.
          </Typography>
          <Typography variant="h6" sx={{ color: "#0B3C5D", mt: 4, mb: 2, fontWeight: 700 }}>Intellectual Property</Typography>
          <Typography sx={{ color: "#6B7280", mb: 3, lineHeight: 1.8 }}>
            All content, trademarks, logos, and materials on this site are the exclusive property of Austex Pharma and may not be reproduced without explicit written consent.
          </Typography>
          <Typography sx={{ color: "#9CA3AF", fontSize: "0.9rem", mt: 6 }}>Last Updated: {new Date().getFullYear()}</Typography>
        </Paper>
      </SectionWrapper>
      <Footer />
    </Box>
  );
}
