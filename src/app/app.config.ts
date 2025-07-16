import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { KirbyModule, provideKirby, withGlobalSetup } from '@kirbydesign/designsystem';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideKirby(withGlobalSetup()),
    importProvidersFrom(KirbyModule),
    provideAnimations(),
    provideRouter(routes),
    provideZoneChangeDetection(),

  ]
};
