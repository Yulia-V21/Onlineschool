import { useState } from "react";

const SlideBar = ({ reviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleReviews = 3;

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : reviews.length - visibleReviews
    );
  };
  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < reviews.length - visibleReviews ? prevIndex + 1 : 0
    );
  };

  const getVisibleReviews = () => {
    const endIndex = Math.min(currentIndex + visibleReviews, reviews.length);
    return reviews.slice(currentIndex, endIndex);
  };

  return (
    <div
      style={{
        position: "relative",
        textAlign: "center",
        paddingBottom: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {getVisibleReviews().map((review, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "5px",
              width: "300px",
            }}
          >
            <p>{review.text}</p>
            <p>
              <strong>{review.author}</strong>
            </p>
            <p>{review.social}</p>
          </div>
        ))}
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "0",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "10px",
        }}
      >
        <button onClick={goToPrevious}>←</button>
        <button onClick={goToNext}>→</button>
      </div>
    </div>
  );
};
export default SlideBar;
