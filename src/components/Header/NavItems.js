import { Box, Button, Typography, styled } from "@mui/material";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Container = styled(Box)`
  display: flex;
  align-items: center;
`;

const CustomButton = styled(Button)`
  margin-left: 20px;
  width: 100px;
  height: 30px;
  background: #fff;
  color: blue;
  :hover {
    background: blue;
    color: #fff;
  }
`;

const NavItems = () => {
  return (
    <Container>
      <CustomButton variant="contained">Login</CustomButton>
      <Typography
        style={{
          marginLeft: "8%",
          width: 205,
          cursor: "pointer",
        }}
      >
        Become a Seller
      </Typography>
      <Typography
        style={{
          marginLeft: "5%",
          cursor: "pointer",
        }}
      >
        More
      </Typography>
      <Box
        style={{
          display: "flex",
          marginLeft: "8%",
          cursor: "pointer",
        }}
      >
        <ShoppingCartIcon />
        <Typography>Cart</Typography>
      </Box>
    </Container>
  );
};

export default NavItems;
