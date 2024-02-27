import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmdsPage } from './emds.page';

describe('EmdsPage', () => {
  let component: EmdsPage;
  let fixture: ComponentFixture<EmdsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EmdsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
