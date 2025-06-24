import Promo from "../../../components/Promo/Promo";
import { promo_5to8 } from '../../../shared/Images/index'

const Promo5to8 = () => {

    return(
        <Promo
        title='Средняя онлайн школа'
        subtitle= '5-8 класс'
        text = 'Ученики 5-8 классов онлайн-школы начинают заниматься в 9:00 по Московскому времени. При не высокой нагрузке это позволяет более эффективно планировать свое время после учебы.'
        img = {promo_5to8}
        />
    )
}
export default Promo5to8;
