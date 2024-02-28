/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LasyImageComponent } from './lasyImage.component';

describe('LasyImageComponent', () => {
  let component: LasyImageComponent;
  let fixture: ComponentFixture<LasyImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LasyImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LasyImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
