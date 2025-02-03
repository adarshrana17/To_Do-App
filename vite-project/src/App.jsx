import { useState } from "react";
import Header from "./Components/Header"
import ToDoList from "./Components//ToDoList";

function App() {
  const [items, setItems] = useState([])
  const [newItem, setNewItem] = useState("");

  const addTask = (index) => {
    if (newItem) {
      setItems([...items, { id:index, text: newItem, completed: false }]);
      setNewItem("");
    }
  };

  const taskComplete = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="mt-2.5">
    <Header />
    <div className="p-4 h-fit w-50%   mt-14 ml-20">
      <h1 className="h1">Add Tasks</h1>
      <div className="flex gap-2 my-4 w-[50%]">
        <input type="text" className="border p-2 flex-1" value={newItem} onChange={(e) => setNewItem(e.target.value)} placeholder="Add a Task..."/>
        <button className="bg-blue-500 text-white p-2 px-3 rounded-lg text-xl" onClick={addTask}>Add</button>
      </div>
      <h2 className="h2">Tasks</h2>
      <div className="w-[90%]">
      <ToDoList items={items} taskComplete={taskComplete} deleteItem={deleteItem} />
    </div>
    </div>
    </div>
  );
}

export default App;
