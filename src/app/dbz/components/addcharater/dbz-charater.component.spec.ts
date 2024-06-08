import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbzCharaterComponent } from './dbz-charater.component';

describe('DbzCharaterComponent', () => {
  let component: DbzCharaterComponent;
  let fixture: ComponentFixture<DbzCharaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DbzCharaterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DbzCharaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
