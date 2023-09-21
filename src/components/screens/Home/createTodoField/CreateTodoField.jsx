import React, { useState } from "react";

const CreateTodoField = ({ setTodos }) => {
    const [title, setTitle] = useState('');

    const addTodo = (title) => {
        setTodos(prev => [...prev, {
            title,
            id: new Date(),
            isCompleted: false
        }]);
        setTitle('');
    }

    return (
        <div className="flex items-center justify-between mb-4 rounded-2xl border-gray-800 border-2 px-5 p-3 w-full">
            <input
                type="text"
                onChange={e => setTitle(e.target.value)}
                value={title}
                onKeyDown={e => e.code === 'Enter' && addTodo(title)}
                className="bg-transparent w-full border-none outline-none"
                placeholder="Add a task"
            />
        </div>
    )
}

export default CreateTodoField;