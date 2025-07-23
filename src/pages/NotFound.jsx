import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import {
  Box,
  Typography,
  Button,
  Container,
  Stack,
  Paper,
} from '@mui/material';
import { motion } from 'framer-motion';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const PageNotFound = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(10);
  const [autoRedirect, setAutoRedirect] = useState(true);

  // Auto redirect countdown
  useEffect(() => {
    if (!autoRedirect) return;

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          navigate('/');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate, autoRedirect]);

  const handleGoHome = () => {
    navigate('/');
  };

  const handleCancelAutoRedirect = () => {
    setAutoRedirect(false);
  };

  const floatingElements = Array.from({ length: 6 }, (_, i) => (
    <motion.div
      key={i}
      className="floating-element"
      animate={{
        y: [0, -30, 0],
        x: [0, Math.sin(i) * 20, 0],
        rotate: [0, 360],
      }}
      transition={{
        duration: 4 + i * 0.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: i * 0.2,
      }}
      style={{
        position: 'absolute',
        width: 20 + i * 5,
        height: 20 + i * 5,
        borderRadius: '50%',
        background: `linear-gradient(45deg, ${
          ['#1976d2', '#7b1fa2', '#00796b', '#f57c00', '#d32f2f', '#388e3c'][i]
        }, transparent)`,
        top: `${10 + i * 15}%`,
        left: `${5 + i * 15}%`,
        opacity: 0.6,
        zIndex: 1,
      }}
    />
  ));

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated Background Elements */}
      {floatingElements}
      
      {/* Background Blur Effects */}
      <Box
        sx={{
          position: 'absolute',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.1)',
          filter: 'blur(100px)',
          top: '10%',
          right: '10%',
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.08)',
          filter: 'blur(80px)',
          bottom: '20%',
          left: '15%',
          zIndex: 1,
        }}
      />

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Paper
            elevation={24}
            sx={{
              p: { xs: 4, md: 6 },
              borderRadius: 4,
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 4,
                background: 'linear-gradient(90deg, #667eea, #764ba2, #f093fb)',
              },
            }}
          >
            {/* 404 Animation */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                type: "spring", 
                stiffness: 200, 
                damping: 10,
                delay: 0.2 
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '6rem', md: '8rem' },
                  fontWeight: 900,
                  background: 'linear-gradient(45deg, #667eea, #764ba2)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 2,
                  textShadow: '0 4px 8px rgba(0,0,0,0.1)',
                  position: 'relative',
                }}
              >
                404
              </Typography>
            </motion.div>

            {/* Error Icon */}
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            >
              <ErrorOutlineIcon
                sx={{
                  fontSize: { xs: 60, md: 80 },
                  color: '#764ba2',
                  mb: 3,
                  filter: 'drop-shadow(0 4px 8px rgba(118, 75, 162, 0.3))',
                }}
              />
            </motion.div>

            {/* Main Message */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: '1.5rem', md: '2.5rem' },
                  fontWeight: 700,
                  color: '#333',
                  mb: 2,
                }}
              >
                Oops! Page Not Found
              </Typography>
              
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: '1rem', md: '1.2rem' },
                  color: '#666',
                  mb: 4,
                  maxWidth: 600,
                  mx: 'auto',
                  lineHeight: 1.6,
                }}
              >
                The page you're looking for seems to have vanished into the digital void. 
                Don't worry, it happens to the best of us!
              </Typography>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={3}
                justifyContent="center"
                alignItems="center"
                sx={{ mb: 4 }}
              >
                <Button
                  variant="contained"
                  size="large"
                  onClick={handleGoHome}
                  startIcon={<HomeIcon />}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    borderRadius: 3,
                    background: 'linear-gradient(45deg, #667eea, #764ba2)',
                    boxShadow: '0 8px 24px rgba(118, 75, 162, 0.4)',
                    minWidth: 180,
                    '&:hover': {
                      background: 'linear-gradient(45deg, #5a6fd8, #6a4190)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 12px 32px rgba(118, 75, 162, 0.5)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Go Home
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => window.history.back()}
                  startIcon={<SearchIcon />}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    borderRadius: 3,
                    borderColor: '#764ba2',
                    color: '#764ba2',
                    minWidth: 180,
                    '&:hover': {
                      borderColor: '#6a4190',
                      backgroundColor: 'rgba(118, 75, 162, 0.05)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Go Back
                </Button>
              </Stack>
            </motion.div>

            {/* Auto Redirect Counter */}
            {autoRedirect && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <Paper
                  elevation={2}
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    background: 'linear-gradient(135deg, #f5f7fa, #c3cfe2)',
                    border: '1px solid rgba(118, 75, 162, 0.1)',
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#555',
                      mb: 2,
                      fontWeight: 500,
                    }}
                  >
                    Automatically redirecting to home in{' '}
                    <motion.span
                      key={countdown}
                      initial={{ scale: 1.2, color: '#764ba2' }}
                      animate={{ scale: 1, color: '#333' }}
                      style={{
                        fontWeight: 700,
                        fontSize: '1.2em',
                      }}
                    >
                      {countdown}
                    </motion.span>{' '}
                    seconds
                  </Typography>
                  
                  <Button
                    variant="text"
                    onClick={handleCancelAutoRedirect}
                    sx={{
                      color: '#764ba2',
                      fontWeight: 600,
                      '&:hover': {
                        backgroundColor: 'rgba(118, 75, 162, 0.05)',
                      },
                    }}
                  >
                    Cancel Auto-redirect
                  </Button>
                </Paper>
              </motion.div>
            )}

            {/* Helpful Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: '#888',
                  mt: 4,
                  fontSize: '0.9rem',
                }}
              >
                Need help? Contact our{' '}
                <Typography
                  component="span"
                  sx={{
                    color: '#764ba2',
                    fontWeight: 600,
                    cursor: 'pointer',
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  }}
                >
                  support team
                </Typography>{' '}
                or visit our{' '}
                <Typography
                  component="span"
                  sx={{
                    color: '#764ba2',
                    fontWeight: 600,
                    cursor: 'pointer',
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  }}
                >
                  help center
                </Typography>
              </Typography>
            </motion.div>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default PageNotFound;