import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNoSearchComponent } from './header-no-search.component';

describe('HeaderNoSearchComponent', () => {
  let component: HeaderNoSearchComponent;
  let fixture: ComponentFixture<HeaderNoSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderNoSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderNoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
