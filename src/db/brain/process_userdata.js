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
  dialog.txt = dialog.txt[random_dialog(dialog.txt.length - 1)].replace(
    "{player}",
    username
  );
  return dialog;
};

const descompse_txt = (txt) => {
  basic_symbols.map((sy) => {
    txt = txt.replaceAll(sy, "");
  });
  return txt;
};

const search_coincidences = (txt, msj) => {
  let validator = false;
  msj = msj.toLowerCase();
  txt.map((txt) => {
    txt = txt.toLowerCase();
    if (msj.includes(txt)) {
      validator = true;
    }
  });
  return validator;
};

const search_dialog = (chat, msj) => {
  let dialog_id = -1;
  chat.map((txt) => {
    if (search_coincidences(txt.key_words, msj)) {
      dialog_id = txt.id;
    }
  });
  return dialog_id;
};

const change_dialog = (dialog, id) => {
  let data = JSON.parse(sessionStorage.getItem("msj"));
  let index = data.ids.filter((wai) => wai.wid === id)[0];
  index = data.ids.indexOf(index);
  data.ids[index].mid = dialog;
  sessionStorage.setItem("msj", JSON.stringify(data));

  // data = data.ids.filter((wai) => wai.wid === id)[0];
  // data.mid = dialog;
  // sessionStorage.setItem("msj", JSON.stringify(data))
};

export const process_user_msj = (msj, id) => {
  let waifu = get_waifus();
  waifu = waifu.filter((w) => w.id === id)[0];
  const chat = JSON.parse(JSON.stringify(waifu.chat));
  msj = descompse_txt(msj);
  const dialog = search_dialog(chat, msj);
  change_dialog(dialog, id);
  return dialog;
};

const random_dialog = (max) => {
  return Math.floor(Math.random() * max);
};

export const reload_chat = (id) => {
  if (id !== undefined) {
    let waifu = get_waifus();
    waifu = waifu.filter((w) => w.id === id)[0];

    let dialog = JSON.parse(sessionStorage.getItem("msj")).ids;
    dialog = dialog.filter((w) => w.wid === waifu.id)[0];
    dialog = waifu.chat.filter((cid) => cid.id === dialog.mid)[0];

    // const len = waifu.chat[dialog].txt.length;
    // //  console.log(waifu.chat[dialog].txt);
    // console.log(dialog=== -1);
    //   const text =

    //       ?
    //       : ;1

    // if(){

    // }

    let txt;

    try {
      const len = dialog.txt.length;
      const index = random_dialog(len);
      txt = dialog.txt[index];

      // console.log( dialog.mid);
      // const len = waifu.chat[dialog.mid].txt.length;
      // const index = random_dialog(len);
      // txt = waifu.chat[dialog.mid].txt[index];
    } catch (error) {}

    animation_change_dialog(txt);

    // exec_async(() => {
    //   document.getElementById("dialog-txt-chat").textContent = txt;
    // });
  }
};

const load_animation = (txt) => {
  document.getElementById("chat-btn").disabled = true;
  let word_ind = 0;

  let int = setInterval(() => {
    const dia = txt.substring(0, word_ind);
    document.getElementById("dialog-txt-chat").textContent = dia;
    if(word_ind === (txt.length)){
      clearInterval(int)
      document.getElementById("chat-btn").disabled = false;
    }else{
      word_ind++
    }
  }, 25);

  // setTimeout(() => {
  //   document.getElementById("chat-btn").disabled = false;
  // }, 5000);
};

const animation_change_dialog = (txt) => {
  let breaker = "";
  document.body.style.cursor = "wait";
  let int = setInterval(() => {
    try {
      document.getElementById("dialog-txt-chat").textContent = " ";
      load_animation(txt);

      document.body.style.cursor = "default";
      clearInterval(int);
    } catch (error) {}
  }, 500);
};
// document.body.style.cursor= "default";
