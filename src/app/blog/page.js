"use client";
import { Box, Typography, Container, Grid, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import PageHeroBanner from "../../components/common/PageHeroBanner";
import SectionWrapper from "../../components/common/SectionWrapper";
import { blogPosts } from "../../data/blog";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

export default function BlogPage() {
  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      <Navbar />

      <PageHeroBanner 
        title="Insights & News" 
        subtitle="Austex Updates"
        backgroundImage="/images/About.jpg"
        breadcrumbs={[{ label: "Blog" }]}
      />

      <SectionWrapper bg="gray">
        <Grid container spacing={4}>
          {blogPosts.map((post, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} style={{ height: "100%" }}>
                <Card sx={{ height: "100%", borderRadius: "24px", overflow: "hidden", border: "1px solid #E2E8F0", boxShadow: "0 10px 30px rgba(0,0,0,0.04)", transition: "all 0.4s ease", "&:hover": { transform: "translateY(-8px)", boxShadow: "0 20px 40px rgba(0,168,168,0.1)", borderColor: "#00A8A8" } }}>
                  <Box sx={{ height: 220, overflow: "hidden" }}>
                    <img src={post.image} alt={post.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </Box>
                  <CardContent sx={{ p: 4, display: "flex", flexDirection: "column", height: "calc(100% - 220px)" }}>
                    <Typography sx={{ color: "#00A8A8", fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", mb: 1 }}>{post.category}</Typography>
                    <Typography variant="h5" sx={{ color: "#0B3C5D", fontWeight: 700, mb: 2 }}>{post.title}</Typography>
                    <Typography sx={{ color: "#6B7280", mb: 3, flexGrow: 1 }}>{post.excerpt}</Typography>
                    
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: "auto", borderTop: "1px solid #E2E8F0", pt: 2 }}>
                       <CalendarTodayIcon sx={{ color: "#9CA3AF", fontSize: "1rem" }} />
                       <Typography sx={{ color: "#6B7280", fontSize: "0.85rem" }}>{post.date}</Typography>
                    </Box>
                  </CardContent>
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
