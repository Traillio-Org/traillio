import {
  User,
  Users,
  Clock,
  Flame,
  Calendar,
  Ellipsis,
  Code,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";
import WeekChart from "./chart";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import AiPrompt from "@/components/AiPrompt";
import { Link } from "react-router-dom";
import { useAuth } from "@/lib/Auth";
import { fetchProfile } from "@/lib/Data";
import { useEffect, useState } from "react";
import TaskManager from "@/components/TaskManager";

function abbrNum(number, decPlaces) {
    // 2 decimal places => 100, 3 => 1000, etc
    decPlaces = Math.pow(10, decPlaces);
  
    // Enumerate number abbreviations
    var abbrev = ["k", "m", "b", "t"];
  
    // Go through the array backwards, so we do the largest first
    for (var i = abbrev.length - 1; i >= 0; i--) {
  
      // Convert array index to "1000", "1000000", etc
      var size = Math.pow(10, (i + 1) * 3);
  
      // If the number is bigger or equal do the abbreviation
      if (size <= number) {
        // Here, we multiply by decPlaces, round, and then divide by decPlaces.
        // This gives us nice rounding to a particular decimal place.
        number = Math.round(number * decPlaces / size) / decPlaces;
  
        // Handle special case where we round up to the next abbreviation
        if ((number == 1000) && (i < abbrev.length - 1)) {
          number = 1;
          i++;
        }
  
        // Add the letter for the abbreviation
        number += abbrev[i];
  
        // We are done... stop
        break;
      }
    }
  
    return number;
  }

export default function () {
  const { currentUser } = useAuth();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetchProfile().then((data) => {
      let platforms = 0;

      if (data.platforms.codeforces && data.platforms.codeforces != "")
        platforms++;
      if (data.platforms.leetcode && data.platforms.leetcode != "") platforms++;

      setProfile({
        total:
          (data.stats && data.stats.codeforces ? data.stats.codeforces.total_solved : 0) + (data.stats && data.stats.leetcode ? data.stats.leetcode.total_solved : 0),
        leetcodeLangs: data.stats && data.stats.leetcode ? data.stats.leetcode.langs : [],
        codeforcesLangs: data.stats && data.stats.codeforces ? data.stats.codeforces.langs : [],
        streak: data.stats ? data.stats.daily_streak : 0,
        platforms: platforms,
        points: data.stats ? data.stats.points : 0,
      });
    });
  }, []);

  return (
    <>
      <Header
        title={`Welcome, ${currentUser.fullName.split(" ")[0]}`}
        subtitle="Your personal growth system"
      />

      <div className="body home">
        <div className="flex gap-8">
          <div className="flex basis-3/4 gap-8">
            <div className="flex basis-1/3 gap-8 flex-col">
              <div className="box profile-box">
                <div className="box-header">
                  <h1>Profile</h1>
                  <User />
                </div>

                <div className="pfp my-16">
                  <div
                    style={{
                      backgroundImage: `url(${currentUser.pfp})`,
                    }}
                  ></div>
                </div>
                <div className="info">
                  <h1>{currentUser.fullName}</h1>
                  <h2>Explorer</h2>
                </div>
                <div className="badges">
                  <div className="badge">
                    <Users />
                    100
                  </div>
                  <div className="badge">
                    <Users />
                    99+
                  </div>
                  <div className="badge">
                    <Users />
                    999
                  </div>
                </div>
              </div>

              <div className="box languages-box">
                <div className="box-header">
                  <h1>Languages</h1>
                  <Code />
                </div>

                <div className="content">
                  {profile &&
                    profile.leetcodeLangs.map((lang) => (
                      <div className="language">
                        <div className="labels">
                          <h1>{lang.name}</h1>
                          <h2>
                            {Math.trunc((lang.count / profile.total) * 100)}%
                          </h2>
                        </div>
                        <div className="progressbar">
                          <div
                            className="progress"
                            style={{
                              width: `${(lang.count / profile.total) * 100}%`,
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  {profile &&
                    profile.codeforcesLangs.map((lang) => (
                      <div className="language">
                        <div className="labels">
                          <h1>{lang.name}</h1>
                          <h2>
                            {Math.trunc((lang.count / profile.total) * 100)}%
                          </h2>
                        </div>
                        <div className="progressbar">
                          <div
                            className="progress"
                            style={{
                              width: `${(lang.count / profile.total) * 100}%`,
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <div className="flex basis-2/3 flex-col gap-8">
              <div className="flex gap-8">
                <div className="basis-1/2">
                  <div
                    className="box stat-box"
                    style={{
                      backgroundImage:
                        "linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%)",
                    }}
                  >
                    <div className="box-header">
                      <h1>TriPoints</h1>
                      <Flame />
                    </div>
                    <div className="stats">
                      <h1>{profile ? abbrNum(profile.points, 1) : "N/A"}</h1>
                      <h2>Total points earned</h2>
                    </div>
                  </div>
                </div>
                <div className="basis-1/2">
                  <div
                    className="box stat-box"
                    style={{
                      backgroundImage:
                        "linear-gradient(to top, #accbee 0%, #d9e9ff 100%)",
                    }}
                  >
                    <div className="box-header">
                      <h1>My Streak</h1>
                      <Clock />
                    </div>
                    <div className="stats">
                      <h1>{profile ? profile.streak : "N/A"}</h1>
                      <h2>Consecutive days</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="padded-box platforms-box">
                  <div className="labels">
                    <h1>Connected Platforms</h1>
                    <h2>
                      {profile ? profile.platforms : 0} active connections
                    </h2>
                  </div>
                  <div className="right">
                    <div className="logos">
                      <div
                        className="icon"
                        style={{
                          backgroundImage: "url(/leetcode.png)",
                        }}
                      ></div>
                      <div
                        className="icon"
                        style={{
                          backgroundImage: "url(/codeforces.webp)",
                        }}
                      ></div>
                    </div>
                    <Link to="/dashboard/settings/platforms">
                      <div className="edit">
                        <Ellipsis />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="padded-box chart-box">
                <h1 className="title">Week at a Glance</h1>
                <h2 className="subtitle mb-8">
                  Analyze how your week is going.
                </h2>

                <WeekChart />
              </div>
            </div>
          </div>
          <div className="basis-1/4">
            <div className="box tasks-box static">
              <div className="box-header">
                <h1>My Tasks</h1>
                <Calendar />
              </div>

              <div className="list mb-4">
                <div className="item">
                  <div className="content">
                    <span className="due">Tue, 11 July</span>
                    <h1>Complete 5 Leetcode Hard problems</h1>
                  </div>
                  <ArrowUpRight />
                </div>
                <div className="item">
                  <div className="content">
                    <span className="due">Tue, 11 July</span>
                    <h1>Complete 5 Leetcode Hard problems</h1>
                  </div>
                  <ArrowUpRight />
                </div>
                <div className="item">
                  <div className="content">
                    <span className="due">Tue, 11 July</span>
                    <h1>Complete 5 Leetcode Hard problems</h1>
                  </div>
                  <ArrowUpRight />
                </div>
              </div>

              <span className="link">
                View all tasks <ArrowRight />
              </span>
              <TaskManager />
            </div>
          </div>
        </div>
      </div>

      <NavBar />
      <AiPrompt />
    </>
  );
}
