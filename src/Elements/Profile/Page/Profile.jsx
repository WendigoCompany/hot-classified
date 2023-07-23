import { useRezise } from "../../../Context/Mobile";
import "../Style/ProfilePage_manifiest.css";
import "../Style/ADScard_manifiest.css";
import background from "../../../media/t1.png";

const router_code = process.env.NODE_ENV === "development" ? "" : "#";

export const show = (img_id) => {
  document.getElementById("pro-img-visu-cont").style.display = "block";
  document.getElementById("pro-img-visu-cont").style.position = "sticky";
  setTimeout(() => {
    document.getElementById("pro-img-visu-cont").style.opacity = 1;
  }, 200);
};

export const hide = (e) => {
  if (e.target.id !== "pro-sho-img") {
    document.getElementById("pro-img-visu-cont").style.opacity = 0;
    setTimeout(() => {
      document.getElementById("pro-img-visu-cont").style.display = "none";
    }, 200);
  }
};

export default function Profile() {
  const device = useRezise();

  return (
    <div>

    <div>
      <button></button>
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
          src={background}
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
            show();
          }}
          className={`pro-ads-img pro-ads-img-${device}`}
        ></h3>
      </div>

      <div className={`pro-gall-cont pro-gall-cont-${device}`}>
        <h3
          onClick={() => {
            show();
          }}
          className={`pro-gall-img pro-gall-img-${device}`}
        ></h3>
      </div>

      <div className={`pro-desc-cont pro-desc-cont-${device}`}></div>
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
