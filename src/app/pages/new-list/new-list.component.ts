import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss']
})
export class NewListComponent {

  constructor(private taskService: TaskService, private router: Router) {

  }

  createNewList(title:string) {
    this.taskService.createList(title).subscribe((res:any)=>{
      //Now we navigate to the /list/response._id
      if(res._id !== null) { 
        this.router.navigate(['/lists',res._id]); 
      }
    });
  }

}
