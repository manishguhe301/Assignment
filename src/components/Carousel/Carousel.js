import { styled } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import image1 from "../../assests/285e8089ef853f46.webp";
import image2 from "../../assests/291f71468a6eff71.webp";
import image3 from "../../assests/62d41dd7f40629d6.webp";

const Image = styled("img")({
  width: "100%",
});

const Banner = () => {
  return (
    <div>
      <Carousel
        showThumbs={false}
        style={{ marginTop: "20px" }}
        autoPlay
        infiniteLoop
      >
        <div>
          <Image src={image1} alt="" />
        </div>
        <div>
          <Image src={image2} alt="" />
        </div>
        <div>
          <Image src={image3} alt="" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
