import CustomBtn from "../../../../components/CustomButton/CustomButton";
import { price_ico } from "../../../../shared/Images/index";

const PriceItem = ({ title, subtitle, price, points, src }) => {
  return (
    <div className="price_item">
      <div className="price_wrap">
        <h5>{price}</h5>
        <span> /мес</span>
      </div>
      <div className="price__item_info">
        <div className="price__item_title">
          <h4>{title}</h4>
          <span>{subtitle}</span>
        </div>
        <div className="price__item_points">
          <ul className="price_list">
            {points.map((point, index) => (
              <li key={index}>
                <img src={price_ico} alt="" />
                {point}
              </li>
            ))}
          </ul>
        </div>
        <CustomBtn
          text="Подробнее"
          width="160px"
          height="32px"
          onClick={() => console.log("sdfgh")}
        />
        <img className="price__img" src={src} alt="#" />
      </div>
    </div>
  );
};
export default PriceItem;

//  import CustomBtn from "../../../../components/CustomButton/CustomButton";
// import { price_ico } from '../../../../shared/Images/index'

// const PriceItem = ({price, text, src}) => {
//   return (
//     <div className="price_item">
//       <div className="price_wrap">
//         {price}
//         <span> /мес</span>
//       </div>
//       <div className="price__item_info">
//         <div className="price__item_title">
//           <h4>1-4 класс</h4>
//           <span>Весёлые и увлекательные уроки</span>
//         </div>
//         <div className="price__item_points">
//           <ul>
//             <li>
//               <img src={price_ico} alt="" />
//               {text}
//             </li>
//           </ul>
//         </div>
//         <CustomBtn
//           text="Подробнее"
//           width="160px"
//           height="32px"
//           onClick={() => console.log("sdfgh")}
//         />
//         <img src={src} alt="#" />
//       </div>
//     </div>
//   );
// };
//  export default PriceItem;
