import {Home, ChartPie, Settings, Crosshair, UsersRound, LibraryBig} from "lucide-react";
import {NavLink} from "react-router-dom";

export default function() {
    return (
        <div class="navbar">
            <NavLink to="/" className="item">
                <Home />
                <span>Home</span>
            </NavLink>
            <NavLink to="/analytics" className="item">
                <ChartPie />
                <span>Analytics</span>
            </NavLink>
            <NavLink to="/courses" className="item">
                <LibraryBig />
                <span>Courses</span>
            </NavLink>
            <NavLink to="/focus" className="item">
                <Crosshair />
                <span>Focus</span>
            </NavLink>
            <NavLink to="/leaderboard" className="item">
                <UsersRound />
                <span>Leaderboard</span>
            </NavLink>
            <NavLink to="/settings" className="item">
                <Settings />
                <span>Settings</span>
            </NavLink>
        </div>
    );
}