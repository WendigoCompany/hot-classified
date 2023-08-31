import { useRezise } from "../../../Context/Mobile";
import Msj_Btn from "./Msj_Button";
import "../Style/banner.manifiest.css";


export default function User_Banner({}) {
  const device = useRezise();
  return <div className={`mpg-user-banner mpg-user-banner-${device}`}>
        <Msj_Btn></Msj_Btn>
  </div>;
}
