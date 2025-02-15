import { useState, useEffect } from "react";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import Chart from "react-apexcharts";
import CalendarHeatmap from "react-calendar-heatmap";
import { BarChart3, Brain, Trophy, Target } from "lucide-react";

export default function Analytics() {
  const [rating] = useState(1250);
  const [totalUsers] = useState(10000);
  const [percentile] = useState(87.5);
  return (
    <>
      <Header />
      {/* <div className="h-[calc(100vh - 100px)] w-[80vw] mx-auto rounded-xl shadow-md overflow-hidden flex flex-col items-center gap-8">
        <div className="grid grid-cols-3 justify-items-center py-6 w-full gap-8 px-2">
          <div className="flex flex-col min-h-[100px] justify-center items-center shadow-md w-full rounded-xl hover:shadow-2xl hover:translate-y-1 transition-all">
            <h1 className="font-semibold text-2xl text-purple-500">
              Your Rating
            </h1>
            <div className="flex flex-row">
              <h4>10</h4>/<h2>1000</h2>
            </div>
          </div>
          <div className="flex flex-col min-h-[100px] justify-center items-center shadow-md w-full rounded-xl hover:shadow-2xl hover:translate-y-1 transition-all">
            <Chart
              options={{
                chart: {
                  animations: {
                    enabled: true,
                    speed: 1000,
                    animateGradually: {
                      enabled: true,
                      delay: 1000,
                    },
                    dynamicAnimation: {
                      enabled: true,
                      speed: 1000,
                    },
                  },
                },
                colors: ["#328c41", "yellow", "#8b2425"],
                labels: ["Easy", "Medium", "Difficult"],
                stroke: {
                  show: true,
                  width: 1,
                  colors: ["#262b33"],
                },
                legend: {
                  position: "bottom",
                  labels: {
                    colors: ["#328c41", "yellow", "#8b2425"],
                  },
                },
                dataLabels: {
                  enabled: false,
                },
              }}
              type="donut"
              series={[23, 45, 67]}
              height={200}
            />
          </div>
          <div className="flex flex-col min-h-[100px] justify-center items-center shadow-md w-full rounded-xl hover:shadow-2xl hover:translate-y-1 transition-all">
            <Chart
              options={{
                chart: {
                  zoom: {
                    enabled: false,
                  },
                  toolbar: {
                    show: false,
                    tools: {
                      download: false,
                      zoom: false,
                      zoomin: false,
                      zoomout: false,
                      pan: false,
                    },
                  },
                },
                colors: ["#f8dbba"],
                dataLabels: {
                  enabled: false,
                },
                grid: {
                  borderColor: "#555",
                  clipMarkers: false,
                  yaxis: {
                    lines: {
                      show: true,
                    },
                  },
                },
                fill: {
                  type: "gradient",
                  gradient: {
                    enabled: true,
                    opacityFrom: 1,
                    opacityTo: 0,
                  },
                  colors: ["#f8dbba"],
                },
                tooltip: {
                  theme: "dark",
                },
                xaxis: {
                  type: "numeric",
                  labels: {
                    show: false,
                  },
                },
                yaxis: {
                  min: 0,
                },
              }}
              type="area"
              series={[
                {
                  name: "Rating Over Contests",
                  data: [10, 40, 35, 50, 49, 60, 70, 91, 125],
                },
              ]}
              height={"100%"}
              width={"100%"}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 w-full justify-items-center gap-8 px-2">
          <div className="h-[100px] shadow-md w-full rounded-xl hover:shadow-2xl hover:translate-y-1 transition-all">
            <CalendarHeatmap
              startDate={new Date(`${2024}-01-01`)}
              endDate={new Date(`${2024}-12-31`)}
              values={[
                ["2024-01-01", 10],
                ["2024-01-02", 15],
                ["2024-01-03", 25],
                ["2024-01-04", 18],
                ["2024-01-05", 30],
                ["2024-01-06", 45],
                ["2024-01-07", 50],
                ["2024-01-08", 65],
                ["2024-01-09", 80],
              ]}
              classForValue={(value) => {
                if (!value) {
                  return "color-empty";
                }
                return `color-scale-${4}`;
              }}
              titleForValue={(value) => {
                if (value)
                  return `Questions Done ${value.count} on ${value.date}`;
                else return `Not available`;
              }}
              showWeekdayLabels={true}
              gutterSize={2}
            />
          </div>
          <div className="flex flex-col min-h-[100px] justify-center items-center shadow-md w-full rounded-xl hover:shadow-2xl hover:translate-y-1 transition-all">
            Stress calculator
          </div>
        </div>

        <div></div>
      </div> */}

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-sm p-6 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  Your Rating
                </h2>
                <Trophy className="w-6 h-6 text-yellow-500" />
              </div>
              <div className="text-3xl font-bold text-purple-600">{rating}</div>
              <div className="text-sm text-gray-500 mt-2">
                Top {percentile}% of {totalUsers.toLocaleString()} users
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Problem Distribution
              </h2>
              <Chart
                options={{
                  chart: {
                    animations: {
                      enabled: true,
                      speed: 1000,
                    },
                  },
                  colors: ["#22c55e", "#eab308", "#ef4444"],
                  labels: ["Easy", "Medium", "Hard"],
                  stroke: { width: 0 },
                  legend: {
                    position: "bottom",
                    markers: { radius: 2 },
                  },
                  dataLabels: {
                    enabled: true,
                    formatter: (val) => `${val}%`,
                  },
                  plotOptions: {
                    pie: {
                      donut: {
                        size: "65%",
                      },
                    },
                  },
                }}
                type="donut"
                series={[35, 45, 20]}
                height={220}
              />
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Rating Progression
              </h2>
              <Chart
                options={{
                  chart: {
                    toolbar: { show: false },
                    zoom: { enabled: false },
                  },
                  colors: ["#8b5cf6"],
                  stroke: {
                    curve: "smooth",
                    width: 3,
                  },
                  grid: {
                    borderColor: "#f1f5f9",
                    row: { colors: ["transparent"] },
                  },
                  fill: {
                    type: "gradient",
                    gradient: {
                      shadeIntensity: 1,
                      opacityFrom: 0.7,
                      opacityTo: 0.2,
                      stops: [0, 90, 100],
                    },
                  },
                  xaxis: {
                    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                    labels: { style: { colors: "#64748b" } },
                  },
                  yaxis: {
                    labels: { style: { colors: "#64748b" } },
                  },
                }}
                type="area"
                series={[
                  {
                    name: "Rating",
                    data: [800, 950, 875, 1100, 1250, 1400],
                  },
                ]}
                height={220}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-sm p-6 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Contribution Heatmap
              </h2>
              <div className="overflow-hidden">
                <CalendarHeatmap
                  startDate={new Date("2024-01-01")}
                  endDate={new Date("2024-12-31")}
                  values={[
                    { date: "2024-01-01", count: 4 },
                    { date: "2024-01-03", count: 7 },
                    { date: "2024-01-05", count: 12 },
                    { date: "2024-01-08", count: 5 },
                    { date: "2024-01-10", count: 8 },
                    { date: "2024-01-12", count: 15 },
                  ]}
                  classForValue={(value) => {
                    if (!value) return "color-empty";
                    return `color-github-${Math.min(
                      4,
                      Math.ceil(value.count / 4)
                    )}`;
                  }}
                  titleForValue={(value) => {
                    if (!value) return "No contributions";
                    return `${value.count} contributions on ${value.date}`;
                  }}
                  showWeekdayLabels={true}
                />
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  Stress Level
                </h2>
                <Brain className="w-6 h-6 text-purple-500" />
              </div>
              <Chart
                options={{
                  chart: {
                    toolbar: { show: false },
                  },
                  colors: ["#8b5cf6"],
                  plotOptions: {
                    radialBar: {
                      hollow: {
                        size: "70%",
                      },
                      track: {
                        background: "#e2e8f0",
                      },
                      dataLabels: {
                        name: {
                          offsetY: -10,
                          color: "#64748b",
                          fontSize: "14px",
                        },
                        value: {
                          color: "#8b5cf6",
                          fontSize: "24px",
                          fontWeight: "600",
                        },
                      },
                    },
                  },
                  labels: ["Stress Level"],
                }}
                type="radialBar"
                series={[65]}
                height={220}
              />
              <div className="text-center mt-4 text-sm text-gray-600">
                Based on your recent activity and performance
              </div>
            </div>
          </div>
        </div>
      </div>
      <NavBar />
    </>
  );
}
