import exec_async from "../../functions/asyn execution";
import { get_waifus } from "../waifu.class";

let username = "";
let basic_symbols = `,.!'"¡?¿()[]{}-`;
basic_symbols = basic_symbols.split("");

export const get_username = () => {
  return username;
};

export const process_username = (id) => {
  let data = JSON.parse(sessionStorage.getItem("msj"));
  data = data.ids.filter((wai) => wai.wid === id)[0];
  username = data.username;
};

export const process_msj = (msj) => {
  const dialog = JSON.parse(JSON.stringify(msj));
  dialog.txt = dialog.txt.replace("{player}", username);
  return dialog;
};

const descompse_txt = (txt) => {
basic_symbols.map(sy => {
    txt = txt.replaceAll(sy, "")
})
return txt
};

const search_coincidences =(txt,msj)=> {
   
    let validator = false;
    msj = msj.toLowerCase();
    txt.map(txt => {
        txt = txt.toLowerCase();
        if(msj.includes(txt)){
            validator = true;
        }
    })
    return validator
}

const search_dialog = (chat , msj) => {
    let dialog_id = -1;
    chat.map(txt => {
        if(search_coincidences(txt.key_words,msj)){
            dialog_id = txt.id;
        }
    })
return dialog_id
};


const change_dialog =(dialog, id)=>{
    let data = JSON.parse(sessionStorage.getItem("msj"));
    let index =  data.ids.filter((wai) => wai.wid === id)[0];
    index = data.ids.indexOf(index);
    data.ids[index].mid = dialog;
    sessionStorage.setItem("msj", JSON.stringify(data))

    // data = data.ids.filter((wai) => wai.wid === id)[0];
    // data.mid = dialog;
    // sessionStorage.setItem("msj", JSON.stringify(data))
}

export const process_user_msj = (msj, id) => {
  let waifu = get_waifus();
  waifu = waifu.filter((w) => w.id === id)[0];
  const chat = JSON.parse(JSON.stringify(waifu.chat));
  msj = descompse_txt(msj);
  const dialog = search_dialog(chat , msj);
  change_dialog(dialog,id);
  return dialog;
};

export const reload_chat =(dialog, id)=>{
    let waifu = get_waifus();
    waifu = waifu.filter((w) => w.id === id)[0];
    const text = (dialog === -1) ? ("Error loading dialog... Sorry =_(") : ( waifu.chat[dialog].txt);
   
    exec_async(()=> {
        document.getElementById("dialog-txt-chat").textContent = text;
    });
}
