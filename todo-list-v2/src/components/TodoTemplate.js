import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { useCallback, useReducer, useRef, useState } from "react";
const makeTodo = () => {
    const todo = [];
    for (let i = 1; i <= 5; i++) {
        todo.push({id: i, text: `${i}번째 할일`, done: false});
    }
    return todo;
}
function reducer(state, action) {
    switch (action.type) {
        case 'DELETE':
            return {...state, list: state.list.filter((todo) => todo.id !== action.payload)};
    }
    return state;
}

export default function TodoTemplate() {
    const [todoList, dispatch] = useReducer(reducer,{list:makeTodo(),id:6});
    
    const deleteTodo = useCallback((id) => {
        dispatch({type: 'DELETE', payload: id});
    },[]);

    const updateTodo = useCallback((id) => {
        //id에 가지고 todoList에 있는 id에 해당하는 done 값을 반대로 변경
        setTodoList((todos) => {
            return todos.map((todo) => {
                if (todo.id === id) {
                    return {...todo, done: !todo.done};
                }
                return todo;
            });
        });
    },[]);

    let id = useRef(6);
    const addTodo = useCallback((text) => {
        setTodoList((todos) => {
            return [...todos, {id: id.current++, text, done: false}];
        });
    },[]);

    return (
        <div>
            <h2>Todo List</h2>
            <TodoForm addTodo={addTodo}/>
            <TodoList todoList={todoList} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
        </div>
    );
}