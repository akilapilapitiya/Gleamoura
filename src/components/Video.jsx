import React from "react";
import { Box, Typography, Container, Chip } from "@mui/material";
import { motion } from "framer-motion";

const Video = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #f8faff 0%, #e8f2ff 25%, #dae8ff 50%, #ffffff 100%)",
        py: { xs: 8, md: 12 },
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="md" sx={{ position: "relative", zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Chip
              label="Watch in Action"
              sx={{
                mb: 2,
                bgcolor: "rgba(25, 118, 210, 0.08)",
                color: "#1976d2",
                border: "1px solid rgba(25, 118, 210, 0.2)",
                fontWeight: 600,
                fontSize: "0.9rem",
                backdropFilter: "blur(10px)",
              }}
            />

            <Typography
              variant="h3"
              fontWeight={800}
              gutterBottom
              sx={{
                fontSize: { xs: "2.2rem", md: "3rem" },
                color: "#1a1a1a",
              }}
            >
              See It{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(90deg, #1976d2, #7b1fa2, #00796b)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                In Action
              </Box>
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: "#546e7a",
                maxWidth: 600,
                mx: "auto",
                fontSize: { xs: "1rem", md: "1.15rem" },
              }}
            >
              Explore how our UV-powered device works in real-world conditions.
            </Typography>
          </Box>
        </motion.div>

        {/* YouTube Iframe Embed */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              position: "relative",
              paddingTop: "56.25%", // 16:9 aspect ratio
              borderRadius: 4,
              overflow: "hidden",
              boxShadow: "0 8px 32px rgba(25, 118, 210, 0.15)",
              border: "1px solid rgba(25, 118, 210, 0.1)",
            }}
          >
            <Box
              component="iframe"
              src="https://www.youtube.com/embed/kuQpk37dH5g?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&playsinline=1&loop=1"
              title="Demo Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: 0,
              }}
            />
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Video;
