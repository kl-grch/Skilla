import "./filterCallsDays.scss";
import { useEndNumber } from "../hooks/endNumber.hooks";
import { useSelector, useDispatch } from "react-redux";
import {
  defaultCountDays,
  weekCountDays,
} from "../../pages/pageCalls/pageCallsSlice";
import { useEffect } from "react";
import { getCallsDays } from "../filterCallsDays/filterCallsDaysSlice";

export default function FilterCallsDays() {
  const { countCallsDays } = useSelector((state) => state.filterCallsDays);
  const dispatch = useDispatch();

  useEffect(() => {
    getCallsDays();
  }, []);

  return (
    <div className="filter-calls-days">
      <div className="filter-calls-days__button">
        <div
          onClick={() =>
            dispatch(getCallsDays(countCallsDays <= 1 ? 1 : countCallsDays - 1))
          }
          className="button__left-arrow"
        >
          <svg
            width="16"
            height="24"
            viewBox="0 0 16 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_60_3453)">
              <path
                d="M6.175 15.825L2.35833 12L6.175 8.175L5 7L0 12L5 17L6.175 15.825Z"
                fill="#ADBFDF"
              />
            </g>
            <defs>
              <clipPath id="clip0_60_3453">
                <rect width="16" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="button__date">
          <div className="date__icon">
            <svg
              width="16"
              height="18"
              viewBox="0 0 16 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.4 1.63636H13.6V0H12V1.63636H4V0H2.4V1.63636H1.6C0.72 1.63636 0 2.37273 0 3.27273V16.3636C0 17.2636 0.72 18 1.6 18H14.4C15.28 18 16 17.2636 16 16.3636V3.27273C16 2.37273 15.28 1.63636 14.4 1.63636ZM14.4 16.3636H1.6V5.72727H14.4V16.3636Z"
                fill="#ADBFDF"
              />
            </svg>
          </div>
          <div className="date__count">
            {countCallsDays}{" "}
            {useEndNumber(countCallsDays, "дней", "день", "дня")}
          </div>
        </div>
        <div
          onClick={() => dispatch(getCallsDays(countCallsDays + 1))}
          className="button__right-arrow"
        >
          <svg
            width="17"
            height="24"
            viewBox="0 0 17 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_60_3459)">
              <path
                d="M9.58984 15.825L13.4065 12L9.58984 8.175L10.7648 7L15.7648 12L10.7648 17L9.58984 15.825Z"
                fill="#ADBFDF"
              />
            </g>
            <defs>
              <clipPath id="clip0_60_3459">
                <rect width="17" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>

      <div className="filter-calls-days__list">
        <div
          onClick={() => {
            dispatch(defaultCountDays());
            dispatch(getCallsDays(3));
          }}
          className="list__label"
        >
          3 дня
        </div>
        <div
          onClick={() => {
            dispatch(weekCountDays());
            dispatch(getCallsDays(7));
          }}
          className="list__item"
        >
          Неделя
        </div>
        <div className="list__item">Месяц</div>
        <div className="list__item">Год</div>
        <div className="list__item">
          <div className="item__label">Указать даты</div>
          <div className="item__dates"></div>
        </div>
      </div>
    </div>
  );
}
