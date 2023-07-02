import create from "zustand";

export const useStore = create((set) => ({
  todos: [],
  text: '',
  addText: (inputText) => {
    set((state) => ({
      ...state,
      text: inputText
    }))
  },
  removeText: () => {
    set((state) => ({
      ...state,
      text: ''
    }))
  },
  addTodo: (description) => {
    set((state) => ({
      ...state,
      todos: [
        ...state.todos,
        {
          id: Date.now(),
          description,
          completed: false,
        },
      ],
    }));
  },
  removeTodo: (id) => {
    set((state) => ({
      ...state,
      todos: state.todos.filter((todo) => todo.id !== id),
    }));
  },
  toggleCompletedState: (id) => {
    set((state) => ({
      ...state,
      todos: state.todos.map((todo) =>
        todo.id === id
          ? ({ ...todo, completed: !todo.completed })
          : todo
      ),
    }));
  }
}));
