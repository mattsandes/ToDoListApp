import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskServiceService } from '../../services/task-service.service';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table'
import { MatProgressBarModule } from '@angular/material/progress-bar'

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatProgressBarModule
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {

  constructor(private taskService: TaskServiceService){}

  public task: Task[] = [];
  public taskHeader: string[] = ['demo-taskName', 'demo-description', 'demo-createDate', 'demo-done'];


  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTask().subscribe((task: Task[]) => {
      this.task = task;  // Aqui você define a variável task com os dados recebidos
      return (this.task);
    },
  )};
}
