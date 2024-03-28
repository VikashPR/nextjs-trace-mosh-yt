import React from 'react'
type TodoItemProps = {
    id: string
    title: string
    completed: boolean
    }

const TodoItem = (
    {id, title, completed}: TodoItemProps
) => {
  return (
    <li className="flex gap-1 items-center">
      <input
        id={id}
        type="checkbox"
        className="cursor-pointer peer"
      />
      <label
        htmlFor={id}
        className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
      >
        {title}
      </label>
    </li>
  );
}

export default TodoItem