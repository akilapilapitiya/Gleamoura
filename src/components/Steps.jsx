import React from "react";
import {
 Box,
 Typography,
 Grid,
 Card,
 CardContent,
 useTheme,
 Chip,
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
   description: "Add distilled water or approved cleaning solution to the reservoir.",
   icon: <LocalDrink fontSize="large" color="primary" />,
   duration: "30 seconds",
   color: "#4ECDC4",
   tip: "Use Cleansing agents water for best results"
 },
 {
   title: "Spray the Cleaning Surface",
   description: "Nozzles controls a powered spray of liquid.",
   icon: <Opacity fontSize="large" color="primary" />,
   duration: "15 seconds",
   color: "#45B7D1",
   tip: "Ensure flat surfaces for best results"
 },
 {
   title: "Activate Sterilization",
   description: "UV Light powered Sanitization for best cleaning results.",
   icon: <FlashOn fontSize="large" color="primary" />,
   duration: "45 seconds",
   color: "#FECA57",
   tip: "Hospital-grade sterilization"
 },
 {
   title: "Recharge Equipment When Needed",
   description: "Easily Charagable Appliance.",
   icon: <BatteryChargingFull fontSize="large" color="primary" />,
   duration: "2 hours",
   color: "#FF6B9D",
   tip: "Fast charge in 30 minutes"
 },
];

const Steps = () => {
 const theme = useTheme();

 return (
   <Box
     sx={{
       position: "relative",
       background: "linear-gradient(135deg, #0F0F23, #1A1A2E, #16213E)",
       py: { xs: 8, md: 12 },
       px: 2,
       overflow: "hidden",
     }}
   >
     {/* Background Effects */}
     <Box
       sx={{
         position: "absolute",
         width: 500,
         height: 500,
         bgcolor: "#00BCD4",
         filter: "blur(200px)",
         borderRadius: "50%",
         top: -250,
         right: -200,
         zIndex: 1,
         opacity: 0.1,
       }}
     />
     <Box
       sx={{
         position: "absolute",
         width: 300,
         height: 300,
         bgcolor: "#B388FF",
         filter: "blur(150px)",
         borderRadius: "50%",
         bottom: -150,
         left: -100,
         zIndex: 1,
         opacity: 0.08,
       }}
     />

     {/* Content */}
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
           background: "linear-gradient(90deg, #00BCD4, #B388FF)",
           WebkitBackgroundClip: "text",
           WebkitTextFillColor: "transparent",
           mb: 2,
           fontSize: { xs: "2rem", md: "3rem" }
         }}
       >
         Effortless Cleaning Protocol
       </Typography>
       <Typography
         variant="h6"
         align="center"
         sx={{
           color: "rgba(255, 255, 255, 0.7)",
           maxWidth: 700,
           mx: "auto",
           mb: 6,
           fontSize: { xs: "1rem", md: "1.25rem" }
         }}
       >
         Revolutionary 4-step process for unmatched hygiene standards
       </Typography>
     </motion.div>

     <Grid
       container
       spacing={4}
       justifyContent="center"
       sx={{ mt: 4, px: { xs: 1, sm: 4 }, position: "relative", zIndex: 2 }}
     >
       {steps.map((step, index) => (
         <Grid
           item
           xs={12}
           sm={6}
           lg={4}
           key={index}
           component={motion.div}
           initial={{ opacity: 0, y: 50, rotateY: -15 }}
           whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
           transition={{ duration: 0.6, delay: index * 0.1 }}
           viewport={{ once: true }}
           whileHover={{ 
             y: -10, 
             rotateY: 5,
             transition: { type: "spring", damping: 20 }
           }}
         >
           <Card
             elevation={0}
             sx={{
               height: "100%",
               borderRadius: 4,
               background: "rgba(255, 255, 255, 0.05)",
               backdropFilter: "blur(20px)",
               border: "1px solid rgba(255, 255, 255, 0.1)",
               p: 3,
               position: "relative",
               overflow: "hidden",
               "&::before": {
                 content: '""',
                 position: "absolute",
                 top: 0,
                 left: 0,
                 right: 0,
                 height: 4,
                 background: `linear-gradient(90deg, ${step.color}, transparent)`,
               }
             }}
           >
             <CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>
               {/* Step Number */}
               <Box
                 sx={{
                   position: "absolute",
                   top: 16,
                   right: 16,
                   width: 32,
                   height: 32,
                   borderRadius: "50%",
                   background: `linear-gradient(135deg, ${step.color}, ${step.color}80)`,
                   display: "flex",
                   alignItems: "center",
                   justifyContent: "center",
                   fontWeight: 700,
                   color: "white",
                   fontSize: "14px"
                 }}
               >
                 {index + 1}
               </Box>

               {/* Icon */}
               <Box
                 sx={{
                   width: 80,
                   height: 80,
                   background: `linear-gradient(135deg, ${step.color}20, ${step.color}10)`,
                   display: "flex",
                   alignItems: "center",
                   justifyContent: "center",
                   borderRadius: "50%",
                   mx: "auto",
                   mb: 3,
                   border: `2px solid ${step.color}40`,
                 }}
               >
                 <Box sx={{ color: step.color, transform: "scale(1.2)" }}>
                   {step.icon}
                 </Box>
               </Box>

               {/* Title */}
               <Typography 
                 variant="h6" 
                 fontWeight={700}
                 align="center"
                 sx={{ 
                   color: "white",
                   mb: 2,
                   fontSize: { xs: "1.1rem", md: "1.25rem" }
                 }}
               >
                 {step.title}
               </Typography>

               {/* Description */}
               <Typography
                 variant="body2"
                 align="center"
                 sx={{
                   color: "rgba(255, 255, 255, 0.8)",
                   lineHeight: 1.6,
                   mb: 3,
                   minHeight: 60
                 }}
               >
                 {step.description}
               </Typography>

               {/* Duration and Tip */}
               <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                 <Chip
                   label={step.duration}
                   size="small"
                   sx={{
                     bgcolor: `${step.color}20`,
                     color: step.color,
                     fontWeight: 600,
                     border: `1px solid ${step.color}40`
                   }}
                 />
                 <Typography
                   variant="caption"
                   sx={{
                     color: "rgba(255, 255, 255, 0.6)",
                     fontStyle: "italic"
                   }}
                 >
                   💡 {step.tip}
                 </Typography>
               </Box>

               {/* Progress bar */}
               <Box
                 sx={{
                   width: "100%",
                   height: 3,
                   bgcolor: "rgba(255, 255, 255, 0.1)",
                   borderRadius: 2,
                   overflow: "hidden"
                 }}
               >
                 <motion.div
                   initial={{ width: 0 }}
                   whileInView={{ width: `${((index + 1) / steps.length) * 100}%` }}
                   transition={{ duration: 1, delay: index * 0.1 }}
                   style={{
                     height: "100%",
                     background: `linear-gradient(90deg, ${step.color}, ${step.color}80)`,
                     borderRadius: 2
                   }}
                 />
               </Box>
             </CardContent>
           </Card>
         </Grid>
       ))}
     </Grid>

     {/* Total Process Time */}
     <motion.div
       initial={{ opacity: 0, y: 30 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.6, delay: 0.8 }}
       viewport={{ once: true }}
       style={{ position: "relative", zIndex: 2 }}
     >
       <Box
         sx={{
           mt: 8,
           textAlign: "center",
           p: 4,
           borderRadius: 3,
           background: "rgba(255, 255, 255, 0.03)",
           backdropFilter: "blur(20px)",
           border: "1px solid rgba(255, 255, 255, 0.1)",
           maxWidth: 600,
           mx: "auto"
         }}
       >
         <Typography
           variant="h4"
           fontWeight={700}
           sx={{
             background: "linear-gradient(90deg, #00BCD4, #B388FF)",
             WebkitBackgroundClip: "text",
             WebkitTextFillColor: "transparent",
             mb: 1
           }}
         >
           Total Process Time: 3 minutes
         </Typography>
         <Typography
           variant="body1"
           sx={{ color: "rgba(255, 255, 255, 0.7)" }}
         >
           Complete surface sterilization with professional-grade results
         </Typography>
       </Box>
     </motion.div>
   </Box>
 );
};

export default Steps;