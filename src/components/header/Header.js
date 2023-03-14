import "./header.scss";
import * as dayjs from "dayjs";
import "dayjs/locale/ru";
import FilterHeaderEmployee from "../filterHeaderEmployee/FilterHeaderEmployee";
import FilterHeaderOrganizations from "../filterHeaderOrganizations/FilterHeaderOrganizations";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function Header() {
  const [newCallsCount, setNewCallsCount] = useState(0);
  const [allCallsCount, setAllCallsCount] = useState(0);

  const { allCalls } = useSelector((store) => store.pageCalls);
  const updateLocale = require("dayjs/plugin/updateLocale");
  dayjs.extend(updateLocale);
  dayjs.updateLocale("ru", {
    monthsShort: [
      "янв",
      "фев",
      "мар",
      "апр",
      "мая",
      "июн",
      "июл",
      "авг",
      "сен",
      "окт",
      "ноя",
      "дек",
    ],
    weekdays: [
      "Воскресенье",
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
    ],
  });

  const getNewCallsCount = () => {
    setNewCallsCount(
      allCalls.filter((item) => {
        if (item.results.results.type === "is_new") {
          return true;
        } else {
          return false;
        }
      }).length
    );
  };

  useEffect(() => {
    getNewCallsCount();
  }, []);

  const getAllCallsCount = () => {
    setAllCallsCount(allCalls.total_rows);
  };

  useEffect(() => {
    getAllCallsCount();
  }, [allCalls]);

  return (
    <div className="wrapper__header">
      <div className="container">
        <div className="header">
          <div className="header__date">
            {dayjs().locale("ru").format("dddd, DD MMM")}
          </div>
          <div className="header__analitics">
            <div className="analitics__question">
              <img src="/img/icons/question-mark-small.svg" alt="?" />
            </div>
            <div className="analitics__calls">
              <div className="calls__label">
                Новые звонки{" "}
                <span>
                  {newCallsCount} из {allCallsCount} шт
                </span>
              </div>
              <progress
                max={allCallsCount}
                value={newCallsCount}
                className="calls__scale"
              />
            </div>
            <div className="analitics__talks">
              <div className="talks__label">
                Качество разговоров <span>{"40"} %</span>
              </div>
              <progress max="100" value="40" className="talks__scale" />
            </div>
            <div className="analitics__orders">
              <div className="orders__label">
                Конверсия в заказ <span>{"67"} %</span>
              </div>
              <progress max="100" value="67" className="orders__scale" />
            </div>
          </div>
          <div className="header__search">
            <img src="/img/icons/search.svg" alt="search" />
          </div>
          <div className="header__organization">
            <FilterHeaderOrganizations />
          </div>
          <div className="header__employee">
            <FilterHeaderEmployee />
          </div>
        </div>
      </div>
    </div>
  );
}
