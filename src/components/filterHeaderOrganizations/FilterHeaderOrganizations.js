import "./filterHeaderOrganizations.scss";
import { useState } from "react";

export default function FilterHeaderOrganizations() {
  const [label, setLabel] = useState("Все организации");

  const handleTarget = (e) => {
    setLabel(e.target.innerText);
  };

  return (
    <div className="filter-header-organizations">
      <div className="filter-header-organizations__button">
        <div className="button__name">{label}</div>
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
      <div className="filter-header-organizations__list">
        <div onClick={handleTarget} className="list__label">
          Все организации
        </div>
        <div onClick={handleTarget} className="list__item">
          ООО Грузчиков Сервис Запад
        </div>
        <div onClick={handleTarget} className="list__item">
          ИП Митрофанов М.М.
        </div>
        <div onClick={handleTarget} className="list__item">
          ИП Иванов М.М.
        </div>
      </div>
    </div>
  );
}
