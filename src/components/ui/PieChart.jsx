import { useQuery } from '@tanstack/react-query';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import useAxiosSecure from '../../hooks/useAxiosSecure';


ChartJS.register(ArcElement, Tooltip, Legend);

const BACKGROUND_COLORS = [
    'rgba(255, 99, 132, 0.6)',
    'rgba(54, 162, 235, 0.6)',
    'rgba(255, 206, 86, 0.6)',
    'rgba(75, 192, 192, 0.6)',
    'rgba(153, 102, 255, 0.6)',
    'rgba(255, 159, 64, 0.6)',
    'rgba(201, 203, 207, 0.6)',
    'rgba(255, 99, 71, 0.6)',
    'rgba(60, 179, 113, 0.6)',
];

const BORDER_COLORS = [
    'rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)',
    'rgba(201, 203, 207, 1)',
    'rgba(255, 99, 71, 1)',
    'rgba(60, 179, 113, 1)',
];


const PieChart = ({ pieChartData, title }) => {


    const data = {
        labels: pieChartData?.labels,
        datasets: [
            {
                label: title,
                data: pieChartData?.values,
                backgroundColor: pieChartData?.labels.map((_, index) => BACKGROUND_COLORS[index % BACKGROUND_COLORS.length]),
                borderColor: pieChartData?.labels.map((_, index) => BORDER_COLORS[index % BORDER_COLORS.length]),
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: title,
            },
        },
    };

    return <Pie data={data} options={options} />
};

export default PieChart;