import { github_url } from "../../../App";

const getPage = (param) => {
    if (param == undefined) {
      return 0;
    } else {
      return parseInt(param.replace("page=", ""));
    }
  };
  
  const getFilter = (param) => {
    if (param == undefined) {
      return "";
    } else {
      return decodeURI(param.replace("filter=", ""));
    }
  };
  
  const searchParam = (idParam, arrParams) => {
    const aux = arrParams.filter((param) => param.includes(idParam))[0];
    if (aux !== undefined) {
      return arrParams.indexOf(aux);
    } else {
      return -1;
    }
  };
  
  const paramsDerivations = (arrParams) => {
    let params = {};
    let paramsIndex = {
      page: searchParam("page", arrParams),
      perro: searchParam("perro", arrParams),
      filter: searchParam("filter", arrParams),
    };
  
    params.page = getPage(arrParams[paramsIndex.page]);
    params.filter = getFilter(arrParams[paramsIndex.filter]);
    return params;
  };
  export const getParams = () => {
    let params = window.location.href;
    params = params.replace(github_url + "#", "");
    params = params.replace(github_url, "");
    if(!github_url.includes("localhost")){
      params = params.replace("/?", "");
    }else{
      params = params.replace("?", "");
  
    }
  
    params = params.split("&");
    const paramsFinal = paramsDerivations(params);

  
  return paramsFinal
  };
  