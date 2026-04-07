"use client";
import { Box, Typography, Container, Grid, Paper } from "@mui/material";
import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import PageHeroBanner from "../../../components/common/PageHeroBanner";
import SectionWrapper from "../../../components/common/SectionWrapper";
import GlobalPresenceSection from "../../../components/sections/GlobalPresenceSection";

export default function GlobalPresencePage() {
  const regions = [
    { name: "North America", offices: "New York, Toronto", products: "150+" },
    { name: "Europe", offices: "London, Frankfurt, Paris", products: "200+" },
    { name: "Asia Pacific", offices: "Hyderabad, Singapore, Tokyo", products: "250+" },
    { name: "Latin America", offices: "São Paulo, Mexico City", products: "80+" },
    { name: "Middle East & Africa", offices: "Dubai, Johannesburg", products: "120+" }
  ];

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      <Navbar />

      <PageHeroBanner 
        title="Global Presence" 
        subtitle="About Austex"
        backgroundImage="/images/banner1.jpg"
        breadcrumbs={[
          { label: "About Us", href: "/about" }, 
          { label: "Global Presence" }
        ]}
      />

      {/* Reuse the animated map section */}
      <GlobalPresenceSection />

      <SectionWrapper bg="gray" title="Regional Operations">
        <Typography sx={{ color: "#6B7280", textAlign: "center", maxWidth: 800, mx: "auto", mb: 8, fontSize: "1.1rem", lineHeight: 1.8 }}>
          Our decentralized operational model ensures that we can respond quickly to regional healthcare needs while maintaining unified global quality standards.
        </Typography>

        <Grid container spacing={4}>
          {regions.map((region, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Paper 
                sx={{ 
                  p: 4, 
                  height: "100%", 
                  borderRadius: "20px", 
                  borderTop: "6px solid #00A8A8",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 15px 35px rgba(0,0,0,0.05)",
                    borderTop: "6px solid #0B3C5D"
                  }
                }}
              >
                <Typography variant="h5" sx={{ color: "#0B3C5D", fontWeight: 700, mb: 3 }}>
                  {region.name}
                </Typography>
                
                <Box sx={{ mb: 2 }}>
                  <Typography sx={{ color: "#00A8A8", fontWeight: 600, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: 1, mb: 0.5 }}>
                    Key Offices
                  </Typography>
                  <Typography sx={{ color: "#6B7280", fontWeight: 500 }}>
                    {region.offices}
                  </Typography>
                </Box>
                
                <Box>
                  <Typography sx={{ color: "#00A8A8", fontWeight: 600, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: 1, mb: 0.5 }}>
                    Registered Products
                  </Typography>
                  <Typography sx={{ color: "#6B7280", fontWeight: 500 }}>
                    {region.products}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </SectionWrapper>

      <Footer />
    </Box>
  );
}
