import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnfermagemPage } from './enfermagem.page';

describe('EnfermagemPage', () => {
  let component: EnfermagemPage;
  let fixture: ComponentFixture<EnfermagemPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EnfermagemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
