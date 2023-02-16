import React, {useState} from "react";

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

            <table>
                <tbody>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                    </tr>
                    {
                        todos.map((todo, index) => 
                        <tr key={index}>
                            <td>{todo.date}</td>
                            <td>{todo.description}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
}