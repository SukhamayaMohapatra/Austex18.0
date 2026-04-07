"use client";
import { Box, Typography, Container, Grid, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import PageHeroBanner from "../../components/common/PageHeroBanner";
import SectionWrapper from "../../components/common/SectionWrapper";

export default function AboutPage() {
  const values = [
    {
      title: "Quality",
      desc: "Zero tolerance for compromise. We ensure every product meets stringent global safety standards.",
      icon: "🔬"
    },
    {
      title: "Integrity",
      desc: "Ethical practices and transparency form the bedrock of our operations and partnerships.",
      icon: "🤝"
    },
    {
      title: "Innovation",
      desc: "Continuous investment in R&D to bring more effective and accessible treatments to market.",
      icon: "💡"
    },
    {
      title: "Accessibility",
      desc: "Driven by the belief that high-quality healthcare is a right, not a privilege.",
      icon: "🌍"
    }
  ];

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      <Navbar />

      <PageHeroBanner 
        title="Our Company" 
        subtitle="About Austex"
        backgroundImage="/images/banner4.jpg"
        breadcrumbs={[{ label: "About Us", href: "/about" }, { label: "Our Company" }]}
      />

      <SectionWrapper>
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Typography variant="h3" sx={{ color: "#0B3C5D", mb: 4, fontWeight: 800 }}>
                Pioneering the Future of Global Healthcare.
              </Typography>
              <Typography sx={{ color: "#6B7280", lineHeight: 1.8, fontSize: "1.05rem", mb: 3 }}>
                Austex Pharma is a fully integrated pharmaceutical company with a strong global footprint. We specialize in contract manufacturing, research-driven formulation development, and delivery of high-quality pharmaceutical products across diverse therapeutic segments.
              </Typography>
              <Typography sx={{ color: "#6B7280", lineHeight: 1.8, fontSize: "1.05rem", mb: 3 }}>
                Our advanced Research & Development infrastructure enables us to develop innovative formulations, niche generics, and non-infringing solutions tailored for regulated international markets. With state-of-the-art manufacturing facilities, we ensure excellence in quality, safety, and compliance.
              </Typography>
              <Typography sx={{ color: "#6B7280", lineHeight: 1.8, fontSize: "1.05rem" }}>
                With a growing presence across 50+ countries, Austex Pharma is trusted by global partners and institutions. Our commitment is to improve lives by delivering accessible, affordable, and effective healthcare solutions worldwide.
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Box 
                sx={{ 
                  borderRadius: "24px", 
                  overflow: "hidden", 
                  boxShadow: "0 20px 40px rgba(11,60,93,0.1)",
                  border: "1px solid rgba(0,0,0,0.05)"
                }}
              >
                <img 
                  src="/images/banner5.jpg" 
                  alt="Scientist in lab" 
                  style={{ width: "100%", height: "auto", display: "block" }} 
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </SectionWrapper>

      {/* Vision & Mission */}
      <Box sx={{ background: "#06253B", py: { xs: 8, md: 12 }, position: "relative" }}>
        <Box sx={{ position: "absolute", top: 0, right: 0, width: "50%", height: "100%", background: "radial-gradient(circle at center, rgba(0,168,168,0.1) 0%, transparent 60%)" }} />
        <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Card sx={{ height: "100%", background: "rgba(255,255,255,0.03)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.1)", p: { xs: 3, md: 5 } }}>
                  <Typography variant="h4" sx={{ color: "#00A8A8", fontWeight: 700, mb: 3 }}>Our Vision</Typography>
                  <Typography sx={{ color: "#E6F4F7", fontSize: "1.1rem", lineHeight: 1.8 }}>
                    To be a globally trusted pharmaceutical partner delivering innovative and high-quality healthcare solutions that improve lives worldwide. We strive to be at the forefront of generic formulation research, achieving excellence across every step of the value chain.
                  </Typography>
                </Card>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                <Card sx={{ height: "100%", background: "rgba(255,255,255,0.03)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.1)", p: { xs: 3, md: 5 } }}>
                  <Typography variant="h4" sx={{ color: "#00A8A8", fontWeight: 700, mb: 3 }}>Our Mission</Typography>
                  <Typography sx={{ color: "#E6F4F7", fontSize: "1.1rem", lineHeight: 1.8 }}>
                    To innovate, manufacture, and deliver safe and effective pharmaceutical products while maintaining the highest standards of quality, compliance, and integrity. We aim to bridge the gap between complex disease management and accessible medicine.
                  </Typography>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Core Values */}
      <SectionWrapper title="Our Core Values" bg="gray">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr 1fr" },
            gap: 3,
            mt: 2,
          }}
        >
          {values.map((v, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
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
                <Box sx={{ fontSize: "2.5rem", mb: 2, width: 64, height: 64, borderRadius: "16px", background: "rgba(0,168,168,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {v.icon}
                </Box>
                <Typography variant="h6" sx={{ color: "#0B3C5D", fontWeight: 800, mb: 1.5 }}>{v.title}</Typography>
                <Typography sx={{ color: "#6B7280", fontSize: "0.9rem", lineHeight: 1.6 }}>{v.desc}</Typography>
              </Card>
            </motion.div>
          ))}
        </Box>
      </SectionWrapper>

      <Footer />
    </Box>
  );
}
