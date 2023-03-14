import "./tableCalls.scss";
import AudioPlayer from "../audioPlayer/AudioPlayer";
import { useSelector } from "react-redux";
import ButtonRecognize from "../buttonRecognize/ButtonRecognize";

export default function TableCalls() {
  const { allCalls } = useSelector((store) => store.pageCalls);

  const updateTime = (time) => {
    if (time < 10) {
      return `0:0${time}`;
    } else if (time > 10 && time < 60) {
      return `0:${time}`;
    } else {
      let sec = 0;
      let min = 0;
      sec = time % 60;
      min = Math.floor(time / 60);
      return `${min}:${sec < 10 ? `0${sec}` : sec}`;
    }
  };

  const updatePhoneNumber = (phone) => {
    return phone.replace(
      /(?<pref>[0-9]{1})(?<code>[0-9]{3})(?<num1>[0-9]{3})(?<num2>[0-9]{2})(?<num3>[0-9]{2})/g,
      "+$<pref> ($<code>) $<num1>-$<num2>-$<num3>"
    );
  };

  const errorScript = (
    <div className="row-rate__error">Скрипт не использован</div>
  );

  const getError = (item) => {
    if (item.errors[0] === "Скрипт не использован") {
      return errorScript;
    } else if (item.time === 0) {
      return null;
    } else {
      return <ButtonRecognize />;
    }
  };

  return (
    <div className="table-calls">
      <table className="table-calls__table">
        <thead className="table-calls__thead">
          <tr className="thead__row">
            <th className="thead__row-checkbox">
              <input type="checkbox" />
            </th>
            <th className="thead__row-type">Тип</th>
            <th className="thead__row-time">Время</th>
            <th className="thead__row-employee">Сотрудник</th>
            <th className="thead__row-call">Звонок</th>
            <th className="thead__row-sourse">Источник</th>
            <th className="thead__row-rate">Оценка</th>
            <th className="thead__row-duration">Длительность</th>
          </tr>
        </thead>
        <tbody className="table-calls__tbody">
          {allCalls.results.map((item) => (
            <tr key={item.id} className="tbody__row">
              <td className="tbody__row-checkbox">
                <input type="checkbox" />
              </td>
              <td className="tbody__row-type">
                {item.in_out === 0 ? (
                  <img src="/img/icons/arrow-blue-down.svg" alt="arrow" />
                ) : (
                  <img src="/img/icons/arrow-green-up.svg" alt="arrow" />
                )}
              </td>
              <td className="tbody__row-time">{item.date.substring(11, 16)}</td>
              <td className="tbody__row-employee">
                <div
                  className="row-employee__avatar"
                  style={
                    item.person_avatar !== ""
                      ? { backgroundImage: `url("${item.person_avatar}")` }
                      : {
                          backgroundImage:
                            "url(https://lk.skilla.ru/img/noavatar.jpg)",
                        }
                  }
                ></div>
              </td>
              <td className="tbody__row-call">
                <img src="/img/icons/phone.svg" alt="phone" />
                {updatePhoneNumber(item.partner_data.phone)}
              </td>
              <td className="tbody__row-sourse">{item.source}</td>
              <td className="tbody__row-rate">{getError(item)}</td>
              <td className="tbody__row-duration">
                <div className="row-duration__time">
                  {item.time === 0 ? null : updateTime(item.time)}
                </div>
                <div className="row-duration__player">
                  {item.record === "" ? null : (
                    <AudioPlayer duration={updateTime(item.time)} />
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
