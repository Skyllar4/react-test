import React from "react";
import { TodoListComponent } from "./TodoListComponent";
import { dataAndFoo } from "../InterFaces/interfaces";

export function TodoContainerComponent(props: dataAndFoo) {
    
    return <div className="TodolistContainer">
        <h1 className="todo-title">Список дел</h1>
            <TodoListComponent todolist={props}/>
    </div>

}