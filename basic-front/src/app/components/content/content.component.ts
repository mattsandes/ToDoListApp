import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskServiceService } from '../../services/task-service.service';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {

  constructor(private taskService: TaskServiceService){}

  public task!: Task;

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTask().subscribe((task: Task) => {
      this.task = task;  // Aqui você define a variável task com os dados recebidos
      console.log("Exibindo os dados: ", this.task);
    });
  }
}
