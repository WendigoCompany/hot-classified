import { useRezise } from "../../../../Context/Mobile";
import { useModal } from "../../../../Context/Modal";
import { getParams } from "../../../Main Page/function/params";
import "./style/manifiest.css";

const add_msj = (new_msj) => {
  const msj = {
    amm: 0,
    ids: [],
    readed: true,
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
    amm.readed =true;
    sessionStorage.setItem("msj", JSON.stringify(amm));
  } else {

    sessionStorage.setItem("msj", JSON.stringify(msj));
  }
};

export default function Modal_NewMsj({}) {
  const device = useRezise();
  const setModal = useModal();
  return (
    <div className={`nemsj-cont nemsj-cont-${device}`}>
      <button
        className={`nemsj-btn-close nemsj-btn-close-${device}`}
        onClick={() => {
          setModal("");
        }}
      >
        X
      </button>
      <div className={`nemsj-elem nemsj-elem-${device}`}>
        <h3
          className={`nemsj-lab nemsj-lab-${device}`}
          style={{ textAlign: "center" }}
        >
          SEND MESSAGE
        </h3>
        <h3 className={`nemsj-lab nemsj-lab-${device}`}>NAME</h3>
        <input
          type="text"
          id="username"
          className={`nemsj-input nemsj-input-${device}`}
          placeholder="Only she will see your name"
        />

        <h3 className={`nemsj-lab nemsj-lab-${device}`}>MESSAGE</h3>

        <textarea
          name=""
          id="msj"
          className={`nemsj-area nemsj-area-${device}`}
          placeholder="You say..."
        ></textarea>

        <br />
        <button
          onClick={() => {
            const data = {
              username: document.getElementById("username").value.trim(),
            };
            if (data.username !== "") {
              add_msj({
                wid: JSON.parse(sessionStorage.getItem("profile")),
                mid: 0,
                username: data.username,
              });
              setModal("");
            } else {
              document.getElementById("username").style.borderColor = "#ff8282";
              setTimeout(() => {
                document.getElementById("username").style.borderColor =
                  "#000000";
              }, 2000);
            }
          }}
          className={`nemsj-btn nemsj-btn-${device}`}
        ></button>
      </div>
    </div>
  );
}
