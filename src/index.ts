import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone';
import 'bootstrap/dist/css/bootstrap.min.css';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './angular/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);

