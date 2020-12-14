import { Pipe, PipeTransform } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Task } from '../Task/task';

@Pipe({
  name: 'taskConverter'
})
export class TaskConverterPipe implements PipeTransform {

  constructor(private categoryService: CategoryService) {}
  transform(value: unknown, ...args: unknown[]): Task[] {
  
    return this.MapCategoryName(value);
  }
  MapCategoryName(data: any): any {
    var tempdata: Task[] = []; 
    data.forEach((element) => {
      tempdata.push({
        id: element.id,
        name: element.name,
        categoryId: element.categoryId,
        categoryName: this.categoryService.categories.find(o => o.id === element.categoryId) != null ?  
                      this.categoryService.categories.find(o => o.id === element.categoryId).name : "",
        description: element.description,
      });
    });
    console.log(tempdata);
    return tempdata;
  }
}
