function ToDoItem({ item, taskComplete, deleteItem }) {
    return  (
      <li className="flex justify-between items-center border m-4 p-2 h-16 text-xl  ">
        <span className={`flex-1 cursor-pointer ${item.completed ? "line-through text-gray-600" : ""}`} onClick={() =>
        taskComplete(item.id)}> {item.text}</span>
         {item.completed ? (<i className="fa-solid fa-check text-green-500 text-3xl mr-6"></i>) : ""}
        <button onClick={() => deleteItem(item.id)}><span><i className="fa-solid fa-trash hover:text-red-600 text-2xl"></i></span></button>
      </li>
    );
  }
  export default ToDoItem;