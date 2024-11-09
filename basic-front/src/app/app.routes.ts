import { Routes } from '@angular/router';
import { ContentComponent } from './components/content/content.component';
import { PlaceholdersComponent } from './components/placeholders/placeholders.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
  {path: 'tasks', component: ContentComponent},
  {path: 'placeholder', component: PlaceholdersComponent},
  {path: 'about', component: AboutComponent}
];
