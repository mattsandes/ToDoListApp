import { Component, inject, OnInit } from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskServiceService } from '../../services/task-service.service';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table'
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { SelectionModel } from '@angular/cdk/collections';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatProgressBarModule,
    MatCheckboxModule
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {

  constructor(private taskService: TaskServiceService){}

  public tasks: Task[] = [];
  public task?: Task

  private _snackBar = inject(MatSnackBar);

  public taskHeader: string[] = ['demo-taskName', 'demo-description', 'demo-createDate', 'demo-done', 'demo-select'];

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTask().subscribe({
      next: (tasks) => {
        this.tasks = tasks;
      },
      error: (err) => {
        console.log('Erro ao buscar tarefas: ', err)
      }
    }
  )};

  markTaskAsDone(task: Task): void {
    this.taskService.doneTask(task.taskName).subscribe({
      next: (updatedTask) => {
        location.reload();

        console.log('Tarefa finalizada: ', task.taskName);
      }
    });
  }
}
