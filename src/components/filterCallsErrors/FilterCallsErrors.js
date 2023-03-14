import "./filterCallsErrors.scss";
import { useState } from "react";

export default function FilterCallsErrors() {
  const [label, setLabel] = useState("Все ошибки");

  const handleTarget = (e) => {
    setLabel(e.target.innerText);
  };
  return (
    <div className="filter-calls-errors">
      <div className="filter-calls-errors__button">
        <div className="button__name">{label}</div>
        <div className="button__icon">
          <svg
            width="18"
            height="21"
            viewBox="0 0 18 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.9001 8.60117L13.3991 8.10024C13.3324 8.03334 13.2555 8 13.1685 8C13.0818 8 13.0049 8.03334 12.9382 8.10024L9.00005 12.0382L5.06209 8.10034C4.9953 8.03345 4.91844 8.00011 4.83161 8.00011C4.74475 8.00011 4.66789 8.03345 4.60113 8.10034L4.10024 8.60131C4.03334 8.66806 4 8.74492 4 8.83179C4 8.91858 4.03345 8.99544 4.10024 9.06219L8.76957 13.7316C8.83633 13.7984 8.91322 13.8318 9.00005 13.8318C9.08688 13.8318 9.16364 13.7984 9.23036 13.7316L13.9001 9.06219C13.9668 8.99541 14 8.91854 14 8.83179C14 8.74492 13.9668 8.66806 13.9001 8.60117Z"
              fill="#ADBFDF"
            />
          </svg>
        </div>
      </div>
      <div className="filter-calls-errors__list">
        <div onClick={handleTarget} className="list__label">
          Все ошибки
        </div>
        <div onClick={handleTarget} className="list__item">
          Приветствие
        </div>
        <div onClick={handleTarget} className="list__item">
          Имя
        </div>
        <div onClick={handleTarget} className="list__item">
          Цена
        </div>
        <div onClick={handleTarget} className="list__item">
          Скидка
        </div>
        <div onClick={handleTarget} className="list__item">
          Предзаказ
        </div>
        <div onClick={handleTarget} className="list__item">
          Благодарность
        </div>
        <div onClick={handleTarget} className="list__item">
          Стоп слова
        </div>
      </div>
    </div>
  );
}
