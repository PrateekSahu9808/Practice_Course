import React, { createContext, useContext } from "react";
import { useAccordionContext } from "./Accordion";
const AccordionItemContext = createContext();
export function useAccordionItemContext(){
  const ctx=  useContext(AccordionItemContext);
  if(!ctx){
    throw new Error("useAccordionContext must be used within an AccordionItem");
  }
  return ctx;
}
const AccordionItem = ({id, className, title, children }) => {
  //   const { openItemId, openItem, closeItem, toggleItem } = useAccordionContext();
  //   const isOpen = openItemId === id;
  //    function handleClick(){
  //     // if(isOpen){
  //     //     closeItem(id)
  //     // }else{
  //     //     openItem(id)
  //     // }
  //     toggleItem(id)
  //    }

  return (
    <AccordionItemContext.Provider value={id}>
      <li className={className}>{children}</li>
    </AccordionItemContext.Provider>
  );
};

export default AccordionItem;
