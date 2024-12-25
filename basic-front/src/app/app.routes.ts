import { Routes } from '@angular/router';
import { ContentComponent } from './components/content/content.component';
import { PlaceholdersComponent } from './components/placeholders/placeholders.component';
import { AboutComponent } from './components/about/about.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { SearchTasksComponent } from './components/search-tasks/search-tasks.component';

export const routes: Routes = [
  {path: 'tasks', component: ContentComponent, title: 'Listando Tasks'},
  {path: 'placeholder', component: PlaceholdersComponent, title: 'Placeholder Items'},
  {path: '', component: AboutComponent, title: 'About Us'},
  {path: 'createTask', component: CreateTaskComponent, title: 'Create Tasks'},
  {path: 'searchTasks', component: SearchTasksComponent, title: 'Search Tasks'},
  {path: '**', redirectTo: ''}
];
