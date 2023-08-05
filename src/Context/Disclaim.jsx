import { createContext, useContext } from "react";
import { github_url } from "../App";

export const Disclaim_Contetext = createContext();
export const getDisclaim = () => useContext(Disclaim_Contetext);

const Disclaim_Provider = ({ children }) => {
  const router_code = process.env.NODE_ENV === "development" ? "" : "#/";


  const validate_disclaim = () => {
    const user_response = JSON.parse(sessionStorage.getItem("disclaim"));
    const origin = window.location.href;
    sessionStorage.setItem('origin', origin)
    if (user_response === null) {
        let url = github_url + router_code + "diclaim";
        window.location.href = url;
        setTimeout(() => {
            window.location.reload();
          }, 200);
    }
  };

  return (
    <Disclaim_Contetext.Provider
      value={{
        validator: validate_disclaim,
      }}
    >
      {children}
    </Disclaim_Contetext.Provider>
  );
};

export default Disclaim_Provider;
