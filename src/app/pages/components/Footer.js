"use client";

import { Box, Container, Typography, Grid } from "@mui/material";
import Link from "next/link";

export default function Footer() {
  return (
    <Box sx={{ background: "#000", color: "#fff", py: 6 }}>
      <Container>
        <Grid container spacing={4}>
          {/* COMPANY */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Austex Pharma
            </Typography>
            <Typography sx={{ color: "#bbb" }}>
              Delivering high-quality pharmaceutical solutions worldwide.
            </Typography>
          </Grid>

          {/* LINKS */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link href="/" style={{ color: "#bbb" }}>
                Home
              </Link>
              <Link href="/about" style={{ color: "#bbb" }}>
                About
              </Link>
              <Link href="/products" style={{ color: "#bbb" }}>
                Products
              </Link>
              <Link href="/contact" style={{ color: "#bbb" }}>
                Contact
              </Link>
            </Box>
          </Grid>

          {/* CONTACT */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Contact
            </Typography>
            <Typography sx={{ color: "#bbb" }}>
              info@austexpharma.com
            </Typography>
            <Typography sx={{ color: "#bbb" }}>+91 98765 43210</Typography>
          </Grid>
        </Grid>

        <Typography
          sx={{
            mt: 4,
            textAlign: "center",
            color: "#777",
            fontSize: "0.85rem",
          }}
        >
          © 2026 Austex Pharma. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
