import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { MenuMappingComponent } from './menu-mapping/menu-mapping.component';
import { MenuMappingDialogComponent } from './menu-mapping/menu-mapping-dialog/menu-mapping-dialog.component';
import { RoleMappingComponent } from './role-mapping/role-mapping.component';
import { MenuMasterComponent } from './menu-master/menu-master.component';
import { RoleMappingDialogComponent } from './role-mapping/role-mapping-dialog/role-mapping-dialog.component';
import { RoleMasterComponent } from './role-master/role-master.component';
import { RoleMasterDialogComponent } from './role-master/role-master-dialog/role-master-dialog.component';
import { MenuMasterDialogComponent } from './menu-master/menu-master-dialog/menu-master-dialog.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MasterRoutingModule,
    MenuMasterComponent,
    MenuMasterDialogComponent,
    MenuMappingComponent,
    MenuMappingDialogComponent,
    RoleMasterComponent,
    RoleMasterDialogComponent,
    RoleMappingComponent,
    RoleMappingDialogComponent
  ]
})
export class MasterModule { }
