import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@angular/material/core/theming/prebuilt/indigo-pink.css';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);

