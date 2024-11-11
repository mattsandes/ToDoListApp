import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskServiceService } from '../../services/task-service.service';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule, FormSubmittedEvent } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {

  constructor(private taskService: TaskServiceService){}

  public task: Task[] = [];
  public newTask: Task = {
    id: '',
    taskName: '',
    description: '',
    createDate: new Date().toISOString(),
    done: false,
  }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTask().subscribe((task: Task[]) => {
      this.task = task;  // Aqui você define a variável task com os dados recebidos
      console.log("Exibindo os dados: ", this.task);
    });
  }

  createTask(): void {
    this.taskService.createTask(this.newTask).subscribe(
      (response: Task) => {
        console.log("Tarefa criada com sucesso: ", response);
        this.task.push(response);
        this.newTask = {
          id: '',
          description: '',
          taskName: '',
          createDate: new Date().toISOString(),
          done: false
        };
      },
      (error) => {
        console.error("Erro ao criar tarefa: ", error);
      }
    );
  }
}
