import Certification from "../../components/Certification/Certification";

const Certification9to11 = () => {
    const certificationItems = [
  {
    title: '9<br /> класс',
    description: 'аттестация 1 раз в год'
  },
  {
    title: '10<br /> класс',
    description: 'аттестация каждое полугодие'
  },
    {
    title: '11<br /> класс',
    description: 'аттестация 1 раз в год'
  }
];
  return (
    <div>
      <Certification items={certificationItems} />
    </div>
  );
};
export default Certification9to11;
