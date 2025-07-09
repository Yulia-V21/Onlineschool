import {
  Promo,
  Bonus,
  VideoSection,
  RulesSchool,
  Certification,
  Reviews,
  AccordionBlock,
  FormHorizontally,
  Programma,
} from "../../components/index";
import {
  accList5to8,
  bonusItemsData,
  certificationItems,
  promoData,
  programmaData5to8,
} from "../../components/Data/data5to8";

const Grades5to8Page = () => {
  return (
    <div>
      <Promo
        title={promoData.title}
        subtitle={promoData.subtitle}
        text={promoData.text}
        img={promoData.img}
      />
      <Programma
        classes={programmaData5to8.classes}
        conditions={programmaData5to8.conditions}
      />
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
