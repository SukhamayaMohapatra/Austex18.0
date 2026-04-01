"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Box, Typography, Container, Grid } from "@mui/material";

export default function Services() {
  return (
    <Box sx={{ bgcolor: "white" }}>
      <Navbar />

      {/* HERO BANNER */}
      <Box
        sx={{
          height: "320px",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=1600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <Container sx={{ py: 6 }}>
        {/* BREADCRUMB */}
        <Typography sx={{ color: "#9ca3af", mb: 2, fontSize: "14px" }}>
          Home &nbsp;›&nbsp; Services & Capabilities
        </Typography>

        {/* PAGE TITLE */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: 500,
            color: "#1f4e79",
            mb: 3,
          }}
        >
          Services & Capabilities
        </Typography>

        <Typography sx={{ color: "#4b5563", lineHeight: 1.8, mb: 6 }}>
          Austex Pharma delivers world-class pharmaceutical services across the
          entire drug lifecycle. From formulation development to clinical
          manufacturing and analytical services, our integrated approach ensures
          quality, compliance, and speed to market.
        </Typography>

        {/* ========================= */}
        {/* FORMULATION DEVELOPMENT */}
        {/* ========================= */}

        <Box sx={{ mb: 10 }}>
          <Box
            sx={{
              height: 250,
              backgroundImage:
                "url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              mb: 3,
            }}
          />

          <Typography
            variant="h4"
            sx={{ color: "#1f4e79", fontWeight: 500, mb: 2 }}
          >
            Formulation Development
          </Typography>

          <Typography sx={{ color: "#374151", lineHeight: 1.8 }}>
            Austex Pharma has extensive expertise in the development of oral
            solid dosage forms including immediate release, controlled release,
            and complex generics. Our formulation development capabilities
            include powder blending, granulation technologies, and advanced drug
            delivery systems.
          </Typography>
        </Box>

        {/* ========================= */}
        {/* CLINICAL MANUFACTURING */}
        {/* ========================= */}

        <Box sx={{ mb: 10 }}>
          <Box
            sx={{
              height: 250,
              backgroundImage:
                "url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              mb: 3,
            }}
          />

          <Typography
            variant="h4"
            sx={{ color: "#1f4e79", fontWeight: 500, mb: 2 }}
          >
            Clinical Manufacturing
          </Typography>

          <Typography sx={{ color: "#374151", lineHeight: 1.8 }}>
            With advanced manufacturing infrastructure, Austex Pharma ensures
            high-quality clinical batch production with precision and speed. Our
            facilities support scalable production from pilot batches to large
            commercial volumes while maintaining strict regulatory compliance.
          </Typography>

          <Typography sx={{ color: "#374151", mt: 2, lineHeight: 1.8 }}>
            We specialize in tablet and capsule manufacturing, supporting
            bioavailability and bioequivalence studies with strong technical and
            analytical expertise.
          </Typography>
        </Box>

        <Box sx={{ mb: 10 }}>
          <Box
            sx={{
              height: 250,
              backgroundImage:
                "url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              mb: 3,
            }}
          />

          <Typography
            variant="h4"
            sx={{ color: "#1f4e79", fontWeight: 500, mb: 2 }}
          >
            Analytical Services
          </Typography>

          <Typography sx={{ color: "#374151", lineHeight: 1.8 }}>
            Our analytical division provides comprehensive testing and
            validation services throughout the drug development lifecycle. We
            ensure product quality, safety, and regulatory compliance through
            advanced analytical techniques.
          </Typography>

          {/* BULLETS */}
          <Box sx={{ mt: 2 }}>
            {[
              "Characterization of API",
              "Analytical Method Development",
              "Impurity Profiling",
              "Stability Studies",
              "Quality Control Testing",
            ].map((item, i) => (
              <Typography
                key={i}
                sx={{
                  color: "#374151",
                  lineHeight: 1.8,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                • {item}
              </Typography>
            ))}
          </Box>
        </Box>
      </Container>

      <Footer />
    </Box>
  );
}
