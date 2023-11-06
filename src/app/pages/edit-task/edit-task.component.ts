import { Component } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent {

  listId!: string;
  taskId!: string;

  constructor(private taskService: TaskService, private route:ActivatedRoute, private router:Router){}

  ngOnInit() {
    this.route.params.subscribe((params:Params) => {
      if(params['listId']) {
        this.listId = params['listId'];
      }
      if(params['taskId']) {
        this.taskId = params['taskId'];
      }
    });
  }

  updateTask(title:string){
    this.taskService.updateTask(this.listId,this.taskId, title).subscribe((res)=>{
      this.router.navigate(['/lists',this.listId]);
    });
  }

}
