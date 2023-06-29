import Head from "next/head";

import { getFeaturedEvents } from "../helpers/api-util";
import EventList from "../components/events/event-list";

const HomePage = ({ featuredEvents }) => {
  return (
    <div>
      <Head>
        <title>Next.js Events</title>
        <meta
          name="description"
          conetnt="Find a lot of great events that allow you to evolve..."
        />
      </Head>
      <EventList items={featuredEvents} />
    </div>
  );
};

export default HomePage;

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  console.log(featuredEvents);

  return {
    props: { featuredEvents },
    revalidate: 1800,
  };
}
