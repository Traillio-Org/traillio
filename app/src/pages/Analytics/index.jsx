import { useState, useEffect } from "react";
import { Trophy, Brain, Target, Activity, Award, BookOpen } from "lucide-react";
import Chart from "react-apexcharts";
import CalendarHeatmap from "react-calendar-heatmap";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import AiPrompt from "@/components/AiPrompt";

import { fetchProfile } from "@/lib/Data";

export default function Analytics() {
    let [counters, setCounters] = useState({});

    useEffect(() => {
        fetchProfile().then((data) => {
            console.log(data);
            if (!data.stats) return;
            if(data.stats.leetcode) {
                let calendarHistory = [];
                Object.keys(data.stats?.leetcode.submission_calendar).forEach((key) => {
                    calendarHistory.push({
                        date: Number(key) * 1000,
                        count: data.stats.leetcode.submission_calendar[key]
                    });
                });

                setCounters(curr => {
                    return {
                        ...curr, 
                        ...{
                            problemsSolved: data.stats.leetcode.total_solved,
                            successRate: data.stats.leetcode.success_rate,
                            submissions: data.stats.leetcode.submissions,
                            leetcodeSolved: data.stats.leetcode.total_solved,
                            calendarHistory: calendarHistory
                        }
                    }
                })
            }

            if (data.stats.codeforces) {
                let ratingHistory = [];
                data.stats.codeforces.rating_history.forEach((rating) => {
                    ratingHistory.push([rating.timestamp * 1000, rating.newRating]);
                });

                setCounters(curr => {
                    return {
                        ...curr,
                        ...{
                            rating: data.stats.codeforces.rating,
                            maxRating: data.stats.codeforces.max_rating,
                            ratingHistory: ratingHistory,
                            problemsSolved: data.stats.codeforces.total_solved,
                        }
                    }
                });
            }


            if (data.stats.codeforces && data.stats.leetcode) {
                setCounters(curr => {return {
                    ...curr,
                    ...{
                        problemsSolved: data.stats.codeforces.total_solved + data.stats.leetcode.total_solved
                    }
                }})
            }
        });
    }, []);

  const StatCard = ({ title, value, subtitle, icon: Icon, color }) => (
    <div className="box">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium text-gray-800">{title}</h2>
        <Icon className={`w-6 h-6 ${color}`} />
      </div>
      <div className="text-3xl">{value}</div>
      <div className="text-sm text-gray-500 mt-2">{subtitle}</div>
    </div>
  );

  return (
    <>
    <Header title="Analytics" subtitle="Measure your progress and performance" />
    <div className="body analytics">

      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Current Rating"
            value={counters && counters.rating ? counters.rating ?? "N/A" : "N/A"}
            subtitle={`In Codeforces`}
            icon={Trophy}
            color="text-yellow-500"
          />
          <StatCard
            title="Problems Solved"
            value={counters ? counters.problemsSolved ?? "N/A" : "N/A"}
            subtitle="over all time"
            icon={Target}
            color="text-blue-500"
          />
          <StatCard
            title="Success Rate"
            value={counters && counters.successRate ? Math.round(counters.successRate*100) + '%' ?? "N/A" : "N/A"}
            subtitle="over all time"
            icon={Award}
            color="text-green-500"
          />
          <StatCard
            title="Learning Streak"
            value="15 days"
            subtitle="Personal best: 28 days"
            icon={BookOpen}
            color="text-purple-500"
          />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="box">
            <h2 className="text-lg font-medium text-gray-800 mb-4">Difficulty Distribution</h2>
            {counters && counters.submissions ? (
                <Chart
                options={{
                    chart: {
                    animations: { enabled: true, speed: 1000 },
                    background: 'transparent',
                    height: 230
                    },
                    colors: ["#4482d3", "#26b86d", "#ef4444"],
                    labels: ["Easy", "Medium", "Hard"],
                    stroke: { width: 0 },
                    legend: {
                    position: "bottom",
                    markers: { radius: 2 }
                    },
                    dataLabels: {
                    enabled: true,
                    formatter: (val) => `${val}%`,
                    style: {
                        colors: ["#f5f5f5"]
                    }
                    },
                    plotOptions: {
                    pie: {
                        donut: {
                        size: "65%"
                        }
                    }
                    }
                }}
                type="donut"
                series={[Math.round((counters.submissions.easy / counters.leetcodeSolved) * 100), Math.round((counters.submissions.medium / counters.leetcodeSolved) * 100), Math.round((counters.submissions.hard / counters.leetcodeSolved) * 100)]}
                />
            ) : null}
            
          </div>

          <div className="bg-white rounded-xl p-6">
            <h2 className="text-lg font-medium text-gray-800 mb-4">Rating Progress</h2>

            {counters && counters.ratingHistory ? (
            <Chart
              options={{
                dataLabels: { enabled: false },
                chart: {
                  toolbar: { show: false },
                  zoom: { enabled: false },
                  background: 'transparent'
                },
                colors: ["#8b5cf6"],
                stroke: {
                  curve: "smooth",
                  width: 3
                },
                grid: {
                  borderColor: "#f1f5f9",
                  row: { colors: ["transparent"] }
                },
                fill: {
                  type: "gradient",
                  gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.7,
                    opacityTo: 0.2,
                    stops: [0, 90, 100]
                  }
                },
                xaxis: {
                  categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                  type: "datetime",
                  labels: { style: { colors: "#64748b" } }
                },
                yaxis: {
                  labels: { style: { colors: "#64748b" } }
                }
              }}
              type="area"
              series={[{
                name: "Rating",
                data: counters.ratingHistory
              }]}
              height={300}
            />
            ) : null}
          </div>

          <div className="bg-white rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-gray-800">Mental Load</h2>
              <Brain className="w-6 h-6 text-purple-500" />
            </div>
            <Chart
              options={{
                chart: {
                  toolbar: { show: false },
                  background: 'transparent'
                },
                colors: ["#8b5cf6"],
                plotOptions: {
                  radialBar: {
                    hollow: {
                      size: "70%"
                    },
                    track: {
                      background: "#e2e8f0"
                    },
                    dataLabels: {
                      name: {
                        offsetY: -10,
                        color: "#64748b",
                        fontSize: "14px"
                      },
                      value: {
                        color: "#8b5cf6",
                        fontSize: "24px",
                        fontWeight: "600"
                      }
                    }
                  }
                },
                labels: ["Mental Load"]
              }}
              type="radialBar"
              series={[65]}
              height={300}
            />
            <div className="text-center mt-4 text-sm text-gray-600">
              Based on recent activity patterns
            </div>
          </div>
        </div>

        {/* Activity Heatmap */}
        <div className="bg-white rounded-xl p-6">
          <h2 className="text-lg font-medium text-gray-800 mb-4">Activity Heatmap</h2>
          <div className="overflow-hidden h-[180px] flex flex-col">
            {counters && counters.calendarHistory ? (
            <CalendarHeatmap
              startDate={new Date("2025-01-01")}
              endDate={new Date("2026-01-01")}
              values={counters.calendarHistory}
              classForValue={(value) => {
                if (!value) return "color-empty";
                return `color-scale-${Math.min(4, Math.ceil(value.count / 4))}`;
              }}
              titleForValue={(value) => {
                if (!value) return "No activity";
                return `${value.count} activities on ${value.date}`;
              }}
              showWeekdayLabels={true}
              gutterSize={2}
              height={100}
            />
            ) : null}
          </div>
        </div>
      </div>
    </div>
      <NavBar />
      <AiPrompt />
    </>
  );
}

