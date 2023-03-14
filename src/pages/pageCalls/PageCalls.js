import "./pageCalls.scss";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCalls } from "./pageCallsSlice";

import ButtonBalance from "../../components/buttonBalance/ButtonBalance";
import FilterCallsDays from "../../components/filterCallsDays/FilterCallsDays";
import FilterCalls from "../../components/filtersCalls/FilterCalls";
import TableCalls from "../../components/tableCalls/TableCalls";
import Loader from "../../components/loader/Loader";

export default function PageCalls() {
  const {nowDate, defaultCountDays} = useSelector(state => state.pageCalls);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const getCalls = () => {
    fetch(
      `https://api.skilla.ru/mango/getList?date_start=${defaultCountDays}&date_end=${nowDate}`,
      {
        method: "POST",
        headers: {
          Authorization: "Bearer testtoken",
          "Content-Type": "application/json",
        },
        body: null,
      }
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          dispatch(getAllCalls(result));
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  };

  useEffect(() => {
    getCalls();
  }, []);

  const dispatch = useDispatch();

  function Table() {
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <Loader />;
    } else {
      return <TableCalls />;
    }
  }

  return (
    <div className="container">
      <div className="calls">
        <div className="calls__title-info">
          <ButtonBalance />
          <div className="title-info__count-days">
            <FilterCallsDays />
          </div>
        </div>
        <div className="calls__filters">
          <FilterCalls />
        </div>
        <div className="calls__table">
          <Table />
        </div>
      </div>
    </div>
  );
}