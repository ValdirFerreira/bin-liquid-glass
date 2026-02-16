import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BtnLiquidGlassComponent } from 'src/components/btn-liquid-glass/btn-liquid-glass.component';

@NgModule({
  declarations: [
    AppComponent,
    BtnLiquidGlassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
