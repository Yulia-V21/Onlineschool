const BenefitsItem = ({img, title, text} ) => {
    return (
        <div className="benefits_item">
            <img src={img} alt="#" />
            <h4>{title}</h4>
            <p>{text}</p>
        </div>
    )
}
export default BenefitsItem;