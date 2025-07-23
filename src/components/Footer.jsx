import React from "react";
import {
  Box,
  Typography,
  Link,
  Stack,
  IconButton,
  Container,
  Divider,
} from "@mui/material";
import {
  Facebook,
  Instagram,
  Twitter,
  Email,
  ArrowUpward,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import namedLogo from "../assets/named-logo.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: <Facebook />, href: "https://www.facebook.com/share/1afxf2rzTs/", color: "#1976d2" },
    { icon: <Instagram />, href: "https://www.instagram.com/gleamoura_360?igsh=Mjl2ODgzYnZnNDJh", color: "#7b1fa2" },
    { icon: <Email />, href: "mailto:gleamoura360@gmail.com", color: "#1976d2" },
  ];

  const navLinks = ["Home", "Shop", "About", "Contact"];

  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 35%, #0f1419 100%)",
        color: "#F8FAFF",
        py: { xs: 6, md: 8 },
        overflow: "hidden",
        // Remove the margin that causes white strip
        mt: 0,
        // Ensure no gaps
        borderTop: "1px solid rgba(25, 118, 210, 0.1)",
      }}
    >
      {/* Background Effects - Updated colors */}
      <Box
        sx={{
          position: "absolute",
          width: 500,
          height: 500,
          bgcolor: "#1976d2",
          filter: "blur(200px)",
          borderRadius: "50%",
          top: -200,
          left: -200,
          zIndex: 1,
          opacity: 0.08,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: 400,
          height: 400,
          bgcolor: "#7b1fa2",
          filter: "blur(150px)",
          borderRadius: "50%",
          bottom: -150,
          right: -150,
          zIndex: 1,
          opacity: 0.06,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: 300,
          height: 300,
          bgcolor: "#00796b",
          filter: "blur(120px)",
          borderRadius: "50%",
          top: "40%",
          right: "20%",
          zIndex: 1,
          opacity: 0.04,
        }}
      />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 2 }}>
        {/* Main Footer Content */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Stack
            direction={{ xs: "column", lg: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "center", lg: "flex-start" }}
            spacing={{ xs: 6, lg: 8 }}
            textAlign={{ xs: "center", lg: "left" }}
          >
            {/* Logo & Brand Section */}
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Box sx={{ maxWidth: { xs: "100%", lg: 320 } }}>
                <Box
                  component="img"
                  src={namedLogo}
                  alt="Gleamoura Logo"
                  sx={{
                    height: { xs: 80, md: 100 },
                    mb: 3,
                    filter: "drop-shadow(0 4px 16px rgba(25, 118, 210, 0.3)) brightness(1.1)",
                  }}
                />
                <Typography
                  variant="h6"
                  fontWeight={600}
                  sx={{
                    background: "linear-gradient(90deg, #1976d2, #7b1fa2, #00796b)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    mb: 2,
                  }}
                >
                  The Future of Cleaning
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "rgba(248, 250, 255, 0.8)",
                    lineHeight: 1.7,
                    maxWidth: 300,
                    mx: { xs: "auto", lg: 0 },
                    fontSize: "1rem",
                  }}
                >
                  Revolutionary UV-powered cleaning technology that brings
                  hospital-grade hygiene to your everyday life. Simple,
                  effective, and safe.
                </Typography>
              </Box>
            </motion.div>

            {/* Navigation & Social Section */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 6, sm: 10 }}
              alignItems={{ xs: "center", sm: "flex-start" }}
            >
              {/* Navigation Links */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Typography
                  variant="h6"
                  fontWeight={700}
                  sx={{
                    background: "linear-gradient(90deg, #1976d2, #7b1fa2)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    mb: 3,
                    fontSize: "1.2rem",
                  }}
                >
                  Quick Links
                </Typography>
                <Stack spacing={2}>
                  {navLinks.map((text, index) => (
                    <motion.div
                      key={text}
                      initial={{ x: 20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 8 }}
                    >
                      <Link
                        href={`/${text.toLowerCase()}`}
                        underline="none"
                        sx={{
                          color: "rgba(248, 250, 255, 0.9)",
                          fontWeight: 500,
                          fontSize: "1rem",
                          position: "relative",
                          transition: "all 0.3s ease",
                          display: "inline-block",
                          "&:hover": {
                            color: "#1976d2",
                            textShadow: "0 0 8px rgba(25, 118, 210, 0.5)",
                          },
                          "&::after": {
                            content: '""',
                            position: "absolute",
                            width: 0,
                            height: 2,
                            bottom: -4,
                            left: 0,
                            background: "linear-gradient(90deg, #1976d2, #7b1fa2)",
                            transition: "width 0.3s ease",
                            borderRadius: 1,
                          },
                          "&:hover::after": {
                            width: "100%",
                          },
                        }}
                      >
                        {text}
                      </Link>
                    </motion.div>
                  ))}
                </Stack>
              </motion.div>

              {/* Social Media Section */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Typography
                  variant="h6"
                  fontWeight={700}
                  sx={{
                    background: "linear-gradient(90deg, #7b1fa2, #00796b)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    mb: 3,
                    fontSize: "1.2rem",
                  }}
                >
                  Connect With Us
                </Typography>
                <Stack
                  direction="row"
                  spacing={2}
                  justifyContent={{ xs: "center", sm: "flex-start" }}
                  sx={{ mb: 2 }}
                >
                  {socialLinks.map((social, index) => (
                    <motion.div
                      key={index}
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.5 + index * 0.1,
                        type: "spring",
                        damping: 15,
                      }}
                      viewport={{ once: true }}
                      whileHover={{
                        scale: 1.15,
                        y: -3,
                        transition: { type: "spring", damping: 10 },
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <IconButton
                        href={social.href}
                        sx={{
                          background: "rgba(248, 250, 255, 0.08)",
                          backdropFilter: "blur(20px)",
                          border: "1px solid rgba(25, 118, 210, 0.2)",
                          color: "rgba(248, 250, 255, 0.9)",
                          width: 52,
                          height: 52,
                          borderRadius: 2,
                          transition: "all 0.3s ease",
                          "&:hover": {
                            background: `${social.color}15`,
                            color: social.color,
                            border: `1px solid ${social.color}40`,
                            boxShadow: `0 8px 32px ${social.color}25`,
                            transform: "translateY(-2px)",
                          },
                        }}
                      >
                        {social.icon}
                      </IconButton>
                    </motion.div>
                  ))}
                </Stack>
                <Typography
                  variant="body2"
                  sx={{
                    color: "rgba(248, 250, 255, 0.7)",
                    fontSize: "0.9rem",
                  }}
                >
                  Follow us for updates & tips
                </Typography>
              </motion.div>
            </Stack>
          </Stack>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Divider
            sx={{
              my: 5,
              background: "linear-gradient(90deg, transparent, rgba(25, 118, 210, 0.3), rgba(123, 31, 162, 0.3), rgba(0, 121, 107, 0.3), transparent)",
              height: 1,
              border: "none",
            }}
          />
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems="center"
            spacing={3}
          >
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1, sm: 4 }}
              alignItems="center"
            >
              <Typography
                variant="body2"
                sx={{
                  color: "rgba(248, 250, 255, 0.7)",
                  textAlign: { xs: "center", sm: "left" },
                  fontSize: "0.95rem",
                }}
              >
                © {new Date().getFullYear()} Gleamoura. All rights reserved.
              </Typography>
              <Stack
                direction="row"
                spacing={3}
                sx={{ fontSize: "0.9rem" }}
              >
                {["Privacy Policy", "Terms of Service"].map((text) => (
                  <Link
                    key={text}
                    href="#"
                    underline="none"
                    sx={{
                      color: "rgba(248, 250, 255, 0.6)",
                      fontSize: "0.85rem",
                      "&:hover": {
                        color: "#1976d2",
                      },
                    }}
                  >
                    {text}
                  </Link>
                ))}
              </Stack>
            </Stack>

            {/* Scroll to Top Button */}
            <motion.div
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <IconButton
                onClick={scrollToTop}
                sx={{
                  background: "rgba(248, 250, 255, 0.08)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(25, 118, 210, 0.3)",
                  color: "rgba(248, 250, 255, 0.9)",
                  width: 48,
                  height: 48,
                  borderRadius: 2,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    background: "rgba(25, 118, 210, 0.15)",
                    color: "#1976d2",
                    border: "1px solid rgba(25, 118, 210, 0.5)",
                    boxShadow: "0 8px 32px rgba(25, 118, 210, 0.3)",
                  },
                }}
              >
                <ArrowUpward />
              </IconButton>
            </motion.div>
          </Stack>
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              textAlign: "center",
              mt: 4,
              pt: 4,
              borderTop: "1px solid rgba(25, 118, 210, 0.1)",
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: "rgba(248, 250, 255, 0.6)",
                fontSize: "0.8rem",
                fontStyle: "italic",
              }}
            >
               Trusted by thousands •  Shipping island-wide •  24/7 Support
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Footer;