import React, { Suspense } from "react";
import {
  Await,
  defer,
  json,
  redirect,
  useLoaderData,
  useParams,
  useRouteLoaderData,
} from "react-router-dom";
import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";

const EventDetail = () => {
  // const data = useRouteLoaderData('event-details');
  const {event,events} = useRouteLoaderData('event-details');
  console.log(events)
  return (
    <>
      <Suspense fallback={<p>Loading......</p>}>
        <Await resolve={event}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>

      <Suspense fallback={<p>Loading......</p>}>
        <Await resolve={events}>
        {(loadedEvents) => {
      console.log(loadedEvents); // Debugging: Check the data
      return <EventsList events={loadedEvents} />;
    }} {/* Pass the data correctly */}
        </Await>
      </Suspense>
    </>
  );
};

export default EventDetail;
async function loadEvent(id){
  try {
    const response = await fetch("http://localhost:8080/events/" + id);

    if (!response.ok) {
      throw json(
        { message: "Could not fetch details for the selected event..." },
        { status: 500 }
      );
    }

    const resData = await response.json();
    return resData.event;
  } catch (error) {
    throw error;
  }
}
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
    console.log("Fetched Events:", resData.events);
    return resData.events;
    // const res = new Response("any data",{status:201})
    // return res

  }
}
export async function LoaderEvent({ request, params }) {
  const id = params.eventId;
  const data = defer({
    event: loadEvent(id),
    events: loadEvents(),
  });

  console.log("Loader Data:", data); // Debugging: Ensure loader returns correctly
  return data;

 
}

// export async function action({params,request}){
//   const eventID= params.eventID
//   console.log("🚀 ~ action ~ eventID:", eventID)
//   const response = await fetch("http://localhost:8080/events/"+ eventID,{
//     method:request.method
//   })
//   if (!response.ok) {
//     throw json(
//       { message: "Could not delete selected event..." },
//       { status: 500 }
//     );
//   }
//   return redirect("/events")
// }
export async function action({ params, request }) {
  const eventId = params.eventId; // Ensure correct case here
  console.log("🚀 ~ action ~ eventId:", eventId);

  const response = await fetch("http://localhost:8080/events/" + eventId, {
    method: request.method,
  });

  if (!response.ok) {
    throw json(
      { message: "Could not delete selected event..." },
      { status: 500 }
    );
  }

  return redirect("/events");
}
