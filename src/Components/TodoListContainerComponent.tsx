import React from "react";

interface TODOList {
    readonly id: number;
    title: string;
    status: string;
}

interface IProps {
    items: Array<TODOList>,
}

interface StatusState {
    status: string
}

export const todoArr: Array<TODOList> = [
    {
        id: 1,
        title: '312',
        status: 'Готово'
    },
    {
        id: 2,
        title: '123',
        status: 'Готово'
    },
]

export function TodoContainerComponent() {
    
    return <div className="TodolistContainer">
        <SearchInputComponent />
        <h1 className="todo-title">Список дел</h1>
            <TodoItemsComponent todolist={todoArr}/>
    </div>

}

function SearchInputComponent() {

    return <input className="search-Input" type="text" placeholder="Поиск..."/>

}

function TodoItemsComponent(props: Array<TODOList>) {  // ANY!!!!!!!!!!!!!!!!!!!!!!!

    const [status, setStatus] = React.useState('В ожидании')

    // const handleClick<HTMLButtonElement> = (event) => {
    //     console.log(event.target)
    // }

        const listItems = props.todolist.map((item: TODOList) => {
            return <li key={item.id} className="todo-list-item">
                {item.title}
        <ul className="todo-list-btn-grp">
            <li className="todo-btn-group-item"><button onClick={handleClick} id="inProcces" className="in-procces-btn">В процессе</button></li>    
            <li className="todo-btn-group-item"><button onClick={handleClick} id="ready" className="ready-btn">Готово</button></li>  
            <li className="todo-btn-group-item"><button onClick={handleClick} id="delete" className="delete-btn"></button></li>
        </ul>
        </li>
        })        

        return <ul>{listItems}</ul>

// !!!!!!!!!!!!!

}