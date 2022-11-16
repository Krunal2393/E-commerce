import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [inc, setInc] = useState(0);
   const [Productdata, setProductdata,id] = useState([]);
   const [IncItem,setIncITem ] = useState(1)

  const Allproducts =[
    {
      id:1,
      img:"/images/sonycamera.png",
      Title:"sony hd lens",
      Prize:"$ 1800",
     amount:1,
    },
    {
      id:2,
      img:"/images/headphone.png",
      Title:"boat headphone",
      Prize:"$ 2500",
      amount:1,
    },
    {
      id:3,
      img:"/images/watch.webp",
      Title:"Smart Watch",
      Prize:"$ 2800",
      amount:1,
    },
    
  ];
  return (
    <StateContext.Provider
      value={{
        Allproducts,
        inc,
        setInc,
        setProductdata,
        Productdata,
        id,
        IncItem,
        setIncITem,                                
      }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
