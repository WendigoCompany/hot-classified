import { useRezise } from "../../../Context/Mobile";
import "../Style/MainPage_manifiest.css";
import "../Style/ADScard_manifiest.css";
import background from "../../../media/background clasiffi.png";
import create_waifus from "../../../db/create_waifus";
import { get_waifus } from "../../../db/waifu.class";
import Waifu_Card from "../Components/Waifu_Card";
import { useParams } from "react-router-dom";
import { github_url } from "../../../App";

const w_id = 1;

// if (sessionStorage.getItem("page") === null) {
//   sessionStorage.setItem("page", 1);
// }

// https://wendigocompany.github.io/hot-classified/#/profile

create_waifus();
const waifus = get_waifus();

export default function Main_Page() {
  const device = useRezise();

  const getPage = (param) => {
    if (param == undefined) {
      return 0;
    } else {
      return parseInt(param.replace("page=", ""));
    }
  };

  const getFilter = (param) => {
    if (param == undefined) {
      return "";
    } else {
      return decodeURI(param.replace("filter=", ""));
    }
  };

  const searchParam = (idParam, arrParams) => {
    const aux = arrParams.filter((param) => param.includes(idParam))[0];
    if (aux !== undefined) {
      return arrParams.indexOf(aux);
    } else {
      return -1;
    }
  };

  const paramsDerivations = (arrParams) => {
    let params = {};
    let paramsIndex = {
      page: searchParam("page", arrParams),
      perro: searchParam("perro", arrParams),
      filter: searchParam("filter", arrParams),
    };

    params.page = getPage(arrParams[paramsIndex.page]);
    params.filter = getFilter(arrParams[paramsIndex.filter]);
    return params;
  };
  const getParams = () => {
    let params = window.location.href;
    params = params.replace(github_url + "#", "");
    params = params.replace(github_url, "");
    if(!github_url.includes("localhost")){
      params = params.replace("/?", "");
    }else{
      params = params.replace("?", "");

    }

    params = params.split("&");
    const paramsFinal = paramsDerivations(params);
    // if(params.includes("&")){
    // // console.log(params);
    // // paramsFinal.page =  params.substring(0, params.indexOf("&"))
    // // console.log(params);
    // }else{
    //   paramsFinal.page =  parseInt(params)
    // }

    console.log(paramsFinal);
  };
  getParams();

  return (
    <div>
      {/* <img className={`background background-${device}`} src={background} alt="" />  */}

      <div className={`mpg-title-cont mpg-title-cont-${device}`}>
        <h1 className={`mpg-title mpg-title-${device}`}>
          {"hot classified".toUpperCase()}
        </h1>
      </div>
      <div>
        <div className={`mpg-search-cont mpg-search-cont-${device}`}>
          <input
            type="text"
            id="tag-search"
            className={`mpg-search-input mpg-search-input-${device}`}
          />
          <button className={``}>FIND</button>
        </div>
      </div>
      <Waifu_Card waifu_data={waifus[0]}></Waifu_Card>
    </div>
  );
}
