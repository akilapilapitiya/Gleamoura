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
import { Facebook, Instagram, Twitter, Email, ArrowUpward } from "@mui/icons-material";
import { motion } from "framer-motion";
import namedLogo from "../assets/named-logo.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: <Facebook />, href: "#", color: "#1877F2" },
    { icon: <Instagram />, href: "#", color: "#E4405F" },
    { icon: <Twitter />, href: "#", color: "#1DA1F2" },
    { icon: <Email />, href: "mailto:support@gleamoura.com", color: "#00BCD4" },
  ];

  const navLinks = ["Home", "Shop", "About", "Contact"];

  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        background: "linear-gradient(135deg, #0F0F23, #1A1A2E, #16213E)",
        color: "#F3F4F6",
        py: { xs: 6, md: 8 },
        mt: 10,
        overflow: "hidden",
      }}
    >
      {/* Background Effects */}
      <Box
        sx={{
          position: "absolute",
          width: 400,
          height: 400,
          bgcolor: "#00BCD4",
          filter: "blur(150px)",
          borderRadius: "50%",
          top: -200,
          left: -150,
          zIndex: 1,
          opacity: 0.08,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: 300,
          height: 300,
          bgcolor: "#B388FF",
          filter: "blur(120px)",
          borderRadius: "50%",
          bottom: -150,
          right: -100,
          zIndex: 1,
          opacity: 0.06,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
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
            spacing={{ xs: 4, lg: 6 }}
            textAlign={{ xs: "center", lg: "left" }}
          >
            {/* Logo & Brand Section */}
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Box sx={{ maxWidth: { xs: "100%", lg: 300 } }}>
                <Box
                  component="img"
                  src={namedLogo}
                  alt="Gleamoura Logo"
                  sx={{ 
                    height: { xs: 80, md: 100 },
                    mb: 2,
                    filter: "drop-shadow(0 4px 12px rgba(0, 188, 212, 0.3))",
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    color: "rgba(255, 255, 255, 0.7)",
                    lineHeight: 1.6,
                    maxWidth: 280,
                    mx: { xs: "auto", lg: 0 },
                  }}
                >
                  Revolutionary cleaning technology powered by simplicity for the future of hygiene.
                </Typography>
              </Box>
            </motion.div>

            {/* Navigation & Social Section */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 4, sm: 8 }}
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
                    background: "linear-gradient(90deg, #00BCD4, #B388FF)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    mb: 2,
                  }}
                >
                  Quick Links
                </Typography>
                <Stack spacing={1}>
                  {navLinks.map((text, index) => (
                    <motion.div
                      key={text}
                      initial={{ x: 20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5 }}
                    >
                      <Link
                        href={`/${text.toLowerCase()}`}
                        underline="none"
                        sx={{
                          color: "rgba(255, 255, 255, 0.8)",
                          fontWeight: 500,
                          position: "relative",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            color: "#00BCD4",
                            textShadow: "0 0 8px rgba(0, 188, 212, 0.5)",
                          },
                          "&::after": {
                            content: '""',
                            position: "absolute",
                            width: 0,
                            height: 2,
                            bottom: -2,
                            left: 0,
                            background: "linear-gradient(90deg, #00BCD4, #B388FF)",
                            transition: "width 0.3s ease",
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
                    background: "linear-gradient(90deg, #00BCD4, #B388FF)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    mb: 2,
                  }}
                >
                  Connect With Us
                </Typography>
                <Stack direction="row" spacing={1} justifyContent={{ xs: "center", sm: "flex-start" }}>
                  {socialLinks.map((social, index) => (
                    <motion.div
                      key={index}
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.5 + index * 0.1,
                        type: "spring",
                        damping: 15
                      }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.1, 
                        rotate: 5,
                        transition: { type: "spring", damping: 10 }
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <IconButton
                        href={social.href}
                        sx={{
                          background: "rgba(255, 255, 255, 0.05)",
                          backdropFilter: "blur(10px)",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                          color: "rgba(255, 255, 255, 0.8)",
                          width: 48,
                          height: 48,
                          transition: "all 0.3s ease",
                          "&:hover": {
                            background: `${social.color}20`,
                            color: social.color,
                            border: `1px solid ${social.color}40`,
                            boxShadow: `0 8px 24px ${social.color}30`,
                          },
                        }}
                      >
                        {social.icon}
                      </IconButton>
                    </motion.div>
                  ))}
                </Stack>
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
              my: 4,
              background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)",
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
            spacing={2}
          >
            <Typography
              variant="body2"
              sx={{
                color: "rgba(255, 255, 255, 0.6)",
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              © {new Date().getFullYear()} Gleamoura. All rights reserved.
            </Typography>

            {/* Scroll to Top Button */}
            <motion.div
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <IconButton
                onClick={scrollToTop}
                sx={{
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  color: "rgba(255, 255, 255, 0.8)",
                  width: 44,
                  height: 44,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    background: "rgba(0, 188, 212, 0.2)",
                    color: "#00BCD4",
                    border: "1px solid rgba(0, 188, 212, 0.4)",
                    boxShadow: "0 8px 24px rgba(0, 188, 212, 0.3)",
                  },
                }}
              >
                <ArrowUpward />
              </IconButton>
            </motion.div>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Footer;