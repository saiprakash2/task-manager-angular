import { Injectable } from '@angular/core';
import { WebrequestService } from './webrequest.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webReqService:WebrequestService) { }


//functions
  createList(title:string) {
    //we need to make a web request here.
    return this.webReqService.post('lists', {title});
  }

  getLists() {

    return this.webReqService.get('lists');
  }

  updateList(listId:any,title:string) {
    return this.webReqService.patch(`lists/${listId}`, {title});
  }

  deleteList(listId: string) {
    return this.webReqService.delete(`lists/${listId}`);
  }

  getTasks(listId:any) {
    return this.webReqService.get(`list/${listId}/tasks`);
  }

  createTask(title:string,listId:any) {
    //we need to make a web request here.
    console.log('createTask')
    return this.webReqService.post(`list/${listId}/tasks`, {title,listId});
  }

  updateTask(listId:string,taskId:string, title:string) {
    return this.webReqService.patch(`list/${listId}/tasks/${taskId}`, {title});
  }

  deleteTask(listId:string, taskId: string) {
    return this.webReqService.delete(`list/${listId}/tasks/${taskId}`);
  }

  complete(task:any) {
    return this.webReqService.patch(`list/${task._listId}/tasks/${task._id}`, {
      completed:!task.completed
    });
  }

  login(username:String,password:string) {
    return this.webReqService.post('auth',{username,password});
  }

  signup(username:String,password:string) {
    return this.webReqService.post('auth/signup',{username,password});
  }

  refresh() {
    return this.webReqService.get('auth/refresh');
  }

  logout() {
    return this.webReqService.post('auth/logout',{});
  }

}
