import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, shareReplay, tap } from "rxjs";
import { Todo, TodoService } from "./todo.services";

@Injectable({
    providedIn: "root"
})
export class TodoState {

    constructor(private todoService: TodoService) {
    }

    private _todos = new BehaviorSubject<Todo[]>([]);
    todos$: Observable<Todo[]> = this._todos.asObservable().pipe(
        shareReplay(1)
    );



    updateData(newTodos: Todo[]) {
        this._todos.next(newTodos)
    }




    initObservable() {
        this.updateDataObservable().subscribe()
    }

    updateDataObservable() {
        return this.todoService.getTodos().pipe(
            tap(data =>
                this._todos.next(data as Todo[])
            )
        )
    }

    addTodo(todo: string) {
        return this.todoService.addTodo(todo).pipe(

            tap(() => {
                console.log("add new todo")
                this.initObservable()
            })
        )
    }

    setCompleted(id: number) {
        return this.todoService.setCompleted(id).pipe(
            tap(() => this.initObservable())
        );
    }

    deleteTodo(id: number) {
        return this.todoService.deleteTodo(id).pipe(
            tap(() => this.initObservable())
        )
    }
}
