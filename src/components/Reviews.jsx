import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  Stack,
  Rating,
  Chip,
} from "@mui/material";
import { motion } from "framer-motion";
import femaleIcon from "../assets/female.png";
import maleIcon from "../assets/male.png";

// Enhanced review data with more information
const reviews = [
  {
    name: "Sandali Peiris",
    role: "University Student",
    location: "Colombo, Sri Lanka",
    comment:
      "Gleamoura has revolutionized our clinic's sanitization process. The UV-C technology is hospital-grade, and the sleek design fits perfectly in our modern facility.",
    rating: 5,
    avatar: femaleIcon,
    verified: true,
    category: "Student",
    timeAgo: "2 weeks ago",
  },
  {
    name: "Ashan Maleesha",
    role: "University Student",
    location: "Colombo, Sri Lanka",
    comment: "Initially skeptical about another cleaning gadget, but Gleamoura exceeded all my expectations. The 3-minute process saves so much time and gives me peace of mind.",
    rating: 5,
    avatar: maleIcon,
    verified: true,
    category: "University Student",
    timeAgo: "1 month ago",
  },
  {
    name: "Dr. Nishantha Silva",
    role: "Medical Professional",
    location: "Kandy, Sri Lanka",
    comment: "As a healthcare professional, I can confidently say this device meets medical standards. Perfect for sanitizing equipment and surfaces quickly.",
    rating: 5,
    avatar: maleIcon,
    verified: true,
    category: "Healthcare",
    timeAgo: "3 weeks ago",
  },
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleReviews, setVisibleReviews] = useState(3);
  const [isHovering, setIsHovering] = useState(false);

  // Update visible reviews based on screen size
  useEffect(() => {
    const updateVisibleReviews = () => {
      if (window.innerWidth < 600) {
        setVisibleReviews(1);
      } else if (window.innerWidth < 960) {
        setVisibleReviews(2);
      } else {
        setVisibleReviews(3);
      }
    };

    updateVisibleReviews();
    window.addEventListener("resize", updateVisibleReviews);
    return () => window.removeEventListener("resize", updateVisibleReviews);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (isHovering) return;

    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % (reviews.length - visibleReviews + 1)
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [visibleReviews, isHovering]);

  const getCategoryColor = (category) => {
    const colors = {
      Healthcare: "#1976d2",
      Student: "#7b1fa2",
      "University Student": "#00796b",
      Technology: "#1976d2",
      Hospitality: "#0277bd",
      Design: "#388e3c",
      Fitness: "#f57c00",
      Corporate: "#7b1fa2",
    };
    return colors[category] || "#1976d2";
  };

  return (
    <Box
      sx={{
        position: "relative",
        py: { xs: 6, md: 10 },
        px: 2,
        background: "linear-gradient(135deg, #fafbff 0%, #f0f7ff 50%, #ffffff 100%)",
        overflow: "hidden",
        minHeight: "70vh",
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Background effects */}
      <Box
        sx={{
          position: "absolute",
          width: 400,
          height: 400,
          bgcolor: "#e3f2fd",
          filter: "blur(150px)",
          borderRadius: "50%",
          top: -100,
          left: "15%",
          zIndex: 1,
          opacity: 0.3,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: 350,
          height: 350,
          bgcolor: "#f3e5f5",
          filter: "blur(120px)",
          borderRadius: "50%",
          bottom: -50,
          right: "20%",
          zIndex: 1,
          opacity: 0.25,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: 300,
          height: 300,
          bgcolor: "#e0f2f1",
          filter: "blur(100px)",
          borderRadius: "50%",
          top: "40%",
          left: "70%",
          zIndex: 1,
          opacity: 0.2,
        }}
      />

      {/* Title */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{ position: "relative", zIndex: 2 }}
      >
        <Typography
          variant="h3"
          align="center"
          sx={{
            fontWeight: 800,
            mb: 2,
            background: "linear-gradient(90deg, #1976d2, #7b1fa2, #00796b)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
          }}
        >
          Trusted by Students & Professionals
        </Typography>
        <Typography
          variant="h6"
          align="center"
          sx={{
            mb: 6,
            color: "#546e7a",
            maxWidth: 600,
            mx: "auto",
            fontSize: { xs: "1rem", md: "1.25rem" },
            fontWeight: 400,
            lineHeight: 1.6,
          }}
        >
          Real experiences from those who've made cleanliness a priority
        </Typography>
      </motion.div>

      {/* Reviews Container */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1200,
          mx: "auto",
          overflow: "hidden",
        }}
      >
        <motion.div
          animate={{
            x: `${-currentIndex * (100 / visibleReviews)}%`,
          }}
          transition={{
            type: "spring",
            damping: 30,
            stiffness: 200,
          }}
          style={{
            display: "flex",
            width: `${(reviews.length / visibleReviews) * 100}%`,
          }}
        >
          {reviews.map((review, index) => (
            <Box
              key={index}
              sx={{
                width: `${100 / reviews.length}%`,
                px: { xs: 1, sm: 2 },
                flexShrink: 0,
              }}
            >
              <motion.div
                whileHover={{
                  scale: 1.02,
                  y: -8,
                }}
                transition={{ type: "spring", damping: 20 }}
              >
                <Card
                  elevation={0}
                  sx={{
                    height: { xs: 380, sm: 420 },
                    borderRadius: 3,
                    background: "rgba(255, 255, 255, 0.95)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(25, 118, 210, 0.1)",
                    position: "relative",
                    overflow: "hidden",
                    boxShadow: "0 8px 32px rgba(25, 118, 210, 0.08)",
                    transition: "all 0.3s ease",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 4,
                      background: `linear-gradient(90deg, ${getCategoryColor(
                        review.category
                      )}, transparent)`,
                    },
                    "&:hover": {
                      boxShadow: "0 16px 48px rgba(25, 118, 210, 0.15)",
                      transform: "translateY(-4px)",
                    },
                  }}
                >
                  <CardContent
                    sx={{ 
                      p: { xs: 2, sm: 3 },
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      "&:last-child": { pb: { xs: 2, sm: 3 } }
                    }}
                  >
                    {/* Header */}
                    <Stack
                      direction="row"
                      spacing={2}
                      alignItems="center"
                      sx={{ mb: 2 }}
                    >
                      <Box sx={{ position: "relative" }}>
                        <Avatar
                          src={review.avatar}
                          alt={review.name}
                          sx={{
                            width: { xs: 50, sm: 60 },
                            height: { xs: 50, sm: 60 },
                            border: `3px solid ${getCategoryColor(review.category)}`,
                            boxShadow: `0 4px 16px ${getCategoryColor(review.category)}30`,
                          }}
                        />
                        {review.verified && (
                          <Box
                            sx={{
                              position: "absolute",
                              bottom: -2,
                              right: -2,
                              width: 18,
                              height: 18,
                              borderRadius: "50%",
                              bgcolor: "#4caf50",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              border: "2px solid white",
                              boxShadow: "0 2px 8px rgba(76, 175, 80, 0.3)",
                            }}
                          >
                            <Typography sx={{ fontSize: "10px", color: "white", fontWeight: "bold" }}>
                              ✓
                            </Typography>
                          </Box>
                        )}
                      </Box>
                      <Box sx={{ flex: 1, minWidth: 0 }}>
                        <Typography
                          sx={{ 
                            fontSize: { xs: "0.95rem", sm: "1.1rem" },
                            fontWeight: 700,
                            color: "#1a1a1a",
                            mb: 0.5,
                            lineHeight: 1.3,
                          }}
                        >
                          {review.name}
                        </Typography>
                        <Typography
                          sx={{ 
                            fontSize: { xs: "0.8rem", sm: "0.875rem" },
                            color: "#546e7a", 
                            fontWeight: 500,
                            lineHeight: 1.2,
                          }}
                        >
                          {review.role}
                        </Typography>
                        <Typography
                          sx={{ 
                            fontSize: { xs: "0.75rem", sm: "0.8rem" },
                            color: "#90a4ae",
                            lineHeight: 1.2,
                          }}
                        >
                          {review.location}
                        </Typography>
                      </Box>
                    </Stack>

                    {/* Rating and Category */}
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      sx={{ mb: 2 }}
                    >
                      <Rating 
                        value={review.rating} 
                        readOnly 
                        size="small"
                        sx={{
                          "& .MuiRating-iconFilled": {
                            color: "#ffc107",
                          },
                        }}
                      />
                      <Chip
                        label={review.category}
                        size="small"
                        sx={{
                          bgcolor: getCategoryColor(review.category),
                          color: "white",
                          fontWeight: 600,
                          fontSize: { xs: "0.7rem", sm: "0.75rem" },
                          height: { xs: 24, sm: 28 },
                          borderRadius: 2,
                          boxShadow: `0 2px 8px ${getCategoryColor(review.category)}30`,
                        }}
                      />
                    </Stack>

                    {/* Comment */}
                    <Typography
                      sx={{
                        color: "#37474f",
                        lineHeight: 1.6,
                        flex: 1,
                        fontSize: { xs: "0.875rem", sm: "0.95rem" },
                        fontStyle: "italic",
                        position: "relative",
                        pl: 1,
                        pr: 1,
                        "&::before": {
                          content: '"„"',
                          position: "absolute",
                          left: -8,
                          top: -8,
                          fontSize: "2rem",
                          color: getCategoryColor(review.category),
                          fontFamily: "serif",
                          opacity: 0.6,
                        },
                        "&::after": {
                          content: '"""',
                          position: "absolute",
                          right: -8,
                          bottom: -16,
                          fontSize: "2rem",
                          color: getCategoryColor(review.category),
                          fontFamily: "serif",
                          opacity: 0.6,
                        },
                      }}
                    >
                      {review.comment}
                    </Typography>

                    {/* Time */}
                    <Typography
                      sx={{
                        fontSize: { xs: "0.75rem", sm: "0.8rem" },
                        color: "#90a4ae",
                        mt: 2,
                        fontWeight: 500,
                        textAlign: "right",
                      }}
                    >
                      {review.timeAgo}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Box>
          ))}
        </motion.div>
      </Box>

      {/* Progress indicators */}
      <Stack
        direction="row"
        justifyContent="center"
        spacing={1.5}
        sx={{ mt: 4, position: "relative", zIndex: 2 }}
      >
        {Array.from({ length: reviews.length - visibleReviews + 1 }).map(
          (_, index) => (
            <Box
              key={index}
              sx={{
                width: index === currentIndex ? 24 : 12,
                height: 12,
                borderRadius: 6,
                bgcolor:
                  index === currentIndex
                    ? "#1976d2"
                    : "rgba(25, 118, 210, 0.2)",
                transition: "all 0.3s ease",
                cursor: "pointer",
                "&:hover": {
                  bgcolor:
                    index === currentIndex
                      ? "#1565c0"
                      : "rgba(25, 118, 210, 0.4)",
                  transform: "scale(1.1)",
                },
              }}
              onClick={() => setCurrentIndex(index)}
            />
          )
        )}
      </Stack>
    </Box>
  );
};

export default Reviews;