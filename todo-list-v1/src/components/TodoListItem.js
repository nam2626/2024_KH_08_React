import './../css/todo.css';
export default function TodoListItem({todo}) {

    return (
        <tr>
            <td>{todo.id}</td>
            <td><span className={todo.done ? 'done' : ''}>{todo.text}</span></td>
            <td><button class="btn btn-primary">Complete</button></td>
            <td><button class="btn btn-danger">Delete</button></td>
        </tr>        
    );
}