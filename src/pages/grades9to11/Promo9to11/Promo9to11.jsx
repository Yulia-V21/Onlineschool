import Promo from "../../../components/Promo/Promo";
import { promo_9to11 } from '../../../shared/Images/index'

const Promo9to11 = () => {

    return(
        <Promo
        title='Старшая онлайн школа'
        subtitle= '9-11 класс'
        text = 'Мы даем детям реальные знания, потому наши классы не превышают 10 человек. А интерактивность и вовлеченность делает уроки интересными для детей.'
        img = {promo_9to11}
        />
    )
}
export default Promo9to11;
