import { MongoClient, ObjectId } from "mongodb";
import MeetupDetail from "@/components/meetups/MeetupDetail";
import Head from "next/head";

/* function MeetupDetails() {
  return (
    <MeetupDetail
      image=" https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?cs=srgb&dl=pexels-lukas-kloeppel-466685.jpg&fm=jpg"
      title="First Meetup"
      address="Some Street 5, Some City"
      description="This is a first meetup"
    />
  );
}
export default MeetupDetails; */

/* export async function getStaticPaths() {
  // In reality, we would fetch these meetupId from database or an API
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
} */

/* export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;
  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          "https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?cs=srgb&dl=pexels-lukas-kloeppel-466685.jpg&fm=jpg",
        id: "m1",
        title: "First Meetup",
        address: "Some Street 5, Some City",
        description: "This is a first meetup",
      },
    },
  };
} */

// **************************************************** Getting meetup details data & preparing pages
function MeetupDetails(props) {
  console.log(props.meetupData);
  return (
    <>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description} />
      </Head>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </>
  );
}
export default MeetupDetails;

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;
  console.log(meetupId);

  const client = await MongoClient.connect(
    // "mongodb+srv://jitendra:admin@cluster0.pcn9vqj.mongodb.net/meetups?retryWrites=true&w=majority"
    "mongodb+srv://jitendra:admin@cluster0.419amzk.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const selectedMeetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.data.title,
        address: selectedMeetup.data.address,
        image: selectedMeetup.data.image,
        description: selectedMeetup.data.description,
      },
    },
  };
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    // "mongodb+srv://jitendra:admin@cluster0.pcn9vqj.mongodb.net/meetups?retryWrites=true&w=majority"
    "mongodb+srv://jitendra:admin@cluster0.419amzk.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  // const meetups = await meetupsCollection.find().toArray();
  client.close();

  return {
    fallback: "blocking",
    paths: meetups.map((meetup) => ({
      params: {
        meetupId: meetup._id.toString(),
      },
    })),
  };
}
