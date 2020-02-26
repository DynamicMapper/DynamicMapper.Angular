import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapperModule } from '@dynamic-mapper/angular';
import { ExampleMappingProfile } from './mapping/example-mapping-profile';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MapperModule.withProfiles([ExampleMappingProfile])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
