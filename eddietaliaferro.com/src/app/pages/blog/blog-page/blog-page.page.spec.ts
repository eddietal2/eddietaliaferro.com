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
});
