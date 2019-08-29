import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducers } from '.';
import { TacosEffects } from './tacos/tacos.effects';
import { TacosFacade } from './tacos/tacos.facade';
import { PizzasEffects } from './pizzas/pizzas.effects';
import { PizzasFacade } from './pizzas/pizzas.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 10,
    }),
    EffectsModule.forRoot([
      TacosEffects,
      PizzasEffects
    ]),
  ],
  providers: [
    TacosFacade,
    PizzasFacade
  ]
})
export class CoreStateModule {}
