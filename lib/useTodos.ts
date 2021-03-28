import create from "zustand";
import { devtools } from "zustand/middleware";

export type Todo = {
  id: string;
  title: string;
  description: string;
  score: number;
};

type TodoState = {
  todos: Todo[];
  addTodo: (todo: Omit<Todo, "id">) => void;
  deleteTodo: (id: string) => void;
  changeScore: (id: string, by: number) => void;
};

export const useTodos = create<TodoState>(
  devtools((set) => ({
    todos: [],
    addTodo: (todo) =>
      set((state) => ({
        todos: [
          ...state.todos,
          { ...todo, id: Math.random().toString(36).substr(2, 9) },
        ],
      })),
    deleteTodo: (id) =>
      set((state) => ({
        todos: state.todos.filter((t) => t.id === id),
      })),
    changeScore: (id, by) =>
      set((state) => {
        const foundTodo = state.todos.find((t) => t.id === id);
        foundTodo.score += by;
        console.log(state.todos);
        return { todos: state.todos };
      }),
  }))
);
