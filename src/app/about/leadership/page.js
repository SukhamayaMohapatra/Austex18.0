"use client";
import { Box, Typography, Container, Card } from "@mui/material";
import { motion } from "framer-motion";
import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import PageHeroBanner from "../../../components/common/PageHeroBanner";
import SectionWrapper from "../../../components/common/SectionWrapper";
import { team } from "../../../data/team";

export default function LeadershipPage() {
  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      <Navbar />

      <PageHeroBanner 
        title="Leadership Team" 
        subtitle="About Austex"
        backgroundImage="/images/banner3.jpg"
        breadcrumbs={[
          { label: "About Us", href: "/about" }, 
          { label: "Leadership" }
        ]}
      />

      <SectionWrapper>
        <Typography variant="h5" sx={{ color: "#6B7280", textAlign: "center", maxWidth: 800, mx: "auto", mb: 8, lineHeight: 1.6 }}>
          Our executive team brings decades of global pharmaceutical experience, driving our mission to deliver innovative healthcare solutions worldwide.
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
            gap: 4,
            maxWidth: 1000,
            mx: "auto",
          }}
        >
          {team.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Card 
                sx={{ 
                  height: "100%", 
                  display: "flex", 
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  borderRadius: "24px",
                  overflow: "hidden",
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
                  transition: "all 0.4s ease",
                  p: { xs: 3, md: 4 },
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 20px 40px rgba(0,168,168,0.1)",
                    borderColor: "#00A8A8",
                  }
                }}
              >
                {/* Square Portrait */}
                <Box 
                  sx={{ 
                    width: { xs: 160, md: 180 }, 
                    height: { xs: 160, md: 180 }, 
                    borderRadius: "50%", 
                    overflow: "hidden", 
                    mb: 3,
                    border: "4px solid #F1F5F9",
                    boxShadow: "0 8px 24px rgba(11,60,93,0.1)",
                    flexShrink: 0,
                  }}
                >
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} 
                  />
                </Box>

                {/* Name & Title */}
                <Typography variant="h6" sx={{ color: "#0B3C5D", fontWeight: 800, mb: 0.5 }}>
                  {member.name}
                </Typography>
                <Typography sx={{ color: "#00A8A8", fontWeight: 600, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: 1, mb: 2 }}>
                  {member.designation}
                </Typography>

                {/* Bio */}
                <Typography sx={{ color: "#6B7280", lineHeight: 1.7, fontSize: "0.9rem" }}>
                  {member.bio}
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
