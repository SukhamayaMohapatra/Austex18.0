"use client";
import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import PageHeroBanner from "../../../components/common/PageHeroBanner";
import SectionWrapper from "../../../components/common/SectionWrapper";
import { timeline } from "../../../data/timeline";

export default function JourneyPage() {
  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      <Navbar />

      <PageHeroBanner 
        title="Our Journey" 
        subtitle="About Austex"
        backgroundImage="/images/banner2.jpg"
        breadcrumbs={[
          { label: "About Us", href: "/about" }, 
          { label: "Our Journey" }
        ]}
      />

      <SectionWrapper bg="gray">
        <Container maxWidth="md">
          <Box sx={{ position: "relative", py: 4 }}>
            {/* Vertical Line */}
            <Box 
              sx={{ 
                position: "absolute", 
                left: { xs: "20px", md: "50%" }, 
                top: 0, 
                bottom: 0, 
                width: 4, 
                background: "linear-gradient(180deg, rgba(0,168,168,0.2) 0%, rgba(11,60,93,0.8) 100%)", 
                transform: { xs: "none", md: "translateX(-50%)" },
                borderRadius: 2
              }} 
            />

            {timeline.map((item, idx) => (
              <Box 
                key={idx} 
                sx={{ 
                  display: "flex", 
                  justifyContent: { xs: "flex-start", md: idx % 2 === 0 ? "flex-start" : "flex-end" }, 
                  mb: 8, 
                  position: "relative",
                  pl: { xs: 8, md: 0 }
                }}
              >
                {/* Timeline Dot */}
                <Box 
                  sx={{ 
                    position: "absolute", 
                    left: { xs: "22px", md: "50%" }, 
                    top: "24px", 
                    width: 20, 
                    height: 20, 
                    borderRadius: "50%", 
                    background: "#fff", 
                    border: "4px solid #00A8A8", 
                    transform: { xs: "translateX(-50%)", md: "translateX(-50%)" },
                    zIndex: 2,
                    boxShadow: "0 0 0 4px rgba(0,168,168,0.2)"
                  }} 
                />

                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  style={{ width: "100%" }}
                >
                  <Box 
                    sx={{ 
                      width: { xs: "100%", md: "45%" }, 
                      background: "#fff", 
                      p: 4, 
                      borderRadius: "16px",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
                      border: "1px solid rgba(0,0,0,0.03)",
                      position: "relative",
                      "&::before": {
                        content: { xs: 'none', md: '""' },
                        position: "absolute",
                        top: "28px",
                        width: 0,
                        height: 0,
                        borderTop: "12px solid transparent",
                        borderBottom: "12px solid transparent",
                        ...(idx % 2 === 0 
                          ? { right: "-12px", borderLeft: "12px solid #fff" } 
                          : { left: "-12px", borderRight: "12px solid #fff" })
                      }
                    }}
                  >
                    <Typography sx={{ color: "#00A8A8", fontWeight: 800, fontSize: "1.5rem", mb: 1, fontFamily: "'Poppins', sans-serif" }}>
                      {item.year}
                    </Typography>
                    <Typography variant="h5" sx={{ color: "#0B3C5D", fontWeight: 700, mb: 2 }}>
                      {item.title}
                    </Typography>
                    <Typography sx={{ color: "#6B7280", lineHeight: 1.6 }}>
                      {item.desc}
                    </Typography>
                  </Box>
                </motion.div>
              </Box>
            ))}
          </Box>
        </Container>
      </SectionWrapper>

      <Footer />
    </Box>
  );
}
