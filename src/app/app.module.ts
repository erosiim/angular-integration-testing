import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { VoterComponent } from './voter/voter.component';
=======
import { TodosComponent } from './todos/todos.component';
>>>>>>> c9a6b73c150986062d7c42c7136a9b0c47bcb7df

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    VoterComponent
=======
    TodosComponent
>>>>>>> c9a6b73c150986062d7c42c7136a9b0c47bcb7df
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
