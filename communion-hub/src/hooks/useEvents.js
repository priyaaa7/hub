import { useContext } from "react";
import { EventContext } from "../context/EventContext";

export const useEvents = () => useContext(EventContext);
