import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleExampleComponent } from './article-example.component';

describe('ArticleExampleComponent', () => {
  let component: ArticleExampleComponent;
  let fixture: ComponentFixture<ArticleExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
