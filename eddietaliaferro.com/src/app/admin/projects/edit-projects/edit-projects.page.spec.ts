import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EditProjectsPage } from './edit-projects.page';

describe('EditProjectsPage', () => {
  let component: EditProjectsPage;
  let fixture: ComponentFixture<EditProjectsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProjectsPage ],
      imports: [IonicModule.forRoot(),
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(EditProjectsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('All this projects infomation should be fetched from the Project Service @ ngOnInit', () => {
    
  });
  it('The back button should go back to the admin projects page', () => {
    
  });
  it('submitting the project should have at least a title, a thumbnail, and a blog', () => {
    
  });
});
