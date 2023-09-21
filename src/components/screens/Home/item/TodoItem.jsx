import React from "react";

import Check from "./Check";
import { BsTrash } from "react-icons/bs";

const TodoItem = ({ todo, changeTodo, removeTodo }) => {
    const { title, id, isCompleted } = todo;
    return (
        <div
            className="flex items-center justify-between mb-4 rounded-2xl bg-gray-800 p-5 w-full"
        >
            <button className="flex items-center"
                onClick={() => changeTodo(id)}>
                <Check
                    isCompleted={isCompleted}
                />
                <span className={`${isCompleted ? 'line-through' : ''}`}>{title}</span>
            </button>
            <button onClick={() => {
                removeTodo(id)
            }}>
                <BsTrash />
            </button>
        </div>
    )
}

export default TodoItem;