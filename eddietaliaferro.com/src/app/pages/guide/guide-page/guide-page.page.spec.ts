import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GuidePagePage } from './guide-page.page';

describe('GuidePagePage', () => {
  let component: GuidePagePage;
  let fixture: ComponentFixture<GuidePagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuidePagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GuidePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
