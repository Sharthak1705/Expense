import { useState, useEffect } from "react";
import { Pie, Bar } from "react-chartjs-2";
import "chart.js/auto";

export default function ExpenseCharts() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      const response = await fetch("http://localhost:5000/expenses");
      if (!response.ok) throw new Error("Failed to fetch expenses");
      const data = await response.json();
      setExpenses(data);
    } catch (error) {
      console.error(error);
    }
  };

  const categoryData = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + Number(expense.amount);
    return acc;
  }, {});

  const pieChartData = {
    labels: Object.keys(categoryData),
    datasets: [
      {
        data: Object.values(categoryData),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50", "#9C27B0"],
      },
    ],
  };

  const last7DaysData = expenses.reduce((acc, expense) => {
    const date = new Date(expense.date).toISOString().split("T")[0];
    acc[date] = (acc[date] || 0) + Number(expense.amount);
    return acc;
  }, {});

  const sortedDates = Object.keys(last7DaysData).sort().slice(-7);

  const barChartData = {
    labels: sortedDates,
    datasets: [
      {
        label: "Last 7 Days' Spending",
        data: sortedDates.map((date) => last7DaysData[date]),
        backgroundColor: "#42A5F5",
      },
    ],
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="mb-6 text-2xl font-bold text-center">Expense Analytics</h2>
      <div className="flex flex-wrap justify-center w-full gap-6">
        <div className="w-full p-6 bg-blue-200 shadow-lg sm:w-2/5 rounded-2xl">
          <h3 className="mb-2 text-lg font-semibold text-center">Category Breakdown</h3>
          <Pie data={pieChartData} />
        </div>
        <div className="w-full p-6 bg-blue-200 shadow-lg sm:w-3/5 rounded-2xl">
          <h3 className="mb-2 text-lg font-semibold text-center">Last 7 Days' Spending</h3>
          <Bar data={barChartData} />
        </div>
      </div>
    </div>
  );
}
