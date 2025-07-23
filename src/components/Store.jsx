import React, { useState, useEffect } from 'react';
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
} from '@mui/icons-material';

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
    id: 1,
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
    description: "Professional-grade UV-C sanitization device with 99.9% germ elimination rate",
    features: ["Hospital-grade UV-C", "3-minute cycle", "Compact design", "Safety certified"],
    stock: 15,
  },

  
];

const categories = ["All", "Electronics", "Home & Garden", "Audio", "Wearables"];

const Store = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [favorites, setFavorites] = useState(new Set());
  const [cart, setCart] = useState(new Map());
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('name');
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

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
    <div
      style={{
        opacity: 1,
        transform: hoveredCard === product.id ? 'translateY(-8px)' : 'translateY(0)',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={() => setHoveredCard(product.id)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: 3,
          overflow: 'hidden',
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
          '&:hover': {
            boxShadow: '0 16px 48px rgba(0, 0, 0, 0.15)',
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
            <div
              style={{
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
                  bgcolor: 'rgba(255, 255, 255, 0.95)',
                  color: '#333',
                  fontWeight: 600,
                  '&:hover': {
                    bgcolor: 'white',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                Add to Cart
              </Button>
            </div>
          )}
        </Box>

        <CardContent sx={{ flexGrow: 1, p: 3 }}>
          {/* Category */}
          <Typography
            variant="caption"
            sx={{
              color: '#666',
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
              color: '#666',
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
              sx={{ color: '#ffc107' }}
            />
            <Typography variant="body2" sx={{ color: '#666', fontSize: '0.85rem' }}>
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
              Rs.{product.price}
            </Typography>
            {product.originalPrice && (
              <Typography
                variant="body2"
                sx={{
                  textDecoration: 'line-through',
                  color: '#999',
                  fontSize: '0.9rem',
                }}
              >
                ${product.originalPrice}
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
    </div>
  );

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f8fafc', py: 4 }}>
      <Container maxWidth="xl">
        {/* Header */}
        <div style={{ opacity: 1, transform: 'translateY(0)', transition: 'all 0.6s ease' }}>
          <Typography
            variant="h3"
            align="center"
            sx={{
              fontWeight: 800,
              mb: 2,
              background: 'linear-gradient(45deg, #1976d2, #7b1fa2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: { xs: '2rem', md: '3rem' },
            }}
          >
            Our Store
          </Typography>
          <Typography
            variant="h6"
            align="center"
            sx={{
              color: '#666',
              mb: 6,
              fontSize: { xs: '1rem', md: '1.2rem' },
            }}
          >
            Discover premium products crafted for modern living
          </Typography>
        </div>

        {/* Filters and Search */}
        <div style={{ opacity: 1, transform: 'translateY(0)', transition: 'all 0.6s ease 0.2s' }}>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={3}
            alignItems="center"
            sx={{ mb: 4 }}
          >
            {/* Search */}
            <TextField
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              sx={{
                flex: 1,
                '& .MuiOutlinedInput-root': {
                  borderRadius: 3,
                  bgcolor: 'white',
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
                  bgcolor: 'white',
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
                  bgcolor: 'white',
                }}
              >
                <MenuItem value="name">Name</MenuItem>
                <MenuItem value="price-low">Price: Low to High</MenuItem>
                <MenuItem value="price-high">Price: High to Low</MenuItem>
                <MenuItem value="rating">Rating</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </div>

        {/* Products Grid */}
        <Grid container spacing={4}>
          {filteredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div style={{ opacity: 1, textAlign: 'center', padding: '4rem 0' }}>
            <Typography variant="h5" sx={{ color: '#666', mb: 2 }}>
              No products found
            </Typography>
            <Typography variant="body1" sx={{ color: '#999' }}>
              Try adjusting your search or filter criteria
            </Typography>
          </div>
        )}
      </Container>

      {/* Floating Cart Button */}
      <Fab
        color="primary"
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          bgcolor: '#1976d2',
          '&:hover': {
            bgcolor: '#1565c0',
            transform: 'scale(1.1)',
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