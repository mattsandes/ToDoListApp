import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../models/task.model';
import { TaskServiceService } from '../../services/task-service.service';

@Component({
  selector: 'app-search-tasks',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './search-tasks.component.html',
  styleUrl: './search-tasks.component.css'
})
export class SearchTasksComponent implements OnInit {

  public task: Task = {
    id: '',
    taskName: '',
    description: '',
    createDate: '',
    done: false
  }

  constructor(private service: TaskServiceService){}

  ngOnInit(): void {
  }

  findTask(): void {
    if(!this.task.taskName){
      alert('Informe algo para fazer a pesquisa!');
    }

    this.service.findTask(this.task.taskName).subscribe({
      next: (response: Task) => {
        this.task = {
          id: '',
          taskName: '',
          description: '',
          createDate: new Date().toISOString(),
          done: false
        };

        return response;
      },
      error: (error) => {
        console.error('Não foi possivel encontrar a tarefa com esse nome');
      }
    });
  }

}
