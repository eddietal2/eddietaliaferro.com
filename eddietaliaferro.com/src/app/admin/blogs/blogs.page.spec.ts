import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BlogsPage } from './blogs.page';

describe('BlogsPage', () => {
  let component: BlogsPage;
  let fixture: ComponentFixture<BlogsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogsPage ],
      imports: [IonicModule.forRoot(),
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(BlogsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should get all blogs from the Blog Service', () => {

  });
  it('the Add Blog button should go to the AddBlogPage', () => {

  });
  it('Visible Toggle ON should display this blog on the Blog section', () => {

  });
  it('Visible Toggle OFF should NOT display this blog on the Blog section', () => {

  });
  it('The Edit button should go to the EditBlogPage with all that Blogs details', () => {

  });
  it('The Delete button should show an Alert', () => {

  });
  it("The Delete Alert's YES button should delete the Blog from The Admin dashboard, potentially the home page, and the User Blog Page", () => {

  });
});
