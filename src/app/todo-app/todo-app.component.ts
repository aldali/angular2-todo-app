import { Component } from '@angular/core';
import {TodoService} from '../todo.service';
import { Todo } from '../todo';



@Component({
  moduleId: module.id,
  selector: 'app-todo-app',
  templateUrl: 'todo-app.component.html',
  styleUrls: ['todo-app.component.css'],
  providers: [TodoService]

})
export class TodoAppComponent {
    newTodo: Todo = new Todo();

   // Ask Angular DI system to inject the dependency
  // associated with the dependency injection token `TodoService`
  // and assign it to a property called `todoService`
  constructor(private todoService: TodoService) {
  }

  // Services are now available as this.todoService 
    addTodo() {
    this.todoService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  toggleTodoComplete(todo) {
    this.todoService.toggleTodoComplete(todo);
  }

  removeTodo(todo) {
    this.todoService.deleteTodoById(todo.id);
  }

  get todos() {
    return this.todoService.getAllTodos();
  }



  

}