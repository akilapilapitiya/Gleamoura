import React from "react";
import {
  Box,
  Typography,
  Link,
  Stack,
  IconButton,
  Container,
} from "@mui/material";
import { Facebook, Instagram, Twitter, Email } from "@mui/icons-material";
import namedLogo from "../assets/named-logo.png";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#111827",
        color: "#F3F4F6",
        py: 6,
        mt: 10,
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          spacing={4}
        >
          {/* Logo & Tagline */}
          <Box>
            <Box
              component="img"
              src={namedLogo}
              alt="Gleamoura Logo"
              sx={{ height: 80, mb: 1 }} 
            />
            <Typography variant="body2" color="gray">
              Disinfect smart. Live clean.
            </Typography>
          </Box>

          {/* Navigation Links */}
          <Stack direction="row" spacing={4}>
            {["Home", "Shop", "About", "Contact"].map((text) => (
              <Link
                key={text}
                href={`/${text.toLowerCase()}`}
                underline="none"
                color="inherit"
                sx={{
                  "&:hover": {
                    color: "#00BCD4",
                  },
                }}
              >
                {text}
              </Link>
            ))}
          </Stack>

          {/* Social Icons */}
          <Stack direction="row" spacing={2}>
            <IconButton href="#" color="inherit">
              <Facebook />
            </IconButton>
            <IconButton href="#" color="inherit">
              <Instagram />
            </IconButton>
            <IconButton href="mailto:support@gleamoura.com" color="inherit">
              <Email />
            </IconButton>
          </Stack>
        </Stack>

        {/* Bottom Text */}
        <Typography variant="body2" color="gray" align="center" sx={{ mt: 4 }}>
          © {new Date().getFullYear()} Gleamoura. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
