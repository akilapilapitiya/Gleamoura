import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Container,
  Chip,
} from "@mui/material";
import {
  LocalDrink,
  Opacity,
  FlashOn,
  BatteryChargingFull,
} from "@mui/icons-material";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Fill the Liquid Container",
    description:
      "Add distilled water or approved cleaning solution to the reservoir.",
    icon: <LocalDrink fontSize="large" />,
    duration: "30 seconds",
    color: "#1976d2",
    tip: "Use cleansing agents with water for best results",
  },
  {
    title: "Spray the Cleaning Surface",
    description: "Nozzle controls a powered spray of liquid across surfaces.",
    icon: <Opacity fontSize="large" />,
    duration: "15 seconds",
    color: "#00796b",
    tip: "Ensure even coverage on flat surfaces",
  },
  {
    title: "Activate UV Sterilization",
    description: "UV Light powered sanitization for maximum cleaning results.",
    icon: <FlashOn fontSize="large" />,
    duration: "45 seconds",
    color: "#7b1fa2",
    tip: "Hospital-grade sterilization technology",
  },
  {
    title: "Recharge When Needed",
    description: "Easily rechargeable appliance with long battery life.",
    icon: <BatteryChargingFull fontSize="large" />,
    duration: "2 hours",
    color: "#1976d2",
    tip: "Fast charge capability in 30 minutes",
  },
];

const Steps = () => {
  return (
    <Box
      sx={{
        position: "relative",
        background: "linear-gradient(135deg, #f8faff 0%, #e8f2ff 25%, #dae8ff 50%, #ffffff 100%)",
        py: { xs: 8, md: 12 },
        overflow: "hidden",
      }}
    >
      {/* Background Effects - matching hero section */}
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
          top: "30%",
          left: "10%",
          zIndex: 1,
          opacity: 0.25,
        }}
      />

      <Container maxWidth="xl" sx={{ zIndex: 2, position: "relative" }}>
        {/* Header Section */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: "center", mb: 8 }}>
            {/* Badge */}
            <Chip
              label="Simple 4-Step Process"
              sx={{
                mb: 3,
                bgcolor: "rgba(25, 118, 210, 0.08)",
                color: "#1976d2",
                border: "1px solid rgba(25, 118, 210, 0.2)",
                fontWeight: 600,
                fontSize: "0.9rem",
                backdropFilter: "blur(10px)",
              }}
            />
            
            <Typography
              variant="h2"
              component="h2"
              fontWeight={800}
              gutterBottom
              sx={{
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                lineHeight: 1.1,
                color: "#1a1a1a",
                mb: 2,
              }}
            >
              Effortless{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(90deg, #1976d2, #7b1fa2, #00796b)",
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
                    background: "linear-gradient(90deg, #1976d2, #7b1fa2, #00796b)",
                    borderRadius: 2,
                  },
                }}
              >
                Cleaning
              </Box>{" "}
              Protocol
            </Typography>
            
            <Typography
              variant="h5"
              sx={{
                color: "#546e7a",
                lineHeight: 1.6,
                maxWidth: 600,
                mx: "auto",
                fontSize: { xs: "1.1rem", md: "1.25rem" },
              }}
            >
              Revolutionary process for unmatched hygiene standards with{" "}
              <Box component="span" sx={{ color: "#1976d2", fontWeight: 600 }}>
                UV Technology
              </Box>
            </Typography>
          </Box>
        </motion.div>

        {/* Steps Grid */}
        <Grid container spacing={4} justifyContent="center">
          {steps.map((step, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              lg={3}
              key={index}
              component={motion.div}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                damping: 20
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { type: "spring", damping: 20 } 
              }}
            >
              <Card
                elevation={0}
                sx={{
                  height: "100%",
                  borderRadius: 4,
                  background: "rgba(255, 255, 255, 0.8)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(25, 118, 210, 0.1)",
                  p: 3,
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: "0 8px 32px rgba(25, 118, 210, 0.1)",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 4,
                    background: `linear-gradient(90deg, ${step.color}, ${step.color}80)`,
                  },
                }}
              >
                <CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>
                  {/* Step Number */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 20,
                      right: 20,
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      background: `linear-gradient(135deg, ${step.color}, ${step.color}cc)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                      color: "white",
                      fontSize: "16px",
                      boxShadow: `0 4px 12px ${step.color}40`,
                    }}
                  >
                    {index + 1}
                  </Box>

                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.2 + index * 0.1,
                      type: "spring",
                      damping: 15 
                    }}
                    viewport={{ once: true }}
                  >
                    <Box
                      sx={{
                        width: 90,
                        height: 90,
                        background: `linear-gradient(135deg, ${step.color}15, ${step.color}08)`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%",
                        mx: "auto",
                        mb: 3,
                        border: `2px solid ${step.color}30`,
                        mt: 2,
                      }}
                    >
                      <Box sx={{ color: step.color, transform: "scale(1.3)" }}>
                        {step.icon}
                      </Box>
                    </Box>
                  </motion.div>

                  {/* Title */}
                  <Typography
                    variant="h6"
                    fontWeight={700}
                    align="center"
                    sx={{
                      color: "#1a1a1a",
                      mb: 2,
                      fontSize: { xs: "1.1rem", md: "1.25rem" },
                    }}
                  >
                    {step.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    variant="body2"
                    align="center"
                    sx={{
                      color: "#546e7a",
                      lineHeight: 1.6,
                      mb: 3,
                      minHeight: 60,
                      fontSize: "0.95rem",
                    }}
                  >
                    {step.description}
                  </Typography>

                  {/* Duration */}
                  <Box sx={{ textAlign: "center", mb: 2 }}>
                    <Chip
                      label={step.duration}
                      sx={{
                        bgcolor: `${step.color}10`,
                        color: step.color,
                        fontWeight: 600,
                        border: `1px solid ${step.color}30`,
                        mb: 1,
                      }}
                    />
                  </Box>

                  {/* Tip */}
                  <Typography
                    variant="caption"
                    sx={{
                      color: "#78909c",
                      fontStyle: "italic",
                      display: "block",
                      textAlign: "center",
                      fontSize: "0.8rem",
                    }}
                  >
                    💡 {step.tip}
                  </Typography>

                  {/* Progress indicator */}
                  <Box
                    sx={{
                      width: "100%",
                      height: 3,
                      bgcolor: "rgba(25, 118, 210, 0.1)",
                      borderRadius: 2,
                      overflow: "hidden",
                      mt: 2,
                    }}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{
                        width: `${((index + 1) / steps.length) * 100}%`,
                      }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      style={{
                        height: "100%",
                        background: `linear-gradient(90deg, ${step.color}, ${step.color}80)`,
                        borderRadius: 2,
                      }}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Total Process Time */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              mt: 8,
              textAlign: "center",
              p: 4,
              borderRadius: 4,
              background: "rgba(255, 255, 255, 0.7)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(25, 118, 210, 0.15)",
              maxWidth: 600,
              mx: "auto",
              boxShadow: "0 8px 32px rgba(25, 118, 210, 0.1)",
            }}
          >
            <Typography
              variant="h4"
              fontWeight={700}
              sx={{
                background: "linear-gradient(90deg, #1976d2, #7b1fa2, #00796b)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                mb: 1,
                fontSize: { xs: "1.8rem", md: "2.2rem" },
              }}
            >
              Total Process: 3 Minutes
            </Typography>
            <Typography
              variant="body1"
              sx={{ 
                color: "#546e7a",
                fontSize: { xs: "1rem", md: "1.1rem" },
              }}
            >
              Complete surface sterilization with professional-grade results
            </Typography>

            {/* Trust indicators */}
            <Typography
              variant="caption"
              sx={{
                display: "block",
                color: "#78909c",
                mt: 2,
                fontStyle: "italic",
              }}
            >
              UV-C technology • 99.9% effectiveness • Hospital-grade standards
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Steps;