import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeServiceModulesComponent } from './home-service-modules.component';

describe('HomeServiceModulesComponent', () => {
  let component: HomeServiceModulesComponent;
  let fixture: ComponentFixture<HomeServiceModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeServiceModulesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeServiceModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
