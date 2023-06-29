import { useRouteLoaderData } from "react-router-dom";

import EventForm from "../components/EventForm";

function EditEventPage() {
  console.log("EditEventPage");
  console.log("EditEventPage");
  console.log("EditEventPage");

  const data = useRouteLoaderData("event-detail");

  return <EventForm method="patch" event={data.event} />;
}

export default EditEventPage;
