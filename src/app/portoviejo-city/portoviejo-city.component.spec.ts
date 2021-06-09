import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortoviejoCityComponent } from './portoviejo-city.component';

describe('PortoviejoCityComponent', () => {
  let component: PortoviejoCityComponent;
  let fixture: ComponentFixture<PortoviejoCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortoviejoCityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortoviejoCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
