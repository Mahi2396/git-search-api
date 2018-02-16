import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGitComponentComponent } from './my-git-component.component';

describe('MyGitComponentComponent', () => {
  let component: MyGitComponentComponent;
  let fixture: ComponentFixture<MyGitComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyGitComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyGitComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
