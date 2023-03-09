import React, {useState} from "react";
import Todotable from "./Todotable";

export default function Todolist() {
    const [todo, setTodo] = useState({
        description: "",
        date: ""
    });
    const [todos, setTodos] = useState([]);

    const handleAddTodo = () => {
        setTodos([todo, ...todos]);
        setTodo({description: "", date: ""});
    }

    const handleDeleteTodo = (row) => {
        setTodos(todos.filter((todo, index) => row != index));
    }
    
    return(
        <div>
            <h1>My to-do list</h1>

            <input
                placeholder="Description"
                value={todo.description}
                onChange={e => setTodo({...todo, description: e.target.value})}
            />
            <input
                placeholder="Date"
                type="date"
                value={todo.date}
                onChange={e => setTodo({...todo, date: e.target.value})}
            />
            <button onClick={handleAddTodo}>Add Todo</button>

            <Todotable todos={todos} deleteTodo={handleDeleteTodo} />
        </div>
    );
}