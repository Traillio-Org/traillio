import {
  Home,
  ChartPie,
  Cog,
  Crosshair,
  UsersRound,
  LibraryBig,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div class="navbar">
      <div class="item active">
        <Home />
        <span>Home</span>
      </div>
      <div class="item">
        <ChartPie />
        <span>Analytics</span>
      </div>
      <div class="item">
        <LibraryBig />
        <span>Courses</span>
      </div>
      <div class="item">
        <Link to="/focus">
          <Crosshair />
          <span>Focus</span>
        </Link>
      </div>
      <div class="item">
        <UsersRound />
        <span>Leaderboard</span>
      </div>
      <div class="item">
        <Cog />
        <span>Settings</span>
      </div>
    </div>
  );
}
