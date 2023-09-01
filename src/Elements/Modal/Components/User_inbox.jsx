import { useRezise } from "../../../Context/Mobile";
import { useModal } from "../../../Context/Modal";
import "../Style/User-Inbox/manifiest.css";
import Inbox_Container from "./UInbox/Container";
export default function User_inbox({}) {
  const device = useRezise();
  const setModal = useModal();

  
  return (
    <div className={`usinb-modal-cont usinb-modal-cont-${device}`}

      
    >
      <button
        className={`usinb-modal-close usinb-modal-close-${device}`}
        onClick={() => {
          sessionStorage.removeItem("modal")
          setModal("");
        }}
      >
        X
      </button>

      <div>
        <Inbox_Container></Inbox_Container>
      </div>
    </div>
  );
}
