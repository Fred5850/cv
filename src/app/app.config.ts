import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideKirby, withGlobalSetup } from '@kirbydesign/designsystem';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideKirby(withGlobalSetup()),
    provideAnimations(),
    provideRouter(routes),
    provideZoneChangeDetection(),

  ]
};
