import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskViewComponent } from './pages/task-view/task-view.component';
import { NewListComponent } from './pages/new-list/new-list.component';
import { NewTaskComponent } from './pages/new-task/new-task.component';
import { EditListComponent } from './pages/edit-list/edit-list.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { EditTaskComponent } from './pages/edit-task/edit-task.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {path:'', redirectTo:'/login',pathMatch:'full'},
  {path:'new-list', component: NewListComponent,canActivate: [AuthGuard]},
  {path:'edit-list/:listId', component: EditListComponent,canActivate: [AuthGuard]},
  {path:'lists/:listId/edit-task/:taskId', component: EditTaskComponent,canActivate: [AuthGuard]},
  {path:'login', component: LoginComponent},
  {path:'signup', component: SignupComponent},
  {path:'lists', component: TaskViewComponent,canActivate: [AuthGuard]},
  {path:'lists/:listId', component: TaskViewComponent,canActivate: [AuthGuard]},
  {path:'lists/:listId/new-task', component: NewTaskComponent,canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
