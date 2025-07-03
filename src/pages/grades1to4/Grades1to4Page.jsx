import Promo from "../../components/Promo/Promo";
import Programm1to4 from "./Components/Programm1to4";
import Bonus from "../../components/Bonus/Bonus";
import VideoSection from "../../components/VideoSection/VideoSection";
import RulesSchool from "../../components/RulesSchool/RulesSchool";
import Certification from "../../components/Certification/Certification";
import Reviews from "../home/Components/Reviews/Reviews";
import AccordionBlock from "../../components/Accordion/Accordion";
import {
  accList1to4,
  certificationItems,
  bonusItemsData,
  promoData,
} from "./Components/data1to4";
import FormHorizontally from "../../components/FormHorizontally/FormHorizontally";

const Grades1to4Page = () => {
  return (
    <div>
      <Promo
        title={promoData.title}
        subtitle={promoData.subtitle}
        text={promoData.text}
        img={promoData.img}
      />
      <Programm1to4 />
      <Bonus items={bonusItemsData} />
      <VideoSection />
      <RulesSchool />
      <Certification items={certificationItems} />
      <Reviews />
      <AccordionBlock accList={accList1to4} />
      <FormHorizontally />
    </div>
  );
};
export default Grades1to4Page;
