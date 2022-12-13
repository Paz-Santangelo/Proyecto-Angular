import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { HeaderAdminComponent } from './components/headerAdmin/headerAdmin.component';
import { LogoApComponent } from './components/logoAp/logoAp.component';
import { ModalLoginComponent } from './modales/modalLogin/modalLogin.component';
import { ExperienciasAdminComponent } from './components/experiencias-admin/experiencias-admin.component';
import { AgregarExperienciaComponent } from './modales/agregar-experiencia/agregar-experiencia.component';
import { EditarExpComponent } from './modales/editar-exp/editar-exp.component';
import { SobreMiAdminComponent } from './components/sobre-mi-admin/sobre-mi-admin.component';
import { EditarSobreMiComponent } from './modales/editar-sobre-mi/editar-sobre-mi.component';
import { EducacionAdminComponent } from './components/educacion-admin/educacion-admin.component';
import { AgregarEducacionComponent } from './modales/agregar-educacion/agregar-educacion.component';
import { EditarEducacionComponent } from './modales/editar-educacion/editar-educacion.component';
import { ProyectosAdminComponent } from './components/proyectos-admin/proyectos-admin.component';
import { AgregarProyectoComponent } from './modales/agregar-proyecto/agregar-proyecto.component';
import { EditarProyectoComponent } from './modales/editar-proyecto/editar-proyecto.component';
import { HardSoftAdminComponent } from './components/softs-skills/hard-soft-admin.component';
import { AgregarHySComponent } from './modales/agregar-hy-s/agregar-hy-s.component';
import { EditarHysComponent } from './modales/editar-hys/editar-hys.component';
import { ScrollspyComponent } from './components/scrollspy/scrollspy.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { SkillsComponent } from './components/skills/skills.component';
import { HardsSkillsComponent } from './components/hards-skills/hards-skills.component';
import { EditarHabDurasComponent } from './modales/editar-hab-duras/editar-hab-duras.component';
import { AgregarHabDuraComponent } from './modales/agregar-hab-dura/agregar-hab-dura.component';
import { interceptorProvider } from './service/interceptor.service';
import { AdminComponent } from './components/admin/admin.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderAdminComponent,
    LogoApComponent,
    ModalLoginComponent,
    ExperienciasAdminComponent,
    AgregarExperienciaComponent,
    EditarExpComponent,
    SobreMiAdminComponent,
    EditarSobreMiComponent,
    EducacionAdminComponent,
    AgregarEducacionComponent,
    EditarEducacionComponent,
    ProyectosAdminComponent,
    AgregarProyectoComponent,
    EditarProyectoComponent,
    HardSoftAdminComponent,
    AgregarHySComponent,
    EditarHysComponent,
    ScrollspyComponent,
    HomeComponent,
    FooterComponent,
    SkillsComponent,
    HardsSkillsComponent,
    EditarHabDurasComponent,
    AgregarHabDuraComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
