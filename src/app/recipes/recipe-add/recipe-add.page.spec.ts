import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecipeAddPage } from './recipe-add.page';

describe('RecipeAddPage', () => {
  let component: RecipeAddPage;
  let fixture: ComponentFixture<RecipeAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecipeAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
