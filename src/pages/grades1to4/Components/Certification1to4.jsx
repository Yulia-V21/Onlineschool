import Certification from "../../../components/Certification/Certification";

const Certification1to4 = () => {
    const certificationItems = [
  {
    title: '1<br /> класс',
    description: 'аттестация каждое полугодие'
  },
  {
    title: '2<br /> класс',
    description: 'аттестация 1 раз в год'
  }
];
  return (
    <div>
      <Certification items={certificationItems} />
    </div>
  );
};
export default Certification1to4;
