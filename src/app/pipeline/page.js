"use client";
import { Box, Typography, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip } from "@mui/material";
import { motion } from "framer-motion";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import PageHeroBanner from "../../components/common/PageHeroBanner";
import SectionWrapper from "../../components/common/SectionWrapper";

export default function PipelinePage() {
  const pipeline = [
    { molecule: "Rivaroxaban", category: "Cardiovascular", status: "Under Registration", region: "Europe, LATAM" },
    { molecule: "Apixaban", category: "Cardiovascular", status: "Bioequivalence Phase", region: "Global" },
    { molecule: "Empagliflozin", category: "Diabetology", status: "Development", region: "Asia, Africa" },
    { molecule: "Sitagliptin", category: "Diabetology", status: "Under Registration", region: "Global" },
    { molecule: "Voriconazole", category: "Anti-infectives", status: "Development", region: "LATAM, MENA" },
    { molecule: "Tofacitinib", category: "Immunology", status: "Formulation Phase", region: "Global" },
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case "Under Registration": return { bg: "#DBEAFE", color: "#1D4ED8" };
      case "Bioequivalence Phase": return { bg: "#FEF3C7", color: "#B45309" };
      case "Development": return { bg: "#F1F5F9", color: "#475569" };
      case "Formulation Phase": return { bg: "#E0E7FF", color: "#4338CA" };
      default: return { bg: "#F1F5F9", color: "#475569" };
    }
  };

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      <Navbar />

      <PageHeroBanner 
        title="Product Pipeline" 
        subtitle="Future Portfolios"
        backgroundImage="/images/banner3.jpg"
        breadcrumbs={[{ label: "Capabilities", href: "/services" }, { label: "Pipeline" }]}
      />

      <SectionWrapper>
        <Typography sx={{ textAlign: "center", color: "#6B7280", maxWidth: 800, mx: "auto", mb: 8, fontSize: "1.1rem", lineHeight: 1.8 }}>
          Our active and diverse pipeline demonstrates our commitment to addressing evolving healthcare needs. We are currently developing complex generics and high-barrier-to-entry formulations targeted for upcoming patent expirations.
        </Typography>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <TableContainer component={Paper} sx={{ borderRadius: "20px", boxShadow: "0 10px 40px rgba(0,0,0,0.04)", border: "1px solid #E2E8F0" }}>
            <Table sx={{ minWidth: 700 }}>
              <TableHead sx={{ bgcolor: "#0B3C5D" }}>
                <TableRow>
                  <TableCell sx={{ color: "white", fontWeight: 700, py: 3 }}>Molecule / Product</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: 700, py: 3 }}>Therapeutic Category</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: 700, py: 3 }}>Target Region</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: 700, py: 3 }}>Current Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {pipeline.map((row, idx) => (
                  <TableRow key={idx} hover sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell sx={{ fontWeight: 600, color: "#1A1A1A", py: 3 }}>{row.molecule}</TableCell>
                    <TableCell sx={{ color: "#6B7280" }}>{row.category}</TableCell>
                    <TableCell sx={{ color: "#6B7280" }}>{row.region}</TableCell>
                    <TableCell>
                      <Chip 
                        label={row.status} 
                        size="small" 
                        sx={{ 
                          bgcolor: getStatusColor(row.status).bg, 
                          color: getStatusColor(row.status).color,
                          fontWeight: 600,
                          borderRadius: "8px"
                        }} 
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </motion.div>

        <Box sx={{ mt: 6, p: 4, bgcolor: "rgba(0,168,168,0.05)", borderRadius: "20px", border: "1px dashed rgba(0,168,168,0.3)", textAlign: "center" }}>
          <Typography sx={{ color: "#0B3C5D", fontWeight: 600 }}>
            * This list is indicative. For out-licensing opportunities or detailed pipeline status, please contact our BD team.
          </Typography>
        </Box>
      </SectionWrapper>

      <Footer />
    </Box>
  );
}
