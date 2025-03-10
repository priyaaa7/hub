import { useState } from "react";
import { useEvents } from "../hooks/useEvents";

import EventCard from "../components/EventCard";
import EventForm from "../components/EventForm";
import { motion } from "framer-motion";

const EventsPage = () => {
  const { events } = useEvents();
  const [filter, setFilter] = useState("All");

  return (
    <div className="container mt-5">
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fw-bold text-center mb-4 text-primary">Upcoming Events</motion.h2>
      <select onChange={(e) => setFilter(e.target.value)} className="form-select w-auto mx-auto mb-4">
        <option value="All">All</option>
        <option value="Religious">Religious</option>
        <option value="Social">Social</option>
        <option value="Charity">Charity</option>
      </select>
      {events.filter(e => filter === "All" || e.category === filter).map((event, index) => (
        <EventCard key={index} event={event} />
      ))}
      <h3 className="fw-bold mt-5 text-center text-primary">Add New Event</h3>
      <EventForm />
    </div>
  );
};

export default EventsPage;
