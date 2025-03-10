import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { EventProvider } from "./context/EventContext";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";

const App = () => {
  return (
    <EventProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventsPage />} />
        </Routes>
      </Router>
    </EventProvider>
  );
};

export default App;
