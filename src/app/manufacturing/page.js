"use client";
import { Box, Typography, Container, Grid, Card, CardContent, Chip } from "@mui/material";
import { motion } from "framer-motion";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import PageHeroBanner from "../../components/common/PageHeroBanner";
import SectionWrapper from "../../components/common/SectionWrapper";
import FactoryIcon from '@mui/icons-material/Factory';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SecurityIcon from '@mui/icons-material/Security';

export default function ManufacturingPage() {
  const units = [
    {
      name: "Unit I - General Orals",
      location: "Hyderabad, India",
      capacity: "5 Billion Tablets/Annually",
      approvals: ["WHO-GMP", "ISO 9001", "EU-GMP"],
      image: "/images/banner3.jpg"
    },
    {
      name: "Unit II - Injectables & Sterile",
      location: "Pune, India",
      capacity: "50 Million Vials/Annually",
      approvals: ["US-FDA", "EU-GMP"],
      image: "/images/banner4.jpg"
    },
    {
      name: "Unit III - Topicals & Liquids",
      location: "Baddi, India",
      capacity: "100 Million Tubes/Annually",
      approvals: ["WHO-GMP"],
      image: "/images/banner5.jpg"
    }
  ];

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      <Navbar />

      <PageHeroBanner 
        title="Manufacturing Facilities" 
        subtitle="Scale & Precision"
        backgroundImage="/images/About.jpg"
        breadcrumbs={[{ label: "Capabilities", href: "/services" }, { label: "Manufacturing" }]}
      />

      <SectionWrapper>
        <Grid container spacing={8} alignItems="center">
           <Grid item xs={12} md={6}>
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Typography variant="h3" sx={{ color: "#0B3C5D", mb: 4, fontWeight: 800 }}>
                World-Class Production Infrastructure
              </Typography>
              <Typography sx={{ color: "#6B7280", lineHeight: 1.8, fontSize: "1.05rem", mb: 3 }}>
                Austex Pharma operates cutting-edge manufacturing facilities designed to meet the most stringent international regulatory standards. Our plants are equipped with fully automated lines, ensuring zero-defect production and rapid scale-up.
              </Typography>
              
              <Box sx={{ mt: 4, display: "flex", flexDirection: "column", gap: 3 }}>
                <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
                   <Box sx={{ p: 2, borderRadius: "12px", background: "#E6F4F7", color: "#00A8A8" }}><FactoryIcon /></Box>
                   <Box>
                     <Typography sx={{ fontWeight: 700, color: "#0B3C5D" }}>High Capacity Scale</Typography>
                     <Typography sx={{ color: "#6B7280", fontSize: "0.9rem" }}>Capable of handling multi-ton commercial batches.</Typography>
                   </Box>
                </Box>
                <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
                   <Box sx={{ p: 2, borderRadius: "12px", background: "#E6F4F7", color: "#00A8A8" }}><SecurityIcon /></Box>
                   <Box>
                     <Typography sx={{ fontWeight: 700, color: "#0B3C5D" }}>Strict Environmental Controls</Typography>
                     <Typography sx={{ color: "#6B7280", fontSize: "0.9rem" }}>HVAC systems maintaining ISO classified cleanrooms.</Typography>
                   </Box>
                </Box>
                <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
                   <Box sx={{ p: 2, borderRadius: "12px", background: "#E6F4F7", color: "#00A8A8" }}><LocalShippingIcon /></Box>
                   <Box>
                     <Typography sx={{ fontWeight: 700, color: "#0B3C5D" }}>Integrated Supply Chain</Typography>
                     <Typography sx={{ color: "#6B7280", fontSize: "0.9rem" }}>Seamless logistics guaranteeing uninterrupted global supply.</Typography>
                   </Box>
                </Box>
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img 
                src="/images/service.jpg" 
                alt="Manufacturing Equipment" 
                style={{ width: "100%", borderRadius: "24px", boxShadow: "0 20px 40px rgba(11,60,93,0.15)" }} 
              />
            </motion.div>
          </Grid>
        </Grid>
      </SectionWrapper>

      <SectionWrapper bg="gray" title="Our Production Units">
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" }, gap: 3 }}>
          {units.map((unit, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
              <Card 
                sx={{ 
                  height: "100%", 
                  borderRadius: "24px", 
                  display: "flex", 
                  flexDirection: "column", 
                  overflow: "hidden",
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
                  transition: "all 0.4s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 20px 40px rgba(0,168,168,0.1)",
                    borderColor: "#00A8A8",
                  }
                }}
              >
                <Box sx={{ height: 200, overflow: "hidden" }}>
                  <img src={unit.image} alt={unit.name} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s ease" }} />
                </Box>
                <CardContent sx={{ p: 3, flexGrow: 1, display: "flex", flexDirection: "column" }}>
                  <Typography variant="h6" sx={{ color: "#0B3C5D", fontWeight: 800, mb: 0.5 }}>{unit.name}</Typography>
                  <Typography sx={{ color: "#6B7280", mb: 2, fontSize: "0.85rem" }}>📍 {unit.location}</Typography>
                  
                  <Box sx={{ mb: 3, py: 1.5, px: 2, bgcolor: "#F8FAFC", borderRadius: "10px", border: "1px solid #F1F5F9" }}>
                    <Typography sx={{ fontSize: "0.65rem", color: "#9CA3AF", textTransform: "uppercase", fontWeight: 700, letterSpacing: 0.5, mb: 0.25 }}>Installed Capacity</Typography>
                    <Typography sx={{ color: "#1A1A1A", fontWeight: 600, fontSize: "0.9rem" }}>{unit.capacity}</Typography>
                  </Box>

                  <Box sx={{ mt: "auto" }}>
                    <Typography sx={{ fontSize: "0.65rem", color: "#9CA3AF", textTransform: "uppercase", fontWeight: 700, letterSpacing: 0.5, mb: 1 }}>Approvals</Typography>
                    <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                      {unit.approvals.map(app => (
                        <Chip key={app} label={app} size="small" sx={{ bgcolor: "#06253B", color: "white", fontWeight: 600, fontSize: "0.7rem", height: 24 }} />
                      ))}
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>
      </SectionWrapper>

      <Footer />
    </Box>
  );
}
