import React from "react";
import NewMeetupForm from "./../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";

const NewMeetupPage = () => {
 const router=useRouter()
 const addMeetupHandler = async enteredMeetupData => {
   try {
     const response = await fetch("/api/new-meetup", {
       method: "POST",
       body: JSON.stringify(enteredMeetupData),
       headers: {
         "Content-Type": "application/json",
       },
     });

     if (!response.ok) {
       throw new Error("Failed to send meetup data.");
     }

     const data = await response.json();
     console.log("🚀 ~ addMeetupHandler ~ data:", data);
   } catch (error) {
     console.error("Error adding meetup:", error.message);
   }
   router.push('/')
 };

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetupPage;
