import { useState } from "react";
import { Trophy, Brain, Target, Activity, Award, BookOpen } from "lucide-react";
import Chart from "react-apexcharts";
import CalendarHeatmap from "react-calendar-heatmap";

export default function Analytics() {
  const [rating] = useState(1250);
  const [totalUsers] = useState(10000);
  const [percentile] = useState(87.5);

  const StatCard = ({ title, value, subtitle, icon: Icon, color }) => (
    <div className="bg-white rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium text-gray-800">{title}</h2>
        <Icon className={`w-6 h-6 ${color}`} />
      </div>
      <div className="text-3xl font-bold text-purple-600">{value}</div>
      <div className="text-sm text-gray-500 mt-2">{subtitle}</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
            <p className="text-gray-600">Track your progress and performance</p>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              <Activity className="w-4 h-4" />
              Export Report
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Current Rating"
            value={rating}
            subtitle={`Top ${percentile}% of ${totalUsers.toLocaleString()} users`}
            icon={Trophy}
            color="text-yellow-500"
          />
          <StatCard
            title="Problems Solved"
            value="328"
            subtitle="Last 30 days: +42"
            icon={Target}
            color="text-blue-500"
          />
          <StatCard
            title="Success Rate"
            value="76%"
            subtitle="Last 50 submissions"
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
          <div className="bg-white rounded-xl p-6">
            <h2 className="text-lg font-medium text-gray-800 mb-4">Problem Distribution</h2>
            <Chart
              options={{
                chart: {
                  animations: { enabled: true, speed: 1000 },
                  background: 'transparent',
                  height: 230
                },
                colors: ["#22c55e", "#eab308", "#ef4444"],
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
              series={[35, 45, 20]}

            />
          </div>

          <div className="bg-white rounded-xl p-6">
            <h2 className="text-lg font-medium text-gray-800 mb-4">Rating Progress</h2>
            <Chart
              options={{
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
                  labels: { style: { colors: "#64748b" } }
                },
                yaxis: {
                  labels: { style: { colors: "#64748b" } }
                }
              }}
              type="area"
              series={[{
                name: "Rating",
                data: [800, 950, 875, 1100, 1250, 1400]
              }]}
              height={300}
            />
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
            <CalendarHeatmap
              startDate={new Date("2024-01-01")}
              endDate={new Date("2024-12-31")}
              values={[
                { date: "2024-01-01", count: 4 },
                { date: "2024-01-03", count: 7 },
                { date: "2024-01-05", count: 12 },
                { date: "2024-01-08", count: 5 },
                { date: "2024-01-10", count: 8 },
                { date: "2024-01-12", count: 15 }
              ]}
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
          </div>
        </div>
      </div>
    </div>
  );
}

