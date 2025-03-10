import { motion } from "framer-motion";

const EventCard = ({ event }) => {
  return (
    <motion.div className="event-card card shadow-lg p-4 mb-4" whileHover={{ scale: 1.05 }}>
      <h3 className="fw-semibold text-primary">{event.title}</h3>
      <p className="text-muted">{event.date} - {event.location}</p>
      <p>{event.description}</p>
    </motion.div>
  );
};

export default EventCard;
