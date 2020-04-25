import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalSystemsComponent } from './external-systems.component';

describe('ExternalSystemsComponent', () => {
  let component: ExternalSystemsComponent;
  let fixture: ComponentFixture<ExternalSystemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalSystemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
