import Advantage from "./Components/Advantage/Advantage";
import Conditions from "./Components/Conditions/Conditions";
import PromoHome from "./Components/PromoHome/PromoHome";
import Comparison from "./Components/Comparison/Comparison";
import Benefits from "./Components/Benefits/Benefits";
import Price from "./Components/Price/Price";
import Sertificate from "./Components/Sertificate/Sertificate";
import AccordionBlock from "../../components/Accordion/Accordion"
import { accList } from "./Components/AccordionBlock/AccordionData";
import { useScroll } from "./../../Context/ScrollContext";
import Reviews from "./Components/Reviews/Reviews";
import Application from "./Components/Application/Application";

const HomePage = () => {
  const { sectionRefs } = useScroll();
  return (
    <>
      <PromoHome />
      <div ref={(ref) => (sectionRefs.current.conditions = { current: ref })}>
        <Conditions />
      </div>
      {/* <Conditions /> */}
      <Advantage />
      <div ref={(ref) => (sectionRefs.current.comparison = { current: ref })}>
        <Comparison />
      </div>
      {/* <Comparison /> */}
      <div ref={(ref) => (sectionRefs.current.benefits = { current: ref })}>
        <Benefits />
      </div>
      {/* <Benefits /> */}
      <div ref={(ref) => (sectionRefs.current.price = { current: ref })}>
        <Price />
      </div>
      <Sertificate />
      <Reviews />
      {/* <AccordionBlock /> */}
      <AccordionBlock accList={accList} />
      <Application />
    </>
  );
};
export default HomePage;
