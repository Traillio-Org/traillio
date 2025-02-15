import {Home, ChartPie, Settings, Crosshair, UsersRound, LibraryBig} from "lucide-react";
import {NavLink} from "react-router-dom";

export default function() {
    return (
        <div class="navbar">
            <NavLink to="/dashboard/home" className="item">
                <Home />
                <span>Home</span>
            </NavLink>
            <NavLink to="/dashboard/analytics" className="item">
                <ChartPie />
                <span>Analytics</span>
            </NavLink>
            <NavLink to="/dashboard/courses" className="item">
                <LibraryBig />
                <span>Problems</span>
            </NavLink>
            <NavLink to="/dashboard/focus" className="item">
                <Crosshair />
                <span>Focus</span>
            </NavLink>
            <NavLink to="/dashboard/leaderboard" className="item">
                <UsersRound />
                <span>Leaderboard</span>
            </NavLink>
            <NavLink to="/dashboard/settings/general" className="item">
                <Settings />
                <span>Settings</span>
            </NavLink>
        </div>
    );
}
