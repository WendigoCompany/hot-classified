import { Waifu, add_waifu, get_waifus } from "../waifu.class";

export default function create_thoka_yatogami() {
  const main_data = new Waifu();
  main_data.id = 0;
  main_data.title = "Tohnka!";
  main_data.desc_full = `
  Hello! My name is Tohka! <br>
  -TURN DOWN TO <br>
  -TU TUTURUTU TURUTU RU  <br>
   -TROLEO HERMANO <br>
  `;
  main_data.desc_prev = `Hello! My name is Tohka!...`;
  main_data.img_gall = [
    "1anpof9tpKol7QaJlWPLRS_tfU6t5FFBJ",
    "1anpof9tpKol7QaJlWPLRS_tfU6t5FFBJ",
    "1TeGrroY0myeuBIm1WZaG7y5nAsGPt0Fd",
    "1anpof9tpKol7QaJlWPLRS_tfU6t5FFBJ",
    "1anpof9tpKol7QaJlWPLRS_tfU6t5FFBJ",
    "1TeGrroY0myeuBIm1WZaG7y5nAsGPt0Fd",
  ];
  main_data.img_main = "1anpof9tpKol7QaJlWPLRS_tfU6t5FFBJ";

  add_waifu(main_data);
}
