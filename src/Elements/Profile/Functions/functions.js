import { get_waifus } from "../../../db/waifu.class";

const waifus =  get_waifus();
const basicURL = "https://drive.google.com/uc?export=view&id=";
export const move_to_main = (w_id) => {
    sessionStorage.setItem("id", w_id);
    window.location.href = "/";
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
  
  export const get_waifu_data =()=>{
      const id = sessionStorage.getItem("id");
      if(id !== null){
        return waifus.filter(wa  => wa.id === parseInt(id))[0];
      }else{
        move_to_main()
      }
  }
  