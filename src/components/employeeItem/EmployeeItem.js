import IconLogin from "../iconLogin/IconLogin";
import "./employeeItem.scss";

export default function EmployeeItem(props) {
  return (
    <div className="employee">
      <div className="employee__img">
        <img src="/img/employes/avatar.png" alt="avatar" />
      </div>
      <div className="employee__name">{props.name}</div>
      <div className="employee__login">
        <IconLogin/>
      </div>
    </div>
  );
}
