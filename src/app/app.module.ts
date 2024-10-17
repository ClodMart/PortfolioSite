import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { PresentationCardComponent } from "./presentation-card/presentation-card.component";
import { ProjectCardComponent } from "./project-card/project-card.component";
import { WelcomeCardComponent } from "./welcome-card/welcome-card.component";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatIconModule,
    NoopAnimationsModule,
    PresentationCardComponent,
    ProjectCardComponent,
    WelcomeCardComponent
],
  providers: [provideHttpClient(withFetch()), provideAnimations()],
  bootstrap: [AppComponent]
})
export class AppModule { }
