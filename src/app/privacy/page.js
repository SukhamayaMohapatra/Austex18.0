"use client";
import { Box, Typography, Container, Paper } from "@mui/material";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import PageHeroBanner from "../../components/common/PageHeroBanner";
import SectionWrapper from "../../components/common/SectionWrapper";

export default function PrivacyPage() {
  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      <Navbar />
      <PageHeroBanner title="Privacy Policy" subtitle="Legal" backgroundImage="/images/banner4.jpg" breadcrumbs={[{ label: "Privacy Policy" }]} />
      <SectionWrapper align="left">
        <Paper sx={{ p: { xs: 4, md: 8 }, borderRadius: "24px", boxShadow: "0 10px 40px rgba(0,0,0,0.03)" }}>
          <Typography variant="h4" sx={{ color: "#0B3C5D", mb: 4, fontWeight: 700 }}>Data Protection & Privacy</Typography>
          <Typography sx={{ color: "#6B7280", mb: 3, lineHeight: 1.8 }}>
            At Austex Pharma, we are committed to protecting the privacy and security of our users and partners. This Privacy Policy outlines how we collect, use, and safeguard personal information across our digital platforms.
          </Typography>
          <Typography variant="h6" sx={{ color: "#0B3C5D", mt: 4, mb: 2, fontWeight: 700 }}>Information Collection</Typography>
          <Typography sx={{ color: "#6B7280", mb: 3, lineHeight: 1.8 }}>
            We only collect information necessary to provide our services and improve user experience. This may include contact details submitted via forms and standard web analytics data. We do not sell or rent personal information to third parties.
          </Typography>
          <Typography variant="h6" sx={{ color: "#0B3C5D", mt: 4, mb: 2, fontWeight: 700 }}>Data Security</Typography>
          <Typography sx={{ color: "#6B7280", mb: 3, lineHeight: 1.8 }}>
            Industry-standard encryption and security protocols are implemented to protect all data transmitted to and stored by Austex Pharma.
          </Typography>
          <Typography sx={{ color: "#9CA3AF", fontSize: "0.9rem", mt: 6 }}>Last Updated: {new Date().getFullYear()}</Typography>
        </Paper>
      </SectionWrapper>
      <Footer />
    </Box>
  );
}
