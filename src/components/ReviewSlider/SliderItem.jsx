import './style.css'
const SliderItem = ({img, name, subname, link, text}) => {
    return(
        <div className="slider_item">
            <img className="slider__img" src={img} alt="#" />
            <div className="slider_name">
                <h5>{name}</h5>
                <span>{subname}</span>
                <span>{link}</span>
            </div>
            <div className='slider_text'>
                <p>{text}</p>
            </div>
        </div>

    )
}
export default SliderItem;