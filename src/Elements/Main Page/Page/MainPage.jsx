import { useRezise } from "../../../Context/Mobile";
import "../Style/MainPage_manifiest.css";
import "../Style/ADScard_manifiest.css";
import background from "../../../media/background clasiffi.png";
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

      <div className={`mpg-ads-cont mpg-ads-cont-${device}`}>
        <div className={`ads-img-cont ads-img-cont-${device}`}>
          <h3 className={`ads-img ads-img-${device}`}></h3>
        </div>

        <div className={`ads-cont-tit ads-cont-tit-${device}`}>
          <h3 className={`ads-tit ads-tit-${device}`}>
            THOKA LA WAIFU MAS WAIFU
          </h3>
        </div>
        <div className={`ads-desc-cont ads-desc-cont-${device}`}>
          <p className={` ads-desc ads-desc-${device}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            ullam quasi animi harum debitis omnis voluptate perferendis, ipsum
            vel, in exercitationem? Laudantium, possimus architecto accusamus ut
            vel aspernatur natus illo? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Facere ullam quasi animi harum debitis omnis
            voluptate perferendis, ipsum vel, in exercitationem? Laudantium,
            possimus architecto accusamus ut vel aspernatur natus illo? Los
            architecto accusamus ut vel aspernatur natus illo? voluptate
            perferendis, ipsum vel, in exercitationem? Laudantium, possimus
            architecto accusamus ut vel aspernatur natus illo? ullam quasi animi
            harum debitis omnis voluptate perferendis, ipsum vel, in
            exercitationem? Laudantium, possimus architecto accusamus ut vel
            aspernatur natus illo? Los architecto accusamus ut vel aspernatur
            natus illo? voluptate perferendis, ipsum vel, in exercitationem?
            Laudantium, possimus architecto accusamus ut vel aspernatur natus
            illo? ullam quasi animi harum debitis omnis voluptate perferendis,
            ipsum vel, in exercitationem? Laudantium, possimus architecto
            accusamus ut vel aspernatur natus illo? Los architecto accusamus ut
            vel aspernatur natus illo? voluptate perferendis, ipsum vel, in
            exercitationem? Laudantium, possimus architecto accusamus ut vel
            aspernatur natus illo? in exercitationem? Laudantium, possimus
            architecto accusamus ut vel aspernatur natus illo? Los architecto
            accusamus ut vel aspernatur natus illo? voluptate perferendis, ipsum
            vel, in exercitationem? Laudantium, possimus architecto accusamus ut
            vel aspernatur natus illo? ullam quasi animi harum debitis in
            exercitationem? Laudantium, possimus architecto accusamus ut vel
            aspernatur natus illo? Los architecto accusamus ut vel aspernatur
            natus illo? voluptate perferendis, ipsum vel, in exercitationem?
            Laudantium, possimus architecto accusamus ut vel aspernatur natus
            illo? ullam quasi animi harum debitis in exercitationem? Laudantium,
            possimus architecto accusamus ut vel aspernatur natus illo? Los
            architecto accusamus ut vel aspernatur natus illo? voluptate
            perferendis, ipsum vel, in exercitationem? Laudantium, possimus
            architecto accusamus ut vel aspernatur natus illo? ullam quasi animi
            harum debitis
          </p>
        </div>
      </div>
    </div>
  );
}
