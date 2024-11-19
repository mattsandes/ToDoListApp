import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from '../../services/task-service.service';
import { Task } from '../../models/task.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-done-task',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './done-task.component.html',
  styleUrl: './done-task.component.css'
})
export class DoneTaskComponent implements OnInit {

  constructor(private service: TaskServiceService){}

  ngOnInit(): void {}

  doneTask(task: string) :void {
    this.service.doneTask(task).subscribe({
      next: (task: Task) => {
        console.log('task finalizada');
      },
      error: (error) => {
        console.error('Erro ao finalizar task: ', error);
      }
    });
  }

}
