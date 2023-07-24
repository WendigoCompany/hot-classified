import { useRezise } from "../../../Context/Mobile";
import "../Style/ProfilePage_manifiest.css";
import "../Style/ADScard_manifiest.css";
import background from "../../../media/t1.png";
import { get_waifus } from "../../../db/waifu.class";
import {
  get_waifu_data,
  hide,
  move_to_main,
  show,
} from "../Functions/functions";

const basicURL = "https://drive.google.com/uc?export=view&id=";

const router_code = process.env.NODE_ENV === "development" ? "" : "#";

let waifu_data;

waifu_data = get_waifu_data();

export default function Profile() {
  const device = useRezise();

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

      <div
        onClick={(e) => {
          hide(e);
        }}
        id="pro-img-visu-cont"
        className={`pro-img-visu-cont  pro-img-visu-cont-${device}`}
      >
        <button className={`pro-close-btn pro-close-btn-${device}`}>X</button>
        <img
          id="pro-sho-img"
          className={`pro-img-visu pro-img-visu-${device}`}
          alt=""
        />
      </div>

      <div className={`pro-title-cont pro-title-cont-${device}`}>
        <h1 className={`pro-title pro-title-${device}`}>
          {"hot classified".toUpperCase()}
        </h1>
      </div>

      <div className={`pro-ads-cont pro-ads-cont-${device}`}>
        <h3
          onClick={() => {
            show(waifu_data.img_main);
          }}
          style={{
            backgroundImage : `url('${basicURL + waifu_data.img_main}')`
          }}
          className={`pro-ads-img pro-ads-img-${device}`}
        ></h3>
      </div>

      <div className={`pro-gall-cont pro-gall-cont-${device}`}>
        {waifu_data.img_gall.map((img) => (
          <h3
            onClick={() => {
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
        <p className={` ads-desc ads-desc-${device}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ullam
          quasi animi harum debitis omnis voluptate perferendis, ipsum vel, in
          exercitationem? Laudantium, possimus architecto accusamus ut ipsum
          vel, in exercitationem? Laudantium, possimus architecto accusamus ut
          vel aspernatur natus illo? Los architecto accusamus ut vel aspernatur
          natus illo? voluptate perferendis, ipsum vel, in exercitationem?
          Laudantium, possimus architecto accusamus ut vel ? Laudantium,
          possimus architecto accusamus ut vel aspernatur natus illo? Los
          architecto accusamus ut vel aspernatur natus illo? voluptate
          perferendis, ipsum vel, in exercitationem? Laudantium, possimus
          architecto accusamus ut vel aspernatur natus illo? ullam quasi animi
          harum debitis
        </p>
      </div>
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
