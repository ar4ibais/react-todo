import React, { useState } from "react";

import TodoItem from "./item/TodoItem";
import CreateTodoField from "./createTodoField/CreateTodoField";

const data = [
    {
        title: 'Finished the essay',
        isCompleted: false,
        id: 'fnvnfv'
    },
    {
        title: 'Read the next chapter of the book',
        isCompleted: false,
        id: 'werufru'
    },
    {
        title: 'Send a finished assigment',
        isCompleted: false,
        id: ',boymboy'
    },
]

const Home = () => {
    const [todos, setTodos] = useState(data);

    const changeTodo = (id) => {
        const copy = [...todos];
        const currrent = copy.find(t => t.id === id);
        currrent.isCompleted = !currrent.isCompleted;
        setTodos(copy);
    }

    const removeTodo = id => {
        setTodos([...todos].filter(t => t.id !== id));
    };

    return (
        <div className=" text-white w-4/5 mx-auto">
            <h1 className="text-2xl font-bold text-center mb-10">React ToDo</h1>
            {todos.map(todo => <TodoItem
                key={todo.id}
                todo={todo}
                removeTodo={removeTodo}
                changeTodo={changeTodo}
            />)}
            <CreateTodoField
                setTodos={setTodos}
            />
        </div>
    )
}

export default Home;