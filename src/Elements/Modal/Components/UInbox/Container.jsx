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
      new_msj.mid = new_msj.mid;
      amm.ids.push(new_msj);
    } else {
      const index = amm.ids.indexOf(found[0]);
      amm.ids[index].mid = new_msj.mid;
    }
    sessionStorage.setItem("msj", JSON.stringify(amm));
  } else {
    sessionStorage.setItem("msj", JSON.stringify(msj));
  }
};

// add_msj({
//   wid: 1,
//   mid: 0,
// });
sessionStorage.removeItem("modal");
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
  const [cards, setCards] = useState("");
  const [page, setPage] = useState(0);

  const device = useRezise();

  const display_desktop_inbox = () => {};

  const max_page_mobile = () => {
    return Math.floor(ammtMsj.ids.length / 3);
  };

  const display_mobile_inbox = () => {
    if (ammtMsj.ids.length !== 0) {
      const elements = [];
      const maxPage = max_page_mobile();

      ammtMsj.ids.map((data_mjs, i) => {
        if (Math.floor(i / 3) === page) {
          elements.push(
            <div>
              <Mobile_Card setCards={setCards} data={data_mjs}></Mobile_Card>
            </div>
          );
        }
      });
      elements.push(
        <div className={`minb-chang-page-cont minb-chang-page-cont-${device}`}>
          <button
            className={`mind-btn mind-btn-${device}`}
            onClick={() => {
              sessionStorage.removeItem("modal")
              if (page - 1 < 0) {
                setPage(maxPage);
              } else {
                setPage(page - 1);
              }
            }}
          >
            {"<"}
          </button>
          <button
            className={`mind-btn mind-btn-${device}`}
            onClick={() => {
              sessionStorage.removeItem("modal")
              if (page + 1 > maxPage) {
                setPage(0);
              } else {
                setPage(page + 1);
              }
            }}
          >
            {">"}
          </button>
        </div>
      );
      setCards(elements);
    } else {
      setCards(
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
    sessionStorage.setItem("modal", "inbox");
    let inbox;
    if (device === "mob") {
      inbox = display_mobile_inbox();
    } else if (device === "desk") {
    }

    // console.log(inbox);
    return inbox;
  };

  if (sessionStorage.getItem("modal") === null) {
    display_inbox();
  }

  return <div>{cards}</div>;
}
