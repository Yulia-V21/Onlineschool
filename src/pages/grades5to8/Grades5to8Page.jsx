import Promo from "../../components/Promo/Promo";
import Programm5to8 from "./Components/Programm5to8";
import Bonus from "../../components/Bonus/Bonus";
import VideoSection from "../../components/VideoSection/VideoSection";
import RulesSchool from "../../components/RulesSchool/RulesSchool";
import Certification from "../../components/Certification/Certification";
import Reviews from "../home/Components/Reviews/Reviews";
import AccordionBlock from "../../components/Accordion/Accordion";
import {
  accList5to8,
  bonusItemsData,
  certificationItems,
  promoData,
} from "./Components/data5to8";
import FormHorizontally from "../../components/FormHorizontally/FormHorizontally";

const Grades5to8Page = () => {
  return (
    <div>
      <Promo
        title={promoData.title}
        subtitle={promoData.subtitle}
        text={promoData.text}
        img={promoData.img}
      />
      <Programm5to8 />
      <Bonus items={bonusItemsData} />
      <VideoSection />
      <RulesSchool />
      <Certification items={certificationItems} />
      <Reviews />
      <AccordionBlock accList={accList5to8} />
      <FormHorizontally />
    </div>
  );
};
export default Grades5to8Page;
