import { get_waifus } from "../../../../db/waifu.class";
import Chat from "./Chat";

export default function Mobile_Card({ data, setCards }) {
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
    data.url =  data_waifu.url;
    //  url = found.img_main.substring(0,found.img_main.indexOf("_"));
    // console.log(url);
    // console.log(found);
  };

  find_waifu();
  return (
    <div
      className={`mobcard-wai-card`}
      onClick={() => {
        setCards(<Chat data={data} setCards={setCards}></Chat>);
      }}
    >
      <img
        src={`https://raw.githubusercontent.com/PowderMaid/classificated/main/${data_waifu.url}`}
        className={`mobcard-wai-icon`}
        alt=""
      />
      <h3 className={`mobcard-wai-nmsj`}>
        <span className={`span-nmsj-num`}>{data_waifu.name.toUpperCase()}</span>
      </h3>
    </div>
  );
}

// https://raw.githubusercontent.com/PowderMaid/classificated/main/toki_kurumi/tokikurumi_icon.png
