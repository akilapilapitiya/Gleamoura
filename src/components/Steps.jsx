import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
} from "@mui/material";
import {
  LocalDrink,
  Opacity,
  Dry,
  FlashOn,
  BatteryChargingFull,
} from "@mui/icons-material";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Fill the Liquid Container",
    icon: <LocalDrink fontSize="large" color="primary" />,
  },
  {
    title: "Spray the Cleaning Surface",
    icon: <Opacity fontSize="large" color="primary" />,
  },
  {
    title: "Absorb Excess Water",
    icon: <Dry fontSize="large" color="primary" />,
  },
  {
    title: "Activate Sterilization",
    icon: <FlashOn fontSize="large" color="primary" />,
  },
  {
    title: "Recharge Equipment When Needed",
    icon: <BatteryChargingFull fontSize="large" color="primary" />,
  },
];

const Steps = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        bgcolor: theme.palette.mode === "dark" ? "#121212" : "#F9FAFB",
        py: 8,
        px: 2,
      }}
    >
      <Typography
        variant="h4"
        align="center"
        fontWeight="bold"
        gutterBottom
        sx={{
          background: "linear-gradient(90deg, #00BCD4, #2196F3)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Easy Cleaning in 5 Simple Steps
      </Typography>

      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{ mt: 4, px: { xs: 1, sm: 4 } }}
      >
        {steps.map((step, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            component={motion.div}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <Card
              elevation={6}
              sx={{
                height: "100%",
                borderRadius: 3,
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "translateY(-8px)",
                },
                p: 2,
                background: theme.palette.mode === "dark"
                  ? "#1F2937"
                  : "white",
              }}
            >
              <CardContent sx={{ textAlign: "center" }}>
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    bgcolor: "#E0F7FA",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    mx: "auto",
                    mb: 2,
                  }}
                >
                  {step.icon}
                </Box>
                <Typography variant="h6" fontWeight="medium">
                  {step.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Steps;
