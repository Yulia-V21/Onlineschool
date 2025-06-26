const BonusItem = ({title, text, img }) => {
return (
<div className="bonus__item">
    <div className="bonus__item_text">
<h4>{title}</h4>
<p>{text}</p>
</div>
<img className="bonus__item_img" src={img} alt="#" />
</div>
)
}
export default BonusItem;