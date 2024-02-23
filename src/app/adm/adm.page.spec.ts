import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ADMPage } from './adm.page';

describe('ADMPage', () => {
  let component: ADMPage;
  let fixture: ComponentFixture<ADMPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ADMPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
