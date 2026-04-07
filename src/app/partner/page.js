"use client";
import { Box, Typography, Container, Grid, Paper, Button, Card } from "@mui/material";
import { motion } from "framer-motion";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import PageHeroBanner from "../../components/common/PageHeroBanner";
import SectionWrapper from "../../components/common/SectionWrapper";
import HandshakeIcon from '@mui/icons-material/Handshake';
import GroupsIcon from '@mui/icons-material/Groups';
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';
import Link from "next/link";

export default function PartnerPage() {
  const models = [
    { title: "Contract Manufacturing", desc: "Leverage our WHO/EU-GMP certified facilities for high-quality, large-scale production of your formulations.", icon: <FactoryIcon /> },
    { title: "In-Licensing & Out-Licensing", desc: "Collaborate on bringing innovative formulations or complex generics to new, untapped geographies.", icon: <LocalPharmacyIcon /> },
    { title: "Marketing & Distribution", desc: "Utilize our extensive network in 50+ countries to distribute and market your specialized pharmaceutical products.", icon: <GroupsIcon /> }
  ];

  // Workaround for icon import since FactoryIcon wasn't imported at top
  function FactoryIcon() {
     return <span style={{ fontSize: "2rem" }}>🏭</span>;
  }

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      <Navbar />

      <PageHeroBanner 
        title="Partner With Us" 
        subtitle="Collaboration & Growth"
        backgroundImage="/images/banner1.jpg"
        breadcrumbs={[{ label: "Partner" }]}
      />

      <SectionWrapper>
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Typography variant="h3" sx={{ color: "#0B3C5D", mb: 4, fontWeight: 800 }}>
                Stronger Together.
              </Typography>
              <Typography sx={{ color: "#6B7280", lineHeight: 1.8, fontSize: "1.05rem", mb: 4 }}>
                At Austex Pharma, we believe that strategic alliances are the key to fulfilling unmet medical needs on a global scale. We are actively seeking long-term, mutually beneficial partnerships with like-minded organizations.
              </Typography>
              
              <Link href="/contact" passHref>
                <Button 
                  variant="contained" 
                  size="large"
                  sx={{ 
                    background: "linear-gradient(135deg, #0B3C5D 0%, #00A8A8 100%)",
                    color: "white",
                    borderRadius: "50px",
                    px: 4,
                    py: 1.5,
                    fontWeight: 700
                  }}
                >
                  Start a Conversation
                </Button>
              </Link>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Paper sx={{ p: 5, borderRadius: "24px", bgcolor: "#F9FBFC", border: "1px solid #E2E8F0" }}>
                 <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
                   <Box sx={{ p: 1.5, borderRadius: "12px", background: "#E6F4F7", color: "#00A8A8" }}>
                     <HandshakeIcon fontSize="large" />
                   </Box>
                   <Typography variant="h5" sx={{ color: "#0B3C5D", fontWeight: 700 }}>Our Value Proposition</Typography>
                 </Box>
                 <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <Box><Typography sx={{ fontWeight: 600, color: "#1A1A1A" }}>Regulatory Expertise</Typography><Typography sx={{ color: "#6B7280", fontSize: "0.9rem" }}>Navigating complex geographies easily.</Typography></Box>
                    <Box><Typography sx={{ fontWeight: 600, color: "#1A1A1A" }}>High Quality Infrastructure</Typography><Typography sx={{ color: "#6B7280", fontSize: "0.9rem" }}>US-FDA & EU-GMP compliant sites.</Typography></Box>
                    <Box><Typography sx={{ fontWeight: 600, color: "#1A1A1A" }}>Global Reach</Typography><Typography sx={{ color: "#6B7280", fontSize: "0.9rem" }}>Established presence in 50+ countries.</Typography></Box>
                 </Box>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </SectionWrapper>

      <SectionWrapper bg="gray" title="Partnership Models" align="center">
        <Grid container spacing={4}>
          {models.map((model, idx) => (
             <Grid item xs={12} md={4} key={idx}>
               <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                 <Card sx={{ height: "100%", p: 4, textAlign: "center", borderRadius: "20px", borderTop: "4px solid #0B3C5D" }}>
                   <Box sx={{ mb: 3, color: "#00A8A8" }}>{model.icon}</Box>
                   <Typography variant="h6" sx={{ color: "#0B3C5D", fontWeight: 700, mb: 2 }}>{model.title}</Typography>
                   <Typography sx={{ color: "#6B7280" }}>{model.desc}</Typography>
                 </Card>
               </motion.div>
             </Grid>
          ))}
        </Grid>
      </SectionWrapper>

      <Footer />
    </Box>
  );
}
