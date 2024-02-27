import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogisticaPage } from './logistica.page';

describe('LogisticaPage', () => {
  let component: LogisticaPage;
  let fixture: ComponentFixture<LogisticaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LogisticaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
