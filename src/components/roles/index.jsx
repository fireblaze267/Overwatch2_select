import { useState } from "react";
import all_icon from "../../assets/all_icon.svg";
import dps_icon from "../../assets/dps_icon.svg";
import healer_icon from "../../assets/healer_icon.svg";
import tank_icon from "../../assets/tank_icon.svg";

import Roles_card from "./roles_card";
import "./styles.scss";

export default function Roles() {
  const [roles, setRoles] = useState({
    tanque: false,
    dano: false,
    suporte: false,
    all: false,
  });

  function handleCheck(name, value) {
    if (name === "all") {
      setRoles({
        ...roles,
        tanque: false,
        dano: false,
        suporte: false,
        all: value,
      });
    } else {
      setRoles({ ...roles, [name]: value });
    }
  }

  return (
    <div className="roles-main">
      <div className="roles-select">
        <Roles_card
          handle={() => handleCheck("tanque", !roles.tanque)}
          value={roles.tanque}
          text={"tanque"}
          icon={tank_icon}
          disable={
            roles.dano && roles.suporte ? true : roles.all ? true : false
          }
        />
        <Roles_card
          handle={() => handleCheck("dano", !roles.dano)}
          value={roles.dano}
          text={"dano"}
          icon={dps_icon}
          disable={
            roles.tanque && roles.suporte ? true : roles.all ? true : false
          }
        />
        <Roles_card
          handle={() => handleCheck("suporte", !roles.suporte)}
          value={roles.suporte}
          text={"suporte"}
          icon={healer_icon}
          disable={roles.tanque && roles.dano ? true : roles.all ? true : false}
        />
        <div className="roles-line" />

        <Roles_card
          handle={() => handleCheck("all", !roles.all)}
          value={roles.all}
          text={"Todas"}
          icon={all_icon}
          disable={false}
        />
      </div>
      <button
        disabled={!Object.values(roles).some((x) => x === true)}
        className="roles-button"
      >
        Pronto
      </button>
    </div>
  );
}
