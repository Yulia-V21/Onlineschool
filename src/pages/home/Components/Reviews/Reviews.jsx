import ReviewSlider from "../../../../components/ReviewSlider/ReviewSlider";
import './style.css'
const Reviews = () => {
    return (
        <div className="reviews">
            <h3 className="reviews_title">Отзывы родителей о "Школе Будущего Online"</h3>
            <div className="bg">
            <ReviewSlider />
        </div>
        </div>
    )
}
export default Reviews;