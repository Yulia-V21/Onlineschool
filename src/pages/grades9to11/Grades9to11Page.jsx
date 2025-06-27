import Bonus9to11 from "./Bonus9to11";
import Programm9to11 from "./Programm9to11";
import Promo9to11 from "./Promo9to11/Promo9to11";
import VideoSection from "../../components/VideoSection/VideoSection";
import RulesSchool from "../../components/RulesSchool/RulesSchool";
import Certification9to11 from "./Certification9to11";
import Reviews from "../home/Components/Reviews/Reviews";
import AccordionBlock from "../../components/Accordion/Accordion";
import { accList9to11 } from "./Acc9to11"
const Grades9to11Page = () => {
    return(
        <div>
            <Promo9to11 />
            <Programm9to11 />
            <Bonus9to11 />
            <VideoSection />
            <RulesSchool />
            <Certification9to11 />
            <Reviews />
            <AccordionBlock accList={accList9to11} />
        </div>
    )
}
export default Grades9to11Page;