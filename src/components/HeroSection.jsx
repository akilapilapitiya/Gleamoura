import React from "react";
import { Box, Typography, Button, Stack, Container } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

const HeroSection = () => {
    const navigate = useNavigate();
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #D0EFFF, #F9FBFD)",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Background blur or glow effects */}
      <Box
        sx={{
          position: "absolute",
          width: 400,
          height: 400,
          bgcolor: "#B2EBF2",
          filter: "blur(120px)",
          borderRadius: "50%",
          top: -100,
          left: -100,
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: 300,
          height: 300,
          bgcolor: "#B388FF",
          filter: "blur(100px)",
          borderRadius: "50%",
          bottom: -50,
          right: -50,
          zIndex: 1,
        }}
      />

      <Container maxWidth="lg" sx={{ zIndex: 2 }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems="center"
          justifyContent="space-between"
          spacing={4}
        >
          {/* Text Section */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{ flex: 1 }}
          >
            <Typography variant="h2" component="h1" fontWeight={800} gutterBottom>
              Meet <span style={{ color: "#00BCD4" }}>Gleamoura</span>
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
              The smart, sleek, and effective way to disinfect any surface with style.
              Effortless cleaning. Maximum hygiene.
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button 
              variant="contained" 
              color="primary" 
              size="large"
              onClick={() => navigate("/shop")}>
                Buy Now
              </Button>
            </Stack>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{ flex: 1, textAlign: "center" }}
          >
            <Box
              component="img"
              src="/assets/device-mockup.png" // Replace with your actual image path
              alt="Gleamoura Device"
              sx={{ width: "100%", maxWidth: 400 }}
            />
          </motion.div>
        </Stack>
      </Container>
    </Box>
  );
};

export default HeroSection;
