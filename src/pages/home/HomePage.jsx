import Advantage from "./Components/Advantage/Advantage";
import Conditions from "./Components/Conditions/Conditions";
import Main from "./Components/Main/Main";
import Comparison from "./Components/Comparison/Comparison";
import Benefits from "./Components/Benefits/Benefits";
import Price from "./Components/Price/Price";
import Sertificate from "./Components/Sertificate/Sertificate";
import Accordion from "../../components/Accordion/Accordion";
import { accordionData } from "./../../shared/data/accordionData";
import { reviews } from "../../shared/data/Reviews";
import SlideBar from "../../components/SlideBar/SlideBar";

const HomePage = () => {
  return (
    <>
      <Main />
      <Conditions />
      <Advantage />
      <Comparison />
      <Benefits />
      <Price />
      <Sertificate />
      <Accordion
        title={accordionData[0].title}
        description={accordionData[0].description}
      />
      <SlideBar reviews={reviews} />
    </>
  );
};
export default HomePage;
