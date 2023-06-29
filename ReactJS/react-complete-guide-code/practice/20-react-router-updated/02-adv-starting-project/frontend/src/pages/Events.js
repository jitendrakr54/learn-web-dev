// ****************************************************** Showing events using DUMMY_EVENTS
/*
import { Link } from "react-router-dom";
const DUMMY_EVENTS = [
  { id: "e1", title: "Events 1" },
  { id: "e2", title: "Events 2" },
  { id: "e3", title: "Events 3" },
];

const EventsPage = () => {
  return (
    <>
      <h1>Events Page</h1>
      <ul>
        {DUMMY_EVENTS.map((event) => (
          <li key={event.id}>
            <Link to={event.id}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default EventsPage;
*/

// ****************************************************** Fetching events from backend
/*
import { useEffect, useState } from "react";

import EventsList from "../components/EventsList";

function EventsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedEvents, setFetchedEvents] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchEvents() {
      setIsLoading(true);
      const response = await fetch("http://localhost:8080/events");

      if (!response.ok) {
        setError("Fetching events failed.");
      } else {
        const resData = await response.json();
        setFetchedEvents(resData.events);
      }
      setIsLoading(false);
    }

    fetchEvents();
  }, []);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
      </div>
      {!isLoading && fetchedEvents && <EventsList events={fetchedEvents} />}
    </>
  );
}
export default EventsPage;
*/

// ****************************************************** Data Fetching with a loader()
/* 
import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  const events = useLoaderData();
  return <EventsList events={events} />;
}
export default EventsPage;
*/

// ****************************************************** More loader() data usage
/* 
import EventsList from "../components/EventsList";

function EventsPage() {
  return <EventsList />;
}
export default EventsPage;
*/

// ****************************************************** Where should loader() code be stored?
/*
import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  const events = useLoaderData();
  return <EventsList events={events} />;
}

export default EventsPage;

export const loader = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // ...
  } else {
    const resData = await response.json();
    return resData.events;
  }
};
*/

// ****************************************************** Returning responses in loader()s
/*
import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  const response = useLoaderData();
  const events = response.events;
  console.log(events);
  return <EventsList events={events} />;
}

export default EventsPage;

export const loader = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // ...
  } else {
    return response;
  }
};
*/

// ****************************************************** Error handling with custom erros
/*
import { json, useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData();

  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }

  const events = data.events;
  return <EventsList events={events} />;
}

export default EventsPage;

export const loader = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return { isError: true, message: "Could not fetch events." };

    // throw { message: "Could not fetch events" };

    // throw new Response(JSON.stringify({ message: "Coud not fetch events." }), {
    //   status: 500,
    // });

    // ****************** The json() Utility function
    throw json({ message: "Could not fetch events." }, { status: 500 });
  } else {
    return response;
  }
};
*/

// ****************************************************** Defering data fetching with defer()

import { Suspense } from "react";
import { Await, defer, json, useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  const { events } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw json({ message: "Could not fetch events." }, { status: 500 });
  } else {
    // return response; // thi will not work as this is not in loader now
    const resData = await response.json();
    return resData.events;
  }
}

export const loader = () => {
  return defer({
    events: loadEvents(),
  });
};
