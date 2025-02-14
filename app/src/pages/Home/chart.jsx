import { Chart as ChartJS, Tooltip, CategoryScale, LinearScale, PointElement, LineElement } from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip);

export default function() {
    return (
        <Line
            datasetIdKey='id'
            data={{
                labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                datasets: [
                    {
                        id: 1,
                        label: '',
                        data: [5, 6, 7, 8, 9, 10, 11],
                    },
                    {
                        id: 2,
                        label: '',
                        data: [3, 2, 1, 0, 1, 2, 3],
                    },
                ],
                scales: {
                    x: {
                        border: {
                            display: false
                        }
                    },
                    y: {
                        border: {
                            display: false
                        }
                    }
                }
            }}
        />
    );
};