"use client";
import { useState, useMemo } from "react";
import { Box, Typography, Container, Card, CardContent, Chip, TextField, InputAdornment } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import SearchIcon from '@mui/icons-material/Search';
import MedicationIcon from '@mui/icons-material/Medication';
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import PageHeroBanner from "../../components/common/PageHeroBanner";
import CTABanner from "../../components/common/CTABanner";
import { products } from "../../data/products";

export default function ProductsPage() {
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchesCategory = filter === "All" || p.category === filter;
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            p.composition.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [filter, searchQuery]);

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      <Navbar />

      <PageHeroBanner 
        title="Our Products" 
        subtitle="Pharmaceutical Portfolio"
        backgroundImage="/images/banner5.jpg"
        breadcrumbs={[{ label: "Products" }]}
      />

      <Container maxWidth="xl" sx={{ mt: -6, position: "relative", zIndex: 10, mb: 8 }}>
        <Box 
          sx={{ 
            p: { xs: 3, md: 4 }, 
            bgcolor: "white", 
            borderRadius: "24px", 
            boxShadow: "0 20px 40px rgba(0,0,0,0.06)",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 3
          }}
        >
          {/* Categories */}
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
            {categories.map((cat) => (
              <Chip
                key={cat}
                label={cat}
                onClick={() => setFilter(cat)}
                sx={{
                  px: 2,
                  py: 2.5,
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  background: filter === cat ? "linear-gradient(135deg, #0B3C5D 0%, #00A8A8 100%)" : "#F1F5F9",
                  color: filter === cat ? "white" : "#6B7280",
                  borderRadius: "12px",
                  transition: "all 0.3s ease",
                  border: filter === cat ? "none" : "1px solid #E2E8F0",
                  "&:hover": { 
                    background: filter === cat ? "linear-gradient(135deg, #0B3C5D 0%, #00A8A8 100%)" : "#E2E8F0" 
                  }
                }}
                clickable
              />
            ))}
          </Box>

          {/* Search */}
          <TextField 
            placeholder="Search products, compositions..."
            variant="outlined"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            sx={{ 
              width: { xs: "100%", md: "350px" },
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
                bgcolor: "#F9FBFC",
                "& fieldset": { borderColor: "#E2E8F0" },
                "&:hover fieldset": { borderColor: "#00A8A8" },
                "&.Mui-focused fieldset": { borderColor: "#00A8A8" },
              }
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "#9CA3AF" }} />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Container>

      {/* Grid */}
      <Box sx={{ pb: 12 }}>
        <Container maxWidth="lg">
          <Box sx={{ minHeight: "50vh" }}>
            {filteredProducts.length === 0 ? (
              <Box sx={{ textAlign: "center", py: 10 }}>
                <Typography variant="h5" sx={{ color: "#6B7280" }}>No products found matching your criteria.</Typography>
              </Box>
            ) : (
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
                  gap: 3,
                }}
              >
                <AnimatePresence>
                  {filteredProducts.map((p) => (
                    <motion.div
                      key={p.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card
                        component={Link}
                        href={`/products/${p.id}`}
                        sx={{
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                          border: "1px solid #E2E8F0",
                          borderRadius: "16px",
                          textDecoration: "none",
                          bgcolor: "#fff",
                          boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            borderColor: "#00A8A8",
                            boxShadow: "0 8px 28px rgba(0,168,168,0.12)",
                            transform: "translateY(-4px)"
                          }
                        }}
                      >
                        <CardContent sx={{ p: 3, display: "flex", flexDirection: "column", height: "100%" }}>
                          {/* Header Row */}
                          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                            <Box sx={{ width: 40, height: 40, borderRadius: "10px", background: "rgba(0,168,168,0.08)", color: "#00A8A8", display: "flex", alignItems: "center", justifyContent: "center" }}>
                              <MedicationIcon sx={{ fontSize: 20 }} />
                            </Box>
                            <Chip label={p.category} size="small" sx={{ fontWeight: 600, fontSize: "0.7rem", bgcolor: "#F1F5F9", color: "#6B7280", height: 24 }} />
                          </Box>

                          {/* Product Name — fixed 1 line */}
                          <Typography sx={{ fontWeight: 800, color: "#0B3C5D", fontSize: "1rem", mb: 0.5, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                            {p.name}
                          </Typography>

                          {/* Composition — fixed 1 line */}
                          <Typography sx={{ color: "#00A8A8", fontWeight: 600, fontSize: "0.75rem", mb: 1.5, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                            {p.composition}
                          </Typography>

                          {/* Description — clamped to exactly 2 lines */}
                          <Typography sx={{
                            color: "#6B7280",
                            fontSize: "0.85rem",
                            lineHeight: 1.5,
                            mb: 2,
                            minHeight: "2.55em",
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                          }}>
                            {p.description}
                          </Typography>

                          {/* Form / Strength Row */}
                          <Box sx={{ display: "flex", gap: 2, mb: 2, py: 1.5, px: 2, bgcolor: "#F8FAFC", borderRadius: "8px", border: "1px solid #F1F5F9" }}>
                            <Box sx={{ flex: 1 }}>
                              <Typography sx={{ fontSize: "0.6rem", color: "#9CA3AF", textTransform: "uppercase", fontWeight: 700, letterSpacing: 0.5, mb: 0.25 }}>Form</Typography>
                              <Typography sx={{ fontWeight: 600, color: "#1A1A1A", fontSize: "0.8rem" }}>{p.dosageForm}</Typography>
                            </Box>
                            <Box sx={{ width: "1px", bgcolor: "#E5E7EB" }} />
                            <Box sx={{ flex: 1 }}>
                              <Typography sx={{ fontSize: "0.6rem", color: "#9CA3AF", textTransform: "uppercase", fontWeight: 700, letterSpacing: 0.5, mb: 0.25 }}>Strength</Typography>
                              <Typography sx={{ fontWeight: 600, color: "#1A1A1A", fontSize: "0.8rem", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{p.strength}</Typography>
                            </Box>
                          </Box>

                          {/* CTA */}
                          <Box sx={{ borderTop: "1px solid #F1F5F9", pt: 1.5, mt: "auto" }}>
                            <Typography sx={{ color: "#00A8A8", fontWeight: 700, fontSize: "0.8rem" }}>
                              View Prescribing Info →
                            </Typography>
                          </Box>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </Box>
            )}
          </Box>
        </Container>
      </Box>

      <CTABanner 
        title="Can't find what you're looking for?"
        subtitle="Our portfolio is constantly expanding. Contact our medical affairs team for full catalog details."
        buttonText="Contact Sales"
        buttonLink="/contact"
      />

      <Footer />
    </Box>
  );
}
