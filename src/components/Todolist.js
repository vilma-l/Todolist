import React, {useState, useRef} from "react";
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';

export default function Todolist() {
    const [todo, setTodo] = useState({
        description: "",
        date: "",
        priority: ""
    });

    const [todos, setTodos] = useState([]);

    const gridRef = useRef();

    const [columnDefs] = useState([
        {field: "description", sortable: true, filter: true, floatingFilter: true},
        {field: "priority", sortable: true, filter: true, floatingFilter: true, 
            cellStyle: params => params.value == "High" ? {color: "red"} : {color: "black"}
        },
        {field: "date", sortable: true, filter: true, floatingFilter: true}
    ]);

    const handleAddTodo = () => {
        setTodos([todo, ...todos]);
        setTodo({description: "", date: ""});
    }

    const handleDeleteTodo = () => {
        if (gridRef.current.getSelectedNodes().length > 0) {
            setTodos(todos.filter((todo, index) => 
            index !== gridRef.current.getSelectedNodes()[0].childIndex))
        } else {
            alert("Select row first");
        }
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
                placeholder="Priority"
                value={todo.priority}
                onChange={e => setTodo({...todo, priority: e.target.value})}
            />

            <input
                placeholder="Date"
                type="date"
                value={todo.date}
                onChange={e => setTodo({...todo, date: e.target.value})}
            />
            <button onClick={handleAddTodo}>Add</button>
            <button onClick={handleDeleteTodo}>Delete</button>

            <div className="ag-theme-material" style={{height: 500, width: 600, margin: "auto"}}>
                <AgGridReact
                    ref={gridRef}
                    onGridReady={params => gridRef.current = params.api}
                    rowSelection="single"
                    rowData={todos}
                    columnDefs={columnDefs}
                    animateRows={true}
                />
            </div>
        </div>
    );
}