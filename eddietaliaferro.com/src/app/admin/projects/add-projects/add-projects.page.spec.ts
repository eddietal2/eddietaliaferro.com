import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddProjectsPage } from './add-projects.page';

describe('AddProjectsPage', () => {
  let component: AddProjectsPage;
  let fixture: ComponentFixture<AddProjectsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProjectsPage ],
      imports: [IonicModule.forRoot(),
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AddProjectsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('The back button should go back to the admin blog page', () => {
    
  });
  it('submitting the project should have at least a title, a thumbnail, and a description', () => {
    
  });
  it('The Project submits successfully.', () => {
    
  });
});
