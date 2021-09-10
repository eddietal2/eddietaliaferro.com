import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeIllustrationTwoComponent } from './home-illustration-two.component';

describe('HomeIllustrationTwoComponent', () => {
  let component: HomeIllustrationTwoComponent;
  let fixture: ComponentFixture<HomeIllustrationTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeIllustrationTwoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeIllustrationTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
