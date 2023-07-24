import { useRezise } from "../../../Context/Mobile";
import "../Style/MainPage_manifiest.css";
import "../Style/ADScard_manifiest.css";
import background from "../../../media/background clasiffi.png";
import create_waifus from "../../../db/create_waifus";
import { get_waifus } from "../../../db/waifu.class";
import Waifu_Card from "../Components/Waifu_Card";

const w_id = 1;







if (sessionStorage.getItem("page") === null) {
  sessionStorage.setItem("page", 1);
}

create_waifus();
const waifus = get_waifus();

export default function Main_Page() {
  const device = useRezise();

  return (
    <div>
      {/* <img className={`background background-${device}`} src={background} alt="" />  */}
      <div className={`mpg-title-cont mpg-title-cont-${device}`}>
        <h1 className={`mpg-title mpg-title-${device}`}>
          {"hot classified".toUpperCase()}
        </h1>
      </div>

<Waifu_Card waifu_data={waifus[0]}></Waifu_Card>
    </div>
  );
}
