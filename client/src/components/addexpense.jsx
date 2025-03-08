import { useState, useEffect } from "react";

export default function AddExpensePage() {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [editingExpense, setEditingExpense] = useState(null);

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
      console.error("Error fetching expenses:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!amount || !category || !date) return;

    const newExpense = { amount, category, date };

    try {
      if (editingExpense) {
        const response = await fetch(
          `http://localhost:5000/expenses/${editingExpense._id}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newExpense),
          }
        );

        if (!response.ok) throw new Error("Failed to update expense");
        setEditingExpense(null);
      } else {
        const response = await fetch("http://localhost:5000/expenses", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newExpense),
        });

        if (!response.ok) throw new Error("Failed to add expense");
      }

      fetchExpenses();
      setAmount("");
      setCategory("");
      setDate("");
    } catch (error) {
      console.error("Error saving expense:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/expenses/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete expense");
      fetchExpenses();
    } catch (error) {
      console.error("Error deleting expense:", error);
    }
  };

  const categoryTotals = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + parseFloat(expense.amount);
    return acc;
  }, {});

  return (
    <div className="max-w-md p-6 mt-20 bg-white shadow-md rounded-xl">
      <h2 className="mb-4 text-2xl font-bold text-center">
        {editingExpense ? "Edit Expense" : "Add Expense"}
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
          type="number" 
          placeholder="Amount" 
          className="w-full p-2 border rounded-lg" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Category" 
          className="w-full p-2 border rounded-lg" 
          value={category} 
          onChange={(e) => setCategory(e.target.value)} 
        />
        <input 
          type="date" 
          className="w-full p-2 border rounded-lg" 
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
        />
        <button type="submit" className="w-full p-2 text-white bg-blue-500 rounded-lg">
          {editingExpense ? "Update Expense" : "Add Expense"}
        </button>
      </form>

      <h3 className="mt-6 text-xl font-bold">Category-wise Spending</h3>
      <ul className="mt-2 space-y-2">
        {Object.keys(categoryTotals).length === 0 ? (
          <p className="text-gray-500">No expenses added yet.</p>
        ) : (
          Object.entries(categoryTotals).map(([cat, total]) => (
            <li key={cat} className="p-2 bg-gray-100 rounded-lg">
              {cat}: ${total.toFixed(2)}
            </li>
          ))
        )}
      </ul>

      <h3 className="mt-6 text-xl font-bold">Recent Expenses</h3>
      <ul className="mt-2 space-y-2">
        {expenses.length === 0 ? (
          <p className="text-gray-500">No expenses added yet.</p>
        ) : (
          expenses.map((expense) => (
            <li key={expense._id} className="flex items-center justify-between p-3 bg-gray-100 rounded-lg">
              <div>
                <span>{expense.category} - ${expense.amount}</span>
                <span className="block text-sm text-gray-500">{expense.date.split("T")[0]}</span>
              </div>
              <div className="flex space-x-2">
                <button 
                  className="p-1 text-white bg-yellow-500 rounded" 
                  onClick={() => setEditingExpense(expense)}
                >
                  Edit
                </button>
                <button 
                  className="p-1 text-white bg-red-500 rounded" 
                  onClick={() => handleDelete(expense._id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
