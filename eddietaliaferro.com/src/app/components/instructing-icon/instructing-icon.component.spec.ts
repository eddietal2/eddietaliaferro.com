import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InstructingIconComponent } from './instructing-icon.component';

describe('InstructingIconComponent', () => {
  let component: InstructingIconComponent;
  let fixture: ComponentFixture<InstructingIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructingIconComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InstructingIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
