import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioChatComponent } from './usuario-chat.component';

describe('UsuarioChatComponent', () => {
  let component: UsuarioChatComponent;
  let fixture: ComponentFixture<UsuarioChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
