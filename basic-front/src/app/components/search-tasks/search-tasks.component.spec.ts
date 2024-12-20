import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTasksComponent } from './search-tasks.component';

describe('SearchTasksComponent', () => {
  let component: SearchTasksComponent;
  let fixture: ComponentFixture<SearchTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchTasksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
