import { useState } from "react";
import { useRezise } from "../../../Context/Mobile";
import "../Style/msj_btn.manifiest.css";
import { useModal } from "../../../Context/Modal";
import User_inbox from "../../Modal/Components/User_inbox";

// {
//     wid : 0,
//     mid : [0,2,5,3]
// }

let int;

export default function Msj_Btn({}) {
  const device = useRezise();
  const setModal = useModal();


  const [ammtMsj, setAmmMsj] = useState(
    JSON.parse(sessionStorage.getItem("msj")) === null ||
      JSON.parse(sessionStorage.getItem("msj")).amm === undefined
      ? 0
      : JSON.parse(sessionStorage.getItem("msj")).amm
  );

  const get_msj_amm = () => {
    const amm = JSON.parse(sessionStorage.getItem("msj"));
    const msj = {
      amm: 0,
      ids: [],
      readed: 0,
    };
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

  clearInterval(int);

  int = setInterval(() => {
    get_msj_amm();
  }, 3000);

  return (
    <div>
      <div className={`mpg-user-msj-cont mpg-user-msj-cont-${device}`}>
        <button className={`mpg-user-msj mpg-user-msj-${device} `} onClick={()=>{
          setModal(<User_inbox></User_inbox>);
        }}></button>
        <h3 className={`msj-ammount msj-ammount-${device}`}>{ammtMsj}</h3>
      </div>
    </div>
  );
}
