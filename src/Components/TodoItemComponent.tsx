import React from "react";
import { todoArr } from "./StateUpComponent";

export function TodoItemComponent(props: any) {

    const [itemStatus, setStatus] = React.useState({status: props.itemState}) // Состояние для смены статуса дела
    const [classStatus, setClassStatus] = React.useState({nowStatus: 'todo-list-item'}) // объявление статуса для смены класса элементов списка, руководствуясь состоянием

    const changeStatus = (status: string) => { // функция, меняющая статус, на вход принимает переданный от кнопки аргумент
        
        setStatus(() => ({status: status}))

        if (itemStatus.status === "В процессе") {
            setClassStatus((prevState) => ({...prevState, nowStatus: 'todo-list-item-procces'}))
        } else if (itemStatus.status === "Готово") {
            setClassStatus((prevState) => ({...prevState, nowStatus: 'todo-list-item-ready'}))
        } else if (itemStatus.status === "Удалить") {
            itemDelete()
        }

    }

    return <li className={classStatus.nowStatus}>
    {props.name}
            <ul className="todo-list-btn-grp">
                <li className="todo-btn-group-item"><button onClick={() => {
                    changeStatus('В процессе')
                }} className="in-procces-btn">В процессе</button></li>    
                <li className="todo-btn-group-item"><button onClick={() => {
                    changeStatus('Готово')
                }} className="ready-btn">Готово</button></li>  
                <li className="todo-btn-group-item"><button onClick={() => {
                    changeStatus('Удалить')
                }} className="delete-btn">Удалить</button></li>
            </ul>
        </li> // отрисовка дела с кнопками, обернул в ul, а не в div, потому что избегаю чрезмерного использования div

function itemDelete() { // функция, которая удаляет элемент, ищет нажатый элемент и удаляет его из главного массива


        const objectFind = props.data.todolist.items.find((e: any) => e.id === props.unic).id
        const rerender = props.foo
        
        for (let i of todoArr) {
            
            if (objectFind === i.id) {
                const objectIndex = todoArr.indexOf(i)
                todoArr.splice(objectIndex, 1)
            }

        }
        rerender()
}

}