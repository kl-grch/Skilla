import EmployeeItem from "../employeeItem/EmployeeItem";
import IconLogout from "../iconLogout/IconLogout";
import "./filterHeaderEmployee.scss";

export default function FilterHeaderEmployee() {
  const logout = () => {
    alert("Вы вышли из профиля");
  };

  return (
    <div className="filter-header-employee">
      <div className="filter-header-employee__button">
        <div className="button__img">
          <img src="/img/employes/men.png" alt="employee" />
        </div>
        <div className="button__icon">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_60_3465)">
              <path
                opacity="0.8"
                d="M7.41 8.59009L12 13.1701L16.59 8.59009L18 10.0001L12 16.0001L6 10.0001L7.41 8.59009Z"
                fill="#ADBFDF"
              />
            </g>
            <defs>
              <clipPath id="clip0_60_3465">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>

      <div className="filter-header-employee__card-employee">
        <div className="card-employee__employee-info">
          <div className="employee-info__name">Упоров Кирилл</div>
          <div className="employee-info__position">
            <div className="position__position">Директор</div>
            <div className="position__dot"></div>
            <div className="position__location">Санкт-Петербург</div>
          </div>
          <div className="employee-info__contacts">
            <div className="contacts__phone">
              <div className="phone__icon">
                <img src="/img/icons/phone.svg" alt="phone" />
              </div>
              <div className="phone__tel">8 (800) 333-17-21</div>
            </div>
            <div className="contacts__email">
              <div className="email__icon">
                <img src="/img/icons/mail.svg" alt="email" />
              </div>
              <div className="email__adress">hi@skilla.ru</div>
            </div>
          </div>
          <div onClick={logout} className="employee-info__logout">
            <IconLogout />
          </div>
        </div>
        <div className="card-employee__employees">
          <div className="employees__label">Операторы</div>
          <div className="employees__list">
            <EmployeeItem name="Мирон Батонов" />
            <EmployeeItem name="Алексей Ильин" />
            <EmployeeItem name="Милана Константинопольская" />
          </div>
          <div className="employees__label">Логисты</div>
          <div className="employees__list">
            <EmployeeItem name="Александра Сизых" />
            <EmployeeItem name="Илья Алексеев" />
            <EmployeeItem name="Владимир Петров" />
          </div>
          <div className="employees__label">Бухгалтеры</div>
          <div className="employees__list">
            <EmployeeItem name="Полина Калинина" />
            <EmployeeItem name="Наталья Натальева" />
            <EmployeeItem name="Константин Константинопольский" />
          </div>
        </div>
      </div>
    </div>
  );
}
