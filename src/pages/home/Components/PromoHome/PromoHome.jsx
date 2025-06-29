import Promo from "../../../../components/Promo/Promo";
import { group } from "../../../../shared/Images/index";

const PromoHome = () => {
  return (
    <Promo
      title="Настоящая школа"
      subtitle="у вас дома!"
      text="Мы даем детям реальные знания, потому наши классы не превышают 10 человек. А интерактивность и вовлеченность делает уроки  интересными для детей."
      img={group}
    />
  );
};
export default PromoHome;

