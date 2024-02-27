import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmadmPage } from './emadm.page';

describe('EmadmPage', () => {
  let component: EmadmPage;
  let fixture: ComponentFixture<EmadmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EmadmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
