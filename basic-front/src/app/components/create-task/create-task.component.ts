import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskServiceService } from '../../services/task-service.service';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
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

  ngOnInit(): void {
      this.createTask();
  }

  createTask(): void {
    if(!this.newTask){
      alert('Não é possivel criar uma tarefa com os campos vazios!');

      return;
    }


    this.service.createTask(this.newTask).subscribe({
      next: (response: Task) => {
        console.log('Tarefa criada com sucesso: ', response);

        this.newTask = {
          id: '',
          taskName: '',
          description: '',
          createDate: new Date().toISOString(),
          done: false
        };
      },
      error: (error) => {
        console.error("Error ao criar tarefas!", error);
      }
    });
  }
}
