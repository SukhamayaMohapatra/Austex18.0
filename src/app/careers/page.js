"use client";
import { Box, Typography } from "@mui/material";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import PageHeroBanner from "../../components/common/PageHeroBanner";
import SectionWrapper from "../../components/common/SectionWrapper";

export default function CareersPage() {
  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      <Navbar />
      <PageHeroBanner 
        title="Careers at Austex" 
        subtitle="Join Our Team"
        backgroundImage="/images/service.jpg"
        breadcrumbs={[{ label: "Careers" }]}
      />
      <SectionWrapper align="center">
        <Typography variant="h3" sx={{ color: "#0B3C5D", mb: 3, fontWeight: 800 }}>Shape the Future of Healthcare</Typography>
        <Typography sx={{ color: "#6B7280", maxWidth: 800, mx: "auto", mb: 6, fontSize: "1.1rem", lineHeight: 1.8 }}>
          We are always looking for passionate scientists, quality experts, and business leaders to join our growing global team. Discover opportunities to make a real impact on patient lives.
        </Typography>
        <Box sx={{ p: 6, bgcolor: "#F9FBFC", borderRadius: "24px", border: "1px dashed #CBD5E1" }}>
          <Typography variant="h6" sx={{ color: "#6B7280" }}>Current Openings API Integration Pending...</Typography>
          <Typography sx={{ color: "#9CA3AF", mt: 1 }}>Please check back later or email your resume to hr@austexpharma.com</Typography>
        </Box>
      </SectionWrapper>
      <Footer />
    </Box>
  );
}
