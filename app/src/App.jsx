import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ProtectedRoute } from "./lib/Auth";
import { GoogleOAuthProvider } from "@react-oauth/google";
import config from "./config";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Focus from "./pages/Focus";
import CoursePage from "./pages/Courses";
import CP from "./pages/CPSheets";
import Settings from "./pages/Settings";
import GeneralPage from "./pages/Settings/General";
import PlatformsPage from "./pages/Settings/Platforms";
import Trio from "./pages/Trio";
import NotFound from "./pages/NotFound";
import LandingPage from "./pages/Landing";
import LoginPage from "./pages/Landing/sections/login";
import SignupPage from "./pages/Landing/sections/signup";
import Features from "./pages/Landing/sections/features";
import OurTeam from "./pages/Landing/sections/team";
import AboutPage from "./pages/Landing/sections/about";
import Layout from "./pages/Landing/layout";
import Analytics from "./pages/Analytics";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard">
          <Route
            index
            element={
              <>
                <Home />
              </>
            }
          />
          <Route
            path="focus"
            element={
              <>
                <Focus />
              </>
            }
          />
          <Route
            path="courses"
            element={
              <>
                <CoursePage />
              </>
            }
          />
          <Route
            path="courses/cp31"
            element={
              <>
                <CP />
              </>
            }
          />
          <Route
            path="settings"
            element={
              <>
                <Settings />
              </>
            }
          >
            <Route
              path="general"
              element={
                <>
                  <GeneralPage />
                </>
              }
            />
            <Route
              path="platforms"
              element={
                <>
                  <PlatformsPage />
                </>
              }
            />
          </Route>
          <Route
            path="analytics"
            element={
              <>
                <Analytics />
              </>
            }
          />
          <Route
            path="trio/:url"
            element={
              <>
                <Trio />
              </>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="/" element={<Layout />}>
          <Route
            path="auth"
            element={
              <GoogleOAuthProvider
                clientId={config.auth.google_oauth_client_id}
              >
                <Auth />
              </GoogleOAuthProvider>
            }
          />
          <Route index element={<LandingPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="features" element={<Features />} />
          <Route path="team" element={<OurTeam />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
