import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';

import { BlogPagePage } from './blog-page.page';

describe('BlogPagePage', () => {
  let component: BlogPagePage;
  let fixture: ComponentFixture<BlogPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogPagePage ],
      imports: [IonicModule.forRoot(),
        RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(BlogPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('back button goes back to main blog page', () => {
    
  });
  it('should be able to let the user post a comment', () => {
    
  });
  it('login should work', () => {
    
  });
  it('register should work', () => {
    
  });
  it('user should be able to make a reply on a comment', () => {
    
  });
  it('should be able to view all replies to a comment', () => {
    
  });
  it('should be able to view next blog', () => {
    
  });
  it('should be able to previous next blog', () => {
    
  });
});
