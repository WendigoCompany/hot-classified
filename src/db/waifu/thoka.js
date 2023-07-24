import { Waifu, add_waifu, get_waifus } from "../waifu.class";

export default function create_thoka_yatogami() {
  const main_data = new Waifu();
  main_data.id = 0;
  main_data.title = "Tohka!";
  main_data.desc_full = `
  Hello! My name is Tohka! <br>
  -TURN DOWN TO <br>
  -TU TUTURUTU TURUTU RU  <br>
   -TROLEO HERMANO <br>
  `;
  main_data.desc_prev = `Hello! My name is Tohka!...`;
  main_data.img_gall = [
    "yato_tohka/1.png",
    "yato_tohka/2.png",
    "yato_tohka/3.png",
    "yato_tohka/4.png",
    "yato_tohka/5.png",
  ];
  main_data.img_main = "yato_tohka/1.png";
  main_data.tags = [
    "yatogami tōka",
    "yatogami tohka",
    "yatogami_tōka",
    "yatogami_tohka",
    "tōka",
    "tohka",
    "yatogami",
    "date_a_live",
    "date a live",
    "spirits",
    "夜刀神 十香",
    "夜刀神_十香",
    "夜刀神",
    "十香",
    "やとがみ とおか",
    "やとがみ_とおか",
    "とおか",
    "やとがみ",
    "精霊",
    "デート・ア・ライブ",
    "デートアライブ",
    "约会大作战",
  ];

  add_waifu(main_data);
}
