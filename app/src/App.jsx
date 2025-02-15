import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import { ProtectedRoute } from "./lib/Auth";
import { GoogleOAuthProvider } from '@react-oauth/google';
import config from "./config";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import GeneralPage from "./pages/Settings/General";
import PlatformsPage from "./pages/Settings/Platforms";
import NotFound from "./pages/NotFound";

function App() {
  return (
      <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/settings" element={<Settings />}>
                <Route index element={<Navigate to="general" replace={true} />} />
                <Route path="general" element={<GeneralPage />} />
                <Route path="platforms" element={<PlatformsPage />} />
            </Route>
            <Route path="/auth" element={<Auth />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
  )
}

export default App
