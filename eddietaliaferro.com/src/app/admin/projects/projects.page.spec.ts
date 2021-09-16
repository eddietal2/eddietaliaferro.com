import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProjectsPage } from './projects.page';

describe('ProjectsPage', () => {
  let component: ProjectsPage;
  let fixture: ComponentFixture<ProjectsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsPage ],
      imports: [IonicModule.forRoot(),
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should get all projects from the Project Service', () => {

  });
  it('the Add Project button should go to the AddProjectPage', () => {

  });
  it('Visible Toggle ON should display this project on the Projects section', () => {

  });
  it('Visible Toggle OFF should NOT display this project on the Projects section', () => {

  });
  it('The Edit button should go to the EditProjectPage with all that Projects details', () => {

  });
  it('The Delete button should show an Alert', () => {

  });
  it("The Delete Alert's YES button should delete the Project from The Admin dashboard, potentially the home page, and the User Projects Page", () => {

  });
});
