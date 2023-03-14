import FilterCallsType from "../filterCallsType/FilterCallsType";
import FilterCallsEmployes from "../filterCallsEmployes/FilterCallsEmployes";
import FilterCallsCall from "../filterCallsCall/FilterCallsCall";

import SearchCalls from "../searchCalls/SearchCalls";
import "./filterCalls.scss";
import FilterCallsSource from "../filterCallsSource/FilterCallsSource";
import FilterCallsErrors from "../filterCallsErrors/FilterCallsErrors";
import FilterCallsRate from "../filterCallsRate/FilterCallsRate";

export default function FilterCalls() {
  return (
    <div className="filter-calls">
      <div className="filter-calls__search">
        <SearchCalls />
      </div>
      <div className="filter-calls__filters">
        <FilterCallsType />
        <FilterCallsEmployes />
        <FilterCallsCall />
        <FilterCallsSource/>
        <FilterCallsRate/>
        <FilterCallsErrors/>
      </div>
    </div>
  );
}
