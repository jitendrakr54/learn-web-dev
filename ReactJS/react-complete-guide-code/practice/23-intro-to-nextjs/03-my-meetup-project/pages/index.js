import { MongoClient } from "mongodb";
// import { useEffect, useState } from "react";

import MeetupList from "@/components/meetups/MeetupList";

/* const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?cs=srgb&dl=pexels-lukas-kloeppel-466685.jpg&fm=jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?cs=srgb&dl=pexels-lukas-kloeppel-466685.jpg&fm=jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a second meetup!",
  },
  {
    id: "m3",
    title: "A Third Meetup",
    image:
      "https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?cs=srgb&dl=pexels-lukas-kloeppel-466685.jpg&fm=jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a third meetup!",
  },
]; */

/* function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
} */

// ************************************************** How pre-rendering works & which propblem we face
/* function HomePage() {
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setLoadedMeetups(DUMMY_MEETUPS);
  }, []);

  return <MeetupList meetups={loadedMeetups} />;
}

export default HomePage; */

// ************************************************** Data feching for static page

/* function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 1,
  };
}
export default HomePage; */

// *************************************** Exploring server-side rendering (SSR) with "getServerSideProps"

/* function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getServerSideProps(context) {
  const req = context.req;
  const res = context.res;

  // fetch data from an API

  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
} */

// **************************************************** Getting data from the database
import Head from "next/head";

function HomePage(props) {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups!"
        />
      </Head>
      <MeetupList meetups={props.meetups} />;
    </>
  );
}

export async function getStaticProps() {
  // fetch data from an API
  const client = await MongoClient.connect(
    // "mongodb+srv://jitendra:admin@cluster0.pcn9vqj.mongodb.net/meetups?retryWrites=true&w=majority"
    "mongodb+srv://jitendra:admin@cluster0.419amzk.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();
  // console.log(meetups);
  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.data.title,
        address: meetup.data.address,
        image: meetup.data.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}
export default HomePage;
