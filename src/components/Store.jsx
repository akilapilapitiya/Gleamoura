import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Rating,
  IconButton,
  Badge,
  Grid,
  Container,
  Stack,
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Fab,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import {
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteBorderIcon,
  AddShoppingCart as AddShoppingCartIcon,
  Search as SearchIcon,
  FilterList as FilterListIcon,
  ShoppingCart as ShoppingCartIcon,
  Star as StarIcon,
  LocalOffer as LocalOfferIcon,
  FlashOn as FlashOnIcon,
  Verified as VerifiedIcon,
  ArrowBack,
} from '@mui/icons-material';
import { motion } from "framer-motion";

// Sample product data
const products = [
  {
    id: 1,
    name: "Gleamoura Table Cleaner (Full Pack)",
    price: 12000.00,
    originalPrice: 15000.00,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400",
    category: "Electronics",
    rating: 4.8,
    reviewCount: 324,
    isOnSale: true,
    isBestseller: true,
    isNew: false,
    description: "Professional-grade UV-C sanitization device with 99.9% germ elimination rate",
    features: ["Hospital-grade UV-C", "3-minute cycle", "Compact design", "Safety certified"],
    stock: 15,
  },
  {
    id: 2,
    name: "Cleaning Brush Set",
    price: 5000.00,
    originalPrice: 5000.00,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400",
    category: "Electronics",
    rating: 5.0,
    reviewCount: 20,
    isOnSale: false,
    isBestseller: false,
    isNew: false,
    description: "Professional-grade cleaning brush set for optimal hygiene",
    features: ["Durable bristles", "Ergonomic handle", "Multi-purpose", "Easy to clean"],
    stock: 15,
  },
];

const categories = ["All", "Electronics", "Home & Garden", "Audio", "Wearables"];

const Store = () => {
  const navigate = useNavigate();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [favorites, setFavorites] = useState(new Set());
  const [cart, setCart] = useState(new Map());
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('name');
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleBackToHome = () => {
    navigate("/");
  };

  // Filter and search logic
  useEffect(() => {
    let filtered = products;

    // Category filter
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort products
    filtered = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    setFilteredProducts(filtered);
  }, [searchTerm, selectedCategory, sortBy]);

  const toggleFavorite = (productId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId);
    } else {
      newFavorites.add(productId);
    }
    setFavorites(newFavorites);
  };

  const addToCart = (product) => {
    const newCart = new Map(cart);
    const currentQuantity = newCart.get(product.id) || 0;
    newCart.set(product.id, currentQuantity + 1);
    setCart(newCart);
  };

  const getCartItemCount = () => {
    return Array.from(cart.values()).reduce((sum, count) => sum + count, 0);
  };

  const getDiscountPercentage = (originalPrice, currentPrice) => {
    if (!originalPrice) return 0;
    return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
  };

  const ProductCard = ({ product }) => (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        type: "spring",
        damping: 20
      }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -8, 
        scale: 1.02,
        transition: { type: "spring", damping: 20 } 
      }}
      onMouseEnter={() => setHoveredCard(product.id)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: 4,
          overflow: 'hidden',
          background: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(25, 118, 210, 0.1)',
          boxShadow: '0 8px 32px rgba(25, 118, 210, 0.1)',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
          '&:hover': {
            boxShadow: '0 16px 48px rgba(25, 118, 210, 0.2)',
            transform: 'translateY(-4px)',
          },
        }}
      >
        {/* Image Container */}
        <Box sx={{ position: 'relative', overflow: 'hidden' }}>
          <CardMedia
            component="img"
            height="240"
            image={product.image}
            alt={product.name}
            sx={{
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          />
          
          {/* Badges */}
          <Box sx={{ position: 'absolute', top: 12, left: 12, zIndex: 2 }}>
            <Stack spacing={1}>
              {product.isNew && (
                <Chip
                  label="NEW"
                  size="small"
                  sx={{
                    bgcolor: '#4caf50',
                    color: 'white',
                    fontWeight: 700,
                    fontSize: '0.7rem',
                  }}
                />
              )}
              {product.isBestseller && (
                <Chip
                  label="BESTSELLER"
                  size="small"
                  icon={<StarIcon sx={{ fontSize: '14px !important' }} />}
                  sx={{
                    bgcolor: '#ff9800',
                    color: 'white',
                    fontWeight: 700,
                    fontSize: '0.7rem',
                  }}
                />
              )}
              {product.isOnSale && (
                <Chip
                  label={`${getDiscountPercentage(product.originalPrice, product.price)}% OFF`}
                  size="small"
                  icon={<LocalOfferIcon sx={{ fontSize: '14px !important' }} />}
                  sx={{
                    bgcolor: '#f44336',
                    color: 'white',
                    fontWeight: 700,
                    fontSize: '0.7rem',
                  }}
                />
              )}
            </Stack>
          </Box>

          {/* Favorite Button */}
          <IconButton
            onClick={(e) => {
              e.stopPropagation();
              toggleFavorite(product.id);
            }}
            sx={{
              position: 'absolute',
              top: 12,
              right: 12,
              bgcolor: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(10px)',
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 1)',
                transform: 'scale(1.1)',
              },
              transition: 'all 0.2s ease',
            }}
          >
            {favorites.has(product.id) ? (
              <FavoriteIcon sx={{ color: '#f44336' }} />
            ) : (
              <FavoriteBorderIcon sx={{ color: '#666' }} />
            )}
          </IconButton>

          {/* Quick Actions Overlay */}
          {hoveredCard === product.id && (
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                padding: '20px 16px 16px',
                opacity: 1,
                transition: 'opacity 0.3s ease',
              }}
            >
              <Button
                fullWidth
                variant="contained"
                startIcon={<AddShoppingCartIcon />}
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(product);
                }}
                sx={{
                  background: 'linear-gradient(135deg, #1976d2, #00796b)',
                  color: 'white',
                  fontWeight: 600,
                  borderRadius: 3,
                  '&:hover': {
                    background: 'linear-gradient(135deg, #00796b, #1976d2)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 24px rgba(25, 118, 210, 0.3)',
                  },
                }}
              >
                Add to Cart
              </Button>
            </Box>
          )}
        </Box>

        <CardContent sx={{ flexGrow: 1, p: 3 }}>
          {/* Category */}
          <Typography
            variant="caption"
            sx={{
              color: '#78909c',
              textTransform: 'uppercase',
              fontWeight: 600,
              letterSpacing: 1,
              mb: 1,
              display: 'block',
            }}
          >
            {product.category}
          </Typography>

          {/* Product Name */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              mb: 1,
              fontSize: '1.1rem',
              lineHeight: 1.3,
              color: '#1a1a1a',
              minHeight: '2.6rem',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {product.name}
          </Typography>

          {/* Description */}
          <Typography
            variant="body2"
            sx={{
              color: '#546e7a',
              mb: 2,
              lineHeight: 1.5,
              minHeight: '3rem',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {product.description}
          </Typography>

          {/* Rating */}
          <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
            <Rating
              value={product.rating}
              precision={0.1}
              size="small"
              readOnly
              sx={{ color: '#1976d2' }}
            />
            <Typography variant="body2" sx={{ color: '#78909c', fontSize: '0.85rem' }}>
              {product.rating} ({product.reviewCount})
            </Typography>
          </Stack>

          {/* Price */}
          <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                color: '#1976d2',
                fontSize: '1.3rem',
              }}
            >
              Rs.{product.price.toLocaleString()}
            </Typography>
            {product.originalPrice && product.originalPrice !== product.price && (
              <Typography
                variant="body2"
                sx={{
                  textDecoration: 'line-through',
                  color: '#999',
                  fontSize: '0.9rem',
                }}
              >
                Rs.{product.originalPrice.toLocaleString()}
              </Typography>
            )}
          </Stack>

          {/* Stock Status */}
          <Stack direction="row" alignItems="center" spacing={1}>
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                bgcolor: product.stock > 10 ? '#4caf50' : product.stock > 0 ? '#ff9800' : '#f44336',
              }}
            />
            <Typography
              variant="caption"
              sx={{
                color: product.stock > 10 ? '#4caf50' : product.stock > 0 ? '#ff9800' : '#f44336',
                fontWeight: 600,
              }}
            >
              {product.stock > 10 ? 'In Stock' : product.stock > 0 ? `Only ${product.stock} left` : 'Out of Stock'}
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f8faff 0%, #e8f2ff 25%, #dae8ff 50%, #ffffff 100%)",
        overflow: "hidden",
        py: { xs: 8, md: 12 },
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

        {/* Header */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Chip
              label="Premium Products Collection"
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
              Our{" "}
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
                Store
              </Box>
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: "#546e7a",
                mb: 6,
                fontSize: { xs: "1.1rem", md: "1.25rem" },
                maxWidth: 600,
                mx: "auto",
              }}
            >
              Discover premium products crafted for modern living
            </Typography>
          </Box>
        </motion.div>

        {/* Filters and Search */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card
            elevation={0}
            sx={{
              mb: 6,
              borderRadius: 4,
              background: "rgba(255, 255, 255, 0.8)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(25, 118, 210, 0.1)",
              p: 4,
              boxShadow: "0 8px 32px rgba(25, 118, 210, 0.1)",
            }}
          >
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              spacing={3}
              alignItems="center"
            >
              {/* Search */}
              <TextField
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{ color: '#1976d2' }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  flex: 1,
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 3,
                    bgcolor: 'rgba(255, 255, 255, 0.7)',
                    '&:hover': {
                      bgcolor: 'rgba(255, 255, 255, 0.9)',
                    },
                    '&.Mui-focused': {
                      bgcolor: 'white',
                    },
                  },
                }}
              />

              {/* Category Filter */}
              <FormControl sx={{ minWidth: 150 }}>
                <InputLabel>Category</InputLabel>
                <Select
                  value={selectedCategory}
                  label="Category"
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  sx={{
                    borderRadius: 3,
                    bgcolor: 'rgba(255, 255, 255, 0.7)',
                    '&:hover': {
                      bgcolor: 'rgba(255, 255, 255, 0.9)',
                    },
                  }}
                >
                  {categories.map((category) => (
                    <MenuItem key={category} value={category}>
                      {category}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              {/* Sort */}
              <FormControl sx={{ minWidth: 150 }}>
                <InputLabel>Sort By</InputLabel>
                <Select
                  value={sortBy}
                  label="Sort By"
                  onChange={(e) => setSortBy(e.target.value)}
                  sx={{
                    borderRadius: 3,
                    bgcolor: 'rgba(255, 255, 255, 0.7)',
                    '&:hover': {
                      bgcolor: 'rgba(255, 255, 255, 0.9)',
                    },
                  }}
                >
                  <MenuItem value="name">Name</MenuItem>
                  <MenuItem value="price-low">Price: Low to High</MenuItem>
                  <MenuItem value="price-high">Price: High to Low</MenuItem>
                  <MenuItem value="rating">Rating</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Card>
        </motion.div>

        {/* Products Grid */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {filteredProducts.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card
              elevation={0}
              sx={{
                borderRadius: 4,
                background: "rgba(255, 255, 255, 0.8)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(25, 118, 210, 0.1)",
                p: 6,
                textAlign: 'center',
                boxShadow: "0 8px 32px rgba(25, 118, 210, 0.1)",
              }}
            >
              <Typography variant="h5" sx={{ color: '#546e7a', mb: 2 }}>
                No products found
              </Typography>
              <Typography variant="body1" sx={{ color: '#78909c' }}>
                Try adjusting your search or filter criteria
              </Typography>
            </Card>
          </motion.div>
        )}
      </Container>

      {/* Floating Cart Button */}
      <Fab
        color="primary"
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          background: 'linear-gradient(135deg, #1976d2, #00796b)',
          boxShadow: '0 8px 24px rgba(25, 118, 210, 0.3)',
          '&:hover': {
            background: 'linear-gradient(135deg, #00796b, #1976d2)',
            transform: 'scale(1.1)',
            boxShadow: '0 12px 32px rgba(25, 118, 210, 0.4)',
          },
          transition: 'all 0.3s ease',
        }}
      >
        <Badge badgeContent={getCartItemCount()} color="error">
          <ShoppingCartIcon />
        </Badge>
      </Fab>
    </Box>
  );
};

export default Store;