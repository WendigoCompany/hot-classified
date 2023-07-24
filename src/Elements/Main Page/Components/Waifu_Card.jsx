import { useRezise } from "../../../Context/Mobile";

const move_to_waifu = (w_id) => {
  sessionStorage.setItem("id", w_id);
  window.location.href = router_code + "/profile";
};

const router_code = process.env.NODE_ENV === "development" ? "" : "#";

const basicURL = "https://drive.google.com/uc?export=view&id=";



export default function Waifu_Card({ waifu_data }) {
  const device = useRezise();

 return <div key={`k-${waifu_data.id}`}>
    <div className={`mpg-ads-cont mpg-ads-cont-${device}`}>
      <div className={`ads-img-cont ads-img-cont-${device}`}>
        <h3
          onClick={() => {
            move_to_waifu(waifu_data.id);
          }}
          style={{
            backgroundImage : `url('${basicURL + waifu_data.img_main}')`
          }}
          className={`ads-img ads-img-${device}`}
        ></h3>
      </div>

      <div className={`ads-cont-tit ads-cont-tit-${device}`}>
        <h3
          onClick={() => {
            move_to_waifu(waifu_data.id);
          }}
          className={`ads-tit ads-tit-${device}`}
        >
       {waifu_data.title}
        </h3>
      </div>
      <div className={`ads-desc-cont ads-desc-cont-${device}`}>
        <p className={` ads-desc ads-desc-${device}`}>
          {waifu_data.desc_prev}
        </p>
      </div>
    </div>
  </div>;
}
