import "./pageCalls.scss";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ButtonBalance from "../../components/buttonBalance/ButtonBalance";
import FilterCallsDays from "../../components/filterCallsDays/FilterCallsDays";
import FilterCalls from "../../components/filtersCalls/FilterCalls";
import TableCalls from "../../components/tableCalls/TableCalls";
import Loader from "../../components/loader/Loader";

import { fetchAllCalls } from "./pageCallsSlice";

export default function PageCalls() {
  const { callsLoadingStatus, callsErrorStatus } = useSelector((state) => state.calls);

  useEffect(() => {
    dispatch(fetchAllCalls());
  }, []);

  const dispatch = useDispatch();

  function Table() {
    if (callsLoadingStatus === true) {
      return <Loader />;
    } else if (callsErrorStatus === true) {
      return <div>Error</div>;
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
