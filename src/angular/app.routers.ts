//import { AppComponent } from './app.component'
//import { NgModule } from '@angular/core';
//import { Routes, RouterModule } from '@angular/router'
//
//const routes: Routes = [
//    //    {
//    //        path: '',
//    //        pathMatch:'full',
//    //        redirectTo:'home'
//    ////        component: AppComponent
//    //    },
//    {
//        path: '',
//        component: AppComponent,
//        resolve: {
//            contact:  new Promise(resolve=> {
//            if (navigator.geolocation) {
//                navigator.geolocation.getCurrentPosition(function(position) {
//                    alert('beforeres')
//                    resolve(position.coords);
//                }, function() {
//                    alert('bad');
//                    return { latitude: 53.904539799999995, longitude: 27.5615244 };
//                });
//            };
//        })
//        }
//    }
//]
//@NgModule({
//    imports: [RouterModule.forRoot(routes)],
//    exports: [RouterModule]
//})
//export class AppRoutingModule {
//
//}
//export const routingComponents = [AppComponent]