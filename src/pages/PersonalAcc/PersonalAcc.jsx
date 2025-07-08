import { useState} from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { logo } from "../../shared/Images";
import "./style.css";

const PersonalAcc = () => {
  const [formData, setFormData] = useState({ login: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const HandleNavigate = () => {
    navigate('/');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    Cookies.set("login", formData.login, { expires: 1 });
    Cookies.set("password", formData.password, { expires: 1 });
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
            <input
              onChange={handleInputChange}
              className="personal__input"
              type="text"
              name="login"
              id="login"
              value = {formData.login}
            />
          </div>
          <div className="personal__form_item" style={{ position: "relative" }}>
            <h4>Пароль</h4>
            <input
              onChange={handleInputChange}
              className="personal__input"
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              value = {formData.password}
            />
            <button
              className="password__btn"
              type="button"
              onClick={togglePasswordVisibility}
              aria-label={showPassword ? "Скрыть пароль" : "Показать пароль"}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
          <button className="personal__btn" type="submit" onClick={HandleNavigate}>
            Войти в аккаунт
          </button>
        </form>
      </div>
    </div>
  );
};

export default PersonalAcc;
