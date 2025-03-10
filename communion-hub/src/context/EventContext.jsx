import { createContext,  useState } from "react";

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([
    { title: "Charity Drive", date: "2025-03-15", category: "Charity", location: "Community Center", description: "Join us in helping the needy." },
    { title: "Interfaith Dialogue", date: "2025-04-02", category: "Religious", location: "City Hall", description: "Discussing beliefs and values." }
  ]);

  return (
    <EventContext.Provider value={{ events, setEvents }}>
      {children}
    </EventContext.Provider>
  );
};



