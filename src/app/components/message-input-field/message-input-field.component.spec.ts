import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageInputFieldComponent } from './message-input-field.component';

describe('MessageInputFieldComponent', () => {
  let component: MessageInputFieldComponent;
  let fixture: ComponentFixture<MessageInputFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageInputFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageInputFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
