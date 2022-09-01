export interface dataAndFooCont {
    todolist: dataAndFoo
}

export interface dataAndFoo {
    items: Array<object>
    foo: object,
}

export interface ItemComponent {
    name: string,
    data: dataAndFooCont,
    itemState: string,
    unic: number,
    foo: object
}

export interface updateComponentInterface {
    todolist: Array<object>,
    foo: Function
}

export interface optionInterface {
    name: string
}

export interface TODOList {
    readonly id: number;
    title: string;
    status: string;
}

export interface IProp {
    todolist: Array<TODOList>
}