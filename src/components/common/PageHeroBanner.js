"use client";
import { Box, Container, Typography, Breadcrumbs } from "@mui/material";
import Link from "next/link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { motion } from "framer-motion";

export default function PageHeroBanner({ title, subtitle, backgroundImage = "/images/About.jpg", breadcrumbs }) {
  return (
    <>
      <Box
        sx={{
          height: { xs: "40vh", md: "50vh" },
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          mt: { xs: 7, md: 8.5 } // offset for fixed navbar
        }}
      >
        <motion.div 
          initial={{ scale: 1.05 }} 
          animate={{ scale: 1 }} 
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{ 
            position: "absolute", 
            inset: 0, 
            background: `url(${backgroundImage}) center/cover no-repeat`, 
            zIndex: 0 
          }}
        />
        <Box 
          sx={{ 
            position: "absolute", 
            inset: 0, 
            background: "linear-gradient(90deg, rgba(11,60,93,0.9) 0%, rgba(11,60,93,0.7) 100%)", 
            zIndex: 1 
          }} 
        />

        <Container sx={{ position: "relative", zIndex: 2 }}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {subtitle && (
              <Typography 
                sx={{ 
                  color: "#00A8A8", 
                  fontWeight: 600, 
                  letterSpacing: 2, 
                  textTransform: "uppercase", 
                  mb: 1,
                  fontSize: "0.875rem"
                }}
              >
                {subtitle}
              </Typography>
            )}
            <Typography 
              variant="h1" 
              sx={{ 
                color: "#fff", 
                fontWeight: 800, 
                letterSpacing: "-0.02em", 
                fontSize: { xs: "2.5rem", md: "4rem" }, 
                mb: 2 
              }}
            >
              {title}
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* BREADCRUMBS STRIP */}
      {breadcrumbs && (
        <Box sx={{ background: "#FFFFFF", borderBottom: "1px solid rgba(0,0,0,0.05)", py: 2 }}>
          <Container>
            <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
              <Link href="/" style={{ color: "#6B7280", textDecoration: "none", fontSize: "0.875rem" }}>
                Home
              </Link>
              {breadcrumbs.map((crumb, idx) => {
                const isLast = idx === breadcrumbs.length - 1;
                return isLast ? (
                  <Typography key={idx} sx={{ color: "#0B3C5D", fontWeight: 600, fontSize: "0.875rem" }}>
                    {crumb.label}
                  </Typography>
                ) : (
                  <Link key={idx} href={crumb.href} style={{ color: "#6B7280", textDecoration: "none", fontSize: "0.875rem" }}>
                    {crumb.label}
                  </Link>
                );
              })}
            </Breadcrumbs>
          </Container>
        </Box>
      )}
    </>
  );
}
