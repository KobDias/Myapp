import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContabilidadePage } from './contabilidade.page';

describe('ContabilidadePage', () => {
  let component: ContabilidadePage;
  let fixture: ComponentFixture<ContabilidadePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ContabilidadePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
