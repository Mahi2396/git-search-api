import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGitDetailComponentComponent } from './my-git-detail-component.component';

describe('MyGitDetailComponentComponent', () => {
  let component: MyGitDetailComponentComponent;
  let fixture: ComponentFixture<MyGitDetailComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyGitDetailComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyGitDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
