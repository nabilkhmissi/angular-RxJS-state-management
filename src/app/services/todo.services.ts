import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class TodoService {

    constructor(private http: HttpClient) {
    }

    getTodos() {
        return this.http.get<Todo[]>("http://localhost:3000/api/todos")
    }

    addTodo(todo: string) {
        return this.http.post("http://localhost:3000/api/todos/add", { todo: todo })
    }

    deleteTodo(id: number) {
        return this.http.delete(`http://localhost:3000/api/todos/${id}`)
    }

    setCompleted(id: number) {
        return this.http.get(`http://localhost:3000/api/todos/${id}/setCompleted`);
    }

}

export interface Todo {
    id: number;
    todo: string;
    done: boolean
}
