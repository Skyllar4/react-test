import React, { Fragment } from "react";
import { TodoItemComponent } from "./TodoItemComponent";
import { dataAndFooCont } from "../../InterFaces/interfaces";

export function TodoListComponent<T extends dataAndFooCont>(props: T) { // Компонент, отрисовывает список дел

    const [items, setItems] = React.useState({itemData: props.todolist.items})

    function filterList(e: React.ChangeEvent<HTMLInputElement>): void { // Функция фильтрации, принимает массив из пропов, и вызвается при каждом вводе в инпут
        const filtredList = props.todolist.items.filter((item: any) => {
            return item.title.toLowerCase().search(e.target.value.toLowerCase())!== -1;
        })
         setItems(() => ({itemData: filtredList}))
    }

        return <Fragment>
                <input onChange={filterList} className="search-Input" type="search" placeholder="Поиск..."/>
                <ul> {
                        items.itemData.map((item: any) => { // отрисовка списка дел
                                return <TodoItemComponent foo={props.todolist.foo} key={item.id} name={item.title} data={props} itemState={item.status} unic={item.id}/>
                            })
                        }
                    </ul>
            </Fragment>

}