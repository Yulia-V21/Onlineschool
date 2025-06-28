import { useState } from 'react';
import { logo } from "../../shared/Images";
import './style.css';

const PersonalAcc = () => {
  const [showPassword, setShowPassword] = useState(false); 
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="personal__bg">
      <div className="personal container">
        <img src={logo} alt="Логотип" />
        <form className="personal__form" onSubmit={handleSubmit}>
          <div className="personal__form_item">
            <h4>Логин</h4>
            <input className="personal__input" type="text" name="log" id="log" />
          </div>
          <div className="personal__form_item" style={{ position: 'relative' }}>
            <h4>Пароль</h4>
            <input
              className="personal__input"
              type={showPassword ? 'text' : 'password'}
              name="password"
              id="password"
            />
            <button className='password__btn'
              type="button"
              onClick={togglePasswordVisibility}
              aria-label={showPassword ? 'Скрыть пароль' : 'Показать пароль'}
            >
              {showPassword ? '🙈' : '👁️'}
            </button>
          </div>
          <button className="personal__btn" type="submit">Войти в аккаунт</button>
        </form>
      </div>
    </div>
  );
};

export default PersonalAcc;
