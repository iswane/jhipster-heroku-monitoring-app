import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JhipsterHerokuMonitoringAppSharedModule } from 'app/shared/shared.module';
import { JhipsterHerokuMonitoringAppCoreModule } from 'app/core/core.module';
import { JhipsterHerokuMonitoringAppAppRoutingModule } from './app-routing.module';
import { JhipsterHerokuMonitoringAppHomeModule } from './home/home.module';
import { JhipsterHerokuMonitoringAppEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    JhipsterHerokuMonitoringAppSharedModule,
    JhipsterHerokuMonitoringAppCoreModule,
    JhipsterHerokuMonitoringAppHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JhipsterHerokuMonitoringAppEntityModule,
    JhipsterHerokuMonitoringAppAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class JhipsterHerokuMonitoringAppAppModule {}
