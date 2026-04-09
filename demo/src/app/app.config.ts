import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { AboutComponent } from './routes/about.component';
import { DemoComponent } from './routes/demo.component';
import { ParentScrollComponent } from './routes/parentScroll.component';
import { SamplesComponent } from './routes/samples.component';

const customDefaultOptions = {
  scrollThrottlingTime: 0,
  scrollDebounceTime: 0,
  scrollAnimationTime: 750,
  checkResizeInterval: 1000,
  resizeBypassRefreshThreshold: 5,
  modifyOverflowStyleOfParentScroll: true,
  stripedTable: false
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter([
      { path: 'demo', component: DemoComponent },
      { path: 'about', component: AboutComponent },
      { path: 'samples', component: SamplesComponent },
      { path: 'parentScroll', component: ParentScrollComponent },
      { path: '**', redirectTo: '/about', pathMatch: 'full' }
    ]),
    { provide: 'virtual-scroller-default-options', useValue: customDefaultOptions }
  ]
};
