import { Fragment } from "react";
import { Todo } from "../../@types/todoTypes";
import { useStore } from "../../store/task";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export default function List() {
  const todos = useStore((state) => state.todos);
  const removeTodo = useStore((state) => state.removeTodo);

  const handleRemoveTodo = (id: string) => {
    removeTodo(id);
  };

  return (
    <>
      {todos.length > 0 && todos.map(({ id, description }: Todo) => {
        return (
          <Fragment key={id}>
            <div className="Todo">
              <p>{description}</p>
              <div>
                <FontAwesomeIcon icon={faTrash} onClick={() => handleRemoveTodo(id)} />
              </div>
            </div>
          </Fragment>
        );
      })}
    </>
  );
}
