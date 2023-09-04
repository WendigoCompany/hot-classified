import { useRezise } from "../../../Context/Mobile";
import "../Style/ProfilePage_manifiest.css";
import "../Style/ADScard_manifiest.css";
import background from "../../../media/t1.png";
import { get_waifus } from "../../../db/waifu.class";
import {
  changeImg,
  get_waifu_data,
  hide,
  move_to_main,
  show,
} from "../Functions/functions";
import { github_url } from "../../../App";
import { set_img_index } from "../Functions/img_index";
import { getDisclaim } from "../../../Context/Disclaim";
import { useState } from "react";
import { useModal } from "../../../Context/Modal";
import Modal_NewMsj from "../../Modal/Components/User_MSJ/Modal.usermsj";
import User_Banner from "../../Msj/Components/User_Banner";

const basicURL =
  "https://raw.githubusercontent.com/PowderMaid/classificated/main/";

let waifu_data;

const showText = () => {
  const int = setInterval(() => {
    try {
      document.getElementById("pro-description").innerHTML =
        waifu_data.desc_full;
      clearInterval(int);
    } catch (error) {}
  }, 10);
};

export const getParams = () => {
  let params = window.location.href;
  params = params.replace(github_url + "#/profile?id=", "");
  params = params.replace("http://localhost:3000/profile?id=", "");
  waifu_data = get_waifu_data(parseInt(params));
};

export default function Profile() {
  const { validator } = getDisclaim();
  validator();
  getParams();
  showText();

  const device = useRezise();
  const setModal = useModal();

  const prevent_disclaim = () => {
    if (JSON.parse(sessionStorage.getItem("disclaim")) !== null) {
      return (
        <>
          <User_Banner></User_Banner>
          <div
            onClick={(e) => {
              hide(e);
            }}
            id="pro-img-visu-cont"
            className={`pro-img-visu-cont  pro-img-visu-cont-${device}`}
          >
            <button
              className={`pro-close-btn pro-close-btn-${device}`}
              id="pro-close-btn"
            >
              X
            </button>
            <img
              id="pro-sho-img"
              className={`pro-img-visu pro-img-visu-${device}`}
              alt=""
            />

            <div
              className={`pro-img-arrow pro-img-arrow-${device} pro-img-arrow-prev-${device}`}
              onClick={() => {
                changeImg("prev", waifu_data);
              }}
            >{`<`}</div>
            <div
              className={`pro-img-arrow pro-img-arrow-${device} pro-img-arrow-next-${device}`}
              onClick={() => {
                changeImg("next", waifu_data);
              }}
            >{`>`}</div>
          </div>

          <div className={`pro-title-cont pro-title-cont-${device}`}>
            <h1 className={`pro-title pro-title-${device}`}>
              {"hot classified".toUpperCase()}
            </h1>
          </div>

          <div className={`pro-ads-cont pro-ads-cont-${device}`}>
            <h3
              onClick={() => {
                set_img_index(0);
                show(waifu_data.img_main);
              }}
              style={{
                backgroundImage: `url('${basicURL + waifu_data.img_main}')`,
              }}
              className={`pro-ads-img pro-ads-img-${device}`}
            ></h3>
          </div>

          <div className={`pro-gall-cont pro-gall-cont-${device}`}>
            {waifu_data.img_gall.map((img, i) => (
              <h3
                onClick={() => {
                  set_img_index(i);
                  show(img);
                }}
                style={{
                  backgroundImage: `url('${basicURL + img}')`,
                }}
                className={`pro-gall-img pro-gall-img-${device}`}
              ></h3>
            ))}
          </div>

          <div className={`pro-desc-cont pro-desc-cont-${device}`}>
            <p
              id="pro-description"
              className={` pro-desc pro-desc-${device}`}
            ></p>

            <button
              className={`pro-spec-btn pro-spec-btn-${device}`}
              onClick={() => {
                setModal(<Modal_NewMsj></Modal_NewMsj>);
              }}
            >
              SEND A PRIVATE MESSAGE
            </button>
            <br />
            <button className={`pro-spec-btn pro-spec-btn-${device}`}>
              GET HER NUMBER
            </button>
          </div>
        </>
      );
    } else {
      return "";
    }
  };
  return (
    <div>
      <div className={`pro-close`}>
        <button
          onClick={() => {
            move_to_main();
          }}
          className={`pro-close-btn`}
        >
          BACK
        </button>
      </div>

      {prevent_disclaim()}
    </div>
  );
}

/*



<div className={`mpg-ads-cont mpg-ads-cont-${device}`}>
<div className={`ads-img-cont ads-img-cont-${device}`}>
  <h3 onClick={() => {move_to_waifu(w_id)}} className={`ads-img ads-img-${device}`}></h3>
</div>

<div className={`ads-cont-tit ads-cont-tit-${device}`}>
  <h3 onClick={() => {move_to_waifu(w_id)}} className={`ads-tit ads-tit-${device}`}>
    THOKA LA WAIFU MAS WAIFU
  </h3>
</div>
<div className={`ads-desc-cont ads-desc-cont-${device}`}>
  <p className={` ads-desc ads-desc-${device}`}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
    ullam quasi animi harum debitis omnis voluptate perferendis, ipsum
    vel, in exercitationem? Laudantium, possimus architecto accusamus ut
    ipsum vel, in exercitationem? Laudantium, possimus architecto
    accusamus ut vel aspernatur natus illo? Los architecto accusamus ut
    vel aspernatur natus illo? voluptate perferendis, ipsum vel, in
    exercitationem? Laudantium, possimus architecto accusamus ut vel ?
    Laudantium, possimus architecto accusamus ut vel aspernatur natus
    illo? Los architecto accusamus ut vel aspernatur natus illo?
    voluptate perferendis, ipsum vel, in exercitationem? Laudantium,
    possimus architecto accusamus ut vel aspernatur natus illo? ullam
    quasi animi harum debitis
  </p>
</div>
</div>

*/
