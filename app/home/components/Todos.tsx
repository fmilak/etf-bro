import { Signal, signal } from "@preact/signals-react";

const todos: Signal<{ text: string }[]> = signal([]);
const inputValue = signal('');

const Todos = () => {

  const addTodo = () => {
    todos.value.push({ text: inputValue.value });
  }

  const onInputChange = (event: any) => {
    console.log(event.target.value);
    inputValue.value = event.target.value;
  }

  return (
    <div>
      <h1>Todos</h1>

      <input type="text" value={inputValue.value} onChange={onInputChange} />
      <button onClick={addTodo}>Add todo</button>

      {todos.value.map((todo, index) => (
        <div key={index}>
          <span>{todo.text}</span>
        </div>
      ))}
    </div>
  );
};

export default Todos;