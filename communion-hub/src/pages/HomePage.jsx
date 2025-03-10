import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="home-container text-center d-flex flex-column align-items-center justify-content-center vh-100">
      <h1 className="display-3 fw-bold mb-3 text-primary">Connecting People Across Faiths & Interests</h1>
      <p className="lead mb-4 text-secondary">Connecting people of all faiths through events and community support.</p>
      <Link to="/events">
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="btn btn-primary btn-lg shadow-lg">Explore Events</motion.button>
      </Link>
    </motion.div>
  );
};

export default HomePage;
