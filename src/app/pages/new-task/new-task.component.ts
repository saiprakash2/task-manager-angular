import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  listId :string | undefined;

  constructor(private taskService: TaskService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.params.subscribe((params:Params) => {
      if(params['listId']) {
        this.listId = params['listId'];
      }
    });
  }

  createNewTask(title:string) {
    console.log("Ddd")
      this.taskService.createTask(title,this.listId).subscribe((res:any)=>{
        //Now we navigate to the /list/response._id
        console.log("Ddd")
        if(res._id !== null) { 
          this.router.navigate(['lists',this.listId]); 
        }
      });
  }

}
