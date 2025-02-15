import { useState, useEffect } from "react";
import Chart from "react-apexcharts";

export default function () {
  let [tasks, setTasks] = useState([["2024-09-01", 12], ["2024-09-02", 13]]);
  let [questions, setQuestions] = useState([["2024-09-01", 13], ["2024-09-02", 3]])

  return (
    <>
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
                        pan: false,
                    }
                }
            },
        colors: ["#EE82EE", "blue"],
        markers: {
            strokeWidth: 2
        },
          xaxis:{
            type: "datetime"
          }
        }}
        series={[
            {
                name: "Tasks Done",
                data: tasks
            },
            {
                name: "Questions Done",
                data: questions
            }
        ]}
        type={"line"}
      />
    </>
  );
}
