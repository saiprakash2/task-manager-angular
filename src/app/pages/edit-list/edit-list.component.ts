import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.scss']
})
export class EditListComponent {

  listId!: string;

  constructor(private taskService: TaskService, private route:ActivatedRoute, private router:Router){}

  ngOnInit() {
    this.route.params.subscribe((params:Params) => {
      if(params['listId']) {
        this.listId = params['listId'];
      }
    });
  }

  updateList(title:string){
    this.taskService.updateList(this.listId, title).subscribe((res)=>{
      this.router.navigate(['/lists',this.listId]);
    });
  }

}
