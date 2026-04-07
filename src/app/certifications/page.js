"use client";
import { Box, Typography, Container, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import PageHeroBanner from "../../components/common/PageHeroBanner";
import SectionWrapper from "../../components/common/SectionWrapper";

export default function CertificationsPage() {
  const certifications = [
    { title: "WHO-GMP", desc: "World Health Organization Good Manufacturing Practices for ensuring product quality." },
    { title: "US-FDA", desc: "Approved advanced manufacturing facility by the United States Food and Drug Administration." },
    { title: "EU-GMP", desc: "European Union compliance enabling exports to heavily regulated European markets." },
    { title: "ISO 9001:2015", desc: "Quality Management Systems certification." },
    { title: "ISO 14001:2015", desc: "Environmental Management Systems certification ensuring sustainable operations." },
    { title: "GLP Approval", desc: "Good Laboratory Practices certified analytical and testing labs." }
  ];

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      <Navbar />

      <PageHeroBanner 
        title="Our Certifications" 
        subtitle="Global Compliance"
        backgroundImage="/images/banner1.jpg"
        breadcrumbs={[{ label: "Capabilities", href: "/services" }, { label: "Certifications" }]}
      />

      <SectionWrapper bg="gray" align="center">
        <Typography sx={{ color: "#6B7280", maxWidth: 800, mx: "auto", mb: 8, fontSize: "1.1rem", lineHeight: 1.8 }}>
          Our commitment to international standards has earned us accreditations from major global regulatory authorities. These certifications validate our rigorous quality frameworks.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {certifications.map((cert, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                <Paper 
                  sx={{ 
                    p: 5, 
                    height: "100%", 
                    borderRadius: "24px", 
                    textAlign: "center",
                    border: "1px solid #E2E8F0",
                    background: "white",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.02)",
                    transition: "transform 0.3s",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      borderColor: "#00A8A8",
                      boxShadow: "0 20px 40px rgba(0,168,168,0.1)"
                    }
                  }}
                >
                  <Box sx={{ width: 80, height: 80, borderRadius: "50%", background: "rgba(11,60,93,0.05)", display: "flex", alignItems: "center", justifyContent: "center", mx: "auto", mb: 3 }}>
                    <Typography variant="h3">📜</Typography>
                  </Box>
                  <Typography variant="h5" sx={{ color: "#0B3C5D", fontWeight: 800, mb: 1.5 }}>
                    {cert.title}
                  </Typography>
                  <Typography sx={{ color: "#6B7280" }}>
                    {cert.desc}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </SectionWrapper>

      <Footer />
    </Box>
  );
}
