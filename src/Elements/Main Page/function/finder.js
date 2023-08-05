import { get_waifus } from "../../../db/waifu.class";

const getTags = ()=>{

     const waifus =get_waifus();
     console.log(waifus);
};

export const finder_system =(toFind)=>{
    getTags
}