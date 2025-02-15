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
          data.stats.codeforces.total_solved + data.stats.leetcode.total_solved,
        leetcodeLangs: data.stats.leetcode.langs,
        codeforcesLangs: data.stats.codeforces.langs,
        streak: data.stats.dailyStreak,
        platforms: platforms,
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
                      <h1>93</h1>
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
                      <h1>{profile ? profile.streak : null}</h1>
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
