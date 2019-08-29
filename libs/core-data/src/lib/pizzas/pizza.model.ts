export interface Pizza {
    id: number,
    name: string,
    calories: number,
    mainTopping: string,
    secondaryTopping: string
}

export const emptyPizza = {
    id: null, 
    name: '',
    calories: null,
    mainTopping: '',
    secondaryTopping: ''
}