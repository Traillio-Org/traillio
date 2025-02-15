import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import { ProtectedRoute } from "./lib/Auth";
import { GoogleOAuthProvider } from '@react-oauth/google';
import config from "./config";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Focus from "./pages/Focus"
import Settings from "./pages/Settings";
import GeneralPage from "./pages/Settings/General";
import PlatformsPage from "./pages/Settings/Platforms";
import Trio from "./pages/Trio";
import NotFound from "./pages/NotFound";

function App() {
  return (
      <Router>
        <Routes>
            <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/focus" element={<ProtectedRoute><Focus/></ProtectedRoute>}/>
            <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>}>
                <Route index element={<Navigate to="general" replace={true} />} />
                <Route path="general" element={<ProtectedRoute><GeneralPage /></ProtectedRoute>} />
                <Route path="platforms" element={<ProtectedRoute><PlatformsPage /></ProtectedRoute>} />
            </Route>
            <Route path="/trio/:url" element={<ProtectedRoute><Trio /></ProtectedRoute>} />
            <Route path="auth" element={<GoogleOAuthProvider clientId={config.auth.google_oauth_client_id}><Auth /></GoogleOAuthProvider>} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
  )
}

export default App
