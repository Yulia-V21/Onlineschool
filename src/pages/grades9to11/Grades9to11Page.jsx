import Bonus9to11 from "./Components/Bonus9to11";
import Programm9to11 from "./Components/Programm9to11";
import Promo9to11 from "./Components/Promo9to11";
import VideoSection from "../../components/VideoSection/VideoSection";
import RulesSchool from "../../components/RulesSchool/RulesSchool";
import Certification9to11 from "./Components/Certification9to11";
import Reviews from "../home/Components/Reviews/Reviews";
import AccordionBlock from "../../components/Accordion/Accordion";
import { accList9to11 } from "./Components/Acc9to11";
import FormHorizontally from "../../components/FormHorizontally/FormHorizontally";
const Grades9to11Page = () => {
  return (
    <div>
      <Promo9to11 />
      <Programm9to11 />
      <Bonus9to11 />
      <VideoSection />
      <RulesSchool />
      <Certification9to11 />
      <Reviews />
      <AccordionBlock accList={accList9to11} />
      <FormHorizontally />
    </div>
  );
};
export default Grades9to11Page;
