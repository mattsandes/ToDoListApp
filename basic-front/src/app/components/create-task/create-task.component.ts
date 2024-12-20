import { Component, inject, OnInit } from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskServiceService } from '../../services/task-service.service';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css'
})
export class CreateTaskComponent implements OnInit {

  public newTask: Task = {
    id: '',
    taskName: '',
    description: '',
    createDate: new Date().toISOString(),
    done: false
  }

  constructor(private service: TaskServiceService){}
  private _snackBar = inject(MatSnackBar);

  ngOnInit(): void {
  }

  createTask(): void {
    if(!this.newTask.taskName || !this.newTask.description){
      this._snackBar.open('Não é possivel criar uma tarefa com os campos vazios!', 'OK', {duration: 3000});

      return;
    }

    this.service.createTask(this.newTask).subscribe({
      next: (response: Task) => {
        this._snackBar.open('Tarefa criada com sucesso!', 'Ok', {duration: 3000});

        this.newTask = {
          id: '',
          taskName: '',
          description: '',
          createDate: new Date().toISOString(),
          done: false
        };
      },
      error: (error) => {
        console.log(error);

        this._snackBar.open("Error ao criar tarefas!", 'Ok', {duration: 3000});
      }
    });
  }
}
