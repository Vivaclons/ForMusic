import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProServiceService {

  constructor(private http: HttpClient) {
  }

  getAllUsers1(page: string): Observable<any> {
    return this.http.get('http://localhost:3000/users?' + page + '&_sort=name&_order=desc');
  }

  getAllUsers(): Observable<any> {
    return this.http.get('http://localhost:3000/users');
  }

  createUser(user: any): Observable<any> {
    return this.http.post('http://localhost:3000/users', user);
  }

  updateUser(user: any): Observable<any> {
    return this.http.put('http://localhost:3000/users/' + user.id, user);
  }

  deleteUser(id): Observable<any> {
    return this.http.delete('http://localhost:3000/users/' + id);
  }
  getAllSubs(): Observable<any> {
    return this.http.get('http://localhost:3000/roles');
  }

  getAllAdmin(): Observable<any> {
    return this.http.get('http://localhost:3000/admin');
  }

  getAllTasks(page: string): Observable<any> {
    return this.http.get('http://localhost:3000/tasks?' + page + '&_sort=name&_order=desc');
  }

  createTask(task: any) {
    return this.http.post('http://localhost:3000/tasks', task);
  }

  updateTask(task: any) {
    return this.http.put('http://localhost:3000/tasks/' + task.id, task);
  }

  deleteTask(id) {
    return this.http.delete('http://localhost:3000/tasks/' + id);
  }

  getAllRoles(): Observable<any> {
    return this.http.get('http://localhost:3000/roles');
  }
}
