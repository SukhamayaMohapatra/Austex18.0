"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  MenuItem,
  Paper,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

export default function Contact() {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          minHeight: "420px",
          background: "#f5f7fb",
        }}
      >
        {/* LEFT */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            px: { xs: 3, md: 10 },
          }}
        >
          <Typography
            variant="h3"
            sx={{ fontWeight: 700, mb: 2, color: "#2c3e50" }}
          >
            Contact Us
          </Typography>

          <Typography sx={{ color: "#6b7280", lineHeight: 1.8 }}>
            At Austex Pharma, our mission is to improve patient lives through
            innovative and reliable pharmaceutical solutions. We are committed
            to quality, safety, and global healthcare excellence. Reach out to
            us for partnerships, enquiries, or support.
          </Typography>
        </Box>

        {/* RIGHT IMAGE */}
        <Box
          sx={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1600')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </Box>

      {/* MAIN SECTION */}
      <Box sx={{ px: { xs: 3, md: 10 }, py: 8, background: "#fafafa" }}>
        <Grid container spacing={6}>
          {/* LEFT INFO */}
          <Grid item xs={12} md={5}>
            <Box sx={{ mb: 5 }}>
              <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
                <LocationOnIcon sx={{ color: "#ff4d2d", fontSize: 32 }} />
                <Box>
                  <Typography sx={{ fontWeight: 700, color: "#ff4d2d" }}>
                    AUSTEX PHARMA HQ
                  </Typography>
                  <Typography sx={{ color: "#6b7280" }}>
                    Global Pharma Park, Innovation Zone,
                    <br />
                    Hyderabad, Telangana 500081, India
                  </Typography>
                  <Typography sx={{ mt: 1, fontWeight: 500, color: "#6b7280" }}>
                    CIN: U12345PH2024PLC000001
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
                <EmailIcon sx={{ color: "#ff4d2d", fontSize: 28 }} />
                <Box>
                  <Typography sx={{ fontWeight: 700, color: "#ff4d2d" }}>
                    CORPORATE COMMUNICATION
                  </Typography>
                  <Typography sx={{ color: "#6b7280" }}>
                    corporate@austexpharma.com
                  </Typography>

                  <Typography sx={{ fontWeight: 700, mt: 2, color: "#ff4d2d" }}>
                    INVESTOR RELATIONS
                  </Typography>
                  <Typography sx={{ color: "#6b7280" }}>
                    investors@austexpharma.com
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", gap: 2 }}>
                <PhoneIcon sx={{ color: "#ff4d2d", fontSize: 28 }} />
                <Typography sx={{ color: "#6b7280" }}>
                  +91 40 1234 5678
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* RIGHT FORM */}
          <Grid item xs={12} md={7}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, md: 5 },
                borderRadius: "16px",
                border: "1px solid #e5e7eb",
              }}
            >
              <Typography
                variant="h4"
                sx={{ fontWeight: 700, mb: 1, textAlign: "center" }}
              >
                Get in touch
              </Typography>

              <Box
                sx={{
                  width: 60,
                  height: 3,
                  background: "#ff4d2d",
                  mx: "auto",
                  mb: 4,
                  borderRadius: 2,
                }}
              />

              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField fullWidth select label="Select Enquiry Type">
                    <MenuItem value="general">General</MenuItem>
                    <MenuItem value="business">Business</MenuItem>
                    <MenuItem value="support">Support</MenuItem>
                  </TextField>
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField fullWidth select label="Select Query Category">
                    <MenuItem value="products">Products</MenuItem>
                    <MenuItem value="services">Services</MenuItem>
                  </TextField>
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField fullWidth select label="Select Country">
                    <MenuItem value="india">India</MenuItem>
                    <MenuItem value="usa">USA</MenuItem>
                  </TextField>
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField fullWidth label="First Name" />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField fullWidth label="Last Name" />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField fullWidth label="Email ID" />
                </Grid>

                <Grid item xs={12}>
                  <TextField fullWidth label="Contact Number" />
                </Grid>

                <Grid item xs={12}>
                  <TextField fullWidth multiline rows={4} label="Message" />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    fullWidth
                    sx={{
                      mt: 2,
                      py: 1.5,
                      background: "#ff4d2d",
                      color: "#fff",
                      fontWeight: 600,
                      "&:hover": {
                        background: "#e63e20",
                      },
                    }}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      <Footer />
    </>
  );
}
