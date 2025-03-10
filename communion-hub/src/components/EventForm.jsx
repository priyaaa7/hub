import { useState } from "react";
import { useEvents } from "../hooks/useEvents";
import { motion } from "framer-motion";

const EventForm = () => {
  const { events, setEvents } = useEvents(); // ✅ Correct way to use context

  const [newEvent, setNewEvent] = useState({ title: "", date: "", category: "", location: "", description: "" });

  const handleAddEvent = () => {
    if (newEvent.title && newEvent.date) {
      setEvents([...events, newEvent]);
      setNewEvent({ title: "", date: "", category: "", location: "", description: "" });
    }
  };

  return (
    <div className="row g-3 d-flex justify-content-center">
      <input placeholder="Title" className="form-control w-75" value={newEvent.title} onChange={e => setNewEvent({ ...newEvent, title: e.target.value })} />
      <input type="date" className="form-control w-75" value={newEvent.date} onChange={e => setNewEvent({ ...newEvent, date: e.target.value })} />
      <input placeholder="Location" className="form-control w-75" value={newEvent.location} onChange={e => setNewEvent({ ...newEvent, location: e.target.value })} />
      <select className="form-select w-75" value={newEvent.category} onChange={e => setNewEvent({ ...newEvent, category: e.target.value })}>
        <option value="">Select Category</option>
        <option value="Religious">Religious</option>
        <option value="Social">Social</option>
        <option value="Charity">Charity</option>
      </select>
      <textarea placeholder="Description" className="form-control w-75" value={newEvent.description} onChange={e => setNewEvent({ ...newEvent, description: e.target.value })} />
      <motion.button onClick={handleAddEvent} className="btn btn-primary w-50 mt-3 shadow-lg" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>Add Event</motion.button>
    </div>
  );
};

export default EventForm;
