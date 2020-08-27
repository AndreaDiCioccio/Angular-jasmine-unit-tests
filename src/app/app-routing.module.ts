import { DemoComponent } from './userServiceDemo/demo.component';
import { BannerComponent } from './banner/banner.component';
import { LightSwitchComponent } from './light-switch/light-switch.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {path:'lightSwitch', component:LightSwitchComponent},
    {path:'banner', component:BannerComponent},
    {path:'demo', component:DemoComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
