import { certification_img } from '../../shared/Images/index';
import { tg, sticker, mail } from '../../shared/Images/index';
import './style.css';

const Certification = ({ items }) => {
    const handleSubmit = (e) => {
        e.preventDefault();

        const emailInput = document.querySelector(
            '.certification__form_input[name="Email"]'
        );
        const email = emailInput.value;

        if (email) {
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    email: email, 
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((json) => {
                    console.log('Ответ от API:', json);
                    alert('Запрос отправлен!'); 
                    emailInput.value = ''; 
                })
                .catch((error) => {
                    console.error('Ошибка при отправке:', error);
                    alert('Произошла ошибка при отправке.');
                });
        } else {
            alert('Пожалуйста, введите email.');
        }
    };

    return (
        <div className="certification container">
            <h3 className="certification__title">Как проходит аттестация</h3>
            <p className="certification__text">
                У нас ребёнок сможет писать контрольные работы онлайн в
                спокойной обстановке:
            </p>
            <div className="certification__class">
                {items.map((item, index) => (
                    <div key={index} className="certification__class_item">
                        <h4
                            dangerouslySetInnerHTML={{ __html: item.title }}
                        ></h4>
                        <span>{item.description}</span>
                    </div>
                ))}
            </div>
            <img
                className="certification__img"
                src={certification_img}
                alt="#"
            />
            <div className="certification__book">
                <img className="img_sticker" src={sticker} alt="#" />
                <div className="certification__book_text">
                    <h4>Скачайте нашу бесплатную PDF-книгу!</h4>
                    <p>
                        Из неё вы узнаете, что такое аттестация в школе и как её
                        проходить, если учишься дома. Узнайте больше об
                        аттестации на домашнем обучении
                    </p>
                </div>
                <div className="certification__book_form">
                    <img
                        className="certification_input_img"
                        src={mail}
                        alt="Mail icon"
                    />
                    <input
                        type="email"
                        placeholder="Электронная почта"
                        className="certification__form_input"
                        name="Email"
                    />
                </div>
                <button
                    className="certification__book_btn"
                    onClick={handleSubmit}
                >
                    <img
                        src={tg}
                        alt="Icon"
                        style={{ width: '30px', height: '30px' }}
                    />
                    Получить
                </button>
            </div>
        </div>
    );
};

export default Certification;