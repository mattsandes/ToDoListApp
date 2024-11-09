import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PlaceholderServiceService } from '../../services/placeholder-service.service';

@Component({
  selector: 'app-placeholders',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './placeholders.component.html',
  styleUrl: './placeholders.component.css'
})
export class PlaceholdersComponent implements OnInit{

  datas?: any;

  constructor(private service: PlaceholderServiceService){}

  ngOnInit(): void {
      this.service.getTask().subscribe({
        next: (data) => {
          this.datas = data
        },
        error: (error) => {
          console.error('Erro ao obter dados: ', error);
        }
      })
  }
}
