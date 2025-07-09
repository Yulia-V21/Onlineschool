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
  accList1to4,
  certificationItems,
  bonusItemsData,
  promoData,
  programmaData1to4,
} from "../../components/Data/data1to4";

const Grades1to4Page = () => {
  return (
    <div>
      <Promo
        title={promoData.title}
        subtitle={promoData.subtitle}
        text={promoData.text}
        img={promoData.img}
      />
      <Programma
        classes={programmaData1to4.classes}
        conditions={programmaData1to4.conditions}
      />
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
