import React, { useState, useEffect } from "react";
import { Box, Typography, Card, CardContent, Avatar, Stack, Rating, Chip } from "@mui/material";
import { motion } from "framer-motion";
import femaleIcon from '../assets/female.png'
import maleIcon from '../assets/male.png'

// Enhanced review data with more information
const reviews = [
  {
    name: "Sandali Peiris",
    role: "University Student",
    location: "Colombo Sri Lanka",
    comment: "Gleamoura has revolutionized our clinic's sanitization process. The UV-C technology is hospital-grade, and the sleek design fits perfectly in our modern facility.",
    rating: 5,
    avatar: {femaleIcon},
    verified: true,
    category: "Student",
    timeAgo: "2 weeks ago"
  },
  {
    name: "Ashan Maleesha",
    role: "University Student",
    location: "Colombo Sri Lanka",
    comment: "Initially skeptical about another cleaning gadget",
    rating: 5,
    avatar: {maleIcon},
    verified: true,
    category: "University Student",
    timeAgo: "1 month ago"
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
    window.addEventListener('resize', updateVisibleReviews);
    return () => window.removeEventListener('resize', updateVisibleReviews);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (isHovering) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        (prevIndex + 1) % (reviews.length - visibleReviews + 1)
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [visibleReviews, isHovering]);

  const getCategoryColor = (category) => {
    const colors = {
      Healthcare: "#FF6B9D",
      Technology: "#4ECDC4",
      Hospitality: "#45B7D1",
      Design: "#96CEB4",
      Fitness: "#FECA57",
      Corporate: "#A55EEA"
    };
    return colors[category] || "#00BCD4";
  };

  return (
    <Box
      sx={{
        position: "relative",
        py: { xs: 6, md: 10 },
        px: 2,
        background: "linear-gradient(135deg, #0F0F23, #1A1A2E)",
        overflow: "hidden",
        minHeight: "60vh",
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Background effects */}
      <Box
        sx={{
          position: "absolute",
          width: 300,
          height: 300,
          bgcolor: "#00BCD4",
          filter: "blur(150px)",
          borderRadius: "50%",
          top: -150,
          left: "20%",
          zIndex: 1,
          opacity: 0.1,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: 400,
          height: 400,
          bgcolor: "#B388FF",
          filter: "blur(200px)",
          borderRadius: "50%",
          bottom: -200,
          right: "10%",
          zIndex: 1,
          opacity: 0.08,
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
          fontWeight={800}
          gutterBottom
          sx={{
            mb: 2,
            background: "linear-gradient(90deg, #00BCD4, #B388FF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: { xs: "2rem", md: "3rem" }
          }}
        >
          Voices of Innovation
        </Typography>
        <Typography
          variant="h6"
          align="center"
          sx={{
            mb: 6,
            color: "rgba(255, 255, 255, 0.7)",
            maxWidth: 600,
            mx: "auto",
            fontSize: { xs: "1rem", md: "1.25rem" }
          }}
        >
          Real experiences from professionals who've embraced the future of hygiene
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
            x: `${-currentIndex * (100 / visibleReviews)}%`
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
                px: 1,
                flexShrink: 0,
              }}
            >
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                }}
                transition={{ type: "spring", damping: 20 }}
              >
                <Card
                  elevation={0}
                  sx={{
                    height: 420,
                    borderRadius: 4,
                    background: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    overflow: "hidden",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 4,
                      background: `linear-gradient(90deg, ${getCategoryColor(review.category)}, transparent)`,
                    }
                  }}
                >
                  <CardContent sx={{ p: 0, "&:last-child": { pb: 0 }, height: "100%" }}>
                    {/* Header */}
                    <Stack direction="row" spacing={2} alignItems="center" mb={2}>
                      <Avatar
                        src={review.avatar}
                        alt={review.name}
                        sx={{ 
                          width: 60, 
                          height: 60,
                          border: `2px solid ${getCategoryColor(review.category)}`,
                        }}
                      />
                      <Box flex={1}>
                        <Stack direction="row" alignItems="center" spacing={1} mb={0.5}>
                          <Typography 
                            variant="h6" 
                            fontWeight={600} 
                            color="white"
                            sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
                          >
                            {review.name}
                          </Typography>
                          {review.verified && (
                            <Box
                              sx={{
                                width: 16,
                                height: 16,
                                borderRadius: "50%",
                                bgcolor: "#00E676",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <Typography sx={{ fontSize: 10, color: "white" }}>✓</Typography>
                            </Box>
                          )}
                        </Stack>
                        <Typography 
                          variant="body2" 
                          sx={{ color: "rgba(255, 255, 255, 0.7)" }}
                        >
                          {review.role}
                        </Typography>
                        <Typography 
                          variant="caption" 
                          sx={{ color: "rgba(255, 255, 255, 0.5)" }}
                        >
                          {review.location}
                        </Typography>
                      </Box>
                    </Stack>

                    {/* Rating and Category */}
                    <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
                      <Rating value={review.rating} readOnly size="small" />
                      <Chip
                        label={review.category}
                        size="small"
                        sx={{
                          bgcolor: getCategoryColor(review.category),
                          color: "white",
                          fontWeight: 600,
                        }}
                      />
                    </Stack>

                    {/* Comment */}
                    <Typography
                      variant="body1"
                      sx={{
                        color: "rgba(255, 255, 255, 0.9)",
                        lineHeight: 1.6,
                        flex: 1,
                        fontSize: { xs: "0.9rem", md: "1rem" }
                      }}
                    >
                      "{review.comment}"
                    </Typography>

                    {/* Time */}
                    <Typography
                      variant="caption"
                      sx={{
                        color: "rgba(255, 255, 255, 0.5)",
                        mt: 2,
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
        spacing={1} 
        sx={{ mt: 4, position: "relative", zIndex: 2 }}
      >
        {Array.from({ length: reviews.length - visibleReviews + 1 }).map((_, index) => (
          <Box
            key={index}
            sx={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              bgcolor: index === currentIndex ? "#00BCD4" : "rgba(255, 255, 255, 0.3)",
              transition: "all 0.3s ease",
              cursor: "pointer",
              "&:hover": {
                bgcolor: index === currentIndex ? "#00BCD4" : "rgba(255, 255, 255, 0.5)",
                transform: "scale(1.2)"
              }
            }}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default Reviews;