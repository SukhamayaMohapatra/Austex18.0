"use client";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import PageHeroBanner from "../../components/common/PageHeroBanner";
import SectionWrapper from "../../components/common/SectionWrapper";
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  MenuItem,
  Paper,
  Container,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

export default function Contact() {
  const InfoItem = ({ icon, title, children }) => (
    <Box sx={{ display: "flex", gap: 3, mb: 5 }}>
      <Box
        sx={{
          width: 64,
          height: 64,
          borderRadius: "16px",
          background: "linear-gradient(135deg, rgba(11,60,93,0.1) 0%, rgba(0,168,168,0.1) 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#00A8A8",
          flexShrink: 0,
        }}
      >
        {icon}
      </Box>
      <Box>
        <Typography sx={{ fontWeight: 700, color: "#0B3C5D", mb: 1, letterSpacing: 1, fontSize: "0.95rem", textTransform: "uppercase" }}>
          {title}
        </Typography>
        {children}
      </Box>
    </Box>
  );

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      <Navbar />

      <PageHeroBanner 
        title="Contact Us" 
        subtitle="Get In Touch"
        backgroundImage="/images/banner2.jpg"
        breadcrumbs={[{ label: "Contact Us" }]}
      />

      <SectionWrapper bg="white">
        <Grid container spacing={8}>
          {/* LEFT INFO */}
          <Grid item xs={12} md={5}>
            <Typography variant="h3" sx={{ color: "#0B3C5D", fontWeight: 800, mb: 3 }}>
              We&apos;re Here to Help.
            </Typography>
            <Typography sx={{ color: "#6B7280", fontSize: "1.1rem", lineHeight: 1.8, mb: 6 }}>
              Whether you are looking for partnership opportunities, product inquiries, or general support, our team is ready to assist you.
            </Typography>

            <InfoItem icon={<LocationOnIcon fontSize="large" />} title="Global Headquarters">
              <Typography sx={{ color: "#6B7280", lineHeight: 1.6 }}>
                Global Pharma Park, Innovation Zone,<br />
                Hyderabad, Telangana 500081, India
              </Typography>
            </InfoItem>

            <InfoItem icon={<EmailIcon fontSize="large" />} title="Communication Channels">
              <Typography sx={{ color: "#6B7280", mb: 0.5 }}><strong>General:</strong> info@austexpharma.com</Typography>
              <Typography sx={{ color: "#6B7280", mb: 0.5 }}><strong>Sales:</strong> sales@austexpharma.com</Typography>
              <Typography sx={{ color: "#6B7280" }}><strong>Careers:</strong> hr@austexpharma.com</Typography>
            </InfoItem>

            <InfoItem icon={<PhoneIcon fontSize="large" />} title="Phone Contacts">
              <Typography sx={{ color: "#6B7280", mb: 0.5 }}><strong>HQ Main:</strong> +91 40 1234 5678</Typography>
              <Typography sx={{ color: "#6B7280" }}><strong>Toll-Free:</strong> 1800 123 4567</Typography>
            </InfoItem>
          </Grid>

          {/* RIGHT FORM */}
          <Grid item xs={12} md={7}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 4, md: 6 },
                borderRadius: "24px",
                border: "1px solid #E2E8F0",
                boxShadow: "0 20px 60px rgba(11,60,93,0.06)",
                background: "#FFFFFF",
              }}
            >
              <Box sx={{ mb: 5 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, color: "#0B3C5D", mb: 1 }}>
                  Send a Message
                </Typography>
                <Typography sx={{ color: "#9CA3AF", fontSize: "0.95rem" }}>
                  Fill out the form below and our team will get back to you within 24 hours.
                </Typography>
              </Box>

              {/* Enquiry Details */}
              <Typography sx={{ fontWeight: 700, color: "#0B3C5D", mb: 2, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: 1 }}>
                Enquiry Details
              </Typography>
              <Grid container spacing={2.5} sx={{ mb: 4 }}>
                <Grid item xs={12} sm={6}>
                  <TextField 
                    fullWidth select label="Enquiry Type" defaultValue="general" variant="outlined" 
                    sx={{ 
                      '& .MuiOutlinedInput-root': { borderRadius: "12px", bgcolor: "#F9FBFC", '& fieldset': { borderColor: "#E2E8F0" }, '&:hover fieldset': { borderColor: "#00A8A8" }, '&.Mui-focused fieldset': { borderColor: "#00A8A8" } },
                      '& .MuiInputLabel-root.Mui-focused': { color: "#00A8A8" }
                    }}
                  >
                    <MenuItem value="general">General Inquiry</MenuItem>
                    <MenuItem value="business">Business Partnership</MenuItem>
                    <MenuItem value="medical">Medical Information</MenuItem>
                    <MenuItem value="support">Customer Support</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField 
                    fullWidth select label="Region" defaultValue="asia" variant="outlined" 
                    sx={{ 
                      '& .MuiOutlinedInput-root': { borderRadius: "12px", bgcolor: "#F9FBFC", '& fieldset': { borderColor: "#E2E8F0" }, '&:hover fieldset': { borderColor: "#00A8A8" }, '&.Mui-focused fieldset': { borderColor: "#00A8A8" } },
                      '& .MuiInputLabel-root.Mui-focused': { color: "#00A8A8" }
                    }}
                  >
                    <MenuItem value="na">North America</MenuItem>
                    <MenuItem value="eu">Europe</MenuItem>
                    <MenuItem value="asia">Asia Pacific</MenuItem>
                    <MenuItem value="row">Rest of World</MenuItem>
                  </TextField>
                </Grid>
              </Grid>

              {/* Personal Information */}
              <Typography sx={{ fontWeight: 700, color: "#0B3C5D", mb: 2, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: 1 }}>
                Your Information
              </Typography>
              <Grid container spacing={2.5} sx={{ mb: 4 }}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="First Name" variant="outlined" placeholder="John" sx={{ '& .MuiOutlinedInput-root': { borderRadius: "12px", bgcolor: "#F9FBFC", '& fieldset': { borderColor: "#E2E8F0" }, '&:hover fieldset': { borderColor: "#00A8A8" }, '&.Mui-focused fieldset': { borderColor: "#00A8A8" } }, '& .MuiInputLabel-root.Mui-focused': { color: "#00A8A8" } }} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Last Name" variant="outlined" placeholder="Doe" sx={{ '& .MuiOutlinedInput-root': { borderRadius: "12px", bgcolor: "#F9FBFC", '& fieldset': { borderColor: "#E2E8F0" }, '&:hover fieldset': { borderColor: "#00A8A8" }, '&.Mui-focused fieldset': { borderColor: "#00A8A8" } }, '& .MuiInputLabel-root.Mui-focused': { color: "#00A8A8" } }} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Email Address" type="email" variant="outlined" placeholder="john@company.com" sx={{ '& .MuiOutlinedInput-root': { borderRadius: "12px", bgcolor: "#F9FBFC", '& fieldset': { borderColor: "#E2E8F0" }, '&:hover fieldset': { borderColor: "#00A8A8" }, '&.Mui-focused fieldset': { borderColor: "#00A8A8" } }, '& .MuiInputLabel-root.Mui-focused': { color: "#00A8A8" } }} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Phone Number" variant="outlined" placeholder="+91 1234567890" sx={{ '& .MuiOutlinedInput-root': { borderRadius: "12px", bgcolor: "#F9FBFC", '& fieldset': { borderColor: "#E2E8F0" }, '&:hover fieldset': { borderColor: "#00A8A8" }, '&.Mui-focused fieldset': { borderColor: "#00A8A8" } }, '& .MuiInputLabel-root.Mui-focused': { color: "#00A8A8" } }} />
                </Grid>
              </Grid>

              {/* Message */}
              <Typography sx={{ fontWeight: 700, color: "#0B3C5D", mb: 2, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: 1 }}>
                Your Message
              </Typography>
              <TextField 
                fullWidth multiline rows={6} 
                label="How can we help you?" 
                variant="outlined" 
                placeholder="Tell us about your requirements, partnership interests, or any questions you may have..."
                sx={{ 
                  mb: 4,
                  '& .MuiOutlinedInput-root': { borderRadius: "12px", bgcolor: "#F9FBFC", '& fieldset': { borderColor: "#E2E8F0" }, '&:hover fieldset': { borderColor: "#00A8A8" }, '&.Mui-focused fieldset': { borderColor: "#00A8A8" } },
                  '& .MuiInputLabel-root.Mui-focused': { color: "#00A8A8" }
                }} 
              />

              <Button
                fullWidth
                variant="contained"
                size="large"
                sx={{
                  py: 2,
                  background: "linear-gradient(135deg, #0B3C5D 0%, #00A8A8 100%)",
                  color: "#fff",
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  borderRadius: "14px",
                  textTransform: "none",
                  letterSpacing: 0.5,
                  boxShadow: "0 8px 24px rgba(0,168,168,0.25)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    background: "linear-gradient(135deg, #06253B 0%, #0B3C5D 100%)",
                    boxShadow: "0 12px 32px rgba(11,60,93,0.3)",
                    transform: "translateY(-2px)"
                  },
                }}
              >
                Submit Inquiry →
              </Button>

              <Typography sx={{ color: "#9CA3AF", fontSize: "0.8rem", mt: 2, textAlign: "center" }}>
                By submitting, you agree to our Privacy Policy and Terms of Service.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </SectionWrapper>
      
      {/* MAP EMBED - Visual Placeholder */}
      <Box sx={{ width: "100%", height: "450px", background: "#E2E8F0", position: "relative" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121804.83400517861!2d78.36940381665452!3d17.442654394602283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>

      <Footer />
    </Box>
  );
}
