import Promo5to8 from "./Promo5to8/Promo5to8";
import Programm5to8 from "./Programm5to8";
import Bonus5to8 from "./Bonus5to8";
import VideoSection from "../../components/VideoSection/VideoSection";
import RulesSchool from "../../components/RulesSchool/RulesSchool";
import Certification5to8 from "./Certification5to8";
import Reviews from "../home/Components/Reviews/Reviews";

const Grades5to8Page = () => {
    return(
        <div>
            <Promo5to8 />
            <Programm5to8 />
            <Bonus5to8 />
            <VideoSection />
            <RulesSchool />
            <Certification5to8 />
            <Reviews />
        </div>
    )
}
export default Grades5to8Page;