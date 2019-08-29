import { ActionReducerMap } from '@ngrx/store';

import * as fromTacos from './tacos/tacos.reducer';
import * as fromPizzas from './pizzas/pizzas.reducer';

export interface AppState {
    tacos: fromTacos.TacosState;
    pizzas: fromPizzas.PizzasState
}

export const reducers: ActionReducerMap<AppState> = {
    tacos: fromTacos.tacosReducer,
    pizzas: fromPizzas.pizzasReducer,
}