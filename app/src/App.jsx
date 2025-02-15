import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { ProtectedRoute } from "./lib/Auth";
import { GoogleOAuthProvider } from '@react-oauth/google';
import config from "./config";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Settings from "./pages/Settings";

function App() {
  return (
      <Router>
        <Routes>
            {/* <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="auth" element={<GoogleOAuthProvider clientId={config.auth.google_oauth_client_id}><Auth /></GoogleOAuthProvider>} />
            </Route>
            <Route path="/dashboard" element={<DashboardLayout/>}>
                <Route index element={<Dashboard/>}/>
                <Route path="analytics" element={<Analytics/>}/>
                <Route path="courses" element={<Courses/>}/>
                <Route path="focus" element={<Focus/>}/>
                <Route path="settings" element={<Settings/>}/>
            </Route> */}

            <Route path="/" element={<Home />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/auth" element={<Auth />} />
        </Routes>
    </Router>
  )
}

export default App
