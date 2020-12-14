import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertifyService } from 'src/app/services/alertify.service';
import { Category } from '../category/category';
import { CategoryService } from '../services/category.service';
import { TasklistService } from '../services/tasklist.service';
import { Task } from '../Task/task';

@Component({
  selector: 'app-taskcreate',
  templateUrl: './taskcreate.component.html',
  styleUrls: ['./taskcreate.component.css']
})
export class TaskcreateComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private tasklistService: TasklistService,
    private alertifyService: AlertifyService,
    private categoryService: CategoryService) { }

  taskCreateForm: FormGroup;
  task: Task = new Task();
  categories: Category[];

  createTaskCreateForm() {
    this.taskCreateForm = this.formBuilder.group({
      name: ["", Validators.required],
      description: ["", Validators.required],
      categoryId: ["", Validators.required]
    });
  }
  ngOnInit(): void {
    this.createTaskCreateForm();
    this.categoryService.getCategoryLists().subscribe(data =>
      this.categories = data
    );
  }
  addTask() {
    if (this.taskCreateForm.valid) {
      this.task = Object.assign({}, this.taskCreateForm.value);
    }
    console.log("taskCreateForm: "+this.taskCreateForm);
    console.log("task: "+this.task);
    this.tasklistService.createTask(this.task).subscribe(data => {
      this.alertifyService.success(data.name + " başarıyla eklendi");
    });
  }
  
}
