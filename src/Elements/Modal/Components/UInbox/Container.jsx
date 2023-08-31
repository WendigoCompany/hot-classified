import { useState } from "react";
import { useRezise } from "../../../../Context/Mobile";
import "./style/manifiest.css"

export default function Inbox_Container({}) {
  const msj = {
    amm: 0,
    ids: [],
    readed: 0,
  };

  const [ammtMsj, setAmmMsj] = useState(
    JSON.parse(sessionStorage.getItem("msj")) === null ||
      JSON.parse(sessionStorage.getItem("msj")).amm === undefined
      ? msj
      : JSON.parse(sessionStorage.getItem("msj"))
  );

  const device = useRezise();

  const get_msj_amm = () => {
    const amm = JSON.parse(sessionStorage.getItem("msj"));

    if (amm !== null) {
      if (amm.amm === undefined) {
        sessionStorage.setItem("msj", JSON.stringify(msj));
        setAmmMsj(0);
      } else {
        setAmmMsj(amm.amm - amm.readed);
      }
    } else {
      sessionStorage.setItem("msj", JSON.stringify(msj));
      setAmmMsj(0);
    }
  };

  const display_desktop_inbox = () => {};

  const display_mobile_inbox = () => {
    if (ammtMsj.ids.length !== 0) {
    } else {
      return (
        <div className={`inb-empty-cont inb-empty-cont-${device}`}>
          <h3 className={`inb-empty-msj inb-empty-msj-${device}`}>
            NO MESSAGES <br />
            🥺
          </h3>
        </div>
      );
    }
  };

  const display_inbox = () => {
    console.log(device);
    let inbox;
    if (device === "mob") {
      inbox = display_mobile_inbox();
    } else if (device === "desk") {
    }

    // console.log(inbox);
    return inbox;
  };
  return <div>{display_inbox()}</div>;
}
