import { Component, OnInit } from '@angular/core';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.sass'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {
  todoListArray: any[];

  constructor(private toDoService: TodoService) { }

  ngOnInit() {
    this.toDoService.getTodoList()
    .subscribe(item => {
        this.todoListArray = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.todoListArray.push(x);
        });

        this.todoListArray.sort((a,b) => {
          return a.isChecked - b.isChecked;
        });
    });
  }

  onAdd(itemTitle) {
    if (itemTitle.value.length) {
      this.toDoService.addTitle(itemTitle.value);
      itemTitle.value = null;
    }
  }

  alterCheck($key: string, isChecked) {
    this.toDoService.checkOrUncheckTitle($key, !isChecked);
  }

  onDelete($key: string) {
    this.toDoService.removeTitle($key);
  }
}
