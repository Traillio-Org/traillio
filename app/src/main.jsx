import { AuthProvider } from "./lib/Auth.jsx";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./app.css";

createRoot(document.getElementById('root')).render(
    <AuthProvider>
        <App />
    </AuthProvider>
);