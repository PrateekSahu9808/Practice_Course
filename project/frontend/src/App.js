import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Events, { eventsloader } from "./pages/Events";
import EventDetail, {
  LoaderEvent,
  action as deleteEventAction,
} from "./pages/EventDetail";
import NewEvent from "./pages/NewEvent";
import EditEvent from "./pages/EditEvent";
import Root from "./pages/Root";
import EventsRoot from "./pages/EventsRoot";
import Error from "./pages/Error";
import { action as manipulateAction } from "./components/EventForm";

import NewsletterPage, { action as newsletterAction } from "./pages/Newsletter";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "events",
        element: <EventsRoot />,
        children: [
          {
            index: true,
            element: <Events />,
            loader: eventsloader,
          },
          {
            path: ":eventId",
            id: "event-details",
            loader: LoaderEvent,
            children: [
              {
                index: true,
                element: <EventDetail />,
                action: deleteEventAction,
              },
              {
                path: "edit",
                element: <EditEvent />,
                action: manipulateAction,
              },
            ],
          },
          { path: "new", element: <NewEvent />, action: manipulateAction },
        ],
      },
      {
        path: "newsletter",
        element: <NewsletterPage />,
        action: newsletterAction,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
