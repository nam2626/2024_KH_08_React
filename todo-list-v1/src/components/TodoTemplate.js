import TodoList from "./TodoList";
import { useState } from "react";
const makeTodo = () => {
    const todo = [];
    for (let i = 1; i <= 5; i++) {
        todo.push({id: i, text: `${i}번째 할일`, done: false});
    }
    return todo;
}
/*
  todoList = [
    {id: 1, text: '1번째 할일', done: false},
    {id: 2, text: '2번째 할일', done: false},
    {id: 2, text: '3번째 할일', done: false},
    {id: 3, text: '4번째 할일', done: false},
    {id: 4, text: '5번째 할일', done: false},
  ]
*/
export default function TodoTemplate() {
    const [todoList, setTodoList] = useState(makeTodo());
    return (
        <div>
            <h2>Todo List</h2>
            <TodoList/>
        </div>
    );
}