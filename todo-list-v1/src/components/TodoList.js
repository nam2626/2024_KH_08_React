import TodoListItem from "./TodoListItem";

export default function TodoList() {
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
                    <TodoListItem/>
                </tbody>
            </table>
        </div>
    );
}