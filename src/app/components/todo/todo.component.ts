import { Component, OnInit } from '@angular/core';
import { TodoState } from 'src/app/services/todos.state';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private todoState: TodoState) { }


  todos$ = this.todoState.todos$

  ngOnInit(): void {
    this.todoState.initObservable()
  }

  deleteTodo(id: number) {
    this.todoState.deleteTodo(id).subscribe()
  }

  setCompleted(id: number) {
    this.todoState.setCompleted(id).subscribe()
  }

}
