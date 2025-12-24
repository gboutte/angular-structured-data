import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbExampleComponent } from './breadcrumb-example.component';

describe('BreadcrumbExampleComponent', () => {
  let component: BreadcrumbExampleComponent;
  let fixture: ComponentFixture<BreadcrumbExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreadcrumbExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreadcrumbExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
