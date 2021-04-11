import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplychainmanagementComponent } from './supplychainmanagement.component';

describe('SupplychainmanagementComponent', () => {
  let component: SupplychainmanagementComponent;
  let fixture: ComponentFixture<SupplychainmanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplychainmanagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplychainmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
