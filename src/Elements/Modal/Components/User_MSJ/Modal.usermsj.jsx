import { useRezise } from "../../../../Context/Mobile";
import { useModal } from "../../../../Context/Modal";
import "./style/manifiest.css";

export default function Modal_NewMsj({}) {
  const device = useRezise();
  const setModal = useModal();
  return (
    <div className={`nemsj-cont nemsj-cont-${device}`}>
                <button  className={`nemsj-btn-close nemsj-btn-close-${device}`} onClick={()=>{
                    setModal("")
                }}>X</button>
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
          className={`nemsj-input nemsj-input-${device}`}
          placeholder="Only she will see your name"
        />

        <h3 className={`nemsj-lab nemsj-lab-${device}`}>MESSAGE</h3>

        <textarea
          name=""
          id=""
          className={`nemsj-area nemsj-area-${device}`}
          placeholder="You say..."
        ></textarea>

        <br />
        <button  className={`nemsj-btn nemsj-btn-${device}`}></button>

      </div>
    </div>
  );
}


