import React from "react";
import EventForm from "../components/EventForm";
import { json, redirect } from "react-router-dom";

const NewEvent = () => {

  return <EventForm method='post'/>
};

export default NewEvent;


// export  async function action ({request,params}){
//   const data =await request.formData()
//    console.log("🚀 ~ action ~ data:", data)
//    const eventData={
//     title:data.get('title'),
//     description:data.get('description'),
//     date:data.get('date'),
//     image:data.get('image')
//    }
//   const response = await fetch("http://localhost:8080/events",{
//     method:'POST',
//     headers:{'Content-Type' :'application/json'},
//     body:JSON.stringify(eventData)
//   })
//   if(response.status ===422){
//     return response
//   }
//   if(!response.ok){
//    throw json({message :'Could not save event data......'},{status :500})

//   }
//  return redirect("/events")
  
// }
