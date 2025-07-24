import React, { useState } from "react";
import { useNavigate } from "react-router";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Container,
  Chip,
  Button,
  TextField,
  IconButton,
  Link,
  Stack,
} from "@mui/material";
import {
  Email,
  Phone,
  Facebook,
  Instagram,
  ArrowBack,
  Send,
  LocationOn,
  AccessTime,
  YouTube,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

const contactInfo = [
  {
    title: "Email Us",
    value: "gleamoura360@gmail.com",
    icon: <Email fontSize="large" />,
    color: "#1976d2",
    link: "mailto:gleamoura360@gmail.com",
  },
  {
    title: "Call Us",
    value: "+94 75 886 1503",
    icon: <Phone fontSize="large" />,
    color: "#00796b",
    link: "tel:+94758861503",
  },
  {
    title: "Office Hours",
    value: "Mon - Fri: 9AM - 6PM",
    icon: <AccessTime fontSize="large" />,
    color: "#7b1fa2",
    link: null,
  },
];

const socialMedia = [
  {
    name: "Facebook",
    icon: <Facebook fontSize="large" />,
    url: "https://www.facebook.com/share/1afxf2rzTs/",
    color: "#1877f2",
    description: "Follow us for updates",
  },
  {
    name: "Instagram",
    icon: <Instagram fontSize="large" />,
    url: "https://www.instagram.com/gleamoura_360?igsh=Mjl2ODgzYnZnNDJh",
    color: "#E4405F",
    description: "See our latest posts",
  },
  {
    name: "Youtube",
    icon: <YouTube fontSize="large" />,
    url: "https://www.youtube.com/@gleamoura_360",
    color: "#FF0000",
    description: "Watch our latest videos",
  },
];

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleBackToHome = () => {
    navigate("/");
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="container">
        <Box
      sx={{
        position: "relative",
        background: "linear-gradient(135deg, #f8faff 0%, #e8f2ff 25%, #dae8ff 50%, #ffffff 100%)",
        py: { xs: 8, md: 12 },
        overflow: "hidden",
        minHeight: "100vh",
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
              label="Get In Touch"
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
              component="h1"
              fontWeight={800}
              gutterBottom
              sx={{
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                lineHeight: 1.1,
                color: "#1a1a1a",
                mb: 2,
              }}
            >
              Contact{" "}
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
                Team
              </Box>{" "}
              Inventex
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
              Ready to revolutionize your cleaning experience? Let's connect and bring innovation to your space.
            </Typography>
          </Box>
        </motion.div>

        {/* Contact Information Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Grid container spacing={4} sx={{ mb: 8 }}>
            {contactInfo.map((contact, index) => (
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
                    cursor: contact.link ? "pointer" : "default",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 4,
                      background: `linear-gradient(90deg, ${contact.color}, ${contact.color}80)`,
                    },
                  }}
                  onClick={() => contact.link && window.open(contact.link, "_self")}
                >
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      background: `linear-gradient(135deg, ${contact.color}15, ${contact.color}08)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50%",
                      mx: "auto",
                      mb: 3,
                      border: `2px solid ${contact.color}30`,
                    }}
                  >
                    <Box sx={{ color: contact.color }}>
                      {contact.icon}
                    </Box>
                  </Box>
                  
                  <Typography
                    variant="h6"
                    fontWeight={700}
                    sx={{ color: "#1a1a1a", mb: 2 }}
                  >
                    {contact.title}
                  </Typography>
                  
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#546e7a",
                      fontWeight: 600,
                      fontSize: "1.1rem",
                    }}
                  >
                    {contact.value}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Main Content Grid */}
        <Grid container spacing={6}>
          {/* Contact Form */}
          <Grid item xs={12} lg={7}>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card
                elevation={0}
                sx={{
                  borderRadius: 4,
                  background: "rgba(255, 255, 255, 0.8)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(25, 118, 210, 0.1)",
                  p: { xs: 4, md: 6 },
                  boxShadow: "0 8px 32px rgba(25, 118, 210, 0.1)",
                  position: "relative",
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
                <Typography
                  variant="h4"
                  fontWeight={700}
                  sx={{ color: "#1a1a1a", mb: 4 }}
                >
                  Send us a Message
                </Typography>
                
                <Box component="form" onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        variant="outlined"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            backgroundColor: "rgba(255, 255, 255, 0.7)",
                            borderRadius: 2,
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        variant="outlined"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            backgroundColor: "rgba(255, 255, 255, 0.7)",
                            borderRadius: 2,
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        variant="outlined"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            backgroundColor: "rgba(255, 255, 255, 0.7)",
                            borderRadius: 2,
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Message"
                        name="message"
                        multiline
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        variant="outlined"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            backgroundColor: "rgba(255, 255, 255, 0.7)",
                            borderRadius: 2,
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        endIcon={<Send />}
                        sx={{
                          background: "linear-gradient(135deg, #1976d2, #1565c0)",
                          px: 4,
                          py: 1.5,
                          borderRadius: 3,
                          fontWeight: 600,
                          fontSize: "1.1rem",
                          boxShadow: "0 4px 20px rgba(25, 118, 210, 0.3)",
                          "&:hover": {
                            background: "linear-gradient(135deg, #1565c0, #0d47a1)",
                            transform: "translateY(-2px)",
                            boxShadow: "0 6px 25px rgba(25, 118, 210, 0.4)",
                          },
                          transition: "all 0.3s ease",
                        }}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Card>
            </motion.div>
          </Grid>

          {/* Social Media & Additional Info */}
          <Grid item xs={12} lg={5}>
            <Stack spacing={4}>
              {/* Social Media */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Card
                  elevation={0}
                  sx={{
                    borderRadius: 4,
                    background: "rgba(255, 255, 255, 0.8)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(25, 118, 210, 0.1)",
                    p: 4,
                    boxShadow: "0 8px 32px rgba(25, 118, 210, 0.1)",
                  }}
                >
                  <Typography
                    variant="h5"
                    fontWeight={700}
                    sx={{ color: "#1a1a1a", mb: 3 }}
                  >
                    Find Us On
                  </Typography>
                  
                  <Stack spacing={3}>
                    {socialMedia.map((social, index) => (
                      <Box
                        key={index}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 3,
                          p: 3,
                          borderRadius: 3,
                          background: `linear-gradient(135deg, ${social.color}10, ${social.color}05)`,
                          border: `1px solid ${social.color}20`,
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            transform: "translateY(-2px)",
                            boxShadow: `0 6px 20px ${social.color}30`,
                          },
                        }}
                        onClick={() => window.open(social.url, "_blank")}
                      >
                        <Box
                          sx={{
                            width: 50,
                            height: 50,
                            background: `linear-gradient(135deg, ${social.color}, ${social.color}cc)`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "50%",
                            boxShadow: `0 4px 15px ${social.color}40`,
                          }}
                        >
                          <Box sx={{ color: "white" }}>
                            {social.icon}
                          </Box>
                        </Box>
                        
                        <Box>
                          <Typography
                            variant="h6"
                            fontWeight={600}
                            sx={{ color: "#1a1a1a", mb: 0.5 }}
                          >
                            {social.name}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{ color: "#546e7a" }}
                          >
                            {social.description}
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </Stack>
                </Card>
              </motion.div>

              {/* Quick Info */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <Card
                  elevation={0}
                  sx={{
                    borderRadius: 4,
                    background: "rgba(255, 255, 255, 0.7)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(25, 118, 210, 0.15)",
                    p: 4,
                    boxShadow: "0 8px 32px rgba(25, 118, 210, 0.1)",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    variant="h5"
                    fontWeight={700}
                    sx={{
                      background: "linear-gradient(90deg, #1976d2, #7b1fa2, #00796b)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      mb: 2,
                    }}
                  >
                    Why Choose Gleamoura?
                  </Typography>
                  
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#546e7a",
                      lineHeight: 1.7,
                      mb: 3,
                    }}
                  >
                    Experience the future of cleaning with our UV-powered technology. Fast, efficient, and hospital-grade results every time.
                  </Typography>

                  <Box sx={{ display: "flex", justifyContent: "center", gap: 2, flexWrap: "wrap" }}>
                    {["UV Technology", "99.9% Effective", "3-Minute Process"].map((feature, index) => (
                      <Chip
                        key={index}
                        label={feature}
                        sx={{
                          bgcolor: "rgba(25, 118, 210, 0.08)",
                          color: "#1976d2",
                          fontWeight: 600,
                          border: "1px solid rgba(25, 118, 210, 0.2)",
                        }}
                      />
                    ))}
                  </Box>
                </Card>
              </motion.div>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
    <Footer />
    </div>
  );
};

export default Contact;