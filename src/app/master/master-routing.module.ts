import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuMasterComponent } from './menu-master/menu-master.component';
import { RoleMasterComponent } from './role-master/role-master.component';
import { RoleMenuMappingComponent } from './role-menu-mapping/role-menu-mapping.component';
import { UserRoleMappingComponent } from './user-role-mapping/user-role-mapping.component';

const routes: Routes = [
  { path: 'menu-master', component: MenuMasterComponent },
  { path: 'role-menu-mapping', component: RoleMenuMappingComponent },
  { path: 'role-master', component: RoleMasterComponent },
  { path: 'user-role-mapping', component: UserRoleMappingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
