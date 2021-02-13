import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TableFilterTextComponent } from './table-filter-text.component';

describe('TableFilterTextComponent', () => {
  let component: TableFilterTextComponent;
  let fixture: ComponentFixture<TableFilterTextComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TableFilterTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableFilterTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
