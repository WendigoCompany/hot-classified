import { github_url } from "../../../App";
import { get_waifus } from "../../../db/waifu.class";
import { getParams } from "../../Main Page/function/params";
import { get_img_index, set_img_index } from "./img_index";



const waifus = get_waifus();
const basicURL =
"https://raw.githubusercontent.com/PowderMaid/classificated/main/";

const router_code = process.env.NODE_ENV === "development" ? "" : "#";

export const move_to_main = (w_id) => {
  const params = {
    page: sessionStorage.getItem("page"),
    filter: sessionStorage.getItem("filter"),
  };

  let url = github_url + router_code;

  url += !github_url.includes("localhost") ? "/?page=" : "?page=";
  url +=
    params.page === undefined || params.page === "NaN" || params.page === null
      ? 0
      : params.page;
  url +=
    params.filter !== "" && params.filter !== null
      ? `&filter=${params.filter}`
      : "";
  window.location.href = url;

  // if(!github_url.includes("localhost")){
  //   window.location.href = github_url + router_code+"/?page=" +params.page + (params.filter !== "") ?(`&filter=${params.filter}`) : ()

  // }else{
  //   window.location.href = github_url + router_code+"?page=" +params.page + (params.filter !== "") ?(`&filter=${params.filter}`) : ()    }
};

export const show = (img) => {
  document.getElementById("pro-sho-img").src = basicURL + img;
  document.getElementById("pro-img-visu-cont").style.display = "block";
  document.getElementById("pro-img-visu-cont").style.position = "sticky";
  setTimeout(() => {
    document.getElementById("pro-img-visu-cont").style.opacity = 1;
  }, 200);
};

export const changeImg = (operator, waifu_data) => {
  let index = get_img_index();
  const gallery = waifu_data.img_gall;
  if(operator === 'next'){
    index++
    if(gallery[index] === undefined){
      index = 0;
    }
    
  }else if(operator === 'prev'){
    index--
    if(gallery[index] === undefined){
      index = gallery.length - 1;
    }
  }
   document.getElementById("pro-sho-img").src = basicURL + gallery[index];
   set_img_index(index);
};
export const hide = (e) => {
  if (e.target.id === "pro-img-visu-cont" || e.target.id === "pro-close-btn") {
    document.getElementById("pro-img-visu-cont").style.opacity = 0;
    setTimeout(() => {
      document.getElementById("pro-img-visu-cont").style.display = "none";
    }, 200);
  }
};

export const get_waifu_data = (id) => {
  if (id !== undefined) {
    return waifus.filter((wa) => wa.id === parseInt(id))[0];
  } else {
    move_to_main();
  }
};
