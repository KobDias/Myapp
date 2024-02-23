import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DsPage } from './ds.page';

describe('DsPage', () => {
  let component: DsPage;
  let fixture: ComponentFixture<DsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
