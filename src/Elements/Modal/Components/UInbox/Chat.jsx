import { useRezise } from "../../../../Context/Mobile";
import { get_waifus } from "../../../../db/waifu.class";

const load_chat = () => {};

export default function Chat({ data, setCards }) {
  const waifus = get_waifus();
  const device = useRezise();
  let waifu_data;
  const find_waifu = () => {
    waifu_data = waifus.filter((w) => w.id == data.wid)[0];
  };

  const show_chats = () => {
    if (waifu_data !== undefined) {
      const elements = [
        <div className={`chat-cont chat-cont-${device}`}>
          <img
            src={`https://raw.githubusercontent.com/PowderMaid/classificated/main/${data.url}`}
            className={`chat-img chat-img-${device}`}
            alt=""
          />
        </div>,
      ];
      const dialog = waifu_data.chat.filter((ch) => ch.id === data.mid)[0];

      if (dialog !== undefined) {
        elements.push(
          <div className={`dialog-cont dialog-cont-${device}`}>
            <img src="" alt="" />
            <h3 className={`dialog-txt dialog-txt-${device}`}>{dialog.txt}</h3>
            <div className={`user-interacction user-interacction-${device}`}>
              <input
                type="text"
                className={`chat-input chat-input-${device}`}
              />
              <br />
              <button className={`chat-btn chat-btn-${device}`}> </button>
            </div>
          </div>
        );
      } else {
        elements.push(
          <div className={`dialog-cont dialog-cont-${device}`}>
            <h3 className={`dialog-txt dialog-txt-${device}`}>
              {"Error loading dialog... Sorry =_("}
            </h3>
            <div className={`user-interacction user-interacction-${device}`}>
              <input
                type="text"
                className={`chat-input chat-input-${device}`}
              />
              <br />
              <button className={`chat-btn chat-btn-${device}`}> </button>
            </div>
          </div>
        );
      }

      // data.mid.map((chat_id) => {
      //   const dialog = waifu_data.chat.filter((ch) => ch.id === chat_id)[0];
      //   if (dialog !== undefined) {
      //     elements.push(
      //       <div className={`dialog-cont dialog-cont-${device}`}>
      //         <h3 className={`dialog-txt dialog-txt-${device}`}>{dialog.txt}</h3>
      //       </div>
      //     );
      //   } else {
      //     elements.push(
      //       <div className={`dialog-cont dialog-cont-${device}`}>
      //         <h3 className={`dialog-txt dialog-txt-${device}`}>
      //           {"Error loading dialog... Sorry =_("}
      //         </h3>
      //       </div>
      //     );
      //   }
      // });

      return elements;
    } else {
      return "";
    }
  };
  find_waifu();

  const desk = () => {
    return <div>{show_chats()}</div>;
  };
  const mob = () => {
    return (
      <div>
        <button
          className={`chat-btn-back chat-btn-back-${device}`}
          onClick={() => {
            sessionStorage.removeItem("modal");
            setCards("");
          }}
        >
          {"<"}
        </button>
        {show_chats()}
      </div>
    );
  };
  return <div>{device === "mob" ? mob() : desk()}</div>;
}
