import { useState } from "react";
import { Box, Button } from "@mui/material";
import SliderItem from "./SliderItem";
import { sliderData } from "./SliderData";
import { bg_reviews } from "../../shared/Images";

const ReviewSlider = () => {
  const reviews = sliderData;
  const totalReviews = reviews.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideWidthPercent = 33.33;
  const extendedReviews = [...reviews, ...reviews, ...reviews];
  const getTranslateX = () => {
    const offsetIndex = currentIndex + totalReviews;
    return -offsetIndex * slideWidthPercent;
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalReviews) % totalReviews);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalReviews);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        width: "100%",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "20px",
          transition: "transform 0.5s ease",
          transform: `translateX(${getTranslateX()}%)`,
        }}
      >
        {extendedReviews.map((review, index) => (
          <Box
            key={index}
            sx={{
              boxSizing: "border-box",
              padding: "8px",
              // width: `${slideWidthPercent}%`,
            }}
          >
            <SliderItem
              img={review.img}
              name={review.name}
              subname={review.subname}
              link={review.link}
              text={review.text}
            />
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "16px",
          gap: "8px",
          marginBottom: "10px",
        }}
      >
        <Button
          variant="contained"
          onClick={handlePrev}
          sx={{
            backgroundColor: "#fff",
            color: "#4271DF",
            fontSize: "26px",
            fontWeight: "bold",
            border: "2px solid #4271DF",
            borderRadius: "50%",
          }}
        >
          {"<"}
        </Button>
        <Button
          variant="contained"
          onClick={handleNext}
          sx={{
            backgroundColor: "#fff",
            color: "#4271DF",
            fontSize: "26px",
            fontWeight: "bold",
            border: "2px solid #4271DF",
            borderRadius: "50%",
          }}
        >
          {">"}
        </Button>
      </Box>
    </Box>
  );
};

export default ReviewSlider;
