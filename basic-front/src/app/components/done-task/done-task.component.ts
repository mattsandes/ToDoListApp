import { Component, inject, OnInit } from '@angular/core';
import { TaskServiceService } from '../../services/task-service.service';
import { Task } from '../../models/task.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-done-task',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
  ],
  templateUrl: './done-task.component.html',
  styleUrl: './done-task.component.css'
})
export class DoneTaskComponent implements OnInit {

  constructor(private service: TaskServiceService){}
  private _snackBar = inject(MatSnackBar);

  ngOnInit(): void {}

  doneTask(task: string) :void {
    this.service.doneTask(task).subscribe({
      next: (task: Task) => {
        this._snackBar.open('Task finalizada', 'Ok', {duration: 3000});
      },
      error: (error) => {
        this._snackBar.open('Erro ao finalizar task!', 'Ok', {duration: 3000});
      }
    });
  }

}
