import { useRezise } from "../../../Context/Mobile";
import "../Style/MainPage_manifiest.css";
import "../Style/ADScard_manifiest.css";
import background from "../../../media/background clasiffi.png";
import create_waifus from "../../../db/create_waifus";
import { get_waifus } from "../../../db/waifu.class";
import Waifu_Card from "../Components/Waifu_Card";
import { useParams } from "react-router-dom";
import { github_url } from "../../../App";
import { useState } from "react";
import { getParams } from "../function/params";
import { finder_system } from "../function/finder";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { getDisclaim } from "../../../Context/Disclaim";

const w_id = 1;

// if (sessionStorage.getItem("page") === null) {
//   sessionStorage.setItem("page", 1);
// }

// https://wendigocompany.github.io/hot-classified/#/profile

const router_code = process.env.NODE_ENV === "development" ? "" : "#";

create_waifus();
const waifus = get_waifus();

export const getTags = () => {
  const tags = ["all"];

  waifus.map((waifu) => {
    waifu.tags.map((tag) => {
      const antirepeat = tags.filter((t) => t === tag)[0];
      if (antirepeat === undefined) {
        tags.push(tag);
      }
    });
  });
  return tags;
};

export default function Main_Page() {
  const { validator } = getDisclaim();
  validator();

  const device = useRezise();

  const { page, filter } = getParams();

  sessionStorage.setItem("page", page);
  sessionStorage.setItem("filter", filter);

  const tags = getTags();

  const filtrate_waifus = () => {
    if (filter.length <= 0) {
      return waifus.map((waifu, i) => {
        if (Math.floor(i / 5) === page) {
          return (
            <div>
              <Waifu_Card
                key={`wai-${waifu.id}`}
                waifu_data={waifu}
              ></Waifu_Card>
            </div>
          );
        }
      });
    } else {
      const filtred = waifus.filter((wa) => wa.tags.indexOf(filter) !== -1);
      return filtred.map((waifu, i) => {
        if (Math.floor(i / 5) === page) {
          return (
            <div>
              <Waifu_Card
                key={`wai-${waifu.id}`}
                waifu_data={waifu}
              ></Waifu_Card>
            </div>
          );
        }
      });
    }
  };
  // filtrate_waifus();

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
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={tags}
            className={`mpg-search-input mpg-search-input-${device} `}
            renderInput={(params) => {
              if (params.inputProps.value == "all") {
                sessionStorage.setItem("filter", "");
              } else if (params.inputProps.value !== "") {
                sessionStorage.setItem("filter", params.inputProps.value);
              }
              params.InputProps.style = { fontSize: "2vh", color: "#ffffff" };
              return (
                <TextField
                  {...params}
                  label={filter !== "" ? filter : "Tags"}
                  placeholder={filter !== "" ? filter : "Please select one"}
                />
              );
            }}
          />

          <button
            className={`mpg-search-btn mpg-search-btn-${device}`}
            onClick={() => {
              const finder =
                sessionStorage.getItem("filter") === null
                  ? ""
                  : sessionStorage.getItem("filter");

              let url = github_url + router_code;
              url += !github_url.includes("localhost") ? "/?page=" : "?page=";
              url += page;
              url += finder !== "" ? `&filter=${finder}` : "";
              window.location.href = url;
              setTimeout(() => {
                window.location.reload();
              }, 500);
            }}
          >
            FIND
          </button>
        </div>
      </div>
      {(JSON.parse(sessionStorage.getItem("disclaim")) !== null) ? (filtrate_waifus()) : ("")}
    </div>
  );
}
