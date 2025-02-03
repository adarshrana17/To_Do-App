import ToDoItem from "./ToDoItem";

function ToDoList({ items, taskComplete, deleteItem }) {
    return (
        <>
        {items.map((item) => (
          <ToDoItem key={item.id} item={item} taskComplete={taskComplete} deleteItem={deleteItem} />
        ))}
        </>
    );
  }
export default ToDoList;  