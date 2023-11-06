import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private taskService: TaskService, private router: Router) {

  }

  login(username:string, password:string) {
    console.log(username)
    console.log(password)
    this.taskService.login(username,password).subscribe((res:any)=>{
      if(res){
        localStorage.setItem('access_token', res.accessToken);
        this.router.navigate(['/lists']); 
      }
    });
  }

  onSignupClick() {
    this.router.navigate(['/signup']);
  }

}
