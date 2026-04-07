"use client";
import { Box, Typography, Container, Grid, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import PageHeroBanner from "../../components/common/PageHeroBanner";
import SectionWrapper from "../../components/common/SectionWrapper";
import ScienceIcon from '@mui/icons-material/Science';
import BiotechIcon from '@mui/icons-material/Biotech';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';

export default function RandDPage() {
  const focusAreas = [
    { title: "Generic Formulations", desc: "Developing bioequivalent formulations that offer cost-effective alternatives without compromising on quality or efficacy.", icon: <ScienceIcon fontSize="large" /> },
    { title: "Complex Therapeutics", desc: "Expertise in poor solubility drugs, multi-particulate systems, and extended-release profiles.", icon: <BiotechIcon fontSize="large" /> },
    { title: "Process Innovation", desc: "Continuous optimization of manufacturing processes to improve yield, stability, and scale-up efficiency.", icon: <DeviceHubIcon fontSize="large" /> }
  ];

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      <Navbar />

      <PageHeroBanner 
        title="Research & Development" 
        subtitle="Innovation at Core"
        backgroundImage="/images/banner1.jpg"
        breadcrumbs={[{ label: "Capabilities", href: "/services" }, { label: "R&D" }]}
      />

      <SectionWrapper>
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Typography variant="h3" sx={{ color: "#0B3C5D", mb: 4, fontWeight: 800 }}>
                Driven by Science. Focused on Solutions.
              </Typography>
              <Typography sx={{ color: "#6B7280", lineHeight: 1.8, fontSize: "1.05rem", mb: 3 }}>
                At Austex Pharma, Research & Development is the engine of our growth. Our state-of-the-art R&D center is manned by a team of highly qualified scientists, formulation experts, and analytical chemists dedicated to developing high-quality pharmaceutical products.
              </Typography>
              <Typography sx={{ color: "#6B7280", lineHeight: 1.8, fontSize: "1.05rem" }}>
                We invest heavily in technology and talent to ensure a robust pipeline of products, ranging from standard generic solid orals to complex novel drug delivery systems (NDDS) targeting global regulated markets.
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 3 }}>
                <Box sx={{ bgcolor: "#06253B", p: 4, borderRadius: "20px", color: "white", textAlign: "center" }}>
                  <Typography variant="h2" sx={{ color: "#00A8A8", fontWeight: 800, mb: 1 }}>150+</Typography>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.9rem", textTransform: "uppercase" }}>Scientists</Typography>
                </Box>
                <Box sx={{ bgcolor: "white", p: 4, borderRadius: "20px", color: "#0B3C5D", textAlign: "center", border: "1px solid #E2E8F0" }}>
                  <Typography variant="h2" sx={{ color: "#0B3C5D", fontWeight: 800, mb: 1 }}>50+</Typography>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.9rem", textTransform: "uppercase" }}>Patents Filed</Typography>
                </Box>
                <Box sx={{ bgcolor: "white", p: 4, borderRadius: "20px", color: "#0B3C5D", textAlign: "center", border: "1px solid #E2E8F0" }}>
                  <Typography variant="h2" sx={{ color: "#0B3C5D", fontWeight: 800, mb: 1 }}>$10M</Typography>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.9rem", textTransform: "uppercase" }}>Annual R&D Investment</Typography>
                </Box>
                <Box sx={{ bgcolor: "#00A8A8", p: 4, borderRadius: "20px", color: "white", textAlign: "center" }}>
                  <Typography variant="h2" sx={{ color: "white", fontWeight: 800, mb: 1 }}>30+</Typography>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.9rem", textTransform: "uppercase" }}>Products in Pipeline</Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </SectionWrapper>

      <SectionWrapper bg="gray" title="Key Focus Areas" align="center">
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" }, gap: 3 }}>
          {focusAreas.map((area, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
              <Card 
                sx={{ 
                  height: "100%", 
                  p: { xs: 3, md: 4 }, 
                  textAlign: "center", 
                  borderRadius: "24px", 
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
                  transition: "all 0.4s ease",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 20px 40px rgba(0,168,168,0.1)",
                    borderColor: "#00A8A8",
                  }
                }}
              >
                <Box sx={{ width: 64, height: 64, borderRadius: "16px", background: "rgba(0,168,168,0.08)", color: "#00A8A8", display: "flex", alignItems: "center", justifyContent: "center", mb: 3 }}>
                  {area.icon}
                </Box>
                <Typography variant="h6" sx={{ color: "#0B3C5D", fontWeight: 800, mb: 1.5 }}>
                  {area.title}
                </Typography>
                <Typography sx={{ color: "#6B7280", lineHeight: 1.7, fontSize: "0.9rem" }}>
                  {area.desc}
                </Typography>
              </Card>
            </motion.div>
          ))}
        </Box>
      </SectionWrapper>

      <Footer />
    </Box>
  );
}
