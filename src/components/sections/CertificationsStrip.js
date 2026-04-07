"use client";
import React from 'react';
import { Box, Typography } from "@mui/material";

export default function CertificationsStrip() {
  const certifications = [
    "WHO-GMP Certified",
    "ISO 9001:2015",
    "ISO 14001:2015",
    "GLP Certified Labs",
    "EU-GMP Compliant",
    "US-FDA Approved Facility",
  ];

  // Double the array for seamless infinite scrolling
  const scrollItems = [...certifications, ...certifications];

  return (
    <Box sx={{ background: "#00A8A8", py: 2, overflow: "hidden", display: "flex", width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          whiteSpace: "nowrap",
          animation: "scroll 30s linear infinite",
          "@keyframes scroll": {
            "0%": { transform: "translateX(0)" },
            "100%": { transform: "translateX(-50%)" }, // -50% because we doubled the content
          },
        }}
      >
        {scrollItems.map((cert, index) => (
          <Box key={index} sx={{ display: "flex", alignItems: "center", px: 4 }}>
            <Box sx={{ width: 6, height: 6, borderRadius: "50%", background: "#FFF", mr: 3 }} />
            <Typography sx={{ color: "#FFF", fontWeight: 700, letterSpacing: 1.5, fontSize: "0.95rem", textTransform: "uppercase" }}>
              {cert}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
