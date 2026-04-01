"use client";

import Section from "../components/Section";
import products from "../data/products";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Container,
  Chip,
  Button,
} from "@mui/material";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Products() {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <Box
        sx={{
          height: "45vh",
          background: "url('/images/About.jpg') center/cover no-repeat",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0)",
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
              color: "#FFFFFF",
              fontWeight: 600,
              letterSpacing: 1,
            }}
          >
            Our Products
          </Typography>
        </Container>
      </Box>

      {/* INTRO + CATEGORY (UPDATED SECTION) */}
      <Box
        sx={{
          background: "#fff", // Changed from black to white
        }}
      >
        <Container sx={{ py: 6 }}>
          <Typography
            sx={{
              mb: 3,
              color: "#001f3f", // Navy blue
              maxWidth: "800px",
              lineHeight: 1.8,
            }}
          >
            Explore our comprehensive portfolio of high-quality pharmaceutical
            products across multiple therapeutic segments. Designed with
            precision and backed by rigorous quality standards, our products
            meet global healthcare demands.
          </Typography>

          {/* CATEGORY CHIPS */}
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 4 }}>
            {["Tablets", "Capsules", "Injectables", "Syrups", "Ointments"].map(
              (cat) => (
                <Chip
                  key={cat}
                  label={cat}
                  sx={{
                    px: 2,
                    fontWeight: 500,
                    background: "#f3f0ff",
                    color: "#6C3BFF",
                    borderRadius: "6px",
                  }}
                />
              ),
            )}
          </Box>
        </Container>
      </Box>

      {/* PRODUCT GRID */}
      <Section title="">
        <Grid container spacing={4}>
          {products.map((p) => (
            <Grid item xs={12} sm={6} md={4} key={p.id}>
              <Link
                href={`/products/${p.id}`}
                style={{ textDecoration: "none" }}
              >
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 3,
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    border: "1px solid #eee",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0px 15px 40px rgba(0,0,0,0.1)",
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        mb: 1,
                        color: "#1a1a1a",
                      }}
                    >
                      {p.name}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "0.9rem",
                        color: "#6C3BFF",
                        mb: 1.5,
                        fontWeight: 500,
                      }}
                    >
                      {p.category || "General Medicine"}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#555",
                        lineHeight: 1.7,
                        fontSize: "0.95rem",
                      }}
                    >
                      {p.description}
                    </Typography>

                    <Box sx={{ mt: 2 }}>
                      <Typography
                        sx={{
                          fontSize: "0.85rem",
                          color: "#6C3BFF",
                          fontWeight: 500,
                        }}
                      >
                        View Details →
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Section>

      {/* CTA SECTION */}
      <Box
        sx={{
          mt: 10,
          py: 8,
          background: "#000000",
          textAlign: "center",
        }}
      >
        <Container>
          <Typography
            variant="h5"
            sx={{
              color: "#fff",
              mb: 2,
              fontWeight: 600,
            }}
          >
            Looking to Partner With Us?
          </Typography>

          <Typography
            sx={{
              color: "#bbb",
              mb: 4,
              maxWidth: "600px",
              mx: "auto",
            }}
          >
            Join hands with Austex Pharma to deliver high-quality healthcare
            solutions across global markets.
          </Typography>

          <Button
            sx={{
              background: "#6C3BFF",
              color: "#fff",
              px: 4,
              py: 1.5,
              borderRadius: "6px",
              textTransform: "none",
              fontWeight: 500,
              "&:hover": {
                background: "#5a2ed6",
              },
            }}
          >
            Partner With Us
          </Button>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
