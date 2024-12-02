import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicDailogComponent } from './dynamic-dailog.component';

describe('DynamicDailogComponent', () => {
  let component: DynamicDailogComponent;
  let fixture: ComponentFixture<DynamicDailogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicDailogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
