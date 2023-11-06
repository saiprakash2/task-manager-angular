import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  constructor(private taskService: TaskService, private router: Router) {

  }

  signup(username:string, password:string) {
    this.taskService.signup(username,password).subscribe((res:any)=>{
      if(res){
        this.router.navigate(['/login']); 
      }
    });
  }
  
  onLoginClick() {
    this.router.navigate(['/login']);
  }

}
