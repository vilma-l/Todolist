export default function Todotable(props){
    return(
        <table>
            <tbody>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Priority</th>
                </tr>
                {
                    props.todos.map((todo, index) => 
                    <tr key={index}>
                        <td>{todo.date}</td>
                        <td>{todo.description}</td>
                        <td>{todo.priority}</td>
                        <td><button onClick={() => props.deleteTodo(index)}>Done</button></td>
                    </tr>)
                }
            </tbody>
        </table>
    );
}