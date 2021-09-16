import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';


import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      imports: [IonicModule.forRoot(),
        RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('clicking Home should go to the Home Page', () => {
    
  });
  it('clicking About should go to the About Page', () => {
    
  });
  it('clicking Projects should go to the Projects Page', () => {
    
  });
  it('clicking Blog should go to the Blog Page', () => {
    
  });
  it('clicking Contact should go to the Contact Page', () => {
    
  });
  it('clicking Donate should go to the Donate Page', () => {
    
  });
  it('clicking Admin should go to the Admin Page', () => {
    
  });
});
