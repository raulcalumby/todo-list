import useStore from "../../store/task";


export default function Index() {
  const addText = useStore((state) => state.addText);
  const addTodo = useStore((state) => state.addTodo);
  const removeText = useStore((state) => state.removeText);
  const text = useStore((state) => state.text);

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (text.length <= 0) return;
    addTodo(text);
    removeText();
  };

  const handleInputText = (e) =>
    addText(e.target.value);

  return (
    <form className="TodoForm">
      <input
        className="todo-input"
        onChange={handleInputText}
        value={text}
        placeholder="What is the task today?"
      />
      <button onClick={handleAddTodo} className="todo-btn">
        Add Task
      </button>
    </form>
  );
}
