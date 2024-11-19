import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  private apiUrl = 'http://localhost:8080/tasks';

  constructor(private http: HttpClient) { }

  getTask(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiUrl}`);
  }

  findTask(task: string): Observable<Task> {
    return this.http.get<Task>(`${this.apiUrl}/findByName?taskName=${task}`);
  }

  createTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task);
  }

  doneTask(taskName: string): Observable<Task> {
    return this.http.put<Task>(`${this.apiUrl}/${taskName}`, {});
  }
}
