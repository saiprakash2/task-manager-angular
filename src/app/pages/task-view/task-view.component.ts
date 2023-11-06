import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})

export class TaskViewComponent {

  id!:string;
  lists:any[]=[];
  tasks:any[]=[];
  listId!: string;
  
  constructor(
    private taskService: TaskService, 
    private route: ActivatedRoute, 
    private router: Router) {

  }

  ngOnInit() {

    this.route.params.subscribe((params:Params) => {
      if(params['listId']){
        this.listId = params['listId'];
        this.getTasks(this.listId);
      }
    });

    this.getLists();

  }

  getLists():void {
    this.taskService.getLists().subscribe((res:any) => {
      if(res.success){
        this.lists = res.lists;
      }
    });
  }

  getTasks(listId:string):void {
    this.taskService.getTasks(listId).subscribe((tasks:any) => {
      this.tasks = tasks;
    });
  }

  onTaskClick(task:any):void {
    //We want to set the task to completed
    this.taskService.complete(task).subscribe(()=>{
      task.completed = !task.completed;
    });
  }

  onDeleteListClick():void {
    this.taskService.deleteList(this.listId).subscribe((list)=>{
      this.router.navigate(['/lists']);
    });
  }

  onDeleteTaskClick(taskId:string):void {
    if(confirm(`Are you sure you want to delete?`)){
      this.taskService.deleteTask(this.listId, taskId).subscribe((res)=>{
        if(res){
          this.getTasks(this.listId);
          this.router.navigate(['/list',this.listId]);
        }
      });
    }
  }

  onLogoutClick():void {
    this.taskService.logout().subscribe((res)=>{
      localStorage.removeItem('access_token');
      this.router.navigate(['/login']);
    });
  }

}
