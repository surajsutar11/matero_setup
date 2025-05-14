import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RoleMenuMappingService } from '../role-menu-mapping.service';
import { RoleMasterService } from 'app/master/role-master/role-master.service';
import { SharedModule } from '@shared/shared/shared.module';

@Component({
  selector: 'app-role-menu-mapping-dialog',
  imports: [SharedModule],
  templateUrl: './role-menu-mapping-dialog.component.html',
  styleUrl: './role-menu-mapping-dialog.component.scss'
})
export class RoleMenuMappingDialogComponent implements OnInit {
  mappingForm: FormGroup;
  dialogHeader: string = 'Role Menu Mapping';

  roleList: any[] = [];
  menuList: any[] = [];

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<RoleMenuMappingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private mappingService: RoleMenuMappingService,
    private roleMasterService: RoleMasterService,
  ) {
    const menulist =this.data?.menu?.length ? this.data.menu.map((res: any) => res.id) : [];
    this.mappingForm = this.fb.group({
      roleId: [data?.role?.id || '', Validators.required],
      menuId: [menulist|| [], Validators.required],
      isActive: [data?.isActive || false],
    });
  }

  ngOnInit() {
    this.loadRoles();
    this.loadMenus();
  }

  loadRoles() {
    this.mappingService.getRoles().subscribe((roles) => {
      this.roleList = roles;
    });

    // this.roleMasterService.getAllRoles().subscribe((roles) => {
    //   this.roleList = roles;
    // });
  }

  loadMenus() {
    this.mappingService.getMenus().subscribe((menus) => {
      this.menuList = menus;
    });
  }

  saveData() {
    if(this.mappingForm.valid)
    if (this.data?.id) {
      this.mappingService.updateMapping(this.data?.id, this.mappingForm.value).subscribe(() => {
        this.dialogRef.close(true);
      });
    } else {
      this.mappingService.addMapping(this.mappingForm.value).subscribe(() => {
        this.dialogRef.close(true);
      });
    }
  }

  cancelDialog() {
    this.dialogRef.close(false);
  }
}
