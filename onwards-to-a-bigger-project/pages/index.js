import React, { useEffect, useState } from "react";
import MeetupList from "./../components/meetups/MeetupList";
import Layout from "./../components/layout/Layout";
import { MongoClient } from "mongodb";
import { Head } from "next/document";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first Meetup",
    image:
      "https://coreldrawdesign.com/resources/previews/preview-photoreal-meetup-a-diverse-group-of-social-media-influencers-taking-high-quality-full-fd-free-image-1687158939.jpg",
    address: "Banglore",
    description: "this is a first meetup",
  },
  {
    id: "m2",
    title: "A second Meetup",
    image:
      "https://coreldrawdesign.com/resources/previews/preview-photoreal-meetup-a-diverse-group-of-social-media-influencers-taking-high-quality-full-fd-free-image-1687158939.jpg",
    address: "Bhopal",
    description: "this is a second meetup",
  },
];
const HomePage = props => {
  // const [loadedMeetups,setLoadedMeetups]=useState([]);
  // useEffect(()=>{
  //  setLoadedMeetups(DUMMY_MEETUPS)
  // },[])
  return (
    <div>
     <Head>
      <title>React meetups</title>
      <meta name="description" content="Brows a huge list of highly active react meetups"/>
     </Head>
      <MeetupList meetups={props.meetups} />
    </div>
  );
};

// export async function getServerSideProps(context){
//  const req = context.req;
//  const res = context.res;
// return{
//  props:{meetups:DUMMY_MEETUPS}
// }
// }

export async function getStaticProps() {
  //we can fetch the data from api

  const client = await MongoClient.connect(
    "mongodb+srv://prateeksahu199808:Vllj1cfSZds9sJ8y@cluster0.yfv8rzg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  return {
    props: {
      meetups: meetups.map(meetup=>({
        title:meetup.title,
        address:meetups.address,
        image:meetups.image,
        id:meetup._id.toString()
      })),
    },
    revalidate: 10,
  };
}

export default HomePage;
