import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ContactPage } from './contact.page';

describe('ContactPage', () => {
  let component: ContactPage;
  let fixture: ComponentFixture<ContactPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactPage ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        IonicModule.forRoot()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('successful submission should add message to Messages collection', () => {
    
  });
});
