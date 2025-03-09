import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircleProgressComponent, CircleProgressOptionsInterface, CircleProgressOptions } from './ng-circle-progress.component';


@NgModule({
  imports: [
    CommonModule
  ]
})
export class NgCircleProgressModule {
  static forRoot(options: CircleProgressOptionsInterface = {}): ModuleWithProviders<NgCircleProgressModule> {
    return {
      ngModule: NgCircleProgressModule,
      providers: [
        { provide: CircleProgressOptions, useValue: options }
      ]
    };
  }
}
