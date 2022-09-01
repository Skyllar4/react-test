import React from "react";
import {CreateTodoComponent} from './CreateTodoComponent'
import {UpdateComponent} from './UpdateComponent'

export function TodoCRUDContainerComponent(props: any) {
    return <div className="TodoCRUDContainer">
        <CreateTodoComponent todolist={props} />
        <div className="upd-dlt-group">
            <UpdateComponent todolist={props.items} foo={props.foo}/>
        </div>
    </div>

}