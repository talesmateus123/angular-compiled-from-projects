import { FinishedTaskDirective } from './finished-task.directive';
import { ElementRef } from '@angular/core';

describe('FinishedTaskDirective', () => {
  it('should create an instance', () => {
    const directive = new FinishedTaskDirective(new ElementRef());
    expect(directive).toBeTruthy();
  });
});
