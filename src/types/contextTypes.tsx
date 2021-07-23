export interface Action {
    type: 'ADD_TO_BASKET' | 'REMOVE_FROM_BASKET' | 'SET_PAGE' | 'ADD_TO_TOTAL' | 'CLEAR_BASKET';
    key: string;
    payload: Item;
    page: string;
    number: number;
}

export interface Item {
    name: string;
    price: number;
}

export interface State {
    basket: {
        [key: string]: Item;
    },
    selectedPage: null | string,
    total: number;
}