import React from "react";
import { Box, Typography, Button, Stack, Container, Chip } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { PlayArrow, ShoppingCart, AutoAwesome, Shield, Speed } from "@mui/icons-material";
import cleanerImage from "../assets/device-mockup.png";

const HeroSection = () => {
  const navigate = useNavigate();

  const features = [
    { icon: <AutoAwesome />, text: "Easy Operations" },
    { icon: <Shield />, text: "High Efficiency" },
    { icon: <Speed />, text: "3-Min Process" },
  ];

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0F0F23, #1A1A2E, #16213E)",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        py: { xs: 8, md: 4 },
      }}
    >
      {/* Enhanced Background Effects */}
      <Box
        sx={{
          position: "absolute",
          width: 600,
          height: 600,
          bgcolor: "#00BCD4",
          filter: "blur(200px)",
          borderRadius: "50%",
          top: -200,
          left: -200,
          zIndex: 1,
          opacity: 0.12,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: 400,
          height: 400,
          bgcolor: "#B388FF",
          filter: "blur(150px)",
          borderRadius: "50%",
          bottom: -100,
          right: -150,
          zIndex: 1,
          opacity: 0.08,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: 300,
          height: 300,
          bgcolor: "#4ECDC4",
          filter: "blur(120px)",
          borderRadius: "50%",
          top: "30%",
          right: "10%",
          zIndex: 1,
          opacity: 0.06,
        }}
      />     
      <Container maxWidth="xl" sx={{ zIndex: 2, position: "relative" }}>
        <Stack
          direction={{ xs: "column", lg: "row" }}
          alignItems="center"
          justifyContent="space-between"
          spacing={{ xs: 6, lg: 8 }}
        >
          {/* Enhanced Text Section */}
          <Box sx={{ flex: 1, maxWidth: { xs: "100%", lg: 600 } }}>
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <Chip
                label="Revolutionary Cleaning Tool"
                sx={{
                  mb: 3,
                  bgcolor: "rgba(0, 188, 212, 0.15)",
                  color: "#00BCD4",
                  border: "1px solid rgba(0, 188, 212, 0.3)",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  backdropFilter: "blur(10px)",
                }}
              />
            </motion.div>

            <motion.div
              initial={{ x: -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Typography 
                variant="h1" 
                component="h1" 
                fontWeight={800} 
                gutterBottom
                sx={{
                  fontSize: { xs: "2.5rem", md: "3.5rem", lg: "4rem" },
                  lineHeight: 1.1,
                  color: "white",
                  mb: 2,
                }}
              >
                Meet{" "}
                <Box
                  component="span"
                  sx={{
                    background: "linear-gradient(90deg, #00BCD4, #B388FF, #4ECDC4)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    position: "relative",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: -8,
                      left: 0,
                      right: 0,
                      height: 4,
                      background: "linear-gradient(90deg, #00BCD4, #B388FF, #4ECDC4)",
                      borderRadius: 2,
                    }
                  }}
                >
                  Gleamoura
                </Box>
              </Typography>
            </motion.div>

            <motion.div
              initial={{ x: -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Typography 
                variant="h5" 
                sx={{ 
                  color: "rgba(255, 255, 255, 0.8)",
                  mb: 4,
                  lineHeight: 1.6,
                  maxWidth: 520,
                  fontSize: { xs: "1.1rem", md: "1.25rem" },
                }}
              >
                The smart, sleek, and effective way to disinfect any surface with 
                <Box component="span" sx={{ color: "#00BCD4", fontWeight: 600 }}> UV Technology</Box>. 
                Effortless cleaning. Maximum hygiene.
              </Typography>
            </motion.div>

            {/* Feature Pills */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Stack direction="row" spacing={2} sx={{ mb: 4, flexWrap: "wrap", gap: 1 }}>
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.8 + index * 0.1,
                      type: "spring",
                      damping: 15
                    }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <Chip
                      icon={feature.icon}
                      label={feature.text}
                      sx={{
                        bgcolor: "rgba(255, 255, 255, 0.05)",
                        color: "white",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        backdropFilter: "blur(10px)",
                        fontWeight: 600,
                        py: 1,
                        "& .MuiChip-icon": {
                          color: "#00BCD4",
                        },
                      }}
                    />
                  </motion.div>
                ))}
              </Stack>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Stack 
                direction={{ xs: "column", sm: "row" }} 
                spacing={3}
                sx={{ alignItems: { xs: "stretch", sm: "center" } }}
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    variant="contained"
                    size="large"
                    startIcon={<ShoppingCart />}
                    onClick={() => navigate("/shop")}
                    sx={{
                      background: "linear-gradient(135deg, #00BCD4, #4ECDC4)",
                      boxShadow: "0 8px 24px rgba(0, 188, 212, 0.4)",
                      py: 1.5,
                      px: 4,
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      borderRadius: 3,
                      textTransform: "none",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      "&:hover": {
                        background: "linear-gradient(135deg, #4ECDC4, #00BCD4)",
                        boxShadow: "0 12px 32px rgba(0, 188, 212, 0.6)",
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    Order Now
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    variant="outlined"
                    size="large"
                    startIcon={<PlayArrow />}
                    sx={{
                      borderColor: "rgba(255, 255, 255, 0.3)",
                      color: "white",
                      py: 1.5,
                      px: 4,
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      borderRadius: 3,
                      textTransform: "none",
                      background: "rgba(255, 255, 255, 0.05)",
                      backdropFilter: "blur(10px)",
                      "&:hover": {
                        borderColor: "#00BCD4",
                        background: "rgba(0, 188, 212, 0.1)",
                        color: "#00BCD4",
                        boxShadow: "0 8px 24px rgba(0, 188, 212, 0.2)",
                      },
                    }}
                  >
                    Watch Demo
                  </Button>
                </motion.div>
              </Stack>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <Typography
                variant="caption"
                sx={{
                  display: "block",
                  color: "rgba(255, 255, 255, 0.6)",
                  mt: 4,
                  fontStyle: "italic",
                }}
              >
                 Free shipping Islandwide • 30-day money-back guarantee • 2-year warranty
              </Typography>
            </motion.div>
          </Box>

          {/* Enhanced Image Section */}
          <Box sx={{ flex: 1, position: "relative", maxWidth: { xs: "100%", lg: 500 } }}>
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotateY: 30 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              transition={{ delay: 0.5, duration: 1, type: "spring", damping: 20 }}
              style={{ textAlign: "center", position: "relative" }}
            >
              {/* Glow Effect Behind Image */}
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "120%",
                  height: "120%",
                  background: "radial-gradient(circle, rgba(0, 188, 212, 0.2) 0%, transparent 70%)",
                  borderRadius: "50%",
                  zIndex: -1,
                }}
              />             
              <Box
                component="img"
                src={cleanerImage}
                alt="Gleamoura Cleaner"
                sx={{ 
                  width: "100%", 
                  maxWidth: 450,
                  filter: "drop-shadow(0 20px 40px rgba(0, 188, 212, 0.3))",
                  position: "relative",
                  zIndex: 2,
                }}
              />
              
              {/* Floating Elements */}
              {[
                { top: "10%", left: "10%", delay: 0 },
                { top: "20%", right: "15%", delay: 0.5 },
                { bottom: "15%", left: "5%", delay: 1 },
                { bottom: "25%", right: "10%", delay: 1.5 },
              ].map((pos, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: [0, 1, 1, 0], 
                    opacity: [0, 0.6, 0.6, 0],
                    y: [0, -20, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: pos.delay,
                    repeatDelay: 1,
                  }}
                  style={{
                    position: "absolute",
                    width: 12,
                    height: 12,
                    background: index % 2 === 0 ? "#00BCD4" : "#B388FF",
                    borderRadius: "50%",
                    ...pos,
                  }}
                />
              ))}
            </motion.div>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default HeroSection;