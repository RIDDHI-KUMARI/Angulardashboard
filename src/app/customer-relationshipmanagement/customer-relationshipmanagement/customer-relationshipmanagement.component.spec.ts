import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerRelationshipmanagementComponent } from './customer-relationshipmanagement.component';

describe('CustomerRelationshipmanagementComponent', () => {
  let component: CustomerRelationshipmanagementComponent;
  let fixture: ComponentFixture<CustomerRelationshipmanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerRelationshipmanagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerRelationshipmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
