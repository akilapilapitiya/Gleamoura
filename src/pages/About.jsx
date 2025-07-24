import React from "react";
import { useNavigate } from "react-router";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Container,
  Chip,
  Avatar,
  Stack,
  Button,
} from "@mui/material";
import {
  School,
  Lightbulb,
  Groups,
  TrendingUp,
  LocalHospital,
  Build,
  ArrowBack,
} from "@mui/icons-material";
import { motion } from "framer-motion";

const values = [
  {
    title: "Innovation for Real Problems",
    description: "We focus on creating practical solutions that address genuine challenges in everyday life.",
    icon: <Lightbulb fontSize="large" />,
    color: "#1976d2",
  },
  {
    title: "User-Centered Design",
    description: "Every product is designed with simplicity and ease of use at its core.",
    icon: <Groups fontSize="large" />,
    color: "#00796b",
  },
  {
    title: "Continuous Improvement",
    description: "We listen to feedback and constantly evolve our products to better serve our users.",
    icon: <TrendingUp fontSize="large" />,
    color: "#7b1fa2",
  },
];

const impact = [
  {
    icon: <School fontSize="large" />,
    title: "Educational Institutions",
    description: "Making schools safer and cleaner",
    color: "#1976d2",
  },
  {
    icon: <LocalHospital fontSize="large" />,
    title: "Healthcare Facilities",
    description: "Supporting hospital-grade hygiene",
    color: "#00796b",
  },
  {
    icon: <Build fontSize="large" />,
    title: "Workplace Environments",
    description: "Enhancing office cleanliness",
    color: "#7b1fa2",
  },
];

const About = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <Box
      sx={{
        position: "relative",
        background: "linear-gradient(135deg, #f8faff 0%, #e8f2ff 25%, #dae8ff 50%, #ffffff 100%)",
        py: { xs: 8, md: 12 },
        overflow: "hidden",
      }}
    >
      {/* Background Effects */}
      <Box
        sx={{
          position: "absolute",
          width: 600,
          height: 600,
          bgcolor: "#e3f2fd",
          filter: "blur(200px)",
          borderRadius: "50%",
          top: -200,
          left: -200,
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
          right: -150,
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
          top: "40%",
          right: "15%",
          zIndex: 1,
          opacity: 0.25,
        }}
      />

      <Container maxWidth="xl" sx={{ zIndex: 2, position: "relative" }}>
        {/* Back to Home Button */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Button
            onClick={handleBackToHome}
            startIcon={<ArrowBack />}
            sx={{
              mb: 4,
              bgcolor: "rgba(255, 255, 255, 0.9)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(25, 118, 210, 0.2)",
              color: "#1976d2",
              fontWeight: 600,
              px: 3,
              py: 1.5,
              borderRadius: 3,
              boxShadow: "0 4px 16px rgba(25, 118, 210, 0.15)",
              "&:hover": {
                bgcolor: "rgba(25, 118, 210, 0.05)",
                transform: "translateY(-2px)",
                boxShadow: "0 6px 20px rgba(25, 118, 210, 0.2)",
              },
              transition: "all 0.3s ease",
            }}
          >
            Back to Homepage
          </Button>
        </motion.div>
        {/* Header Section */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Chip
              label="Meet Team Inventex"
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
              Innovation{" "}
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
                Meets
              </Box>{" "}
              Purpose
            </Typography>
          </Box>
        </motion.div>

        {/* Main Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card
            elevation={0}
            sx={{
              mb: 8,
              borderRadius: 4,
              background: "rgba(255, 255, 255, 0.8)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(25, 118, 210, 0.1)",
              p: { xs: 4, md: 6 },
              boxShadow: "0 8px 32px rgba(25, 118, 210, 0.1)",
              position: "relative",
              overflow: "hidden",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 4,
                background: "linear-gradient(90deg, #1976d2, #7b1fa2, #00796b)",
              },
            }}
          >
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={4}>
                <Box
                  sx={{
                    width: { xs: 200, md: 280 },
                    height: { xs: 200, md: 280 },
                    background: "linear-gradient(135deg, #1976d215, #1976d208)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    mx: "auto",
                    border: "3px solid rgba(25, 118, 210, 0.2)",
                    position: "relative",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <School sx={{ fontSize: { xs: 80, md: 120 }, color: "#1976d2" }} />
                  </Box>
                  
                  {/* Floating icons */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: "10%",
                      right: "15%",
                      width: 40,
                      height: 40,
                      bgcolor: "#00796b",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 4px 20px rgba(0, 121, 107, 0.3)",
                    }}
                  >
                    <Lightbulb sx={{ color: "white", fontSize: 20 }} />
                  </Box>
                  
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: "20%",
                      left: "10%",
                      width: 35,
                      height: 35,
                      bgcolor: "#7b1fa2",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 4px 20px rgba(123, 31, 162, 0.3)",
                    }}
                  >
                    <Groups sx={{ color: "white", fontSize: 18 }} />
                  </Box>
                </Box>
              </Grid>
              
              <Grid item xs={12} md={8}>
                <Typography
                  variant="h4"
                  fontWeight={700}
                  sx={{
                    color: "#1a1a1a",
                    mb: 3,
                    fontSize: { xs: "1.8rem", md: "2.2rem" },
                  }}
                >
                  Passionate Undergraduates, Real-World Solutions
                </Typography>
                
                <Typography
                  variant="body1"
                  sx={{
                    color: "#546e7a",
                    lineHeight: 1.8,
                    mb: 3,
                    fontSize: { xs: "1rem", md: "1.1rem" },
                  }}
                >
                  Team Inventex is a group of passionate undergraduates from the Department of Industrial Management, University of Kelaniya, driven by a shared goal of using technology to improve everyday lives. We believe that innovation should address real problems, especially in developing contexts where practical, cost-effective solutions are most needed.
                </Typography>
                
                <Typography
                  variant="body1"
                  sx={{
                    color: "#546e7a",
                    lineHeight: 1.8,
                    mb: 3,
                    fontSize: { xs: "1rem", md: "1.1rem" },
                  }}
                >
                  We design smart products that are easy to use, save time, and help people keep their spaces clean. By studying existing products and improving them, we create tools that can be used in places like offices, hospitals, and schools to make cleaning easier for everyone.
                </Typography>

                <Box
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    background: "linear-gradient(135deg, rgba(25, 118, 210, 0.05), rgba(25, 118, 210, 0.02))",
                    border: "1px solid rgba(25, 118, 210, 0.15)",
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#1976d2",
                      fontWeight: 600,
                      fontStyle: "italic",
                      fontSize: { xs: "1rem", md: "1.1rem" },
                    }}
                  >
                    "As we launch our new cleaning tool, we want to help people live and work in cleaner and healthier environments. We will keep improving our products by listening to feedback, so we can bring positive changes through every product we create."
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Card>
        </motion.div>

        {/* Our Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              variant="h3"
              fontWeight={700}
              sx={{
                color: "#1a1a1a",
                mb: 2,
                fontSize: { xs: "2rem", md: "2.5rem" },
              }}
            >
              Our Core{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(90deg, #1976d2, #00796b)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Values
              </Box>
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#546e7a",
                maxWidth: 600,
                mx: "auto",
                fontSize: { xs: "1.1rem", md: "1.25rem" },
              }}
            >
              The principles that guide everything we do
            </Typography>
          </Box>

          <Grid container spacing={4} sx={{ mb: 8 }}>
            {values.map((value, index) => (
              <Grid
                item
                xs={12}
                md={4}
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
                    p: 4,
                    textAlign: "center",
                    boxShadow: "0 8px 32px rgba(25, 118, 210, 0.1)",
                    position: "relative",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 4,
                      background: `linear-gradient(90deg, ${value.color}, ${value.color}80)`,
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      background: `linear-gradient(135deg, ${value.color}15, ${value.color}08)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50%",
                      mx: "auto",
                      mb: 3,
                      border: `2px solid ${value.color}30`,
                    }}
                  >
                    <Box sx={{ color: value.color }}>
                      {value.icon}
                    </Box>
                  </Box>
                  
                  <Typography
                    variant="h6"
                    fontWeight={700}
                    sx={{ color: "#1a1a1a", mb: 2 }}
                  >
                    {value.title}
                  </Typography>
                  
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#546e7a",
                      lineHeight: 1.6,
                    }}
                  >
                    {value.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Impact Areas */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              textAlign: "center",
              p: { xs: 4, md: 6 },
              borderRadius: 4,
              background: "rgba(255, 255, 255, 0.7)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(25, 118, 210, 0.15)",
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
                mb: 4,
                fontSize: { xs: "1.8rem", md: "2.2rem" },
              }}
            >
              Making Impact Where It Matters
            </Typography>
            
            <Grid container spacing={4} justifyContent="center">
              {impact.map((item, index) => (
                <Grid item xs={12} sm={4} key={index}>
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Box
                      sx={{
                        p: 3,
                        borderRadius: 3,
                        background: `linear-gradient(135deg, ${item.color}10, ${item.color}05)`,
                        border: `1px solid ${item.color}20`,
                      }}
                    >
                      <Box
                        sx={{
                          width: 60,
                          height: 60,
                          background: `linear-gradient(135deg, ${item.color}, ${item.color}cc)`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "50%",
                          mx: "auto",
                          mb: 2,
                          boxShadow: `0 4px 20px ${item.color}40`,
                        }}
                      >
                        <Box sx={{ color: "white" }}>
                          {item.icon}
                        </Box>
                      </Box>
                      
                      <Typography
                        variant="h6"
                        fontWeight={600}
                        sx={{ color: "#1a1a1a", mb: 1 }}
                      >
                        {item.title}
                      </Typography>
                      
                      <Typography
                        variant="body2"
                        sx={{ color: "#546e7a" }}
                      >
                        {item.description}
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>

            <Typography
              variant="body1"
              sx={{
                color: "#546e7a",
                mt: 4,
                fontSize: { xs: "1rem", md: "1.1rem" },
                maxWidth: 700,
                mx: "auto",
              }}
            >
              From the University of Kelaniya to global impact - we're committed to creating solutions that make a real difference in people's daily lives.
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;