import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhipsterHerokuMonitoringAppSharedModule } from 'app/shared/shared.module';

import { AuditsComponent } from './audits.component';

import { auditsRoute } from './audits.route';

@NgModule({
  imports: [JhipsterHerokuMonitoringAppSharedModule, RouterModule.forChild([auditsRoute])],
  declarations: [AuditsComponent]
})
export class AuditsModule {}
