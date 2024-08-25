import { Link, useNavigate } from "react-router-dom";

import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";
import { useMutation } from "@tanstack/react-query";
import { createNewEvent, queryClient } from "../UI/http.js";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function NewEvent() {
  const navigate = useNavigate();
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: createNewEvent,
    onSuccess:()=>{
      queryClient.invalidateQueries({queryKey:['events']})
      navigate("/events");
    }
  });
  function handleSubmit(formData) {
    mutate({ event: formData });
  }
console.log(isPending)
  return (
    <Modal onClose={() => navigate("../")}>
      {isPending && "Submitting....."}
      <EventForm onSubmit={handleSubmit}>
        {!isPending && (
          <>
            <Link to="../" className="button-text">
              Cancel
            </Link>
            <button type="submit" className="button">
              Create
            </button>
          </>
        )}
      </EventForm>
      {isError && (
        <ErrorBlock
          title="Failed to create event"
          message={error.info?.message || "Failed to create event "}
        />
      )}
    </Modal>
  );
}
