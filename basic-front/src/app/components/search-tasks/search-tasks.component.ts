import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../models/task.model';
import { TaskServiceService } from '../../services/task-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-search-tasks',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule
  ],
  templateUrl: './search-tasks.component.html',
  styleUrl: './search-tasks.component.css'
})
export class SearchTasksComponent implements OnInit {

  private _snackBar = inject(MatSnackBar);
  public taskQuery: any;
  public tasks: Task[] = []; // Array para armazenar as tasks encontradas
  public errorMessage: string = '';
  public taskHeader: string[] = ['taskName', 'description', 'createDate', 'done'];

  constructor(private service: TaskServiceService) {}

  ngOnInit(): void {}

  findTask(): void {
    if (!this.taskQuery.trim()) {
      this._snackBar.open('Informe algo para fazer a pesquisa!', 'Ok', { duration: 3000 });
      return;
    }

    this.service.findTask(this.taskQuery).subscribe({
      next: (response: Task) => {
        if (response) {
          this.tasks = [response]; // Envolva o único `Task` em um array para exibição na tabela
        } else {
          this._snackBar.open('Não foi possível encontrar a tarefa!', 'Ok', { duration: 3000 });
          this.tasks = [];
        }
      },
      error: (error) => {
        this._snackBar.open('Erro ao buscar a tarefa!', 'Ok', { duration: 3000 });
        this.tasks = [];
      }
    });
  }


}
