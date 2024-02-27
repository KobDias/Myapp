import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JuridicosPage } from './juridicos.page';

describe('JuridicosPage', () => {
  let component: JuridicosPage;
  let fixture: ComponentFixture<JuridicosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(JuridicosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
