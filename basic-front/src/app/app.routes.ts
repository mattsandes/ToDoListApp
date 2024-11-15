import { Routes } from '@angular/router';
import { ContentComponent } from './components/content/content.component';
import { PlaceholdersComponent } from './components/placeholders/placeholders.component';
import { AboutComponent } from './components/about/about.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { SearchTasksComponent } from './components/search-tasks/search-tasks.component';

export const routes: Routes = [
  {path: 'tasks', component: ContentComponent},
  {path: 'placeholder', component: PlaceholdersComponent},
  {path: 'about', component: AboutComponent},
  {path: 'createTask', component: CreateTaskComponent},
  {path: 'searchTasks', component: SearchTasksComponent}
];
