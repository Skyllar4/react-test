import React from "react";
import {optionInterface} from '../../InterFaces/interfaces'

export function SelectItemsComponent(props: optionInterface) {

    return <option>{props.name}</option>

}