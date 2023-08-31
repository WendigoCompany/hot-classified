import { createContext, useContext } from "react";

export const Modal_Context = createContext();
export const useModal = ()=> useContext(Modal_Context);


const Modal_Provider =({children,setModal})=>{
    return <Modal_Context.Provider  value={setModal}>{children}</Modal_Context.Provider>
}

export default Modal_Provider