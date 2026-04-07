"use client";
import { useParams } from "next/navigation";
import { Box, Typography, Container, Grid, Paper, Chip, Button } from "@mui/material";
import Link from "next/link";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import PageHeroBanner from "../../../components/common/PageHeroBanner";
import SectionWrapper from "../../../components/common/SectionWrapper";
import { products } from "../../../data/products";

export default function ProductDetailPage() {
  const { slug } = useParams();
  const product = products.find(p => p.id === slug);

  if (!product) {
    return (
      <Box sx={{ bgcolor: "background.default", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Navbar />
        <Container sx={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", py: 20 }}>
          <Typography variant="h2" mb={2}>Product Not Found</Typography>
          <Link href="/products" passHref>
            <Button variant="contained" color="primary">Back to Products</Button>
          </Link>
        </Container>
        <Footer />
      </Box>
    );
  }

  const InfoBlock = ({ title, content, icon }) => (
    <Paper sx={{ p: 4, height: "100%", borderRadius: "20px", border: "1px solid #E2E8F0", boxShadow: "0 10px 30px rgba(0,0,0,0.02)" }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
        <Box sx={{ p: 1, borderRadius: "10px", background: "rgba(0,168,168,0.1)", color: "#00A8A8" }}>
          {icon}
        </Box>
        <Typography variant="h6" sx={{ color: "#0B3C5D", fontWeight: 700 }}>{title}</Typography>
      </Box>
      <Typography sx={{ color: "#6B7280", lineHeight: 1.7 }}>
        {content}
      </Typography>
    </Paper>
  );

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      <Navbar />

      <PageHeroBanner 
        title={product.name} 
        subtitle={product.category}
        backgroundImage="/images/About.jpg"
        breadcrumbs={[
          { label: "Products", href: "/products" }, 
          { label: product.name }
        ]}
      />

      <SectionWrapper>
        <Grid container spacing={6}>
          {/* Left Column - Key Info */}
          <Grid item xs={12} lg={4}>
            <Box sx={{ position: "sticky", top: "100px" }}>
              <Link href="/products" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#6B7280", textDecoration: "none", marginBottom: "2rem", fontWeight: 600 }}>
                <ArrowBackIcon fontSize="small" /> Back to all products
              </Link>
              
              <Typography variant="h3" sx={{ color: "#0B3C5D", fontWeight: 800, mb: 2 }}>
                {product.name}
              </Typography>
              
              <Box sx={{ display: "flex", gap: 1, mb: 4, flexWrap: "wrap" }}>
                <Chip label={product.dosageForm} sx={{ bgcolor: "#0B3C5D", color: "white", fontWeight: 600 }} />
                <Chip label={product.strength} sx={{ bgcolor: "#00A8A8", color: "white", fontWeight: 600 }} />
              </Box>

              <Typography sx={{ color: "#6B7280", fontSize: "1.1rem", lineHeight: 1.6, mb: 4 }}>
                {product.description}
              </Typography>

              <Button 
                variant="outlined" 
                fullWidth 
                startIcon={<FileDownloadIcon />}
                sx={{ 
                  py: 1.5, 
                  borderWidth: 2, 
                  borderColor: "#0B3C5D", 
                  color: "#0B3C5D",
                  fontWeight: 700,
                  "&:hover": { borderWidth: 2, bgcolor: "rgba(11,60,93,0.05)" }
                }}
              >
                Download Product Monograph
              </Button>
            </Box>
          </Grid>

          {/* Right Column - Details */}
          <Grid item xs={12} lg={8}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <InfoBlock 
                  title="Composition" 
                  content={product.composition} 
                  icon={<CheckCircleOutlineIcon />}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <InfoBlock 
                  title="Indications" 
                  content={product.indications} 
                  icon={<CheckCircleOutlineIcon />}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <InfoBlock 
                  title="Packaging" 
                  content={product.packaging} 
                  icon={<CheckCircleOutlineIcon />}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper sx={{ p: 4, height: "100%", borderRadius: "20px", border: "1px solid #FCA5A5", background: "#FEF2F2" }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
                    <Box sx={{ p: 1, borderRadius: "10px", background: "rgba(239,68,68,0.1)", color: "#EF4444" }}>
                      <WarningAmberIcon />
                    </Box>
                    <Typography variant="h6" sx={{ color: "#991B1B", fontWeight: 700 }}>Safety Information</Typography>
                  </Box>
                  <Typography sx={{ color: "#7F1D1D", lineHeight: 1.7 }}>
                    {product.safety}
                  </Typography>
                </Paper>
              </Grid>
            </Grid>

            {/* General Disclaimer */}
            <Paper sx={{ p: 4, mt: 4, borderRadius: "20px", bgcolor: "#1A1A1A", color: "#FFF" }}>
              <Typography variant="h6" sx={{ mb: 2, color: "#9CA3AF" }}>Medical Disclaimer</Typography>
              <Typography sx={{ color: "#6B7280", fontSize: "0.9rem" }}>
                The information provided here is for informational purposes only and is not intended to replace professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </SectionWrapper>
      
      <Footer />
    </Box>
  );
}
