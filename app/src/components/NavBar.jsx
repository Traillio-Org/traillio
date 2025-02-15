import {Home, ChartPie, Cog, Crosshair, UsersRound, LibraryBig} from "lucide-react";
import {Link} from "react-router-dom";

export default function() {
    return (
        <div class="navbar">
            <Link to="/" class="item active">
                <Home />
                <span>Home</span>
            </Link>
            <Link to="/analytics" class="item">
                <ChartPie />
                <span>Analytics</span>
            </Link>
            <Link to="/courses" class="item">
                <LibraryBig />
                <span>Courses</span>
            </Link>
            <Link to="/focus" class="item">
                <Crosshair />
                <span>Focus</span>
            </Link>
            <Link to="/leaderboard" class="item">
                <UsersRound />
                <span>Leaderboard</span>
            </Link>
            <Link to="/settings" class="item">
                <Cog />
                <span>Settings</span>
            </Link>
        </div>
    );
}