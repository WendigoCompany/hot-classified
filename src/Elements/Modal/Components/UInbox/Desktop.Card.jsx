import { get_waifus } from "../../../../db/waifu.class";
import Chat from "./Chat";

export default function Desktop_Card({ data, setChat }) {
  const waifus = get_waifus();
  const data_waifu = {};
  const find_waifu = () => {
    const found = waifus.filter((w) => w.id == data.wid)[0];
    let url = found.img_main.split("");
    const url_aux = [];

    for (let i = 0; i < url.length; i++) {
      if (!isNaN(parseInt(url[i]))) {
        url_aux.push(url[i]);
      }
    }
    url = "";
    url_aux.map((num) => (url += num.toString()));
    data_waifu.url = found.img_main;
    data_waifu.name = found.name;
    data_waifu.url = data_waifu.url.replace(`${url}.png`, "icon.png");
    data.url = data_waifu.url;
    //  url = found.img_main.substring(0,found.img_main.indexOf("_"));
    // console.log(url);
    // console.log(found);
  };

  find_waifu();
  return (
    <div
      className={`deskcard-wai-card`}
      onClick={() => {
        setChat(<Chat data={data}></Chat>);
      }}
    >
      <img
        src={`https://raw.githubusercontent.com/PowderMaid/classificated/main/${data_waifu.url}`}
        className={`deskcard-wai-icon`}
        alt=""
      />
      <div className={`deskcard-wai-cont-msj`}>
        <h3 className={`deskcard-wai-nmsj`}>
          <span className={`deskcard-span-nmsj-num`}>
            {data_waifu.name.toUpperCase()}
          </span>
        </h3>
      </div>
    </div>
  );
}

// https://raw.githubusercontent.com/PowderMaid/classificated/main/toki_kurumi/tokikurumi_icon.png
