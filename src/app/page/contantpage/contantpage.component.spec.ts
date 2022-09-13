import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContantpageComponent } from './contantpage.component';

describe('ContantpageComponent', () => {
  let component: ContantpageComponent;
  let fixture: ComponentFixture<ContantpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContantpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContantpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
