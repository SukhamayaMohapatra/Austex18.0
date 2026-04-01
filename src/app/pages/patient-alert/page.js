"use client";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";

export default function PatientAlert() {
  const alerts = [
    {
      title: "Diabetes Alert Card",
      desc: "Important info for diabetic emergencies.",
    },
    {
      title: "Cardiac Alert Card",
      desc: "Quick access to heart condition details.",
    },
    {
      title: "Allergy Alert Card",
      desc: "Critical allergy information for patients.",
    },
  ];

  return (
    <>
      <Navbar />

      {/* HERO */}
      <Box
        sx={{
          height: "40vh",
          background: "linear-gradient(135deg, #0d3b66, #1d5fa2)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container>
          <Typography
            variant="h3"
            sx={{
              color: "#fff",
              fontWeight: 600,
              letterSpacing: 1,
            }}
          >
            Patient Alert Cards
          </Typography>
        </Container>
      </Box>

      {/* BREADCRUMB + TITLE */}
      <Container sx={{ py: 6 }}>
        <Typography sx={{ color: "#888", mb: 1 }}>
          Home &nbsp;›&nbsp; Patient Alert Cards
        </Typography>

        <Typography
          variant="h4"
          sx={{
            color: "#1d5fa2",
            fontWeight: 600,
            mb: 4,
          }}
        >
          Patient Alert Card
        </Typography>

        {/* INFO SECTION (LIKE SCREENSHOT) */}
        <Box sx={{ mb: 6 }}>
          <Typography sx={{ fontWeight: 600, mb: 2 }}>
            Important information about Patient Safety
          </Typography>

          <Typography sx={{ mb: 2, color: "#444", lineHeight: 1.8 }}>
            This card contains important safety information that patients and
            caregivers should be aware of while undergoing treatment.
          </Typography>

          <Typography sx={{ mb: 2, color: "#444", lineHeight: 1.8 }}>
            Some treatments may cause serious side effects that can occur at any
            time and may require immediate medical attention, including:
          </Typography>

          <Box component="ul" sx={{ pl: 3, color: "#333" }}>
            <li>Breathing difficulties or lung-related issues</li>
            <li>Liver-related complications</li>
            <li>Irregular heartbeat or chest discomfort</li>
            <li>Hormonal or metabolic imbalances</li>
          </Box>

          <Typography sx={{ mt: 2, color: "#444", lineHeight: 1.8 }}>
            If you experience any unusual symptoms, consult your doctor
            immediately. Always carry your alert card for quick reference in
            emergencies.
          </Typography>
        </Box>

        {/* ALERT CARDS GRID */}
        <Grid container spacing={4}>
          {alerts.map((a, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Card
                sx={{
                  borderRadius: 3,
                  p: 3,
                  height: "100%",
                  transition: "0.3s",
                  border: "1px solid #eee",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0px 15px 40px rgba(0,0,0,0.1)",
                  },
                }}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                    {a.title}
                  </Typography>

                  <Typography sx={{ mb: 2, color: "#555" }}>
                    {a.desc}
                  </Typography>

                  <Button
                    variant="contained"
                    sx={{
                      background: "#1d5fa2",
                      textTransform: "none",
                      "&:hover": {
                        background: "#154a80",
                      },
                    }}
                  >
                    Download
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* FOOTER INFO STRIP (LIKE SCREENSHOT) */}
      <Box
        sx={{
          mt: 10,
          py: 6,
          background: "#1d5fa2",
          color: "#fff",
        }}
      >
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" sx={{ mb: 1 }}>
                Vision
              </Typography>
              <Typography sx={{ color: "#dbe9ff" }}>
                Expanding globally with strong local partnerships and
                innovation-driven healthcare solutions.
              </Typography>
            </Grid>

            <Grid item xs={12} md={4}>
              <Typography variant="h6" sx={{ mb: 1 }}>
                Values
              </Typography>
              <Typography sx={{ color: "#dbe9ff" }}>
                Collaboration, integrity, and excellence guide everything we do
                as a healthcare provider.
              </Typography>
            </Grid>

            <Grid item xs={12} md={4}>
              <Typography variant="h6" sx={{ mb: 1 }}>
                Corporate Social Responsibility
              </Typography>
              <Typography sx={{ color: "#dbe9ff" }}>
                We are committed to improving lives and supporting communities
                through responsible healthcare practices.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Footer />
    </>
  );
}
