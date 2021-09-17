import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BlogIllustrationComponent } from './blog-illustration.component';

describe('BlogIllustrationComponent', () => {
  let component: BlogIllustrationComponent;
  let fixture: ComponentFixture<BlogIllustrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogIllustrationComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BlogIllustrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
