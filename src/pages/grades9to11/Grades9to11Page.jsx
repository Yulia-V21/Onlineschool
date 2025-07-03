import Bonus from "../../components/Bonus/Bonus";
import Programm9to11 from "./Components/Programm9to11";
import Promo from "../../components/Promo/Promo";
import VideoSection from "../../components/VideoSection/VideoSection";
import RulesSchool from "../../components/RulesSchool/RulesSchool";
import Certification from "../../components/Certification/Certification";
import Reviews from "../home/Components/Reviews/Reviews";
import AccordionBlock from "../../components/Accordion/Accordion";
import {
  accList9to11,
  certificationItems,
  bonusItemsData,
  promoData,
} from "./Components/data9to11";
import FormHorizontally from "../../components/FormHorizontally/FormHorizontally";
const Grades9to11Page = () => {
  return (
    <div>
      <Promo
        title={promoData.title}
        subtitle={promoData.subtitle}
        text={promoData.text}
        img={promoData.img}
      />
      <Programm9to11 />
      <Bonus items={bonusItemsData} />
      <VideoSection />
      <RulesSchool />
      <Certification items={certificationItems} />
      <Reviews />
      <AccordionBlock accList={accList9to11} />
      <FormHorizontally />
    </div>
  );
};
export default Grades9to11Page;
