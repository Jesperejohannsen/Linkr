import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ExpenseList from './expanse-tracker/components/ExpenseList'
import ExpenseFilter from './expanse-tracker/components/ExpenseFilter'
import ExpenseForm from './expanse-tracker/components/ExpenseForm'
import categories from './expanse-tracker/categories'

function App() {
  
 const [selectedCategory, setSelectedCategory] = useState("");

 const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Groceries" },
    { id: 2, description: "bbb", amount: 20, category: "food" },
    { id: 3, description: "ccc", amount: 30, category: "food" },
    { id: 4, description: "ddd", amount: 40, category: "food" },
]);

const visibleExpenses = selectedCategory ? expenses.filter(e => e.category === selectedCategory) : expenses;


  return (
    <div>
      <div className="mb-5">
        <ExpenseForm onSubmit={expense => setExpenses([...expenses, { ...expense, id: expenses.length + 1}])}/>
      </div>
      <div className="mb-3">
        <ExpenseFilter onSelectCategory={category => setSelectedCategory(category)}/>
      </div>
      <ExpenseList expenses={visibleExpenses} onDelete={(id) => setExpenses(expenses.filter(e => e.id !== id))} />
    </div>
  )
}

export default App
