import React from "react";
import EventForm from './../components/EventForm';
import { useLoaderData, useRouteLoaderData } from "react-router-dom";

const EditEvent = () => {
  const data=  useRouteLoaderData('event-details')
  const event = data.event
  return <EventForm event={event} method='patch'/>;
};

export default EditEvent;
