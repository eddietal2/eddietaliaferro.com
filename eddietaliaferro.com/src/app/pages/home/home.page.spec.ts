import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Donate Button should go to Donate Page', () => {
    
  });
  it('Contact Button should go to Contact Page', () => {
    
  });
  it('Latests Blog Posts View All button should go to Blog Page', () => {
    
  });
  it('Latests Projects View All button should go to Projects Page', () => {
    
  });
  it('Latests Blog Post should display the most 3 recent posts', () => {
    
  });
  it('Latests Projects should display the most 3 recent projects', () => {
    
  });
  it('Latests Blog Post View Blog button should navigate to that Blogs page', () => {
    
  });
  it('Latests Project View Project button should navigate to that projects url', () => {
    
  });
});
