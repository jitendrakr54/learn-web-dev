import EventForm from "../components/EventForm";

function NewEventPage() {
  console.log("NewEventPage");
  return <EventForm method="post" />;
}

export default NewEventPage;
