import React, { Fragment } from "react";
import { todoArr } from "./StateUpComponent";
import {SelectItemsComponent} from './SelectItemsComponent'

export function UpdateComponent(props: any) {

    let selectValue: string // для отслеживание элемента для редактирования
    let inputValue: string // значение инпута для редактирования
    const rerender = props.foo

    function handleClick(): void {

        if (!selectValue) { // проверка на то, что выбран option
            return
        }

        const objectFind = props.todolist.find((e: any) => e.title === selectValue).id // поиск соответсвия option и элемента массива
        
        for (let i of todoArr) {
            
            if (objectFind === i.id) {
                i.title = inputValue // Смена значения
            }

        }
        rerender()
    }

    return <Fragment>
                <select className="dropdown-todo-items" onChange={(e) => {
                    selectValue = e.target.value
                }}>
                    <option hidden>Выберите дело</option>
                        {
                            props.todolist.map((item: any) => {
                                return <SelectItemsComponent key={item.id} name={item.title} />
                            })
                        }
                </select>
                        <input type="text" placeholder="Введите изменения" className="create-input" onChange={(e) => {
                            inputValue = e.target.value
                        }}/>
                        <button className="update-btn" onClick={handleClick}>Редактировать дело</button>
        </Fragment>

}