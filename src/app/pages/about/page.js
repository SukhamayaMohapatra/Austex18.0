"use client";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import Navbar from "../components/Navbar";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* HERO IMAGE SECTION */}
      <Box
        sx={{
          height: "50vh",
          background: "url('/images/About.jpg') center/cover no-repeat",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
          }}
        />

        <Container
          sx={{
            position: "relative",
            zIndex: 2,
            height: "100%",
            display: "flex",
            alignItems: "flex-end",
            pb: 6,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "#fff",
              fontWeight: 600,
              letterSpacing: 1,
            }}
          >
            Our Company
          </Typography>
        </Container>
      </Box>

      {/* BREADCRUMB */}
      <Container sx={{ py: 3 }}>
        <Typography sx={{ fontSize: "0.9rem", color: "#777" }}>
          Home &nbsp;›&nbsp; About Us &nbsp;›&nbsp; Our Company
        </Typography>
      </Container>

      {/* MAIN CONTENT */}
      <Container sx={{ pb: 10 }}>
        {/* TITLE */}
        <Typography
          variant="h4"
          sx={{
            mb: 3,
            fontWeight: 600,
            color: "#1a1a1a",
          }}
        >
          Our Company
        </Typography>

        {/* PARAGRAPHS */}
        <Typography sx={{ mb: 3, lineHeight: 1.8, color: "#444" }}>
          Austex Pharma is a fully integrated pharmaceutical company with a
          strong global footprint. We specialize in contract manufacturing,
          research-driven formulation development, and delivery of high-quality
          pharmaceutical products across diverse therapeutic segments.
        </Typography>

        <Typography sx={{ mb: 3, lineHeight: 1.8, color: "#444" }}>
          Our advanced Research & Development infrastructure enables us to
          develop innovative formulations, niche generics, and non-infringing
          solutions tailored for regulated international markets. With
          state-of-the-art manufacturing facilities, we ensure excellence in
          quality, safety, and compliance.
        </Typography>

        <Typography sx={{ mb: 6, lineHeight: 1.8, color: "#444" }}>
          With a growing presence across 50+ countries, Austex Pharma is trusted
          by global partners and institutions. Our commitment is to improve
          lives by delivering accessible, affordable, and effective healthcare
          solutions worldwide.
        </Typography>
      </Container>

      {/* VISION / MISSION / VALUES (UPDATED SECTION) */}
      <Box sx={{ background: "#000", py: 10 }}>
        <Container>
          <Grid container spacing={4}>
            {/* VISION */}
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  height: "100%",
                  minHeight: 260,
                  width: 1100,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  borderRadius: 3,
                  background: "transparent",
                  border: "1px solid rgba(255,255,255,0.3)",
                  boxShadow: "0px 0px 20px rgba(255,255,255,0.08)",
                  p: 3,
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      mb: 2,
                      fontWeight: 600,
                      color: "#6C3BFF",
                      textAlign: "left",
                    }}
                  >
                    Vision
                  </Typography>
                  <Typography
                    sx={{ color: "#fff", lineHeight: 1.7, textAlign: "left" }}
                  >
                    To be a globally trusted pharmaceutical partner delivering
                    innovative and high-quality healthcare solutions that
                    improve lives worldwide.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* MISSION */}
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  height: "100%",
                  minHeight: 260,
                  width: 1100,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  borderRadius: 3,
                  background: "transparent",
                  border: "1px solid rgba(255,255,255,0.3)",
                  boxShadow: "0px 0px 20px rgba(255,255,255,0.08)",
                  p: 3,
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      mb: 2,
                      fontWeight: 600,
                      color: "#6C3BFF",
                      textAlign: "left",
                    }}
                  >
                    Mission
                  </Typography>
                  <Typography
                    sx={{ color: "#fff", lineHeight: 1.7, textAlign: "left" }}
                  >
                    To innovate, manufacture, and deliver safe and effective
                    pharmaceutical products while maintaining the highest
                    standards of quality, compliance, and integrity.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* VALUES */}
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  height: "100%",
                  minHeight: 260,
                  width: 1100,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  borderRadius: 3,
                  background: "transparent",
                  border: "1px solid rgba(255,255,255,0.3)",
                  boxShadow: "0px 0px 20px rgba(255,255,255,0.08)",
                  p: 3,
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      mb: 2,
                      fontWeight: 600,
                      color: "#6C3BFF",
                      textAlign: "left",
                    }}
                  >
                    Core Values
                  </Typography>
                  <Typography
                    sx={{ color: "#fff", lineHeight: 1.7, textAlign: "left" }}
                  >
                    Integrity, innovation, quality, and collaboration drive our
                    culture. We believe in ethical practices and long-term
                    partnerships that create meaningful impact.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
