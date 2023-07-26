import { useRef } from "react";
import lock_icon from "../../assets/close_icon.svg";
import CheckboxComponent from "../checkbox";

export default function Roles_card({ handle, text, icon, value, disable }) {
  const number = useRef(Math.floor(Math.random() * 3));

  return (
    <div onClick={() => (disable ? null : handle())} className="roles-card">
      {disable ? (
        <div className="roles-lock">
          <div className="roles-circle">
            <img src={lock_icon} />
          </div>
        </div>
      ) : null}
      <label>{text}</label>
      <img src={icon} />
      {disable ? null : <CheckboxComponent bool={value} />}
      <div className="roles-estimative">
        <p>{` < ${number.current} min`}</p>
      </div>
    </div>
  );
}
