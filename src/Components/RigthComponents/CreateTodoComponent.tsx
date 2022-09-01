import React from "react";
import { todoArr } from "../StateUpComponent";

export function CreateTodoComponent(props: any) {
    const [inputValue, setInput] = React.useState('')

    const  handleSubmit = () => {
        
        if (inputValue === '') { // проверка на пустой input
            return
        }

        const createEl = {
            id: todoArr.length === 0 ? 1 : todoArr[todoArr.length - 1].id + 1,
            title: inputValue,
            status: 'В ожидании'
        } // Создание нового элемента и пуш его в массив, также проверка на пустой массив, без нее код ломается

        todoArr.push(createEl)

        setInput('')

    }

    const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value) // обновление состояния при каждом вводе в инпут

    return <form onSubmit={props.todolist.foo} className="create-form-group" action="#">
        <input onChange={changeInput} id="inputCreate" className="create-input" type="text" placeholder="Введите новое дело"/> 
        <button className="create-todo-btn" type="submit" onClick={handleSubmit}>Создать дело</button>
    </form>

    // Функции onSubmit и onClick поставлены в таком порядке, потому что, сначала идет срабатывание клик по кнопку, а затем Submit, в противном случае, при первом создании элемент не отобразится в массиве

}