import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LettersNavComponent } from './letters-nav.component';

describe('LettersNavComponent', () => {
  let component: LettersNavComponent;
  let fixture: ComponentFixture<LettersNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LettersNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LettersNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
