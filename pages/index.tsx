import { useTodos, Todo } from "../lib/useTodos";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

type Props = { todo: Todo };
function TodoItem(props: Props) {
  const { id, score, description, title } = props.todo;
  const changeScore = useTodos((state) => state.changeScore);

  return (
    <li className="flex p-2 my-2 rounded bg-gray-100 hover:bg-gray-200">
      <div className="flex flex-col">
        <button onClick={() => changeScore(id, 1)}>
          <FaArrowUp size={15} />
        </button>
        <div className=" p-1">{score}</div>
        <button onClick={() => changeScore(id, -1)}>
          <FaArrowDown size={15} />
        </button>
      </div>
      <div>
        <h2 className="text-lg">{title}</h2>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </li>
  );
}

export default function Home() {
  const todos = useTodos((state) => state.todos);
  const addTodo = useTodos((state) => state.addTodo);

  return (
    <div className="flex justify-center w-full text-gray-600">
      <main className="flex flex-col p-8 w-6/12">
        <div className="flex justify-between">
          <h1>Todo App</h1>
          <button
            className="bg-indigo-600 rounded hover:bg-indigo-500 text-white px-2 py-1"
            onClick={() =>
              addTodo({ title: "test", description: "hello world", score: 0 })
            }
          >
            Add Todo
          </button>
        </div>
        <ul>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      </main>
    </div>
  );
}
