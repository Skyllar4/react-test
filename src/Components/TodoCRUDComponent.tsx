import React from "react";
import {CreateTodoComponent} from './RigthComponents/CreateTodoComponent'
import {UpdateComponent} from './RigthComponents/UpdateComponent'

export function TodoCRUDContainerComponent(props: any) {
    return <div className="TodoCRUDContainer">
        <CreateTodoComponent todolist={props} />
        <div className="upd-dlt-group">
            <UpdateComponent todolist={props.items} foo={props.foo}/>
        </div>
    </div>

}