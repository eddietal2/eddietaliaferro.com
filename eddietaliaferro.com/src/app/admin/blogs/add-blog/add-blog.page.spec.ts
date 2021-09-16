import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddBlogPage } from './add-blog.page';

describe('AddBlogPage', () => {
  let component: AddBlogPage;
  let fixture: ComponentFixture<AddBlogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBlogPage ],
      imports: [IonicModule.forRoot(),
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AddBlogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('The back button should go back to the admin blog page', () => {
    
  });
  it('submitting the blog should have at least a title, a thumbnail, and the post', () => {
    
  });
  it('The Blog submits successfully.', () => {
    
  });
});
