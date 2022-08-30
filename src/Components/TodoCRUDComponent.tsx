import React from "react";
import {todoArr} from './TodoListContainerComponent'


export function TodoCRUDContainerComponent() {
    
    return <div className="TodoCRUDContainer">
        <CreateTodoComponent todoData= {todoArr} />
        <div className="upd-dlt-group">
        <select className="dropdown-todo-items">
            <SelectItemsComponent />
        </select>
        <UpdateAndDeleteBTNComponent />
        </div>
    </div>

}

function SelectItemsComponent() {
    
    return <option>123</option>

}

function CreateTodoComponent(props: any) { //!!!!!!!!!!!

    const [inputValue, setInput] = React.useState('')

    const  handleSubmit = () => {
        
        const createElement = {
            id: todoArr[todoArr.length - 1].id + 1,
            title: inputValue,
            status: 'В ожидании'
        }

        todoArr.push(createElement)
        console.log(todoArr)

        return todoArr

    }

    const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)

    return <form onSubmit={handleSubmit} className="create-form-group" action="#">
        <input onChange={changeInput} id="inputCreate" className="create-input" type="text" placeholder="Введите новое дело"/>
        <button className="create-todo-btn" type="submit">Создать дело</button>
    </form>

}

function UpdateAndDeleteBTNComponent() {
    
    return <div>
        <button className="update-btn">Редактировать дело</button>
    </div> 

}