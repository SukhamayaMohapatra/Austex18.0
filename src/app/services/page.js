"use client";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import PageHeroBanner from "../../components/common/PageHeroBanner";
import SectionWrapper from "../../components/common/SectionWrapper";
import CTABanner from "../../components/common/CTABanner";
import { Box, Typography, Container, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";

export default function Services() {
  const ServiceSection = ({ title, desc, img, reverse, bullets }) => (
    <Box sx={{ mb: { xs: 8, md: 16 } }}>
      <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center" direction={{ xs: "column", md: reverse ? "row-reverse" : "row" }}>
        <Grid item xs={12} md={6} sx={{ width: '100%' }}>
          <motion.div initial={{ opacity: 0, x: reverse ? 40 : -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} style={{ width: "100%" }}>
            <Box sx={{ position: "relative", width: "100%", height: { xs: 300, md: 400 } }}>
              <Box sx={{ position: "absolute", inset: "-15px", background: "linear-gradient(135deg, rgba(11,60,93,0.1) 0%, rgba(0,168,168,0.1) 100%)", borderRadius: "32px", zIndex: 0, transform: reverse ? "rotate(3deg)" : "rotate(-3deg)" }} />
              <Box 
                sx={{ 
                  position: "relative", 
                  zIndex: 1, 
                  width: "100%", 
                  height: "100%", 
                  backgroundImage: `url(${img})`, 
                  backgroundSize: "cover", 
                  backgroundPosition: "center", 
                  borderRadius: "24px", 
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)", 
                  overflow: "hidden" 
                }} 
              />
            </Box>
          </motion.div>
        </Grid>
        <Grid item xs={12} md={6} sx={{ width: '100%' }}>
          <motion.div initial={{ opacity: 0, x: reverse ? -40 : 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
            <Typography variant="h3" sx={{ color: "#0B3C5D", fontWeight: 800, mb: 3, letterSpacing: -0.02, fontSize: { xs: "2rem", md: "2.5rem" } }}>
              {title}
            </Typography>
            <Box sx={{ width: 60, height: 4, background: "linear-gradient(90deg, #0B3C5D 0%, #00A8A8 100%)", borderRadius: 2, mb: 4 }} />

            {desc.map((p, i) => (
              <Typography key={i} sx={{ color: "#6B7280", lineHeight: 1.8, mb: 3, fontSize: "1.05rem" }}>
                {p}
              </Typography>
            ))}

            {bullets && (
              <Box sx={{ mt: 4, display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2 }}>
                {bullets.map((item, i) => (
                  <Box key={i} sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                    <Box sx={{ width: 8, height: 8, borderRadius: "50%", background: "#00A8A8", flexShrink: 0 }} />
                    <Typography sx={{ color: "#0B3C5D", fontWeight: 600, fontSize: "0.95rem" }}>
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            )}
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      <Navbar />

      <PageHeroBanner 
        title="Services & Capabilities" 
        subtitle="What We Do"
        backgroundImage="/images/service.jpg"
        breadcrumbs={[{ label: "Services" }]}
      />

      <SectionWrapper>
        <ServiceSection
          title="Formulation Development"
          desc={[
            "Austex Pharma has extensive expertise in the development of oral solid dosage forms including immediate release, controlled release, and complex generics.",
            "Our formulation development capabilities include powder blending, granulation technologies, and advanced drug delivery systems designed for maximum efficacy. We support full lifecycle management from prototype to commercial launch."
          ]}
          img="/images/Formula.jpg"
          reverse={false}
          bullets={[
            "Immediate Release (IR)",
            "Extended Release (ER/CR)",
            "Delayed Release (DR)",
            "Novel Drug Delivery (NDDS)"
          ]}
        />
        <ServiceSection
          title="Contract Manufacturing"
          desc={[
            "With advanced manufacturing infrastructure, Austex Pharma ensures high-quality clinical and commercial batch production with precision, speed, and uncompromising compliance.",
            "Our facilities are designed to handle scalable production from pilot batches to large commercial volumes, ensuring that we serve as a reliable supply chain partner."
          ]}
          img="/images/Manufacturing.webp"
          reverse={true}
          bullets={[
            "Tablets (Coated / Uncoated)",
            "Hard Gelatin Capsules",
            "Liquid Orals",
            "Topical Ointments"
          ]}
        />
        <ServiceSection
          title="Analytical Services"
          desc={[
            "Our analytical division provides comprehensive testing and validation services throughout the drug development lifecycle. We ensure product quality, safety, and regulatory compliance through advanced analytical techniques.",
            "We maintain a fully equipped, GLP-compliant laboratory capable of complex analytical method development, validation, and routine quality control."
          ]}
          img="/images/banner2.jpg"
          reverse={false}
          bullets={[
            "Characterization of API",
            "Stability Studies (ICH)",
            "Analytical Method Dev",
            "Impurity Profiling"
          ]}
        />
      </SectionWrapper>

      <CTABanner 
         title="Looking for a Manufacturing Partner?"
         subtitle="Leverage our world-class infrastructure and regulatory expertise to bring your product to market faster."
         buttonText="Contact Business Development"
         buttonLink="/contact"
      />

      <Footer />
    </Box>
  );
}
