import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Todo, TodoService } from 'src/app/services/todo.services';
import { TodoState } from 'src/app/services/todos.state';


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  constructor(private todoState: TodoState) {
   }

  ngOnInit(): void {
  }

  addTodo(todoName: HTMLInputElement) {
    this.todoState.addTodo(todoName.value).subscribe()
  }

  deleteTodo(id: number) {
    this.todoState.deleteTodo(id).subscribe();
  }


}
