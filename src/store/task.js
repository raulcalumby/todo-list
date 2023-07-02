import create from "zustand";

const useStore = create((set) => {
  // Verificar se há algum estado salvo no localStorage
  const persistedState = JSON.parse(localStorage.getItem("todosState"));

  return {
    todos: persistedState ? persistedState.todos : [],
    text: persistedState ? persistedState.text : "",
    addText: (inputText) => {
      set((state) => ({
        ...state,
        text: inputText,
      }));
    },
    removeText: () => {
      set((state) => ({
        ...state,
        text: "",
      }));
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
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ),
      }));
    },
  };
});

// Adicionar o efeito colateral para persistir o estado
useStore.subscribe((state) => {
  localStorage.setItem("todosState", JSON.stringify(state));
});

export default useStore;
