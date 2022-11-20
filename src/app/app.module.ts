import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AirQualityComponent } from './home/air-quality/air-quality.component';
import { TemperatureComponent } from './home/temperature/temperature.component';
import { AudioComponent } from './home/audio/audio.component';
import { DisplaysComponent } from './home/displays/displays.component';
import { LightingComponent } from './home/lighting/lighting.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AirQualityComponent,
    TemperatureComponent,
    AudioComponent,
    DisplaysComponent,
    LightingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
