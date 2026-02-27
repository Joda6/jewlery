'use client'
import { createContext, useState } from "react";
export const searchcont = createContext()

export default function Searchprovider({children}) {
   const[search , setsearch] = useState("")

  return(
    <searchcont.Provider value={{search,setsearch}}>
        {children}
    </searchcont.Provider>
  )

}