import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { MenuMasterComponent } from './menu-master/menu-master.component';
import { RoleMasterComponent } from './role-master/role-master.component';
import { RoleMasterDialogComponent } from './role-master/role-master-dialog/role-master-dialog.component';
import { MenuMasterDialogComponent } from './menu-master/menu-master-dialog/menu-master-dialog.component';
import { RoleMenuMappingComponent } from './role-menu-mapping/role-menu-mapping.component';
import { RoleMenuMappingDialogComponent } from './role-menu-mapping/role-menu-mapping-dialog/role-menu-mapping-dialog.component';
import { UserRoleMappingComponent } from './user-role-mapping/user-role-mapping.component';
import { UserRoleMappingDialogComponent } from './user-role-mapping/user-role-mapping-dialog/user-role-mapping-dialog.component';
import { SearchComponent } from '@shared/components/search/search.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MasterRoutingModule,
    MenuMasterComponent,
    MenuMasterDialogComponent,
    RoleMenuMappingComponent,
    RoleMenuMappingDialogComponent,
    RoleMasterComponent,
    RoleMasterDialogComponent,
    UserRoleMappingComponent,
    UserRoleMappingDialogComponent,
    SearchComponent
  ]
})
export class MasterModule { }

