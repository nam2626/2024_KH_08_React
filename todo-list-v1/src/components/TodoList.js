import TodoListItem from "./TodoListItem";

export default function TodoList({todoList, deleteTodo}) {
    console.log(todoList)
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th style={{width: '10%'}}>ID</th>
                        <th>Todo</th>
                        <th style={{width: '10%'}}>Complete</th>
                        <th style={{width: '10%'}}>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todoList.map(todo => {
                            return <TodoListItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
                        })
                    }
                    
                </tbody>
            </table>
        </div>
    );
}