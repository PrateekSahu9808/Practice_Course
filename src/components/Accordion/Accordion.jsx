import React, { createContext, useContext, useState } from 'react'
import AccordionItem from './AccordionItem';
import AccordionTitle from './AccordionTitle';
import AccordionContent from './AccordionContent';


const AccordionContext=createContext();
export function useAccordionContext(){
  const ctx=  useContext(AccordionContext);
  if(!ctx){
    throw new Error("Accordion-related components must be wrapped by <Accordiaomn/> ")
  }
  return ctx
}
const Accordion = ({children,className}) => {
    const[openItemId,setOpenItemId]=useState()
    // const openItem=(id)=>{
    //     setOpenItemId(id)
    // }
    // const closeItem=()=>{
    //  setOpenItemId(null)
    // }

    const toggleItem=(id)=>{
        setOpenItemId(prevId=> prevId===id ? null : id)
    }
    const contextValue={
        openItemId,
        // openItem,
        // closeItem,
        toggleItem
    }
  return (
    <AccordionContext.Provider value={contextValue}>
   <ul className={className}>
      {children}
   </ul>
   </AccordionContext.Provider>
  )
}


export default Accordion

Accordion.Item=AccordionItem;
Accordion.Title=AccordionTitle;
Accordion.Content = AccordionContent;
