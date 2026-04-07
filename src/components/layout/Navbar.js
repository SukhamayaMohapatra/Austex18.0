"use client";
import { AppBar, Toolbar, Typography, Box, Button, Drawer, IconButton, List, ListItem, ListItemText, Collapse, Container } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [capabilitiesOpen, setCapabilitiesOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const background = useTransform(
    scrollY,
    [0, 50],
    ["rgba(255, 255, 255, 0.0)", "rgba(255, 255, 255, 0.9)"]
  );
  const backdropFilter = useTransform(
    scrollY,
    [0, 50],
    ["blur(0px)", "blur(12px)"]
  );
  const boxShadow = useTransform(
    scrollY,
    [0, 50],
    ["none", "0 4px 30px rgba(0, 0, 0, 0.05)"]
  );
  const color = useTransform(
    scrollY,
    [0, 50],
    [pathname === '/' ? "#FFFFFF" : "#1A1A1A", "#1A1A1A"]
  );

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Services", href: "/services" },
    { name: "Global Presence", href: "/about/global-presence" },
    { name: "Patient Alert", href: "/patient-alert" }
  ];

  const aboutLinks = [
    { name: "Our Company", href: "/about" },
    { name: "Leadership", href: "/about/leadership" },
    { name: "Our Journey", href: "/about/journey" },
  ];

  const capabilityLinks = [
    { name: "R&D", href: "/r-and-d" },
    { name: "Manufacturing", href: "/manufacturing" },
    { name: "Quality Assurance", href: "/quality" },
    { name: "Pipeline", href: "/pipeline" },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const NavItem = ({ name, href }) => {
    const isActive = pathname === href || pathname?.startsWith(href + '/');
    return (
      <Link href={href} style={{ textDecoration: 'none' }}>
        <motion.div style={{ color }}>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "0.95rem",
              cursor: "pointer",
              position: "relative",
              px: 1,
              py: 0.5,
              transition: "all 0.3s ease",
              "&::after": {
                content: '""',
                position: "absolute",
                width: isActive ? "100%" : "0%",
                height: "2px",
                bottom: 0,
                left: 0,
                background: "#00A8A8",
                transition: "width 0.3s ease-in-out",
              },
              "&:hover::after": {
                width: "100%",
              },
              "&:hover": {
                color: "#00A8A8",
              }
            }}
          >
            {name}
          </Typography>
        </motion.div>
      </Link>
    );
  };

  const MegaMenu = ({ title, links }) => {
    const [open, setOpen] = useState(false);

    return (
      <Box
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        sx={{ position: "relative", py: 2 }}
      >
        <motion.div style={{ color }}>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "0.95rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              transition: "color 0.3s ease",
              "&:hover": { color: "#00A8A8" }
            }}
          >
            {title} <ExpandMoreIcon fontSize="small" sx={{ transition: "transform 0.3s", transform: open ? "rotate(180deg)" : "rotate(0deg)" }} />
          </Typography>
        </motion.div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.2 }}
              style={{ position: "absolute", top: "100%", left: "50%", transform: "translateX(-50%)", zIndex: 100 }}
            >
              <Box
                sx={{
                  background: "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(12px)",
                  borderRadius: "12px",
                  boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
                  border: "1px solid rgba(0,0,0,0.05)",
                  overflow: "hidden",
                  minWidth: "200px",
                  p: 1,
                }}
              >
                {links.map((link) => (
                  <Link key={link.name} href={link.href} style={{ textDecoration: 'none' }}>
                    <Box
                      sx={{
                        px: 3,
                        py: 1.5,
                        borderRadius: "8px",
                        color: "#1A1A1A",
                        transition: "all 0.2s ease",
                        display: "flex",
                        alignItems: "center",
                        "&:hover": {
                          background: "rgba(0, 168, 168, 0.08)",
                          color: "#00A8A8",
                          paddingLeft: "28px"
                        }
                      }}
                    >
                      <Typography sx={{ fontWeight: 500, fontSize: "0.95rem" }}>
                        {link.name}
                      </Typography>
                    </Box>
                  </Link>
                ))}
              </Box>
            </motion.div>
          )}
        </AnimatePresence>
      </Box>
    );
  };

  const drawer = (
    <Box sx={{ width: 280, pt: 3, px: 2 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
        <Typography sx={{ fontWeight: 800, color: "#0B3C5D", fontSize: "1.2rem" }}>
          Austex Pharma
        </Typography>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>

      <List>
        <ListItem button component={Link} href="/" onClick={handleDrawerToggle}>
          <ListItemText primary="Home" primaryTypographyProps={{ fontWeight: 600 }} />
        </ListItem>

        <ListItem button onClick={() => setAboutOpen(!aboutOpen)}>
          <ListItemText primary="About Us" primaryTypographyProps={{ fontWeight: 600 }} />
          <ExpandMoreIcon sx={{ transform: aboutOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "0.3s" }} />
        </ListItem>
        <Collapse in={aboutOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {aboutLinks.map((link) => (
              <ListItem button key={link.name} component={Link} href={link.href} onClick={handleDrawerToggle} sx={{ pl: 4 }}>
                <ListItemText primary={link.name} />
              </ListItem>
            ))}
          </List>
        </Collapse>

        <ListItem button component={Link} href="/products" onClick={handleDrawerToggle}>
          <ListItemText primary="Products" primaryTypographyProps={{ fontWeight: 600 }} />
        </ListItem>

        <ListItem button onClick={() => setCapabilitiesOpen(!capabilitiesOpen)}>
          <ListItemText primary="Capabilities" primaryTypographyProps={{ fontWeight: 600 }} />
          <ExpandMoreIcon sx={{ transform: capabilitiesOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "0.3s" }} />
        </ListItem>
        <Collapse in={capabilitiesOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {capabilityLinks.map((link) => (
              <ListItem button key={link.name} component={Link} href={link.href} onClick={handleDrawerToggle} sx={{ pl: 4 }}>
                <ListItemText primary={link.name} />
              </ListItem>
            ))}
          </List>
        </Collapse>

        <ListItem button component={Link} href="/services" onClick={handleDrawerToggle}>
          <ListItemText primary="Services" primaryTypographyProps={{ fontWeight: 600 }} />
        </ListItem>
        <ListItem button component={Link} href="/about/global-presence" onClick={handleDrawerToggle}>
          <ListItemText primary="Global Presence" primaryTypographyProps={{ fontWeight: 600 }} />
        </ListItem>
        <ListItem button component={Link} href="/patient-alert" onClick={handleDrawerToggle}>
          <ListItemText primary="Patient Alert" primaryTypographyProps={{ fontWeight: 600 }} />
        </ListItem>

        <Box sx={{ mt: 4, textAlign: "center" }}>
          <Link href="/contact" passHref>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleDrawerToggle}
              sx={{ borderRadius: "50px", py: 1.5 }}
            >
              Contact Us
            </Button>
          </Link>
        </Box>
      </List>
    </Box>
  );

  if (!mounted) return null;

  return (
    <>
      <AppBar
        component={motion.div}
        style={{ background, backdropFilter, boxShadow }}
        position="fixed"
        elevation={0}
        sx={{
          borderBottom: pathname === '/' ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.05)",
          top: 0
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: "space-between", py: { xs: 1, md: 1.5 } }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: "12px",
                    background: "linear-gradient(135deg, #0B3C5D 0%, #00A8A8 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: "800",
                    fontSize: "22px",
                    fontFamily: "'Poppins', sans-serif"
                  }}
                >
                  A
                </Box>
                <motion.div style={{ color }}>
                  <Typography
                    sx={{
                      fontWeight: 800,
                      letterSpacing: -0.5,
                      fontSize: { xs: "20px", md: "24px" },
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    Austex Pharma
                  </Typography>
                </motion.div>
              </Link>
            </Box>

            <Box
              sx={{
                display: { xs: "none", lg: "flex" },
                alignItems: "center",
                gap: 4,
              }}
            >
              <NavItem name="Home" href="/" />
              <MegaMenu title="About Us" links={aboutLinks} />
              <NavItem name="Products" href="/products" />
              <MegaMenu title="Capabilities" links={capabilityLinks} />
              <NavItem name="Services" href="/services" />
              <NavItem name="Global Presence" href="/about/global-presence" />
              
              <Link href="/contact" passHref>
                <Button
                  variant="contained"
                  sx={{
                    background: "linear-gradient(135deg, #0B3C5D 0%, #00A8A8 100%)",
                    color: "white",
                    borderRadius: "50px",
                    px: 3,
                    py: 1,
                    boxShadow: "0 4px 14px 0 rgba(11, 60, 93, 0.3)",
                    "&:hover": {
                      background: "linear-gradient(135deg, #06253B 0%, #007A7A 100%)",
                      boxShadow: "0 6px 20px rgba(11, 60, 93, 0.4)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  Contact Us
                </Button>
              </Link>
            </Box>

            <Box sx={{ display: { xs: "flex", lg: "none" } }}>
              <IconButton onClick={handleDrawerToggle} sx={{ color: pathname === '/' && scrollY.get() < 50 ? 'white' : 'black' }}>
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
