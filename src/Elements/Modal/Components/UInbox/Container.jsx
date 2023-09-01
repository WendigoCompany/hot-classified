import { useState } from "react";
import { useRezise } from "../../../../Context/Mobile";
import "./style/manifiest.css";
import Mobile_Card from "./Mobile.Card";

const add_msj = (new_msj) => {
  const msj = {
    amm: 0,
    ids: [],
    readed: 0,
  };

  const amm = JSON.parse(sessionStorage.getItem("msj"));

  if (amm !== null && Array.isArray(amm.ids)) {
    const found = amm.ids.filter((mdb) => mdb.wid == new_msj.wid);
    if (found.length === 0) {
      new_msj.mid = [new_msj.mid];
      amm.ids.push(new_msj);
    } else {
      const index = amm.ids.indexOf(found[0]);
      amm.ids[index].mid.push(new_msj.mid);
      amm.ids[index].no_read ++ 

    }
    sessionStorage.setItem("msj", JSON.stringify(amm));
  } else {
    sessionStorage.setItem("msj", JSON.stringify(msj));
  }
};

// add_msj({
//   wid: 1,
//   mid: 1,
//   no_read : 0
// });
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
    console.log(ammtMsj.ids);
    if (ammtMsj.ids.length !== 0) {
      const elements = [];
      ammtMsj.ids.map(data_mjs => {
        elements.push(<div>
          <Mobile_Card data={data_mjs}></Mobile_Card>
        </div>)
      })
      return elements
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
