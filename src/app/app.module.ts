import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MAPPING_PROFILE } from '@dynamic-mapper/angular';
import { ExampleMappingProfile } from './mapping/example-mapping-profile';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: MAPPING_PROFILE, useClass: ExampleMappingProfile, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
