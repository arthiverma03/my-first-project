import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeListoflistComponent } from './recipe-listoflist.component';

describe('RecipeListoflistComponent', () => {
  let component: RecipeListoflistComponent;
  let fixture: ComponentFixture<RecipeListoflistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeListoflistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeListoflistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
