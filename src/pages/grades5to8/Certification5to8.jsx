import Certification from "../../components/Certification/Certification";

const Certification5to8 = () => {
    const certificationItems = [
  {
    title: '5<br /> класс',
    description: 'аттестация 1 раз в год'
  },
  {
    title: '6<br /> класс',
    description: 'аттестация 1 раз в год'
  },
    {
    title: '7<br /> класс',
    description: 'аттестация 1 раз в год'
  },
    {
    title: '8<br /> класс',
    description: 'аттестация 1 раз в год'
  }
];
  return (
    <div>
      <Certification items={certificationItems} />
    </div>
  );
};
export default Certification5to8;
