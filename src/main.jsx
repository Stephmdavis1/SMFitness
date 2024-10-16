import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import  TrainingProgramsContextProvider  from "./Context/TrainingProgramsContext.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TrainingProgramsContextProvider>
      <App />
    </TrainingProgramsContextProvider>
  </StrictMode>
);
