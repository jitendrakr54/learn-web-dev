import { getFeaturedEvents } from "../helpers/api-util";
import EventList from "../components/events/event-list";
import { useEffect } from "react";

const HomePage = ({ featuredEvents }) => {
  return (
    <div>
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
