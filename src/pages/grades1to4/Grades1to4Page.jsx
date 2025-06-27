import Promo1to4 from "./Promo1to4";
import Programm1to4 from "./Programm1to4";
import Bonus1to4 from "./Bonus1to4";
import VideoSection from "../../components/VideoSection/VideoSection";
import RulesSchool from "../../components/RulesSchool/RulesSchool";
import Certification1to4 from "./Certification1to4";
import Reviews from "../home/Components/Reviews/Reviews";
import AccordionBlock from "../../components/Accordion/Accordion";
import {accList1to4} from "./Acc1to4"

const Grades1to4Page = () => {
  return (
    <div>
      <Promo1to4 />
      <Programm1to4 />
      <Bonus1to4 />
      <VideoSection />
      <RulesSchool />
      <Certification1to4 />
      <Reviews />
      <AccordionBlock accList={accList1to4} />
    </div>
  );
};
export default Grades1to4Page;
