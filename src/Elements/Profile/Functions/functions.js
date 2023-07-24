import { github_url } from "../../../App";
import { get_waifus } from "../../../db/waifu.class";

const waifus =  get_waifus();
const basicURL = "https://raw.githubusercontent.com/WendigoCompany/Assets/main/Waifu%20Classicated/";

const router_code = process.env.NODE_ENV === "development" ? "" : "#";


export const move_to_main = (w_id) => {


    if(!github_url.includes("localhost")){
      window.location.href = github_url + router_code+"/?page=1";
  
    }else{
      window.location.href = github_url + router_code+"?page=1";    }
  

  };
  
  
  export const show = (img) => {
    document.getElementById("pro-sho-img").src =basicURL+ img;
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
  
  export const get_waifu_data =(id)=>{
      if(id !== undefined){
        return waifus.filter(wa  => wa.id === parseInt(id))[0];
      }else{
        move_to_main()
      }
  }
  