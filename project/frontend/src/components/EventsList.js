import { Link, useLoaderData } from "react-router-dom";
import classes from "./EventsList.module.css";

function EventsList({ events }) {
  console.log("🚀 ~ EventsList ~ events:", events);
  // we can use here also
  // const events = useLoaderData()
  if (!events || events.length === 0) {
    return <p>No events found.</p>; // Handle case where events array is empty
  }
  return (
    <div className={classes.events}>
      <h1>All Events</h1>
      <ul className={classes.list}>
        {events.map((event) => (
          <li key={event.id} className={classes.item}>
            <Link to={event.id}>
              <img src={event.image} alt={event.title} />
              <div className={classes.content}>
                <h2>{event.title}</h2>
                <time>{event.date}</time>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventsList;
