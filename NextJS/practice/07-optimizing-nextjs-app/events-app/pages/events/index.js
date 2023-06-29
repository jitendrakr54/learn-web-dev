import { Fragment } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { getAllEvents } from "../../helpers/api-util";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";

const AllEventsPage = ({ events }) => {
  const { push } = useRouter();

  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    push(fullPath);
  };

  return (
    <Fragment>
      <Head>
        <title>Next.js Events</title>
        <meta
          name="description"
          conetnt="Find a lot of great events that allow you to evolve..."
        />
      </Head>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
};

export default AllEventsPage;

export async function getStaticProps() {
  const allEvents = await getAllEvents();

  return {
    props: { events: allEvents },
    revalidate: 1800,
  };
}
