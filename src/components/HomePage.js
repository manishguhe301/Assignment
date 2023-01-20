import { Box, styled } from "@mui/material";
import Carousel from "./Carousel/Carousel";
import Category from "./Category/Category";

const CarouselWrapper = styled(Box)`
  padding: 10px;
`;

const Container = styled(Box)`
  margin-top: 55;
`;

const HomePage = () => {
  return (
    <>
      <>
        <Container>
          <Box>
            <Category />
          </Box>
          <CarouselWrapper>
            <Carousel />
          </CarouselWrapper>
        </Container>
      </>
    </>
  );
};

export default HomePage;
