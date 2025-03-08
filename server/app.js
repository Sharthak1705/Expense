import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const expenseSchema = new mongoose.Schema({
  amount: Number,
  category: String,
  date: { type: Date, default: Date.now },
});

const Expense = mongoose.model("Expense", expenseSchema);

app.post("/expenses", async (req, res) => {
  try {
    const { amount, category, date } = req.body;
    const newExpense = new Expense({ amount, category, date });
    await newExpense.save();
    res.status(201).json(newExpense);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/expenses", async (req, res) => {
  try {
    const expenses = await Expense.find().sort({ date: -1 });
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put("/expenses/:id", async (req, res) => {
    try {
      const updatedExpense = await Expense.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updatedExpense);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  app.delete("/expenses/:id", async (req, res) => {
    try {
      await Expense.findByIdAndDelete(req.params.id);
      res.json({ message: "Expense deleted" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
