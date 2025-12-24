import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqExampleComponent } from './faq-example.component';

describe('FaqExampleComponent', () => {
  let component: FaqExampleComponent;
  let fixture: ComponentFixture<FaqExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaqExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaqExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
