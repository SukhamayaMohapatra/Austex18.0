"use client";
import { Box, Container, Typography, Grid, IconButton } from "@mui/material";
import Link from "next/link";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
  return (
    <Box sx={{ background: "#06253B", color: "#fff", pt: { xs: 8, md: 12 }, pb: 4, borderTop: "4px solid #00A8A8" }}>
      <Container maxWidth="xl">
        <Grid container spacing={6} sx={{ mb: 8 }}>
          {/* COMPANY */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3 }}>
              <Box
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: "10px",
                  background: "linear-gradient(135deg, #0B3C5D 0%, #00A8A8 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                }}
              >
                A
              </Box>
              <Typography variant="h5" sx={{ fontWeight: 800, letterSpacing: -0.5, fontFamily: "'Poppins', sans-serif" }}>
                Austex Pharma
              </Typography>
            </Box>
            <Typography sx={{ color: "#9CA3AF", lineHeight: 1.8, mb: 4, pr: { md: 4 } }}>
              Delivering high-quality pharmaceutical solutions worldwide. Innovating for a healthier tomorrow with global safety standards.
            </Typography>
            <Box sx={{ display: "flex", gap: 1.5 }}>
              {[FacebookIcon, TwitterIcon, LinkedInIcon, InstagramIcon].map((Icon, i) => (
                <IconButton
                  key={i}
                  sx={{
                    color: "#9CA3AF",
                    background: "rgba(255,255,255,0.05)",
                    transition: "all 0.3s ease",
                    "&:hover": { background: "#00A8A8", color: "white", transform: "translateY(-3px)" }
                  }}
                >
                  <Icon />
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* ABOUT & PRODUCTS */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, color: "white", fontFamily: "'Poppins', sans-serif" }}>
              Company
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {[
                { name: "About Us", link: "/about" },
                { name: "Leadership", link: "/about/leadership" },
                { name: "Our Journey", link: "/about/journey" },
                { name: "Careers", link: "/careers" },
                { name: "Partner With Us", link: "/partner" },
              ].map((item) => (
                <Link key={item.name} href={item.link} style={{ textDecoration: "none" }}>
                  <Typography
                    sx={{
                      color: "#9CA3AF",
                      transition: "all 0.2s",
                      "&:hover": { color: "#00A8A8", transform: "translateX(4px)" },
                      display: "inline-block"
                    }}
                  >
                    {item.name}
                  </Typography>
                </Link>
              ))}
            </Box>
          </Grid>

          {/* CAPABILITIES */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, color: "white", fontFamily: "'Poppins', sans-serif" }}>
              Capabilities
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {[
                { name: "Manufacturing", link: "/manufacturing" },
                { name: "Research & Development", link: "/r-and-d" },
                { name: "Quality Assurance", link: "/quality" },
                { name: "Global Presence", link: "/about/global-presence" },
                { name: "Certifications", link: "/certifications" },
              ].map((item) => (
                <Link key={item.name} href={item.link} style={{ textDecoration: "none" }}>
                  <Typography
                    sx={{
                      color: "#9CA3AF",
                      transition: "all 0.2s",
                      "&:hover": { color: "#00A8A8", transform: "translateX(4px)" },
                      display: "inline-block"
                    }}
                  >
                    {item.name}
                  </Typography>
                </Link>
              ))}
            </Box>
          </Grid>

          {/* CONTACT */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, color: "white", fontFamily: "'Poppins', sans-serif" }}>
              Headquarters
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
                <Box sx={{ color: "#00A8A8", mt: 0.5 }}>📍</Box>
                <Typography sx={{ color: "#9CA3AF", lineHeight: 1.6 }}>
                  Global Pharma Park, Innovation Zone <br /> Hyderabad, Telangana 500081, India
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                <Box sx={{ color: "#00A8A8" }}>✉️</Box>
                <Typography sx={{ color: "#9CA3AF" }}>
                  corporate@austexpharma.com
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                <Box sx={{ color: "#00A8A8" }}>📞</Box>
                <Typography sx={{ color: "#9CA3AF" }}>
                  +91 40 1234 5678
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ borderTop: "1px solid rgba(255,255,255,0.1)", pt: 4, display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: "space-between", alignItems: "center", gap: 2 }}>
          <Typography sx={{ color: "#6B7280", fontSize: "0.9rem" }}>
            © {new Date().getFullYear()} Austex Pharma. All rights reserved.
          </Typography>
          <Box sx={{ display: "flex", gap: 4 }}>
            <Link href="/privacy" style={{ textDecoration: "none" }}>
              <Typography sx={{ color: "#6B7280", fontSize: "0.9rem", cursor: "pointer", transition: "color 0.2s", "&:hover": { color: "#00A8A8" } }}>Privacy Policy</Typography>
            </Link>
            <Link href="/terms" style={{ textDecoration: "none" }}>
              <Typography sx={{ color: "#6B7280", fontSize: "0.9rem", cursor: "pointer", transition: "color 0.2s", "&:hover": { color: "#00A8A8" } }}>Terms of Service</Typography>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
