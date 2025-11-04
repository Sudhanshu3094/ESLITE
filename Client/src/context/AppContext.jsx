import { createContext } from "react";
import { engineers } from "../assets/assets";
export const AppContext = createContext()

const AppContextProvider = (props)=>{


    const currencySymbol = '$'

    const value ={
        engineers,
        currencySymbol
    }
    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}
export default AppContextProvider