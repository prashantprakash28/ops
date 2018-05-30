import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { TodoService } from './shared/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers : [TodoService]
})

export class TodoComponent implements OnInit {
  toDoListArray: any[];
  data: any;
  constructor(private toDoService: TodoService) { 
  this.data = {title:"",date:"",Time:"",isChecked:false,comment:""};
  }

  ngOnInit() {
    this.toDoService.getToDoList().snapshotChanges()
    .subscribe(item => {
      this.toDoListArray = [];
      item.forEach(element => {
        var x = element.payload.toJSON();
        x["$key"] = element.key;
        this.toDoListArray.push(x);
      })

      //sort array isChecked false  -> true
        this.toDoListArray.sort((a,b) => {
          return a.isChecked - b.isChecked;
        })
    });
  }

  onAdd(item) {
    console.log(item);
    this.toDoListArray = this.toDoListArray.push(item);
    //this.toDoService.addTitle(itemTitle.value);
    //itemTitle.value = null;
  }

  alterCheck($key: string, isChecked) {
    this.toDoService.checkOrUnCheckTitle($key,!isChecked);
  }

  onDelete($key : string){
    this.toDoService.removeTitle($key);
  }

}
