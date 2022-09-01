import React from "react";
import { TodoCRUDContainerComponent } from "./TodoCRUDComponent";
import { TodoContainerComponent } from "./TodoListContainerComponent";
import { TODOList } from "../InterFaces/interfaces";

export const todoArr: Array<TODOList> = [] // Главный массив для хранения всех значений

export function StateUpComponent() { // Компонент, при изменении сотояния которого будет ререндерить все дочерние компоненты
                                    // Создал его потому что дочерние компоненты используют todoArr
    const [data, setData] = React.useState({todoArr})

    const handler = () => {
        setData(() => ({todoArr}))
    }

    return <div className="main-container">
            <TodoContainerComponent items={data.todoArr} foo={handler}/>
            <TodoCRUDContainerComponent items={data.todoArr} foo={handler}/>
           </div>

}