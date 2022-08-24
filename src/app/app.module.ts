import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CuerpoComponent } from './components/cuerpo/cuerpo.component';
import { BannerComponent } from './components/banner/banner.component';
import { ExperienciasComponent } from './components/experiencias/experiencias.component';
import { AcercaDeMiComponent } from './components/acerca-de-mi/acerca-de-mi.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { SkillsComponent } from './components/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CuerpoComponent,
    BannerComponent,
    ExperienciasComponent,
    AcercaDeMiComponent,
    EducacionComponent,
    SkillsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
