import React, { Suspense, useEffect, useState } from "react";
import { Await, defer, json, Link } from "react-router-dom";
import EventsList from "./../components/EventsList";
import { useLoaderData } from "react-router-dom";

const Events = () => {
  // const data = useLoaderData();
  const {events} = useLoaderData();
  // const events = data.events;
  // if(data.isError){
  //   return <p>{data.message}</p>

  // }
  // return (
  //   <>
  //     <EventsList events={events} />
  //   </>
  // );

  return (
    <Suspense fallback={<p style={{textAlign:'center'}}>Loading...</p>}>
      <Await resolve={events}>
    {(loadedEvents)=><EventsList events={loadedEvents}/>}
  </Await>
    </Suspense>
  )
};

export default Events;
// making code more readable
async function loadEvents(){
    //its not react components its feature provided by react
    const response = await fetch("http://localhost:8080/events");

    if (!response.ok) {
      // return {isError: true,message:'could not fetch events'};
      // throw {message:'Could not fetch events'}
      // throw new Response(JSON.stringify({ message: "could not fetch events" }), {
      //   status: 500,
      // });
  
      return json({ message: "could not fetch events" }, {
     status: 500 })
    } else {
      // return response;
      const resData = await response.json();
      return resData.events;
      // const res = new Response("any data",{status:201})
      // return res

    }
}
export  function eventsloader() {
 return defer({
    events:loadEvents(),
  })
}
