import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtrativosComponent } from './atrativos.component';

describe('AtrativosComponent', () => {
  let component: AtrativosComponent;
  let fixture: ComponentFixture<AtrativosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtrativosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtrativosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
