import { async, ComponentFixture, fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, Routes } from '@angular/router';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Location} from "@angular/common";
import { AddBlogPage } from './add-blog.page';
// import { routes } from '../../../app-routing.module';
import { By } from '@angular/platform-browser';
import { BlogsPage } from '../blogs.page';
import { Blog, BlogService } from 'src/app/services/blog/blog.service';
import { environment } from 'src/environments/environment';

fdescribe('AddBlogPage', () => {
  let component: AddBlogPage;
  let location: Location;
  let service: BlogService;
  let router: Router;
  let httpTestingController: HttpTestingController;
  let fixture: ComponentFixture<AddBlogPage>;

  const routes: Routes = [
    {path: '', redirectTo: 'admin/blogs/add-blog', pathMatch: 'full'},
    {path: 'admin/blogs/add-blog', component: AddBlogPage},
    {path: 'admin/blogs', component: BlogsPage}
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBlogPage ],
      imports: [
        IonicModule.forRoot(),
        HttpClientTestingModule,
        RouterTestingModule.withRoutes(routes),
        FormsModule,
        ReactiveFormsModule
      ]
    }).compileComponents();

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture = TestBed.createComponent(AddBlogPage);
    httpTestingController = TestBed.inject(HttpTestingController);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router.initialNavigation();
  }));

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('The back button should go back to the admin blog page', fakeAsync(() => {
    fixture.autoDetectChanges();
    let backButton = fixture.debugElement.queryAll(By.css('#back-button'));
    let nativeButton: HTMLButtonElement = backButton[0].nativeElement;
    nativeButton.click();
    tick();
    expect(location.path()).toBe('/admin/blogs');
  }
  ));

  it('#addBlog should be using POST to send data', () => {
    const testBlog: Blog = {
      title: 'Test Title',
      thumbnail: 'Test Thumbnail',
      post: 'Test Post',
      comments: [],
      hashtags: [],
    }
    service.submitBlog(testBlog).subscribe();
    const testRequest = httpTestingController.expectOne(environment.url + '/blog/add-blog');
    expect(testRequest.request.method).toEqual('POST');
  })

  // it('submitting the blog should have at least a title, a thumbnail, and the post', fakeAsync(() => {
  //   fixture.autoDetectChanges();
  //   let submitBlogButton = fixture.debugElement.queryAll(By.css('#submit-blog-button'));
  //   let nativeButton: HTMLButtonElement = submitBlogButton[0].nativeElement;
  //   component.addBlogForm.value.title = 'Post Title';
  //   component.addBlogForm.value.thumbnail = 'Thumbnail';
  //   component.addBlogForm.value.post = 'Blog Content';
  //   nativeButton.click();
  //   tick();
  //   expect(component.addBlogForm.value.title).toBeTruthy();
  //   expect(component.addBlogForm.value.thumbnail).toBeTruthy();
  //   expect(component.addBlogForm.value.post).toBeTruthy();
  //   flush();
  // }));

  // it('The Blog submits successfully.', () => {
    
  // });
});

