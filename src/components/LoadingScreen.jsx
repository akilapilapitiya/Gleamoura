import React, { useEffect } from "react";
import {
  Box,
  Typography,
  Chip,
  Container,
} from "@mui/material";
import { motion } from "framer-motion";

const LoadingScreen = ({ onLoadingComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoadingComplete && onLoadingComplete();
    }, 1500); // Quick 1.5 second loading

    return () => {
      clearTimeout(timer);
    };
  }, [onLoadingComplete]);

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "linear-gradient(135deg, #f8faff 0%, #e8f2ff 25%, #dae8ff 50%, #ffffff 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        overflow: "hidden",
      }}
    >
      {/* Background Effects - Same as Contact page */}
      <Box
        sx={{
          position: "absolute",
          width: 600,
          height: 600,
          bgcolor: "#e3f2fd",
          filter: "blur(200px)",
          borderRadius: "50%",
          top: -200,
          right: -200,
          zIndex: 1,
          opacity: 0.4,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: 400,
          height: 400,
          bgcolor: "#f3e5f5",
          filter: "blur(150px)",
          borderRadius: "50%",
          bottom: -100,
          left: -150,
          zIndex: 1,
          opacity: 0.3,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: 300,
          height: 300,
          bgcolor: "#e0f2f1",
          filter: "blur(120px)",
          borderRadius: "50%",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
          opacity: 0.25,
        }}
      />

      <Container maxWidth="sm" sx={{ zIndex: 2, position: "relative", textAlign: "center" }}>
        {/* Logo/Brand Section */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", damping: 20 }}
        >
          <Box
            sx={{
              width: 120,
              height: 120,
              background: "linear-gradient(135deg, #1976d2, #7b1fa2, #00796b)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mx: "auto",
              mb: 4,
              boxShadow: "0 8px 32px rgba(25, 118, 210, 0.3)",
              position: "relative",
              "&::before": {
                content: '""',
                position: "absolute",
                width: 140,
                height: 140,
                border: "2px solid rgba(25, 118, 210, 0.2)",
                borderRadius: "50%",
                animation: "pulse 2s infinite",
              },
              "@keyframes pulse": {
                "0%": {
                  transform: "scale(1)",
                  opacity: 1,
                },
                "50%": {
                  transform: "scale(1.1)",
                  opacity: 0.7,
                },
                "100%": {
                  transform: "scale(1)",
                  opacity: 1,
                },
              },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                color: "white",
                fontWeight: 800,
                fontSize: "2rem",
              }}
            >
              G
            </Typography>
          </Box>
        </motion.div>

        {/* Brand Name */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Typography
            variant="h2"
            component="h1"
            fontWeight={800}
            gutterBottom
            sx={{
              fontSize: { xs: "2rem", md: "2.5rem" },
              lineHeight: 1.1,
              color: "#1a1a1a",
              mb: 1,
            }}
          >
            <Box
              component="span"
              sx={{
                background: "linear-gradient(90deg, #1976d2, #7b1fa2, #00796b)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Gleamoura
            </Box>
          </Typography>
          
          <Chip
            label="UV Cleaning Technology"
            sx={{
              mb: 4,
              bgcolor: "rgba(25, 118, 210, 0.08)",
              color: "#1976d2",
              border: "1px solid rgba(25, 118, 210, 0.2)",
              fontWeight: 600,
              fontSize: "0.9rem",
              backdropFilter: "blur(10px)",
            }}
          />
        </motion.div>

        {/* Simple Loading Dots */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Box sx={{ display: "flex", justifyContent: "center", gap: 1.5, mt: 2 }}>
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
              >
                <Box
                  sx={{
                    width: 16,
                    height: 16,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #1976d2, #7b1fa2)",
                    boxShadow: "0 4px 12px rgba(25, 118, 210, 0.4)",
                  }}
                />
              </motion.div>
            ))}
          </Box>
        </motion.div>

        {/* Simple Feature Tags */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2, flexWrap: "wrap", mt: 3 }}>
            {["99.9% Effective", "UV Technology"].map((feature, index) => (
              <Chip
                key={index}
                label={feature}
                sx={{
                  bgcolor: "rgba(25, 118, 210, 0.08)",
                  color: "#1976d2",
                  fontWeight: 600,
                  border: "1px solid rgba(25, 118, 210, 0.2)",
                  backdropFilter: "blur(10px)",
                }}
              />
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default LoadingScreen;