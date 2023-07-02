import create from "zustand";

interface TodoState {
  todos: [];
  addTodo: (description: string) => void;
  removeTodo: (id: string) => void;
  toggleCompletedState: (id: string) => void;
}

export const useStore = create<TodoState>((set) => ({
  todos: [],
  text: '',
  addText: (inputText: string) => {
    set((state) => ({ 
      text: inputText
    }))
  },
  removeText: () => {
    set((state) => ({
      text: ''
    }))
  },
  addTodo: (description: string) => {
    set((state) => ({
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
      todos: state.todos.filter((todo) => todo.id !== id),
    }));
  },
  toggleCompletedState: (id) => {
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id
          ? ({ ...todo, completed: !todo.completed } as Todo)
          : todo
      ),
    }));
  },

  getTodo: () => {
    
  }
}));