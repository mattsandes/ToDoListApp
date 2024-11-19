import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../models/task.model';
import { TaskServiceService } from '../../services/task-service.service';
import { setAlternateWeakRefImpl } from '@angular/core/primitives/signals';

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

  public taskQuery: string = '';
  public task: Task | null = null;
  public errorMessage: string = '';

  constructor(private service: TaskServiceService){}

  ngOnInit(): void {
  }

  findTask(): void {
    if(!this.taskQuery.trim()){
      this.errorMessage = "Achei nada, oh XP"
      alert('Informe algo para fazer a pesquisa!');

      return;
    }

    this.service.findTask(this.taskQuery).subscribe({
      next: (response: Task | null) => {
        if(response){
          this.task = response;

        } else {
          alert("Não foi possivel encontrar essa tarefa!");
          this.task = null;
        }
      },
      error: (error) => {
        alert('Não foi possivel encontrar a tarefa com esse nome');
        this.task = null;
      }
    });
  }

}
