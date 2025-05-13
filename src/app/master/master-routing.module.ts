import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuMasterComponent } from './menu-master/menu-master.component';
import { MenuMappingDialogComponent } from './menu-mapping/menu-mapping-dialog/menu-mapping-dialog.component';
import { MenuMappingComponent } from './menu-mapping/menu-mapping.component';
import { MenuMasterDialogComponent } from './menu-master/menu-master-dialog/menu-master-dialog.component';
import { RoleMappingDialogComponent } from './role-mapping/role-mapping-dialog/role-mapping-dialog.component';
import { RoleMappingComponent } from './role-mapping/role-mapping.component';
import { RoleMasterDialogComponent } from './role-master/role-master-dialog/role-master-dialog.component';
import { RoleMasterComponent } from './role-master/role-master.component';

const routes: Routes = [
  { path: 'menu-master', component: MenuMasterComponent },
  { path: 'menu-master-dialog', component: MenuMasterDialogComponent },
  { path: 'menu-mapping', component: MenuMappingComponent },
  { path: 'menu-mapping-dialog', component: MenuMappingDialogComponent },
  { path: 'role-master', component: RoleMasterComponent },
  { path: 'role-master-dialog', component: RoleMasterDialogComponent },
  { path: 'role-mapping', component: RoleMappingComponent },
  { path: 'role-mapping-dialog', component: RoleMappingDialogComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
