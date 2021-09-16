import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EditBlogPage } from './edit-blog.page';

describe('EditBlogPage', () => {
  let component: EditBlogPage;
  let fixture: ComponentFixture<EditBlogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBlogPage ],
      imports: [IonicModule.forRoot(),
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(EditBlogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('All this blogs infomation should be fetched from the Blog Service @ ngOnInit', () => {
    
  });
  it('The back button should go back to the admin blog page', () => {
    
  });
  it('submitting the blog should have at least a title, a thumbnail, and a blog', () => {
    
  });
});
