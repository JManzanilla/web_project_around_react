import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
<<<<<<< HEAD
import "@/index.css";
import AppRouter from "./AppRouter";
=======
import "./index.css";
import App from "./components/App";
>>>>>>> main

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>
);
