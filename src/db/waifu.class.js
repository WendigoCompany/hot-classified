export class Waifu {
  constructor() {
    this.img_main = "";
    this.img_gall = [];
    this.desc_prev = "";
    this.desc_full = "";
    this.title = "";
    this.id = 0;
    this.tags = []; 
  }
}

 const waifus = [];

export const add_waifu = (waifu) => {
  waifus.push(waifu);
};

export const get_waifus = () => {
  return waifus;
};
