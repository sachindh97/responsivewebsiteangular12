import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenupageComponent } from './menupage.component';

describe('MenupageComponent', () => {
  let component: MenupageComponent;
  let fixture: ComponentFixture<MenupageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenupageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenupageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
