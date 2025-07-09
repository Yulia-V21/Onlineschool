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
  accList9to11,
  certificationItems,
  bonusItemsData,
  promoData,
  programmaData9to11,
} from "../../components/Data/data9to11";

const Grades9to11Page = () => {
  return (
    <div>
      <Promo
        title={promoData.title}
        subtitle={promoData.subtitle}
        text={promoData.text}
        img={promoData.img}
      />
      <Programma
        classes={programmaData9to11.classes}
        conditions={programmaData9to11.conditions}
      />
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
